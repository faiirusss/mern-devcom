import { Skeleton } from "@/components/ui/skeleton";

export function Loading() {
  return (
    <header className="flex fixed top-0 z-50 h-16 items-center justify-between border-b border-border bg-background px-4 lg:h-14 2xl:px-72 w-full overflow-x-hidden">
      <div className="flex items-center gap-4">
        <Skeleton className="h-10 w-10 block md:hidden rounded" />
        <Skeleton className="h-9 w-12 rounded-sm" />
        <div className="relative w-full hidden md:block">
          <Skeleton className="absolute top-1/2 -translate-y-1/2 left-[2px] h-9 w-9 rounded-sm" />
          <Skeleton className="pl-9 w-96 h-9 rounded-sm" />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Skeleton className="h-9 w-20 rounded-sm hidden md:block" />
        <Skeleton className="h-9 w-9 rounded-full" />
        <Skeleton className="h-9 w-9 rounded-full" />
      </div>
    </header>
  );
}
