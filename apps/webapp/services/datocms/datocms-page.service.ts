import { getCMSSdk } from "@/services/datocms/graphql/cms"
import {
  BlogAiModelFilter,
  BlogAiRecord,
  BlogBitcashModelFilter,
  BlogBitcashRecord,
  BlogBitcoinModelFilter,
  BlogBitcoinRecord,
  BlogCryptoModelFilter,
  BlogCryptoRecord,
  BlogInvestingRecord,
  BlogNewsModelFilter,
  BlogNewsRecord,
  BlogStartupModelFilter,
  BlogStartupRecord,
  ResearchAiRecord,
  SiteLocale,
} from "@/services/datocms/graphql/generated/cms"

export async function getPageContent(
  category: "terms_condition" | "privacy_policy",
  locale: SiteLocale,
  fallbackLocales: SiteLocale[]
) {
  let dataRecord: MainContentBlock | null = null
  let error

  try {
    let pageName = ""
    switch (category) {
      case "terms_condition":
        pageName = "termsAndCondition"
        break
      case "privacy_policy":
        pageName = "privacyPolicy"
        break
      default:
        throw new Error("Invalid category")
    }

    const data = await getCMSSdk().query({
      [pageName]: {
        __args: {
          locale: locale,
          fallbackLocales: fallbackLocales,
        },
        mainContent: {
          value: true,
        },
      },
    })

    dataRecord = data[pageName as keyof typeof data] as MainContentBlock

    if (!dataRecord) {
      throw new Error("No records has been found for  " + category)
    }
  } catch (err) {
    console.log(
      "datocms-page.service::getPageContent::[ERROR]:: " + category,
      err
    )

    error = (err as Error).message
  } finally {
    return {
      [`Data`]: dataRecord,
      [`Error`]: error,
    }
  }
}

export interface MainContentBlock {
  mainContent: {
    value: {
      schema: string
      document: {
        type: string
        children: {
          type: string
          marks: any[]
          value: string
        }[]
      }
    }
  }
}

export interface MainContentBlockTypes {
  privacyPolicy: MainContentBlock
  termsAndCondition: MainContentBlock
}
