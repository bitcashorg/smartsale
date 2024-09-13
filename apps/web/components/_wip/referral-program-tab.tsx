"use client"

import Image from "next/image";
import { Card, CardContent, CardHeader } from "../ui/card";
import ReferralShareButton from "./referral-share-button";
import { Copy } from "lucide-react"
import ReferralDesktopList from "./referral-desktop-list";
import ReferralMobileList from "./referral-mobile-list";
import { useReferral } from "@/hooks/use-referral"
import { useState } from "react";
import { IconReferral } from "../ui/icons";
import { useAsync } from "react-use";
import { useSession } from "@/hooks/use-session";
import { chaingraphService } from "@repo/chaingraph";

export default function ReferralProgramTab() {
  const { userShortLink } = useReferral();
  const session = useSession()
  const { value: accountReferrals, loading } = useAsync(async () =>
    await chaingraphService.checkAccountReferral(session?.session?.account || '')
  )

  console.log('accountReferrals', accountReferrals)

  const [isShareLinkCopied, setIsShareLinkCopied] = useState(false)

  const copyShareLink = () => {
    navigator.clipboard.writeText(userShortLink);
    setIsShareLinkCopied(!isShareLinkCopied);
    setTimeout(() => {
      setIsShareLinkCopied(!isShareLinkCopied);
    }, 5000)
  }

  const referralList = [
    {
      id: 1,
      date: "12/09/2024 17:09",
      referralUser: "Test",
      contribution: 100,
      myReward: 20,
      contributionDate: "12/09/2024 17:09",
      project: "Bitlauncher",
      accreditation: "Test",
      contributionToken: "EOS"
    },
    {
      id: 2,
      date: "12/09/2024 17:09",
      referralUser: "Test",
      contribution: 100,
      myReward: 20,
      contributionDate: "12/09/2024 17:09",
      project: "Bitlauncher",
      accreditation: "Test",
      contributionToken: "EOS"
    },
  ];
  return (
    <>
      <h1 className="text-3xl font-bold text-center">
        Referral Program
      </h1>
      {/* PENDING CHANGE THIS CSS LINE TO A TAILWIND CSS CLASS */}
      <Card style={{
        background: "linear-gradient(334deg, rgba(255, 255, 255, 0.00) 57.71%, rgba(255, 255, 255, 0.15) 245.65%), #0F113E;"
      }} className="via-transparent  md:overflow-visible mt-9 mb-14 lg:max-h-[400px] flex justify-center items-center">
        <CardContent className="max-w-[1210px] w-full mx-auto flex justify-center items-center gap-x-28 md:px-5 md:py-12 ">
          <div className="hidden relative after:content-[''] after:h-56 after:w-56 after:absolute after:-top-2 after:right-3 after:bg-[radial-gradient(#7D81D96E,transparent_70%)] after:scale-125 after:z-10 md:block">
            <IconReferral className="min-w-64 min-h-64 max-w-64 max-h-64 relative z-20" />
          </div>
          <Card className='mt-6 md:mt-0 w-full md:bg-transparent border-none md:overflow-visible'>
            <CardHeader className="px-3 md:p-0 md:mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-left text-infoForeground/90">Earn <span className="text-white/100">up to 20%</span> of founds raised!</h2>
            </CardHeader>
            <CardContent className="px-3 md:p-0">
              <div className="w-full grid grid-cols-2 grid-rows-auto gap-3 md:gap-16">
                <Card>
                  <CardContent className="w-full bg-accent-600/70 rounded-2xl p-4 flex justify-center items-center items-center gap-x-3 max-h-[81px] md:max-h-[102px] overflow-x-auto overflow-y-hidden lg:py-6 lg:max-h-24">
                    <picture>
                      <source srcSet="/images/home/bl-coins.webp" type="image/webp" />
                      <source srcSet="/images/home/bl-coins.png" type="image/png" />
                      <Image
                        src="/images/home/bl-coins.webp"
                        alt="Total Earn"
                        loading="lazy"
                        width={44}
                        height={26}
                        className="min-w-11 min-h-6 lg:h-14"
                      />
                    </picture>
                    <div className="flex flex-col justify-center items-start gap-y-1">
                      <p className="text-white opacity-80 font-bold text-xl whitespace-nowrap">Total Earn</p>
                      <p className="text-white font-bold text-2xl">$500</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="w-full bg-accent-600/70 rounded-2xl p-4 flex justify-center items-center items-center gap-x-3 max-h-[81px] md:max-h-[102px] overflow-x-auto overflow-y-hidden lg:py-6 lg:max-h-24">
                    <picture>
                      <source srcSet="/images/referrals/referrals-icon.svg" type="image/png" />
                      <Image
                        src="/images/referrals/referrals-icon.svg"
                        alt="Referrals"
                        loading="lazy"
                        width={32}
                        height={32}
                        className="min-w-8 min-h-8 lg:w-11 lg:h-11"
                      />
                    </picture>
                    <div className="flex flex-col justify-center items-start gap-y-1">
                      <p className="text-white opacity-80 font-bold text-xl">Referrals</p>
                      <p className="text-white font-bold text-2xl">05</p>
                    </div>
                  </CardContent>
                </Card>

                <div className="w-full flex justify-between items-center gap-x-5 col-start-1 col-end-3 row-start-2 row-end-3 max-h-[81px] md:max-h-[64px]">
                  <Card className="w-2/3 h-full md:h-16 lg:max-w-[340px] xl:min-w-[470px]">
                    <CardContent className="bg-accent-600/70 rounded-2xl px-4 py-4 flex justify-between items-center gap-x-4 w-full md:py-0 md:max-w-[360px] xl:min-w-[470px] overflow-auto lg:overflow-hidden h-full">
                      <p className="text-base opacity-70 w-full lg:max-w-36 lg:overflow-hidden lg:text-ellipsis xl:min-w-52 xl:max-w-52 text-white md:text-xl md:font-medium">
                        {userShortLink.replace('https://', '')}
                      </p>
                      <button
                        type="button"
                        onClick={copyShareLink}
                        className="bg-primary rounded-[8px] px-4 py-2 w-32 min-w-32 max-w-32 flex justify-start items-center gap-x-3 cursor-pointer"
                      >
                        <span className="text-sm text-white opacity-40 select-none">
                          {isShareLinkCopied ? "Copied!" : "Copy link"}
                        </span>
                        <Copy color="#747394" height={17} width={16} />
                      </button>
                    </CardContent>
                  </Card>

                  <div className="hidden h-full w-1/3 justify-end items-center md:flex">
                    <ReferralShareButton title="Signup in Bitcash App!" url={userShortLink} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>

      <Card className="md:mt-14">
        <CardHeader className="px-7">
          <h2 className="text-2xl font-bold text-left text-white">My Referrals</h2>
        </CardHeader>
        <CardContent className="px-7">
          <ReferralDesktopList referralList={referralList} />
          <ReferralMobileList referralList={referralList} />
        </CardContent>
      </Card>

      <div className="w-full min-h-20 flex justify-center items-center gap-x-14 py-5 px-6 fixed bottom-0 left-0 z-50 bg-card opacity-90 md:hidden">
        <div onClick={copyShareLink} className="bg-primary px-4 py-2 w-32 min-w-32 max-w-32 flex justify-start items-center gap-x-3 cursor-pointer border rounded-full border-[#747394]"><span className="text-base text-white opacity-40 select-none">{isShareLinkCopied ? "Copied!" : "Copy link"}</span> <Copy color="#747394" height={17} width={16} />
        </div>

        <ReferralShareButton title="Signup in Bitcash App!" url={userShortLink} />
      </div>
    </>
  )
}