import { useAtom } from "jotai";
import { FaRegBell, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { emailStorageAtom, tokenAtom } from "../../jotai/atoms";
import { auth } from "../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Profile from "../ui/profile";

export const Header = () => {
  const [user] = useAuthState(auth)

  const [, setToken] = useAtom(tokenAtom);
  const [, setEmailStorage] = useAtom(emailStorageAtom)

  return (
    <header className="flex h-16 items-center justify-between border-b-1 border-border bg-background px-4 md:h-14 md:px-72 w-full">
      <div className="flex items-center gap-4">
        <Link
          to={"/"}
          className="text-xl font-bold text-background bg-foreground h-9 py-[1.5px] px-[6px] rounded-sm hover:cursor-pointer md:text-lg flex items-center"
        >
          DEV
        </Link>
        <div className="relative w-full">
          <Button className="absolute top-1/2 -translate-y-1/2 left-[2px] cursor-pointer" variant={"ghost"} size="icon">
            <FaSearch />
          </Button>
          <Input 
            className="pl-9 w-96 rounded-sm"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="flex items-center gap-3">
        {!user ? (
        <>
          <Link to={"/login"}>
            <Button variant={"ghost"} className="cursor-pointer">Login</Button>
          </Link>
          <Link to={"/register"}>
            <Button variant={"outline"} className="cursor-pointer">Create Account</Button>
          </Link>
        </>
        )
        : (
        <>
        <Button>Create Post</Button>
        <Button variant={"ghost"} size="icon">
          <FaRegBell className="size-5"/>
        </Button>
          <Profile
            user={user}
            setToken={setToken}
            setEmailStorage={setEmailStorage}
          />
        </>
        )
        }
        
      </div>
    </header>
  ) 
};
