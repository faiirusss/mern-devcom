import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../utils/firebase";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "./button";
import { useAtom } from "jotai";
import { createdAt, profilePicture, usernameStorage } from "../../jotai/atoms";

const Profile = ({ setToken, setEmailStorage, user }) => {
  const [username, setUsername] = useAtom(usernameStorage);
  const [, setCreatedAt] = useAtom(createdAt);
  const [, setProfilePicture] = useAtom(profilePicture);
  const [profilePictureStorage] = useAtom(profilePicture);
  const navigate = useNavigate();

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="disable" size={"icon"}>
          <Avatar>
            <AvatarImage src={profilePictureStorage ?? ""} alt={""} />
            <AvatarFallback>{user.email?.[0].toUpperCase()}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-50">
        <Link to={`/${username}`}>
          <DropdownMenuItem>
            <span className="truncate">@{username}</span>
          </DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Dashboard</DropdownMenuItem>
          <DropdownMenuItem>Create Post</DropdownMenuItem>
          <DropdownMenuItem>Reading List</DropdownMenuItem>
          <Link to="/settings">
            <DropdownMenuItem>Settings</DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            signOut(auth).then(() => {
              setToken(null);
              setEmailStorage(null);
              setUsername(null);
              setProfilePicture(null);
              setCreatedAt(null);
              navigate("/");
            });
          }}
        >
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Profile;
