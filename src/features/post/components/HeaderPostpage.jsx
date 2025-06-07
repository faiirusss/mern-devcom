import { Link } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { X } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../../components/ui/alert-dialog";

const HeaderPostPage = () => {
  return (
    <header className="fixed z-50 w-full top-0 px-2">
      <div className="flex justify-between items-center mx-7">
        <div className="flex h-14 items-center justify-between lg:h-14 max-w-5xl w-full overflow-x-hidden">
          <div className="flex justify-between items-center max-w-5xl">
            <Link
              to={"/"}
              className="text-xl mr-4 font-bold text-background bg-foreground h-9 py-[1.5px] px-[6px] rounded-sm hover:cursor-pointer md:text-lg flex items-center"
            >
              DEV
            </Link>
            <p>Create Post</p>
          </div>
          <div className="flex items-center gap-3">
            <p className="font-semibold">Edit</p>
            <p>Preview</p>
          </div>
        </div>
        <div>
          <AlertDialog>
            <AlertDialogTrigger>
              <Button size="icon" className="cursor-pointer" variant="outline">
                <X size={20} />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>You have unsaved changes</AlertDialogTitle>
                <AlertDialogDescription>
                  You've made changes to your post. Do you want to navigate to
                  leave this page?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <Link to={"/"}>
                  <AlertDialogAction className="cursor-pointer">
                    Yes, leave the page
                  </AlertDialogAction>
                </Link>
                <AlertDialogCancel className="cursor-pointer">
                  No, keep editing
                </AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <Link to={"/new"}></Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderPostPage;
