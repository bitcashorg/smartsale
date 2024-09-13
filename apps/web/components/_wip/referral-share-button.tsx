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
import { X, Twitter, Linkedin, Facebook, Send, Phone } from 'lucide-react'
import { IconTelegram, IconTwitterX } from "@/components/ui/icons";

export default function ReferralShareButton({ url, title }: { url: string, title: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {
        isOpen ? (
          <div className="w-full bg-white min-h-36 rounded-t-md p-5 fixed bottom-0 left-0 z-50 md:hidden">
            <div className="w-full flex justify-between items-center gap-x-4 mb-10">
              <p className="text-base font-medium text-textInfoForeground">Share my referral link on</p>
              <X onClick={() => setIsOpen(!isOpen)} fill="text-textInfoForeground" stroke="text-textInfoForeground" />
            </div>

            <div className="w-full flex justify-start items-center gap-x-14 overflow-auto scroll">
              <TwitterShareButton url={url} title={title}>
                <div className="flex flex-col justify-center items-center gap-y-3 cursor-pointer">
                  <IconTwitterX fill="text-textInfoForeground" stroke="text-textInfoForeground" />
                  <p className="text-base font-medium text-textInfoForeground">X</p>
                </div>
              </TwitterShareButton>
              <LinkedinShareButton url={url} title={title}>
                <div className="flex flex-col justify-center items-center gap-y-3 cursor-pointer">
                  <Linkedin
                    fill="text-textInfoForeground"
                    stroke="text-textInfoForeground"
                  />
                  <p className="text-base font-medium text-textInfoForeground">LinkedIn</p>
                </div>
              </LinkedinShareButton>
              <FacebookShareButton url={url} title={title}>
                <div className="flex flex-col justify-center items-center gap-y-3 cursor-pointer">
                  <Facebook fill="text-textInfoForeground"
                    stroke="text-textInfoForeground"
                  />
                  <p className="text-base font-medium text-textInfoForeground">Facebook</p>
                </div>
              </FacebookShareButton>
              <TelegramShareButton url={url} title={title}>
                <div className="flex flex-col justify-center items-center gap-y-3 cursor-pointer">
                  <IconTelegram
                    stroke="text-textInfoForeground"
                  />
                  <p className="text-base font-medium text-textInfoForeground">Telegram</p>
                </div>
              </TelegramShareButton>
              <WhatsappShareButton url={url} title={title}>
                <div className="flex flex-col justify-center items-center gap-y-3 cursor-pointer">
                  <Phone fill="text-textInfoForeground" className="rounded-full border border-text-textInfoForeground p-0.5"
                    stroke="text-textInfoForeground"
                  />
                  <p className="text-base font-medium text-textInfoForeground">WhatsApp</p>
                </div>
              </WhatsappShareButton>
            </div>
          </div>
        ) : ""
      }

      <Button onClick={() => setIsOpen(!isOpen)} variant="tertiary" className="relative rounded-full w-full h-full max-w-28 md:max-w-56 gap-x-2">
        Share
        <Share className="w-4 h-4 mr-2" />
        {
          isOpen ? (
            <div onClick={(e) => {
              e.stopPropagation()
            }} className="hidden w-full absolute left-0 flex-col justify-start items-start gap-y-3 p-4 bg-white rounded-sm top-20 after:content-[''] after:w-6 after:h-6 after:bg-white after:rotate-45 after:-top-2 after:left-0 after:right-0 after:mx-auto after:absolute md:flex">
              <TwitterShareButton url={url} title={title}>
                <div className="flex justify-center items-center gap-x-3 cursor-pointer">
                  <Twitter fill="text-textInfoForeground" stroke="text-textInfoForeground" />
                  <p className="text-base font-medium text-textInfoForeground">X</p>
                </div>
              </TwitterShareButton>
              <LinkedinShareButton url={url} title={title}>
                <div className="flex justify-center items-center gap-x-3 cursor-pointer">
                  <Linkedin
                    fill="text-textInfoForeground"
                    stroke="text-textInfoForeground"
                  />
                  <p className="text-base font-medium text-textInfoForeground">LinkedIn</p>
                </div>
              </LinkedinShareButton>
              <FacebookShareButton url={url} title={title}>
                <div className="flex justify-center items-center gap-x-3 cursor-pointer">
                  <Facebook fill="text-textInfoForeground"
                    stroke="text-textInfoForeground"
                  />
                  <p className="text-base font-medium text-textInfoForeground">Facebook</p>
                </div>
              </FacebookShareButton>
              <TelegramShareButton url={url} title={title}>
                <div className="flex justify-center items-center gap-x-3 cursor-pointer">
                  <Send fill="transparent"
                    stroke="text-textInfoForeground"
                  />
                  <p className="text-base font-medium text-textInfoForeground">Telegram</p>
                </div>
              </TelegramShareButton>
              <WhatsappShareButton url={url} title={title}>
                <div className="flex justify-center items-center gap-x-3 cursor-pointer">
                  <Phone fill="text-textInfoForeground" className="rounded-full border border-text-textInfoForeground p-0.5"
                    stroke="text-textInfoForeground"
                  />
                  <p className="text-base font-medium text-textInfoForeground">WhatsApp</p>
                </div>
              </WhatsappShareButton>
            </div>
          ) : ""
        }

      </Button>


    </>
  )
}