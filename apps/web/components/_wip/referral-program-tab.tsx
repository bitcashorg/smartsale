"use client"

import Image from "next/image";
import { Card, CardContent, CardHeader } from "../ui/card";
import ReferralShareButton from "./referral-share-button";
import { Copy } from "lucide-react"
import ReferralDesktopList from "./referral-desktop-list";
import ReferralMobileList from "./referral-mobile-list";
import { useReferral } from "@/hooks/use-referral"
import { useState } from "react";

export default function ReferralProgramTab() {
    const { userShortLink } = useReferral();
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

            <Card className="bg-gradient-to-br from-cornflowerblue-200 md:overflow-visible mt-9 mb-14">
                <CardContent className="max-w-[1180px] mx-auto flex justify-center items-center gap-x-28 md:pt-16 md:pb-12 md:px-5">
                    <picture className="hidden relative after:content-[''] after:h-56 after:w-56 after:absolute after:-top-2 after:right-3 after:bg-[radial-gradient(#7D81D96E,transparent_75%)] after:scale-125 after:z-10 md:block">
                        <source srcSet="/images/referrals/referral-program.png" type="image/png" />
                        <Image
                            src="/images/referrals/referral-program.png"
                            alt="Referral Program"
                            loading="lazy"
                            width={256}
                            height={256}
                            className="min-w-64 min-h-64 max-w-64 max-h-64 relative z-20"
                        />
                    </picture>
                    <Card className='mt-6 md:mt-0 w-full md:bg-transparent border-none md:overflow-visible'>
                        <CardHeader className="px-3 md:p-0 md:mb-7">
                            <h2 className="text-2xl font-bold text-left text-accent-600">Earn <span className="text-white">20%</span> of founds raised</h2>
                        </CardHeader>
                        <CardContent className="px-3 md:p-0">
                            <div className="w-full grid grid-cols-2 grid-rows-2 gap-3 md:gap-16">
                                <Card>
                                    <CardContent className="w-full bg-accent-600 rounded-2xl p-4 flex justify-start items-center gap-x-3 col-start-1 col-end-2 row-start-1 row-end-2 max-h-[81px] md:max-h-[102px] overflow-x-auto overflow-y-hidden">
                                        <picture>
                                            <source srcSet="/images/home/bl-coins.webp" type="image/webp" />
                                            <source srcSet="/images/home/bl-coins.png" type="image/png" />
                                            <Image
                                                src="/images/home/bl-coins.webp"
                                                alt="Total Earn"
                                                loading="lazy"
                                                width={44}
                                                height={26}
                                                className="min-w-11 min-h-6"
                                            />
                                        </picture>
                                        <div className="flex flex-col justify-center items-start gap-y-1">
                                            <p className="text-white opacity-80 font-bold text-xl whitespace-nowrap">Total Earn</p>
                                            <p className="text-white font-bold text-2xl">$500</p>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardContent className="w-full bg-accent-600 rounded-2xl p-4 flex justify-start items-center gap-x-3 col-start-2 col-end-3 row-start-1 row-end-2 max-h-[81px] md:max-h-[102px] overflow-x-auto overflow-y-hidden">
                                        <picture>
                                            <source srcSet="/images/referrals/referrals-icon.svg" type="image/png" />
                                            <Image
                                                src="/images/referrals/referrals-icon.svg"
                                                alt="Referrals"
                                                loading="lazy"
                                                width={32}
                                                height={32}
                                                className="min-w-8 min-h-8"
                                            />
                                        </picture>
                                        <div className="flex flex-col justify-center items-start gap-y-1">
                                            <p className="text-white opacity-80 font-bold text-xl">Referrals</p>
                                            <p className="text-white font-bold text-2xl">05</p>
                                        </div>
                                    </CardContent>
                                </Card>

                                <div className="w-full flex justify-between items-center gap-x-5 col-start-1 col-end-3 row-start-2 row-end-3 max-h-[81px] md:max-h-[64px]">
                                    <Card className="w-full h-full lg:min-w-[360px] xl:min-w-[470px]">
                                        <CardContent className="bg-accent-600 rounded-2xl px-6 py-4 flex justify-between items-center gap-x-4 w-full md:py-0 md:max-w-[360px] xl:min-w-[470px] overflow-auto lg:overflow-hidden h-full">
                                            <p className="text-base lg:min-w-36 lg:max-w-36 lg:overflow-hidden lg:text-ellipsis xl:min-w-52 xl:max-w-52 text-white opacity-80 md:text-xl md:font-medium">{userShortLink}</p>
                                            <div onClick={copyShareLink} className="bg-primary rounded-[8px] px-4 py-2 w-32 min-w-32 max-w-32 flex justify-start items-center gap-x-3 cursor-pointer"><span className="text-sm text-white opacity-40 select-none">{isShareLinkCopied ? "Copied!" : "Copy link"}</span> <Copy color="#747394" height={17} width={16} /></div>
                                        </CardContent>
                                    </Card>

                                    <div className="hidden h-full w-full justify-end items-center md:flex">
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