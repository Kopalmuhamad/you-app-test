import * as React from "react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

// Define the variants for the input component
const inputVariants = cva(
  "flex w-full rounded-md text-base shadow-sm transition-colors px-3 py-1 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-zinc-950 placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
  {
    variants: {
      variant: {
        default: "bg-[#FFFFFF0F] text-white",
        outline: "bg-[#FFFFFF0F] text-white border border-[#FFFFFF38]",
      },
      size: {
        default: "h-9",
        lg: "h-[51px]",
      },
      placeholderPosition: {
        default: "placeholder:text-left",
        right: "placeholder:text-right",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      placeholderPosition: "default",
    },
  }
);

// Define InputProps and override the `size` property type to avoid conflict
export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  variant?: "default" | "outline";
  size?: "default" | "lg"; // size should only accept these two values
  placeholderPosition?: "default" | "right"; // allow 'default' or 'right' for placeholder position
}

// ForwardRef to handle the Input component
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant = "default", size = "default", placeholderPosition = "default", ...props }, ref) => {
    // Apply the variants dynamically using the `inputVariants` function
    return (
      <input
        type={type}
        className={cn(
          inputVariants({ variant, size, placeholderPosition }), // Apply the variants
          className // Allow for custom classes
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
