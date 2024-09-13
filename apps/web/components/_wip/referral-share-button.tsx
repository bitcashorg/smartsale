"use client"

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Share } from "lucide-react"
import {
    FacebookShareButton,
    LinkedinShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
} from 'next-share'

export default function ReferralShareButton({ url, title }: { url: string, title: string }) {
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
                            <TwitterShareButton url={url} title={title}>
                                <div className="flex flex-col justify-center items-center gap-y-3 cursor-pointer">
                                    <Image
                                        src="/images/social-media/x-icon.png"
                                        width={24}
                                        height={24}
                                        alt="Share on X"
                                        title="Share on X"
                                        className="min-w-6 min-h-6"
                                    />
                                    <p className="text-base font-medium text-secondary-300">X</p>
                                </div>
                            </TwitterShareButton>
                            <LinkedinShareButton url={url} title={title}>
                                <div className="flex flex-col justify-center items-center gap-y-3 cursor-pointer">
                                    <Image
                                        src="/images/social-media/x-icon.png"
                                        width={24}
                                        height={24}
                                        alt="Share on LinkedIn"
                                        title="Share on LinkedIn"
                                        className="min-w-6 min-h-6"
                                    />
                                    <p className="text-base font-medium text-secondary-300">LinkedIn</p>
                                </div>
                            </LinkedinShareButton>
                            <FacebookShareButton url={url} title={title}>
                                <div className="flex flex-col justify-center items-center gap-y-3 cursor-pointer">
                                    <Image
                                        src="/images/social-media/x-icon.png"
                                        width={24}
                                        height={24}
                                        alt="Share on Facebook"
                                        title="Share on Facebook"
                                        className="min-w-6 min-h-6"
                                    />
                                    <p className="text-base font-medium text-secondary-300">Facebook</p>
                                </div>
                            </FacebookShareButton>
                            <TelegramShareButton url={url} title={title}>
                                <div className="flex flex-col justify-center items-center gap-y-3 cursor-pointer">
                                    <Image
                                        src="/images/social-media/x-icon.png"
                                        width={24}
                                        height={24}
                                        alt="Share on Telegram"
                                        title="Share on Telegram"
                                        className="min-w-6 min-h-6"
                                    />
                                    <p className="text-base font-medium text-secondary-300">Telegram</p>
                                </div>
                            </TelegramShareButton>
                            <WhatsappShareButton url={url} title={title}>
                                <div className="flex flex-col justify-center items-center gap-y-3 cursor-pointer">
                                    <Image
                                        src="/images/social-media/x-icon.png"
                                        width={24}
                                        height={24}
                                        alt="Share on WhatsApp"
                                        title="Share on WhatsApp"
                                        className="min-w-6 min-h-6"
                                    />
                                    <p className="text-base font-medium text-secondary-300">WhatsApp</p>
                                </div>
                            </WhatsappShareButton>
                        </div>
                    </div>
                ) : ""
            }

            <Button onClick={() => setIsOpen(!isOpen)} className="bg-accent-400 relative rounded-full w-full h-full max-w-56 gap-x-2">
                Share
                <Share className="w-4 h-4 mr-2" />
                {
                    isOpen ? (
                        <div onClick={(e) => {
                            e.stopPropagation()
                        }} className="hidden w-full absolute left-0 flex-col justify-start items-start gap-y-3 p-4 bg-white rounded-sm top-20 after:content-[''] after:w-6 after:h-6 after:bg-white after:rotate-45 after:-top-2 after:left-0 after:right-0 after:mx-auto after:absolute md:flex">
                            <TwitterShareButton url={url} title={title}>
                                <div className="flex justify-center items-center gap-x-3 cursor-pointer">
                                    <Image
                                        src="/images/social-media/x-icon.png"
                                        width={24}
                                        height={24}
                                        alt="Share on X"
                                        title="Share on X"
                                        className="min-w-6 min-h-6"
                                    />
                                    <p className="text-base font-medium text-secondary-300">X</p>
                                </div>
                            </TwitterShareButton>
                            <LinkedinShareButton url={url} title={title}>
                                <div className="flex justify-center items-center gap-x-3 cursor-pointer">
                                    <Image
                                        src="/images/social-media/x-icon.png"
                                        width={24}
                                        height={24}
                                        alt="Share on LinkedIn"
                                        title="Share on LinkedIn"
                                        className="min-w-6 min-h-6"
                                    />
                                    <p className="text-base font-medium text-secondary-300">LinkedIn</p>
                                </div>
                            </LinkedinShareButton>
                            <FacebookShareButton url={url} title={title}>
                                <div className="flex justify-center items-center gap-x-3 cursor-pointer">
                                    <Image
                                        src="/images/social-media/x-icon.png"
                                        width={24}
                                        height={24}
                                        alt="Share on Discod"
                                        title="Share on Discord"
                                        className="min-w-6 min-h-6"
                                    />
                                    <p className="text-base font-medium text-secondary-300">Facebook</p>
                                </div>
                            </FacebookShareButton>
                            <TelegramShareButton url={url} title={title}>
                                <div className="flex justify-center items-center gap-x-3 cursor-pointer">
                                    <Image
                                        src="/images/social-media/x-icon.png"
                                        width={24}
                                        height={24}
                                        alt="Share on Discod"
                                        title="Share on Discord"
                                        className="min-w-6 min-h-6"
                                    />
                                    <p className="text-base font-medium text-secondary-300">Telegram</p>
                                </div>
                            </TelegramShareButton>
                            <WhatsappShareButton url={url} title={title}>
                                <div className="flex justify-center items-center gap-x-3 cursor-pointer">
                                    <Image
                                        src="/images/social-media/x-icon.png"
                                        width={24}
                                        height={24}
                                        alt="Share on WhatsApp"
                                        title="Share on WhatsApp"
                                        className="min-w-6 min-h-6"
                                    />
                                    <p className="text-base font-medium text-secondary-300">WhatsApp</p>
                                </div>
                            </WhatsappShareButton>
                        </div>
                    ) : ""
                }

            </Button>


        </>
    )
}