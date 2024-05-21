import { cn } from '@/lib/utils'

export const Tag = (props: any) => {
  const { title } = props
  return (
    <button
      {...props}
      className={cn(
        'duration-400 disabled:opacity-2 px-space-12 py-space-6 text-primary-200 dark:text-primary-800 group flex w-max items-center  rounded-full bg-black leading-none transition ease-in-out focus-within:gap-3 hover:-translate-y-0.5 hover:scale-105 hover:gap-3 hover:bg-neutral-900 focus:text-neutral-200 disabled:cursor-not-allowed disabled:text-neutral-200 dark:bg-white dark:hover:bg-neutral-200 dark:focus:text-neutral-700',
        props.className,
        props.classNameTitle
      )}
    >
      {title.replace('_', ' ')}

      {/* // * Temporally disabled. No UX currently using close property. */}
      {/* {props.close && (
        <button className="hidden group-hover:block group-focus-within:block disabled:hidden">
          <LucideIcons.close size={14} />
        </button>
      )} */}
    </button>
  )
}
