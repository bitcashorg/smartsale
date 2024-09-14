"use client"

import { useState } from "react";
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
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function ReferralShareButton({ url, title }: { url: string, title: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)")

  if (isDesktop) {
    return (
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button variant="tertiary" className="relative rounded-full w-full h-full max-w-28 md:max-w-56 gap-x-2">
            <span>Share</span>
            <Share className="w-4 h-4 mr-2" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="my-5 w-[210px] p-0 bg-[#433974] px-6 py-5 flex flex-col justify-center items-start gap-y-4 border-none rounded-md" align="start">
          <TwitterShareButton url={url} title={title}>
            <div className="flex justify-center items-center gap-x-3 cursor-pointer">
              <Twitter fill="white" stroke="white" />
              <p className="text-base font-medium text-white">X</p>
            </div>
          </TwitterShareButton>
          <LinkedinShareButton url={url} title={title}>
            <div className="flex justify-center items-center gap-x-3 cursor-pointer">
              <Linkedin
                fill="white"
                stroke="white"
              />
              <p className="text-base font-medium text-white">LinkedIn</p>
            </div>
          </LinkedinShareButton>
          <FacebookShareButton url={url} title={title}>
            <div className="flex justify-center items-center gap-x-3 cursor-pointer">
              <Facebook fill="white"
                stroke="white"
              />
              <p className="text-base font-medium text-white">Facebook</p>
            </div>
          </FacebookShareButton>
          <TelegramShareButton url={url} title={title}>
            <div className="flex justify-center items-center gap-x-3 cursor-pointer">
              <Send fill="transparent"
                stroke="white"
              />
              <p className="text-base font-medium text-white">Telegram</p>
            </div>
          </TelegramShareButton>
          <WhatsappShareButton url={url} title={title}>
            <div className="flex justify-center items-center gap-x-3 cursor-pointer">
              <Phone fill="white" className="rounded-full border border-white p-0.5"
                stroke="white"
              />
              <p className="text-base font-medium text-white">WhatsApp</p>
            </div>
          </WhatsappShareButton>
        </PopoverContent>
      </Popover>
    )
  }

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button variant="tertiary" className="relative rounded-full w-full h-full max-w-28 md:max-w-56 gap-x-2">
          <span>Share</span>
          <Share className="w-4 h-4 mr-2" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-white text-textInfoForeground p-5 [&>div:first-child]:hidden">
        <div className="w-full flex justify-between items-center gap-x-4 mb-6">
          <DrawerTitle className="text-base font-medium text-textInfoForeground">Share my referral link on</DrawerTitle>
          <X onClick={() => setIsOpen(!isOpen)} fill="black" stroke="black" />
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
      </DrawerContent>
    </Drawer>
  )
}