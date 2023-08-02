import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "text-primary-foreground bg-[#86d992] font-sans text-[#003915] text-base font-medium  font-medium tracking-[0.08] hover:bg-[#6CBD79] rounded-[100px] justify-center shrink-0 leading-[24px] items-center",

        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/10",
        outline:
          "border border-solid border-[#8b9389] bg-transparent font-sans hover:bg-[#35373B]  focus:border-[#86d992] focus:bg-[#3B3D44]  focus:border-[#86d992] hover:text-accent-foreground font-sans font-medium tracking-[0.08] leading-[20px] text-[#86d992] rounded-[100px]",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        disabled:
          "bg-[rgba(230,_224,_233,_0.12)]  cursor-not-allowed text-base font-medium  rounded-[100px] flex flex-col leading-[24px] tracking-[0.5]  justify-center  text-[#101413] shrink-0 items-center",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: " h-10  px-3",
        lg: "h-10 w-[328px]  px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
