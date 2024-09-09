"use client"

import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils";

export default function ReferralItem() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={cn("grid grid-cols-3 gap-y-8 gap-x-5 items-center justify-items-start w-full rounded-lg px-3 py-4", isOpen ? "grid-rows-9 bg-accent-600" : "grid-rows-5")}>
            <p className="col-start-1 col-end-2 row-start-1 row-end-2 text-base text-white opacity-80 font-medium">Date</p>
            <p className="col-start-2 col-end-3 row-start-1 row-end-2 text-base text-white font-semibold">23.01 16:23</p>
            <svg onClick={() => setIsOpen(!isOpen)} className={cn("cursor-pointer col-start-3 col-end-4 row-start-1 row-end-2 justify-self-end transition-all", isOpen ? "rotate-180" : "rotate-0")} width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.57617 1L7.57617 7L13.5762 1" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            <p className="col-start-1 col-end-2 row-start-2 row-end-3 text-base text-white opacity-80 font-medium">Referral</p>
            <p className="col-start-2 col-end-4 row-start-2 row-end-3 text-base text-white font-semibold">Laubits 123</p>

            <p className="col-start-1 col-end-2 row-start-3 row-end-4 text-base text-white opacity-80 font-medium">Contribute</p>
            <p className="col-start-2 col-end-4 row-start-3 row-end-4 text-base text-white font-semibold">$500</p>

            <p className="col-start-1 col-end-2 row-start-4 row-end-5 text-base text-white opacity-80 font-medium">My reward</p>
            <div className="col-start-2 col-end-4 row-start-4 row-end-5 flex justify-start items-center gap-x-2">
                <p className="text-[#4DF0C9] text-base font-semibold">+ $100</p>
                <picture>
                    <source srcSet="/images/home/bl-coins.webp" type="image/webp" />
                    <source srcSet="/images/home/bl-coins.png" type="image/png" />
                    <Image
                        src="/images/home/bl-coins.webp"
                        alt="My reward"
                        loading="lazy"
                        width={26}
                        height={32}
                        className="min-w-7 min-h-8"
                    />
                </picture>
            </div>

            <div className={cn("h-[1px] w-full opacity-80 col-start-1 col-end-4 row-start-5 row-end-6", isOpen ? "bg-secondary-300" : "bg-white")}></div>

            {
                isOpen ? (
                    <>
                        <p className="col-start-1 col-end-2 row-start-6 row-end-7 text-base text-white opacity-80 font-medium">Contribution date</p>
                        <p className="col-start-2 col-end-4 row-start-6 row-end-7 text-base text-white font-semibold">23.01 13:00</p>

                        <p className="col-start-1 col-end-2 row-start-7 row-end-8 text-base text-white opacity-80 font-medium">Project</p>
                        <p className="col-start-2 col-end-4 row-start-7 row-end-8 text-base text-white font-semibold">Project_001</p>

                        <div className="col-start-1 col-end-2 row-start-8 row-end-9 flex justify-start items-center gap-x-3">
                            <p className="text-base text-white opacity-80 font-medium">Accreditation</p>
                            <div className="h-1 w-1 rounded-full bg-[#4DF0C9]"></div>
                        </div>
                        <p className="col-start-2 col-end-4 row-start-8 row-end-9 text-base text-white font-semibold">24.01 13:00</p>

                        <p className="col-start-1 col-end-2 row-start-9 row-end-10 text-base text-white opacity-80 font-medium">Contribution token</p>
                        <p className="col-start-2 col-end-4 row-start-9 row-end-10 text-base text-white font-semibold">EOS</p>
                    </>
                ) : ""
            }
        </div>
    )
}