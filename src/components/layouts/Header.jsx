import { useAtom } from "jotai";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaBars, FaRegBell, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { emailStorageAtom, tokenAtom } from "../../jotai/atoms";
import { auth } from "../../utils/firebase";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Profile from "../ui/profile";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { AppSidebar } from "./AppSidebar";

export const Header = () => {
  const [user] = useAuthState(auth);

  const [, setToken] = useAtom(tokenAtom);
  const [, setEmailStorage] = useAtom(emailStorageAtom);
  return (
    <SidebarProvider defaultOpen={false}>
      <header className="flex fixed top-0 z-50 h-16 items-center justify-between border-b-1 border-border bg-background px-4 lg:h-14 2xl:px-72 w-full overflow-x-hidden">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="block md:hidden">
            <Button variant="ghost" size="icon" className="block sm:hidden">
              <FaBars />
            </Button>
          </SidebarTrigger>
          <AppSidebar />
          <Link
            to={"/"}
            className="text-xl font-bold text-background bg-foreground h-9 py-[1.5px] px-[6px] rounded-sm hover:cursor-pointer md:text-lg flex items-center"
          >
            DEV
          </Link>
          <div className="relative w-full hidden md:block">
            <Button
              className="absolute top-1/2 -translate-y-1/2 left-[2px] cursor-pointer"
              variant={"ghost"}
              size="icon"
            >
              <FaSearch />
            </Button>
            <Input className="pl-9 w-96 rounded-sm" placeholder="Search..." />
          </div>
        </div>
        <div className="flex items-center gap-3">
          {!user ? (
            <>
              <Link to={"/login"}>
                <Button variant={"ghost"} className="cursor-pointer">
                  Login
                </Button>
              </Link>
              <Link to={"/register"}>
                <Button variant={"outline"} className="cursor-pointer">
                  Create Account
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Button className="block md:hidden" variant={"ghost"}>
                <FaSearch />
              </Button>
              <Button className="hidden md:block">Create Post</Button>
              <Button variant={"ghost"} size="icon">
                <FaRegBell className="size-5" />
              </Button>
              <Profile
                user={user}
                setToken={setToken}
                setEmailStorage={setEmailStorage}
              />
            </>
          )}
        </div>
      </header>
    </SidebarProvider>
  );
};
