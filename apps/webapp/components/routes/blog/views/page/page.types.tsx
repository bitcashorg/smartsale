import {
  CMSLayoutText,
  CMSPageSeoText,
  MainContentBlock,
} from "@/services/datocms"

export interface TermsPageProps {
  i18n: CMSLayoutText
  pageSeo: CMSPageSeoText
  mainContent: MainContentBlock | null
}
