"use client"

import { useState } from "react"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils.lib"
import { LucideIcons } from "@/components/icons/blog"

const buttonVariants = cva(
  "flex justify-between  items-center  rounded-inputs py-space-12 px-space-20 text-white ",
  {
    variants: {
      variant: {
        neutral: "bg-neutral-500",
        success: "bg-primary-400",
        error: "bg-black",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  }
)

export const Alert = (props: any) => {
  const { variant, message } = props

  const [isShowing, setIsShowing] = useState(true)

  const alertIcon = () => {
    switch (variant) {
      case "success":
        return <LucideIcons.check size={20} stroke="#F8F9FA" />
      case "error":
        return <LucideIcons.error size={20} stroke="#F8F9FA" />
      default:
        return <LucideIcons.warning size={20} stroke="#F8F9FA" />
    }
  }

  return isShowing ? (
    <>
      <div className={cn(buttonVariants({ variant }))} role="alert">
        <div className="flex space-x-2">
          {alertIcon()}

          <span className="text-b-2-md font-normal">{message}</span>
        </div>
        <button onClick={() => setIsShowing(false)}>
          <LucideIcons.close size={20} stroke="#F8F9FA" />
        </button>
      </div>
    </>
  ) : null
}
