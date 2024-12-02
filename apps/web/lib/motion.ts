import type { MotionProps } from 'framer-motion'

const iconMotionProps: MotionProps & React.ComponentProps<'span'> = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0 },
  transition: { duration: 0.3 },
  className: 'absolute inset-0 flex items-center justify-center self-center',
}

export const motionProps = {
  iconMotionProps,
}
