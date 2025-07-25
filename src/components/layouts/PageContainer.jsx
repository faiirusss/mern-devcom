import { cn } from "@/lib/utils";
import { Header } from "./Header";
import HeaderPostPage from "../../features/post/components/HeaderPostpage";

export const PageContainer = (
  {
    className,
    children,
    withHeader = true,
    withFooter = true,
    postPage = false,
    ...props
  },
  ref
) => {
  return (
    <div className="h-full w-full pt-14">
      {withHeader && <Header />}
      {postPage && <HeaderPostPage />}
      <main ref={ref} className={cn("flex flex-col", className)} {...props}>
        {children}
      </main>
      {withFooter && (
        <footer className="flex min-h-16 border-t-2 p-4">
          <p className="w-full text-center text-muted-foreground">
            © 2025 DEV. All rights reserved
          </p>
        </footer>
      )}
    </div>
  );
};

PageContainer.displayName = "PageContainer";
