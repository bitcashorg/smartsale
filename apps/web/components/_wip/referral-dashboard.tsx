import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Image from "next/image"
import ReferralItem from "./referral-item"
import ReferralShareButton from './referral-share-button'

export default function ReferralDashboard() {
  return (
    <div className="w-full max-w-[1593px] mx-auto space-y-6 mt-8">
      <h1 className="text-3xl font-bold text-center">
        Referral Program
      </h1>

      <Card className="bg-gradient-to-br from-cornflowerblue-200 md:overflow-visible">
        <CardContent className="max-w-[1147px] mx-auto flex justify-center items-center gap-x-28 md:pt-16 md:pb-12 md:px-5">
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
          <Card className='mt-6 md:mt-0 w-full md:bg-transparent md:overflow-visible'>
            <CardHeader className="px-3 md:p-0 md:mb-7">
              <h2 className="text-2xl font-bold text-left text-accent-600">Earn <span className="text-white">20%</span> of founds raised</h2>
            </CardHeader>
            <CardContent className="px-3 md:p-0">
              <div className="w-full grid grid-cols-2 grid-rows-2 gap-3 md:gap-16">
                <div className="w-full bg-accent-600 rounded-2xl p-4 flex justify-start items-center gap-x-3 col-start-1 col-end-2 row-start-1 row-end-2 max-h-[81px] md:max-h-[102px] overflow-x-auto overflow-y-hidden">
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
                </div>

                <div className="w-full bg-accent-600 rounded-2xl p-4 flex justify-start items-center gap-x-3 col-start-2 col-end-3 row-start-1 row-end-2 max-h-[81px] md:max-h-[102px] overflow-x-auto overflow-y-hidden">
                  <picture>
                    <source srcSet="/images/referrals/referrals-icon.png" type="image/png" />
                    <Image
                      src="/images/referrals/referrals-icon.png"
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
                </div>

                <div className="w-full flex justify-between items-center gap-x-5 col-start-1 col-end-3 row-start-2 row-end-3 max-h-[81px] md:max-h-[64px]">
                  <div className="bg-accent-600 rounded-2xl px-6 py-4 flex justify-between items-center gap-x-8 w-full md:py-0 md:max-w-[470px] overflow-auto h-full">
                    <p className="text-base text-white opacity-80 md:text-xl md:font-medium">Bitlauncher/ref=1234#</p>
                    <div className="bg-primary rounded-[8px] px-4 py-2 w-32 min-w-32 max-w-32 flex justify-start items-center gap-x-3 cursor-pointer"><span className="text-sm text-white opacity-40 select-none">Copy link</span> <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.75 10.25H12.85C13.6901 10.25 14.11 10.25 14.4308 10.0865C14.7131 9.94268 14.9429 9.71327 15.0867 9.43102C15.2502 9.11015 15.2502 8.69012 15.2502 7.85004V3.65002C15.2502 2.80994 15.2502 2.3899 15.0867 2.06903C14.9429 1.78679 14.7131 1.5573 14.4308 1.41349C14.11 1.25 13.6902 1.25 12.8501 1.25H8.65015C7.81007 1.25 7.38972 1.25 7.06885 1.41349C6.7866 1.5573 6.5573 1.78679 6.41349 2.06903C6.25 2.3899 6.25 2.80998 6.25 3.65005V5.75005M1.75 12.3501V8.15005C1.75 7.30998 1.75 6.8899 1.91349 6.56903C2.0573 6.28679 2.2866 6.0573 2.56885 5.91349C2.88972 5.75 3.31007 5.75 4.15015 5.75H8.35015C9.19023 5.75 9.60997 5.75 9.93084 5.91349C10.2131 6.0573 10.4429 6.28679 10.5867 6.56903C10.7502 6.8899 10.7502 7.30994 10.7502 8.15002V12.35C10.7502 13.1901 10.7502 13.6102 10.5867 13.931C10.4429 14.2133 10.2131 14.4427 9.93084 14.5865C9.60997 14.75 9.19023 14.75 8.35015 14.75H4.15015C3.31007 14.75 2.88972 14.75 2.56885 14.5865C2.2866 14.4427 2.0573 14.2133 1.91349 13.931C1.75 13.6102 1.75 13.1901 1.75 12.3501Z" stroke="#747394" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    </div>
                  </div>

                  <div className="hidden h-full md:block">
                    <ReferralShareButton />
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
          <div className="flex flex-col justify-start items-center gap-y-3 md:grid md:justify-items-start md:grid-cols-5 md:row-auto">
            <p className="hidden text-base text-white opacity-80 font-medium md:block md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2">Date</p>
            <p className="hidden text-base text-white opacity-80 font-medium md:block md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2">Referral User</p>
            <p className="hidden text-base text-white opacity-80 font-medium md:block md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-2">Contribution</p>
            <p className="hidden text-base text-white opacity-80 font-medium md:block md:col-start-4 md:col-end-5 md:row-start-1 md:row-end-2">My Reward</p>
            <ReferralItem />
          </div>
        </CardContent>
      </Card>

      <div className="w-full min-h-20 flex justify-center items-center gap-x-14 py-5 px-6 fixed bottom-0 left-0 z-50 bg-card opacity-90 md:hidden">
        <div className="bg-primary px-4 py-2 w-32 min-w-32 max-w-32 flex justify-start items-center gap-x-3 cursor-pointer border rounded-full border-[#747394]"><span className="text-base text-white opacity-40 select-none">Copy link</span> <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.75 10.25H12.85C13.6901 10.25 14.11 10.25 14.4308 10.0865C14.7131 9.94268 14.9429 9.71327 15.0867 9.43102C15.2502 9.11015 15.2502 8.69012 15.2502 7.85004V3.65002C15.2502 2.80994 15.2502 2.3899 15.0867 2.06903C14.9429 1.78679 14.7131 1.5573 14.4308 1.41349C14.11 1.25 13.6902 1.25 12.8501 1.25H8.65015C7.81007 1.25 7.38972 1.25 7.06885 1.41349C6.7866 1.5573 6.5573 1.78679 6.41349 2.06903C6.25 2.3899 6.25 2.80998 6.25 3.65005V5.75005M1.75 12.3501V8.15005C1.75 7.30998 1.75 6.8899 1.91349 6.56903C2.0573 6.28679 2.2866 6.0573 2.56885 5.91349C2.88972 5.75 3.31007 5.75 4.15015 5.75H8.35015C9.19023 5.75 9.60997 5.75 9.93084 5.91349C10.2131 6.0573 10.4429 6.28679 10.5867 6.56903C10.7502 6.8899 10.7502 7.30994 10.7502 8.15002V12.35C10.7502 13.1901 10.7502 13.6102 10.5867 13.931C10.4429 14.2133 10.2131 14.4427 9.93084 14.5865C9.60997 14.75 9.19023 14.75 8.35015 14.75H4.15015C3.31007 14.75 2.88972 14.75 2.56885 14.5865C2.2866 14.4427 2.0573 14.2133 1.91349 13.931C1.75 13.6102 1.75 13.1901 1.75 12.3501Z" stroke="#747394" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        </div>

        <ReferralShareButton />
      </div>
    </div>
  )
}
