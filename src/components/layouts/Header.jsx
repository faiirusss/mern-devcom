import { signOut } from "firebase/auth";
import { useAtom } from "jotai";
import { FaRegBell, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { emailStorageAtom, tokenAtom } from "../../jotai/atoms";
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
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "../ui/dropdown-menu";

import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const Header = () => {
  const navigate = useNavigate()

  const [, setToken] = useAtom(tokenAtom);
  const [, setEmailStorage] = useAtom(emailStorageAtom)

  return (
    <header className="flex h-16 items-center justify-between border-b-1 border-border bg-background px-4 md:h-14 md:px-72 w-full">
      <div className="flex items-center gap-4">
        <a
          href={"/"}
          className="text-xl font-bold text-background bg-foreground h-9 py-[1.5px] px-[6px] rounded-sm hover:cursor-pointer md:text-lg flex items-center"
        >
          DEV
        </a>
        <div className="relative w-full">
          <Button className="absolute top-1/2 -translate-y-1/2 left-[2px] cursor-pointer" variant={"ghost"} size="icon">
            <FaSearch className=""/>
          </Button>
          <Input 
            className="pl-9 w-96 rounded-sm"
            placeholder="Search..."
            />
        </div>
      </div>
      <div className="flex items-center gap-3">
      <Button>Create Post</Button>
      <Button variant={"ghost"} size="icon">
        <FaRegBell className="size-5"/>
      </Button>
      
       <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="disable" size={"icon"}>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              Dashboard
            </DropdownMenuItem>
            <DropdownMenuItem>
              Create Post
            </DropdownMenuItem>
            <DropdownMenuItem>
              Reading List
            </DropdownMenuItem>
            <DropdownMenuItem>
              Settings 
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem
          onClick={() => {
            signOut(auth).then(() => {
              setToken(null);
              setEmailStorage(null)
              navigate("/login");
            });
          }}
          >
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      </div>
    </header>
  );
};
