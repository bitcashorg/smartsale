import { Key } from "react"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils.lib"

const buttonVariants = cva(
  "border border-neutral-400 w-full  disabled:cursor-not-allowed disabled:bg-neutral-400 text-b-2-lg text-neutral-900  focus:border-2 focus:outline-primary-500 p-2.5 block  shadow-f2",
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

export const Select = (props: any) => {
  const { label, variant, list } = props
  return (
    <div>
      <label
        htmlFor="countries_disabled"
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
      >
        {label ? "Select " + label : null}
      </label>
      <select {...props} className={cn(buttonVariants({ variant }))}>
        <option selected>Choose {label}.</option>

        {list?.length > 0 &&
          list.map((item: { name: String; value: any }, index: any) => (
            <option value={item.value} key={index}>
              {item.name}
            </option>
          ))}
      </select>
    </div>
  )
}
