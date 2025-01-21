"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const Progress = React.forwardRef(
  ({ className, title = "", value = 0, ...props }, ref) => (
    <div className="relative w-full mb-[15px]">
      <p className="about-me-skills">{title}</p>
      <ProgressPrimitive.Root
        ref={ref}
        className={cn(
          "relative h-3 w-full overflow-hidden rounded-[6px] bg-[#EDECEC]",
          className
        )}
        {...props}
      >
        <ProgressPrimitive.Indicator
          className="h-full w-full flex-1 bg-[#FD6F00] transition-all"
          style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
        />
      </ProgressPrimitive.Root>
      <div
        className="absolute top-[90%] h-6 w-6 rounded-full bg-white border-[3px] border-[#FD6F00] transition-all"
        style={{
          left: `${value}%`,
          transform: "translate(-50%, -50%)",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      />
    </div>
  )
);
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
