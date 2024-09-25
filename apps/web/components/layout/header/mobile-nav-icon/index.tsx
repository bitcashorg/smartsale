"use client"

import { cn } from "@/lib/utils"

export function MobileNavIcon({ isOpen, onClick }: { isOpen?: boolean, onClick?: (event: React.MouseEvent<HTMLDivElement>) => void }) {
    return (
        <div onClick={onClick} className="select-none relative w-7 h-5 mx-auto rotate-0 transition duration-500 ease-in-out pointer">
            <span className={cn("block absolute h-[3px]  mx-auto bg-white rounded-full opacity-100  transition duration-500 ease-in-out origin-left left-[5px]", isOpen ? "rotate-45 -top-[2px]  w-full" : "rotate-0 top-0 w-2/3")}></span>
            <span className={cn("block absolute h-[3px] bg-white rounded-full left-0 rotate-0 transition duration-500 ease-in-out top-[10px] origin-left", isOpen ? "opacity-0 w-0" : "opacity-100 w-full")}></span>
            <span className={cn("block absolute h-[3px]  mx-auto bg-white rounded-full opacity-100  transition duration-500 ease-in-out origin-left left-[5px]", isOpen ? "-rotate-45 -bottom-[2px]  w-full" : "rotate-0 bottom-0 w-2/3")}></span>
        </div>
    )
}