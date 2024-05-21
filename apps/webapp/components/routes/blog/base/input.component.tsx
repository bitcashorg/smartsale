import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils.lib"

const buttonVariants = cva(
  "border border-neutral-400 w-full  disabled:cursor-not-allowed disabled:bg-neutral-400 text-b-2-lg text-neutral-900 dark:text-white focus:border-2 focus:outline-primary-500 py-space-10 px-10",
  {
    variants: {
      variant: {
        default: "rounded-inputs",
        shaped: "rounded-inputs-shaped",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export const Input = (props: any) => {
  const { righticon, lefticon, label, variant } = props

  return (
    <div className="flex w-full items-center justify-center">
      {label ? (
        <label
          htmlFor="input-group-1"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
      ) : null}
      <div className="relative w-full">
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          {righticon}
        </div>
        <input
          {...props}
          className={cn(
            buttonVariants({ variant }),
            "w-full border-[#040316] dark:border-[#fafafa]"
          )}
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          {lefticon}
        </div>
      </div>
    </div>
  )
}
