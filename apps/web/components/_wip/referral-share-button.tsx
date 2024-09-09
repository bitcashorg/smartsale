"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link"

export default function ReferralShareButton() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            {
                isOpen ? (
                    <div className="w-full bg-white min-h-36 rounded-t-md p-5 fixed bottom-0 left-0 z-50 md:hidden">
                        <div className="w-full flex justify-between items-center gap-x-4 mb-10">
                            <p className="text-base font-medium text-secondary-300">Share my referral link on</p>
                            <svg className="cursor-pointer" onClick={() => setIsOpen(!isOpen)} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 1L1 13M1 1L13 13" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </div>

                        <div className="w-full flex justify-start items-center gap-x-14 overflow-auto scroll">
                            <Link className="flex flex-col justify-center items-center gap-y-3 cursor-pointer" href="#" target="_blank">
                                <Image
                                    src="/images/social-media/x-icon.png"
                                    width={24}
                                    height={24}
                                    alt="Share on X"
                                    title="Share on X"
                                    className="min-w-6 min-h-6"
                                />
                                <p className="text-base font-medium text-secondary-300">X</p>
                            </Link>
                            <Link className="flex flex-col justify-center items-center gap-y-3 cursor-pointer" href="#" target="_blank">
                                <Image
                                    src="/images/social-media/x-icon.png"
                                    width={24}
                                    height={24}
                                    alt="Share on Discod"
                                    title="Share on Discord"
                                    className="min-w-6 min-h-6"
                                />
                                <p className="text-base font-medium text-secondary-300">Discord</p>
                            </Link>
                            <Link className="flex flex-col justify-center items-center gap-y-3 cursor-pointer" href="#" target="_blank">
                                <Image
                                    src="/images/social-media/x-icon.png"
                                    width={24}
                                    height={24}
                                    alt="Share on Facebook"
                                    title="Share on Facebook"
                                    className="min-w-6 min-h-6"
                                />
                                <p className="text-base font-medium text-secondary-300">Facebook</p>
                            </Link>
                            <Link className="flex flex-col justify-center items-center gap-y-3 cursor-pointer" href="#" target="_blank">
                                <Image
                                    src="/images/social-media/x-icon.png"
                                    width={24}
                                    height={24}
                                    alt="Share on Telegram"
                                    title="Share on Telegram"
                                    className="min-w-6 min-h-6"
                                />
                                <p className="text-base font-medium text-secondary-300">Telegram</p>
                            </Link>
                        </div>
                    </div>
                ) : ""
            }

            <div onClick={() => setIsOpen(!isOpen)} className="bg-accent-400 px-4 py-2 w-32 min-w-32 max-w-32 flex justify-center items-center gap-x-3 cursor-pointer rounded-full relative h-full md:min-w-48 md:max-w-48"><span className="text-base text-white select-none">Share</span> <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12V19.6667C5 20.175 5.26339 20.6625 5.73223 21.022C6.20107 21.3814 6.83696 21.5833 7.5 21.5833H22.5C23.163 21.5833 23.7989 21.3814 24.2678 21.022C24.7366 20.6625 25 20.175 25 19.6667V12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M20 6.25002L15 2.41669L10 6.25002" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15 2.41669V14.875" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

                {
                    isOpen ? (
                        <div onClick={(e) => {
                            e.stopPropagation()
                        }} className="hidden w-full absolute left-0 flex-col justify-start items-start gap-y-3 p-4 bg-white rounded-sm top-20 after:content-[''] after:w-6 after:h-6 after:bg-white after:rotate-45 after:-top-2 after:left-0 after:right-0 after:mx-auto after:absolute md:flex">
                            <Link className="flex justify-center items-center gap-x-3 cursor-pointer" href="#" target="_blank">
                                <Image
                                    src="/images/social-media/x-icon.png"
                                    width={24}
                                    height={24}
                                    alt="Share on X"
                                    title="Share on X"
                                    className="min-w-6 min-h-6"
                                />
                                <p className="text-base font-medium text-secondary-300">X</p>
                            </Link>
                            <Link className="flex justify-center items-center gap-x-3 cursor-pointer" href="#" target="_blank">
                                <Image
                                    src="/images/social-media/x-icon.png"
                                    width={24}
                                    height={24}
                                    alt="Share on Discod"
                                    title="Share on Discord"
                                    className="min-w-6 min-h-6"
                                />
                                <p className="text-base font-medium text-secondary-300">Discord</p>
                            </Link>
                        </div>
                    ) : ""
                }

            </div>


        </>
    )
}