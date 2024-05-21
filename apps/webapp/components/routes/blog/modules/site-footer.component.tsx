'use client'

import { LayoutRecord } from '@/services/datocms/graphql/generated/cms'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { LazyImage } from '@/components/routes/blog/base'
import { LogoMain, LucideIcons } from '@/components/icons/blog'

interface SiteFooterTypes {
  footerItems: {
    followLinks: LayoutRecord[
      | 'aiFollowLinks'
      | 'eli5FollowLinks'
      | 'homeFollowLinks'
      | 'cryptoFollowLinks'
      | 'bitcoinFollowLinks'
      | 'startUpsFollowLinks'
      | 'investingFollowLinks'
      | 'bitcashNewsFollowLinks']
    backHome: String
    backBitcash: String
    navigationPoliciesTerms: {
      terms_and_conditions: String
      privacy_policy: String
    }
  }
}

export const SiteFooter = ({ footerItems }: SiteFooterTypes) => {
  const pathname = usePathname()

  const isBlogLanding = pathname.match(/^\/.+\/blog$/)

  return (
    <footer className="relative">
      <LazyImage
        src="/Dot.png"
        loading="lazy"
        fill
        alt=""
        className="absolute bottom-0 left-0 right-0 top-0 z-[1] dark:opacity-50"
      />
      <div className="px-space-15 py-space-70 md:px-space-90 relative flex h-full w-full flex-col justify-between bg-gradient-to-t from-[#A5EFC0E5]  via-[#E6FBEDE5]  to-[#FFFFFFE5]  bg-center dark:from-neutral-800/80 dark:via-neutral-950/80 dark:to-neutral-950/80 md:h-[464px]">
        <div className="space-y-space-10 md:space-y-space-20 z-10 flex flex-col">
          <Link href={`/blog`} className="">
            <LogoMain className="max-h-[38px] w-full max-w-[250px] md:max-h-[46px] " />
          </Link>
          <span className="font-futura-pt-book text-footer-text">
            Follow us
          </span>
          <div className="flex items-center space-x-2">
            {footerItems?.followLinks?.telegram && (
              <Link
                href={footerItems.followLinks.telegram}
                target="_blank"
                className="flex items-center"
              >
                <LucideIcons.sendIcon />
              </Link>
            )}
            {footerItems?.followLinks?.twitter && (
              <Link
                href={footerItems.followLinks.twitter}
                target="_blank"
                className="flex items-center"
              >
                <LucideIcons.twitter />
              </Link>
            )}

            {footerItems?.followLinks?.threads && (
              <Link
                href={footerItems.followLinks.threads}
                target="_blank"
                className="flex items-center"
              >
                <LucideIcons.threadIcon />
              </Link>
            )}
          </div>
        </div>

        <div className="z-10  mt-5  flex flex-col  justify-between   space-y-5 border-t   border-[#C0C0C0] pt-[34px] md:mt-0 md:flex-row md:space-y-0">
          <span className="text-footer-text font-semibold">
            © {new Date().getFullYear()} bitcash.org
          </span>

          <Link
            href={!isBlogLanding ? '/blog' : '/'}
            className="flex items-center space-x-2"
          >
            <LucideIcons.arrowLeft className="w-3 md:w-7" />
            <span className="text-footer-text font-semibold">
              {!isBlogLanding
                ? footerItems?.backHome
                : footerItems?.backBitcash}
            </span>
          </Link>

          <div className="md:space-x-space-30 flex flex-col space-y-5 md:flex-row md:space-y-0 ">
            <Link
              href={`/blog/privacy-policy`}
              className="flex items-center space-x-2"
            >
              <span className="text-footer-text font-semibold">
                {footerItems.navigationPoliciesTerms?.privacy_policy || ''}
              </span>
            </Link>
            <Link
              href={`/blog/terms-conditions`}
              className="flex items-center space-x-2"
            >
              <span className="text-footer-text font-semibold">
                {footerItems.navigationPoliciesTerms?.terms_and_conditions ||
                  ''}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
