import React from "react";
import { cn } from "@/lib/utils";



export const SectionContainer = (({ className, children, padded, containerClassName, ...props }, ref) => {
  return (
    <div className={cn("relative h-full", containerClassName)}>
      <section
        ref={ref}
        className={cn(
          "container flex flex-col",
          props.minFullscreen &&
            "flex min-h-[calc(100vh-144px)] w-full flex-col",
          className,
          padded ? "px-4" : "",
        )}
        {...props}
      >
        {children}
      </section>
    </div>
  );
});

SectionContainer.displayName = "SectionContainer";
