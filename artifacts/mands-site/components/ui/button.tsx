import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md",
    "font-sans font-semibold tracking-wide",
    "transition-colors duration-200 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "aria-busy:cursor-progress",
  ].join(" "),
  {
    variants: {
      variant: {
        primary:
          "bg-ms-navy text-ms-paper hover:bg-[#00185A] active:bg-[#001144] focus-visible:ring-ms-navy",
        secondary:
          "border border-ms-navy text-ms-navy bg-transparent hover:bg-ms-navy hover:text-ms-paper active:bg-[#001144] active:text-ms-paper focus-visible:ring-ms-navy",
        ghost:
          "text-ms-navy bg-transparent hover:bg-ms-cream active:bg-[#E5DFC8] focus-visible:ring-ms-navy",
        link:
          "text-ms-navy bg-transparent underline-offset-4 hover:underline focus-visible:ring-ms-navy h-auto p-0",
        danger:
          "bg-terra-700 text-ms-paper hover:bg-[#A52706] active:bg-[#7E1D05] focus-visible:ring-terra-700",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-6 text-sm",
        lg: "h-12 px-8 text-base",
      },
      tone: {
        light: "",
        dark: "focus-visible:ring-offset-dark-base",
      },
    },
    compoundVariants: [
      {
        tone: "dark",
        variant: "primary",
        className:
          "bg-tech-accent text-dark-base hover:bg-[#7DB9F7] active:bg-[#3F8FE3] focus-visible:ring-tech-accent",
      },
      {
        tone: "dark",
        variant: "secondary",
        className:
          "border-dark-ink text-dark-ink hover:bg-dark-elevated hover:text-dark-ink active:bg-[#0E1322] focus-visible:ring-tech-accent",
      },
      {
        tone: "dark",
        variant: "ghost",
        className:
          "text-dark-ink hover:bg-dark-elevated active:bg-[#0E1322] focus-visible:ring-tech-accent",
      },
      {
        tone: "dark",
        variant: "link",
        className:
          "text-tech-accent hover:underline active:text-[#3F8FE3] focus-visible:ring-tech-accent",
      },
      {
        tone: "dark",
        variant: "danger",
        className:
          "bg-terra-700 text-ms-paper hover:bg-[#A52706] active:bg-[#7E1D05] focus-visible:ring-terra-700",
      },
      {
        variant: "link",
        size: ["sm", "md", "lg"],
        className: "px-0",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
      tone: "light",
    },
  },
);

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      tone,
      asChild = false,
      loading = false,
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, tone }), className)}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        {...props}
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin motion-reduce:animate-none" aria-hidden="true" />
            <span>{children}</span>
          </>
        ) : (
          children
        )}
      </Comp>
    );
  },
);

Button.displayName = "Button";

export { buttonVariants };
