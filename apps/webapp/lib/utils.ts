import axios from 'axios'
import { clsx, type ClassValue } from 'clsx'
import { MotionProps } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function handleAxiosError(error: unknown) {
  if (axios.isAxiosError(error) && error.response) {
    return {
      data: error.response.data,
      status: error.response.status,
      headers: error.response.headers
    }
  } else {
    console.error('An error occurred:', error)
    return {
      data: error as Error,
      status: (error as Error).name,
      headers: null
    }
  }
}

export function scrollToElement(element: HTMLElement | null) {
  if (!element) return
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest'
  })
}

const iconMotionProps: MotionProps & React.ComponentProps<'span'> = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0 },
  transition: { duration: 0.3 },
  className: 'absolute inset-0 flex items-center justify-center self-center'
}

export const motionProps = {
  iconMotionProps
}
