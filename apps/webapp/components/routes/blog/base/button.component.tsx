import * as React from "react"
import { cva, VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils.lib"

const buttonVariants = cva(
  "transition ease-in-out inline-flex items-center justify-center rounded-buttons text-b-2-md  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default:
          "bg-primary  hover:bg-primary/90  transition duration-400 hover:scale-105",
        primary:
          "duration-400 hover:scale-105 bg-primary-500  text-white active:bg-primary-600 hover:bg-primary-600  focus-visible:bg-primary-500 disabled:opacity-40",
        secondary:
          "transition duration-400 hover:-translate-y-1 hover:scale-105  bg-white  shadow-f2 border border-neutral-400 text-neutral-900 dark:text-neutral-900 text-b-2-md  hover:bg-neutral-100 disabled:bg-neutral-400  active:bg-neutral-300 focus-visible:bg-neutral-400",
        tertiary:
          "text-neutral-700 px-0 py-0 hover:text-primary-500 active:text-primary-500  active:border-primary-500 active:border-b",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-hug-h-sm   py-space-6  px-space-12",
        md: "h-hug-h-md   py-space-8  px-space-20",
        lg: "h-hug-h-lg    py-space-12  px-space-24",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
