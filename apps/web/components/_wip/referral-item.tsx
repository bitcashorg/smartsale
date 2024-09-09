"use client"

import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils";

export default function ReferralItem() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={cn("grid grid-cols-3 gap-y-8 gap-x-5 items-center justify-items-start w-full rounded-lg px-3 py-4 md:grid-cols-5 md:col-start-1 md:col-end-6 md:row-start-2 md:row-end-3 md:gap-y-4", isOpen ? "grid-rows-9 bg-accent-600 md:grid-rows-4" : "grid-rows-5 md:grid-rows-2")}>
            <p className="col-start-1 col-end-2 row-start-1 row-end-2 text-base text-white opacity-80 font-medium md:hidden">Date</p>
            <p className="col-start-2 col-end-3 row-start-1 row-end-2 text-base text-white font-semibold md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2">23.01 16:23</p>
            <svg onClick={() => setIsOpen(!isOpen)} className={cn("cursor-pointer col-start-3 col-end-4 row-start-1 row-end-2 justify-self-end transition-all md:col-start-5 md:col-end-6 md:row-start-1 md:row-end-2", isOpen ? "rotate-180" : "rotate-0")} width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.57617 1L7.57617 7L13.5762 1" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            <p className="col-start-1 col-end-2 row-start-2 row-end-3 text-base text-white opacity-80 font-medium md:hidden">Referral</p>
            <p className="col-start-2 col-end-4 row-start-2 row-end-3 text-base text-white font-semibold md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2">Laubits 123</p>

            <p className="col-start-1 col-end-2 row-start-3 row-end-4 text-base text-white opacity-80 font-medium md:hidden">Contribution</p>
            <p className="col-start-2 col-end-4 row-start-3 row-end-4 text-base text-white font-semibold md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-2">$500</p>

            <p className="col-start-1 col-end-2 row-start-4 row-end-5 text-base text-white opacity-80 font-medium md:hidden">My reward</p>
            <div className="col-start-2 col-end-4 row-start-4 row-end-5 flex justify-start items-center gap-x-2 md:col-start-4 md:col-end-5 md:row-start-1 md:row-end-2">
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

            <div className={cn("h-[1px] w-full opacity-80 col-start-1 col-end-4 row-start-5 row-end-6 md:col-start-1 md:col-end-6 md:row-start-2 md:row-end-3", isOpen ? "bg-secondary-300" : "bg-white")}></div>

            {
                isOpen ? (
                    <>
                        <p className="col-start-1 col-end-2 row-start-6 row-end-7 text-base text-white opacity-80 font-medium md:col-start-1 md:col-end-2 md:row-start-3 md:row-end-4">Contribution date</p>
                        <p className="col-start-2 col-end-4 row-start-6 row-end-7 text-base text-white font-semibold md:col-start-1 md:col-end-2 md:row-start-4 md:row-end-5">23.01 13:00</p>

                        <p className="col-start-1 col-end-2 row-start-7 row-end-8 text-base text-white opacity-80 font-medium md:col-start-2 md:col-end-3 md:row-start-3 md:row-end-4">Project</p>
                        <p className="col-start-2 col-end-4 row-start-7 row-end-8 text-base text-white font-semibold md:col-start-2 md:col-end-3 md:row-start-4 md:row-end-5">Project_001</p>

                        <div className="col-start-1 col-end-2 row-start-8 row-end-9 flex justify-start items-center gap-x-3 md:col-start-3 md:col-end-4 md:row-start-3 md:row-end-4">
                            <p className="text-base text-white opacity-80 font-medium">Accreditation</p>
                            <div className="h-1 w-1 rounded-full bg-[#4DF0C9]"></div>
                        </div>
                        <p className="col-start-2 col-end-4 row-start-8 row-end-9 text-base text-white font-semibold md:col-start-3 md:col-end-4 md:row-start-4 md:row-end-5">24.01 13:00</p>

                        <p className="col-start-1 col-end-2 row-start-9 row-end-10 text-base text-white opacity-80 font-medium md:col-start-4 md:col-end-5 md:row-start-3 md:row-end-4">Contribution token</p>
                        <p className="col-start-2 col-end-4 row-start-9 row-end-10 text-base text-white font-semibold md:col-start-4 md:col-end-5 md:row-start-4 md:row-end-5">EOS</p>
                    </>
                ) : ""
            }
        </div>
    )
}