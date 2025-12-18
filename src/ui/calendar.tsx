"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "./utils";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        // ... tes classNames
        ...classNames,
      }}
      components={{
        Chevron: ({
          className,
          orientation,
          size,
        }: {
          className?: string;
          disabled?: boolean;
          orientation?: "up" | "down" | "left" | "right";
          size?: number;
        }) => {
          const Icon =
            orientation === "left"
              ? ChevronLeft
              : orientation === "right"
              ? ChevronRight
              : orientation === "up"
              ? ChevronUp
              : ChevronDown;

          return <Icon className={cn("size-4", className)} size={size} />;
        },
      }}
      {...props}
    />
  );
}

export { Calendar };
