import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../utils/firebase";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "../ui/dropdown-menu";
import { Button } from "./button";

const Profile = ({setToken, setEmailStorage, user}) => {
  const username = user.email.split("@")[0];
  const navigate = useNavigate()

    return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="disable" size={"icon"}>
              <Avatar>
                <AvatarImage src={user.photoURL ?? ""} alt={user.email ?? ""} />
                <AvatarFallback>{user.email?.[0].toUpperCase()}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48" >
            <Link to={`/${username}`}>
              <DropdownMenuItem>{username}</DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>Dashboard</DropdownMenuItem>
              <DropdownMenuItem>Create Post</DropdownMenuItem>
              <DropdownMenuItem>Reading List</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                signOut(auth).then(() => {
                  setToken(null);
                  setEmailStorage(null);
                  navigate("/");
                });
              }}
            >
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default Profile