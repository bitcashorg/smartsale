import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils.lib"

const buttonVariants = cva(
  "border border-neutral-500 checked:border-white transition duration-400 ease-in-out  hover:-translate-y-0.5 hover:scale-105 checked:bg-white  accent-primary-500 text-white rounded-check-box",
  {
    variants: {
      size: {
        default: "w-space-16 h-space-16",
        sm: "w-space-16 h-space-16",
        md: "w-space-20 h-space-20",
      },
      defaultVariants: {
        size: "default",
      },
    },
  }
)

export const CheckBox = (props: any) => {
  const { size, label } = props

  return (
    <div className="mb-4 flex items-center">
      <input
        id={label}
        type="checkbox"
        className={cn(buttonVariants({ size }))}
        {...props}
      />
      <label
        htmlFor={label}
        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {label}
      </label>
    </div>
  )
}

export const RadioBox = (props: any) => {
  const { size, label } = props

  return (
    <div className="mb-4 flex items-center">
      <input
        id="default-checkbox"
        type="radio"
        className={cn(buttonVariants({ size }))}
        {...props}
      />
      <label
        htmlFor="default-checkbox"
        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {label}
      </label>
    </div>
  )
}
