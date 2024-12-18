// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Scalars = {
    Boolean: boolean,
    BooleanType: any,
    CustomData: any,
    DateTime: any,
    Float: number,
    FloatType: any,
    Int: number,
    IntType: any,
    ItemId: any,
    JsonField: any,
    MetaTagAttributes: any,
    String: string,
    UploadId: any,
}

export type BlogAiModelOrderBy = '_createdAt_ASC' | '_createdAt_DESC' | 'id_ASC' | 'id_DESC' | '_firstPublishedAt_ASC' | '_firstPublishedAt_DESC' | '_publicationScheduledAt_ASC' | '_publicationScheduledAt_DESC' | '_unpublishingScheduledAt_ASC' | '_unpublishingScheduledAt_DESC' | '_publishedAt_ASC' | '_publishedAt_DESC' | '_status_ASC' | '_status_DESC' | '_updatedAt_ASC' | '_updatedAt_DESC' | '_isValid_ASC' | '_isValid_DESC' | 'description_ASC' | 'description_DESC' | 'authorName_ASC' | 'authorName_DESC' | 'title_ASC' | 'title_DESC'


/** Record of type AI Blog (blog_ai) */
export interface BlogAiRecord {
    _allSeoLocales: (SeoFieldMultiLocaleField[] | null)
    _allTitleLocales: (StringMultiLocaleField[] | null)
    _createdAt: Scalars['DateTime']
    /** Editing URL */
    _editingUrl: (Scalars['String'] | null)
    _firstPublishedAt: (Scalars['DateTime'] | null)
    _isValid: Scalars['BooleanType']
    _locales: SiteLocale[]
    _modelApiKey: Scalars['String']
    _publicationScheduledAt: (Scalars['DateTime'] | null)
    _publishedAt: (Scalars['DateTime'] | null)
    /** Generates SEO and Social card meta tags to be used in your frontend */
    _seoMetaTags: Tag[]
    _status: ItemStatus
    _unpublishingScheduledAt: (Scalars['DateTime'] | null)
    _updatedAt: Scalars['DateTime']
    authorName: (Scalars['String'] | null)
    authorPicture: (FileField | null)
    contentBlock: ContentBlockRecord[]
    description: (Scalars['String'] | null)
    id: Scalars['ItemId']
    seo: (SeoField | null)
    slug: (Scalars['String'] | null)
    thumbnail: (FileField | null)
    title: (Scalars['String'] | null)
    topics: (Scalars['JsonField'] | null)
    __typename: 'BlogAiRecord'
}

export type BlogBitcashModelOrderBy = '_createdAt_ASC' | '_createdAt_DESC' | 'id_ASC' | 'id_DESC' | '_firstPublishedAt_ASC' | '_firstPublishedAt_DESC' | '_publicationScheduledAt_ASC' | '_publicationScheduledAt_DESC' | '_unpublishingScheduledAt_ASC' | '_unpublishingScheduledAt_DESC' | '_publishedAt_ASC' | '_publishedAt_DESC' | '_status_ASC' | '_status_DESC' | '_updatedAt_ASC' | '_updatedAt_DESC' | '_isValid_ASC' | '_isValid_DESC' | 'authorName_ASC' | 'authorName_DESC' | 'description_ASC' | 'description_DESC' | 'title_ASC' | 'title_DESC'


/** Record of type Bitcash Blog (blog_bitcash) */
export interface BlogBitcashRecord {
    _allDescriptionLocales: (StringMultiLocaleField[] | null)
    _allSeoLocales: (SeoFieldMultiLocaleField[] | null)
    _allTitleLocales: (StringMultiLocaleField[] | null)
    _createdAt: Scalars['DateTime']
    /** Editing URL */
    _editingUrl: (Scalars['String'] | null)
    _firstPublishedAt: (Scalars['DateTime'] | null)
    _isValid: Scalars['BooleanType']
    _locales: SiteLocale[]
    _modelApiKey: Scalars['String']
    _publicationScheduledAt: (Scalars['DateTime'] | null)
    _publishedAt: (Scalars['DateTime'] | null)
    /** Generates SEO and Social card meta tags to be used in your frontend */
    _seoMetaTags: Tag[]
    _status: ItemStatus
    _unpublishingScheduledAt: (Scalars['DateTime'] | null)
    _updatedAt: Scalars['DateTime']
    authorName: (Scalars['String'] | null)
    authorPicture: (FileField | null)
    contentBlock: ContentBlockRecord[]
    description: (Scalars['String'] | null)
    id: Scalars['ItemId']
    seo: (SeoField | null)
    slug: (Scalars['String'] | null)
    thumbnail: (FileField | null)
    title: (Scalars['String'] | null)
    topics: (Scalars['JsonField'] | null)
    __typename: 'BlogBitcashRecord'
}

export type BlogBitcoinModelOrderBy = '_createdAt_ASC' | '_createdAt_DESC' | 'id_ASC' | 'id_DESC' | '_firstPublishedAt_ASC' | '_firstPublishedAt_DESC' | '_publicationScheduledAt_ASC' | '_publicationScheduledAt_DESC' | '_unpublishingScheduledAt_ASC' | '_unpublishingScheduledAt_DESC' | '_publishedAt_ASC' | '_publishedAt_DESC' | '_status_ASC' | '_status_DESC' | '_updatedAt_ASC' | '_updatedAt_DESC' | '_isValid_ASC' | '_isValid_DESC' | 'authorName_ASC' | 'authorName_DESC' | 'title_ASC' | 'title_DESC' | 'description_ASC' | 'description_DESC'


/** Record of type Bitcoin Blog (blog_bitcoin) */
export interface BlogBitcoinRecord {
    _allDescriptionLocales: (StringMultiLocaleField[] | null)
    _allSeoLocales: (SeoFieldMultiLocaleField[] | null)
    _allTitleLocales: (StringMultiLocaleField[] | null)
    _createdAt: Scalars['DateTime']
    /** Editing URL */
    _editingUrl: (Scalars['String'] | null)
    _firstPublishedAt: (Scalars['DateTime'] | null)
    _isValid: Scalars['BooleanType']
    _locales: SiteLocale[]
    _modelApiKey: Scalars['String']
    _publicationScheduledAt: (Scalars['DateTime'] | null)
    _publishedAt: (Scalars['DateTime'] | null)
    /** Generates SEO and Social card meta tags to be used in your frontend */
    _seoMetaTags: Tag[]
    _status: ItemStatus
    _unpublishingScheduledAt: (Scalars['DateTime'] | null)
    _updatedAt: Scalars['DateTime']
    authorName: (Scalars['String'] | null)
    authorPicture: (FileField | null)
    contentBlock: ContentBlockRecord[]
    description: (Scalars['String'] | null)
    id: Scalars['ItemId']
    seo: (SeoField | null)
    slug: (Scalars['String'] | null)
    thumbnail: (FileField | null)
    title: (Scalars['String'] | null)
    topics: (Scalars['JsonField'] | null)
    __typename: 'BlogBitcoinRecord'
}

export type BlogBitlauncherModelOrderBy = '_createdAt_ASC' | '_createdAt_DESC' | 'id_ASC' | 'id_DESC' | '_firstPublishedAt_ASC' | '_firstPublishedAt_DESC' | '_publicationScheduledAt_ASC' | '_publicationScheduledAt_DESC' | '_unpublishingScheduledAt_ASC' | '_unpublishingScheduledAt_DESC' | '_publishedAt_ASC' | '_publishedAt_DESC' | '_status_ASC' | '_status_DESC' | '_updatedAt_ASC' | '_updatedAt_DESC' | '_isValid_ASC' | '_isValid_DESC' | 'authorName_ASC' | 'authorName_DESC' | 'description_ASC' | 'description_DESC' | 'title_ASC' | 'title_DESC'


/** Record of type Bitlauncher Blog (blog_bitlauncher) */
export interface BlogBitlauncherRecord {
    _allDescriptionLocales: (StringMultiLocaleField[] | null)
    _allSeoLocales: (SeoFieldMultiLocaleField[] | null)
    _allTitleLocales: (StringMultiLocaleField[] | null)
    _createdAt: Scalars['DateTime']
    /** Editing URL */
    _editingUrl: (Scalars['String'] | null)
    _firstPublishedAt: (Scalars['DateTime'] | null)
    _isValid: Scalars['BooleanType']
    _modelApiKey: Scalars['String']
    _publicationScheduledAt: (Scalars['DateTime'] | null)
    _publishedAt: (Scalars['DateTime'] | null)
    /** Generates SEO and Social card meta tags to be used in your frontend */
    _seoMetaTags: Tag[]
    _status: ItemStatus
    _unpublishingScheduledAt: (Scalars['DateTime'] | null)
    _updatedAt: Scalars['DateTime']
    authorName: (Scalars['String'] | null)
    authorPicture: (FileField | null)
    contentBlock: ContentBlockRecord[]
    description: (Scalars['String'] | null)
    id: Scalars['ItemId']
    seo: (SeoField | null)
    slug: (Scalars['String'] | null)
    thumbnail: (FileField | null)
    title: (Scalars['String'] | null)
    topics: (Scalars['JsonField'] | null)
    __typename: 'BlogBitlauncherRecord'
}

export type BlogCryptoModelOrderBy = '_createdAt_ASC' | '_createdAt_DESC' | 'id_ASC' | 'id_DESC' | '_firstPublishedAt_ASC' | '_firstPublishedAt_DESC' | '_publicationScheduledAt_ASC' | '_publicationScheduledAt_DESC' | '_unpublishingScheduledAt_ASC' | '_unpublishingScheduledAt_DESC' | '_publishedAt_ASC' | '_publishedAt_DESC' | '_status_ASC' | '_status_DESC' | '_updatedAt_ASC' | '_updatedAt_DESC' | '_isValid_ASC' | '_isValid_DESC' | 'authorName_ASC' | 'authorName_DESC' | 'title_ASC' | 'title_DESC' | 'description_ASC' | 'description_DESC'


/** Record of type Crypto Blog (blog_crypto) */
export interface BlogCryptoRecord {
    _allDescriptionLocales: (StringMultiLocaleField[] | null)
    _allSeoLocales: (SeoFieldMultiLocaleField[] | null)
    _allTitleLocales: (StringMultiLocaleField[] | null)
    _createdAt: Scalars['DateTime']
    /** Editing URL */
    _editingUrl: (Scalars['String'] | null)
    _firstPublishedAt: (Scalars['DateTime'] | null)
    _isValid: Scalars['BooleanType']
    _locales: SiteLocale[]
    _modelApiKey: Scalars['String']
    _publicationScheduledAt: (Scalars['DateTime'] | null)
    _publishedAt: (Scalars['DateTime'] | null)
    /** Generates SEO and Social card meta tags to be used in your frontend */
    _seoMetaTags: Tag[]
    _status: ItemStatus
    _unpublishingScheduledAt: (Scalars['DateTime'] | null)
    _updatedAt: Scalars['DateTime']
    authorName: (Scalars['String'] | null)
    authorPicture: (FileField | null)
    contentBlock: ContentBlockRecord[]
    description: (Scalars['String'] | null)
    id: Scalars['ItemId']
    seo: (SeoField | null)
    slug: (Scalars['String'] | null)
    thumbnail: (FileField | null)
    title: (Scalars['String'] | null)
    topics: (Scalars['JsonField'] | null)
    __typename: 'BlogCryptoRecord'
}

export type BlogInvestingModelOrderBy = '_createdAt_ASC' | '_createdAt_DESC' | 'id_ASC' | 'id_DESC' | '_firstPublishedAt_ASC' | '_firstPublishedAt_DESC' | '_publicationScheduledAt_ASC' | '_publicationScheduledAt_DESC' | '_unpublishingScheduledAt_ASC' | '_unpublishingScheduledAt_DESC' | '_publishedAt_ASC' | '_publishedAt_DESC' | '_status_ASC' | '_status_DESC' | '_updatedAt_ASC' | '_updatedAt_DESC' | '_isValid_ASC' | '_isValid_DESC' | 'authorName_ASC' | 'authorName_DESC' | 'description_ASC' | 'description_DESC' | 'title_ASC' | 'title_DESC'


/** Record of type Investing Blog (blog_investing) */
export interface BlogInvestingRecord {
    _allSeoLocales: (SeoFieldMultiLocaleField[] | null)
    _allTitleLocales: (StringMultiLocaleField[] | null)
    _createdAt: Scalars['DateTime']
    /** Editing URL */
    _editingUrl: (Scalars['String'] | null)
    _firstPublishedAt: (Scalars['DateTime'] | null)
    _isValid: Scalars['BooleanType']
    _locales: SiteLocale[]
    _modelApiKey: Scalars['String']
    _publicationScheduledAt: (Scalars['DateTime'] | null)
    _publishedAt: (Scalars['DateTime'] | null)
    /** Generates SEO and Social card meta tags to be used in your frontend */
    _seoMetaTags: Tag[]
    _status: ItemStatus
    _unpublishingScheduledAt: (Scalars['DateTime'] | null)
    _updatedAt: Scalars['DateTime']
    authorName: (Scalars['String'] | null)
    authorPicture: (FileField | null)
    contentBlock: ContentBlockRecord[]
    description: (Scalars['String'] | null)
    id: Scalars['ItemId']
    seo: (SeoField | null)
    slug: (Scalars['String'] | null)
    thumbnail: (FileField | null)
    title: (Scalars['String'] | null)
    topics: (Scalars['JsonField'] | null)
    __typename: 'BlogInvestingRecord'
}

export type BlogNewsModelOrderBy = '_createdAt_ASC' | '_createdAt_DESC' | 'id_ASC' | 'id_DESC' | '_firstPublishedAt_ASC' | '_firstPublishedAt_DESC' | '_publicationScheduledAt_ASC' | '_publicationScheduledAt_DESC' | '_unpublishingScheduledAt_ASC' | '_unpublishingScheduledAt_DESC' | '_publishedAt_ASC' | '_publishedAt_DESC' | '_status_ASC' | '_status_DESC' | '_updatedAt_ASC' | '_updatedAt_DESC' | '_isValid_ASC' | '_isValid_DESC' | 'authorName_ASC' | 'authorName_DESC' | 'description_ASC' | 'description_DESC' | 'title_ASC' | 'title_DESC'


/** Record of type News Blog (blog_news) */
export interface BlogNewsRecord {
    _allDescriptionLocales: (StringMultiLocaleField[] | null)
    _allSeoLocales: (SeoFieldMultiLocaleField[] | null)
    _allTitleLocales: (StringMultiLocaleField[] | null)
    _createdAt: Scalars['DateTime']
    /** Editing URL */
    _editingUrl: (Scalars['String'] | null)
    _firstPublishedAt: (Scalars['DateTime'] | null)
    _isValid: Scalars['BooleanType']
    _locales: SiteLocale[]
    _modelApiKey: Scalars['String']
    _publicationScheduledAt: (Scalars['DateTime'] | null)
    _publishedAt: (Scalars['DateTime'] | null)
    /** Generates SEO and Social card meta tags to be used in your frontend */
    _seoMetaTags: Tag[]
    _status: ItemStatus
    _unpublishingScheduledAt: (Scalars['DateTime'] | null)
    _updatedAt: Scalars['DateTime']
    authorName: (Scalars['String'] | null)
    authorPicture: (FileField | null)
    contentBlock: ContentBlockRecord[]
    description: (Scalars['String'] | null)
    id: Scalars['ItemId']
    seo: (SeoField | null)
    slug: (Scalars['String'] | null)
    thumbnail: (FileField | null)
    title: (Scalars['String'] | null)
    topics: (Scalars['JsonField'] | null)
    __typename: 'BlogNewsRecord'
}

export type BlogStartupModelOrderBy = '_createdAt_ASC' | '_createdAt_DESC' | 'id_ASC' | 'id_DESC' | '_firstPublishedAt_ASC' | '_firstPublishedAt_DESC' | '_publicationScheduledAt_ASC' | '_publicationScheduledAt_DESC' | '_unpublishingScheduledAt_ASC' | '_unpublishingScheduledAt_DESC' | '_publishedAt_ASC' | '_publishedAt_DESC' | '_status_ASC' | '_status_DESC' | '_updatedAt_ASC' | '_updatedAt_DESC' | '_isValid_ASC' | '_isValid_DESC' | 'authorName_ASC' | 'authorName_DESC' | 'description_ASC' | 'description_DESC' | 'title_ASC' | 'title_DESC'


/** Record of type Startup Blog  (blog_startup) */
export interface BlogStartupRecord {
    _allDescriptionLocales: (StringMultiLocaleField[] | null)
    _allSeoLocales: (SeoFieldMultiLocaleField[] | null)
    _allTitleLocales: (StringMultiLocaleField[] | null)
    _createdAt: Scalars['DateTime']
    /** Editing URL */
    _editingUrl: (Scalars['String'] | null)
    _firstPublishedAt: (Scalars['DateTime'] | null)
    _isValid: Scalars['BooleanType']
    _locales: SiteLocale[]
    _modelApiKey: Scalars['String']
    _publicationScheduledAt: (Scalars['DateTime'] | null)
    _publishedAt: (Scalars['DateTime'] | null)
    /** Generates SEO and Social card meta tags to be used in your frontend */
    _seoMetaTags: Tag[]
    _status: ItemStatus
    _unpublishingScheduledAt: (Scalars['DateTime'] | null)
    _updatedAt: Scalars['DateTime']
    authorName: (Scalars['String'] | null)
    authorPicture: (FileField | null)
    contentBlock: ContentBlockRecord[]
    description: (Scalars['String'] | null)
    id: Scalars['ItemId']
    seo: (SeoField | null)
    slug: (Scalars['String'] | null)
    thumbnail: (FileField | null)
    title: (Scalars['String'] | null)
    topics: (Scalars['JsonField'] | null)
    __typename: 'BlogStartupRecord'
}

export interface CollectionMetadata {
    count: Scalars['IntType']
    __typename: 'CollectionMetadata'
}

export type ColorBucketType = 'red' | 'orange' | 'pink' | 'cyan' | 'purple' | 'blue' | 'yellow' | 'green' | 'brown' | 'grey' | 'white' | 'black'

export interface ColorField {
    alpha: Scalars['IntType']
    blue: Scalars['IntType']
    cssRgb: Scalars['String']
    green: Scalars['IntType']
    hex: Scalars['String']
    red: Scalars['IntType']
    __typename: 'ColorField'
}

export interface ContentBlockModelMainContentField {
    blocks: Scalars['String'][]
    links: Scalars['String'][]
    value: Scalars['JsonField']
    __typename: 'ContentBlockModelMainContentField'
}


/** Block of type Content Block (content_block) */
export interface ContentBlockRecord {
    _createdAt: Scalars['DateTime']
    /** Editing URL */
    _editingUrl: (Scalars['String'] | null)
    _firstPublishedAt: (Scalars['DateTime'] | null)
    _isValid: Scalars['BooleanType']
    _modelApiKey: Scalars['String']
    _publicationScheduledAt: (Scalars['DateTime'] | null)
    _publishedAt: (Scalars['DateTime'] | null)
    /** Generates SEO and Social card meta tags to be used in your frontend */
    _seoMetaTags: Tag[]
    _status: ItemStatus
    _unpublishingScheduledAt: (Scalars['DateTime'] | null)
    _updatedAt: Scalars['DateTime']
    id: Scalars['ItemId']
    mainContent: (ContentBlockModelMainContentField | null)
    topImages: FileField[]
    __typename: 'ContentBlockRecord'
}

export type FaviconType = 'icon' | 'appleTouchIcon' | 'msApplication'

export interface FileField {
    _createdAt: Scalars['DateTime']
    /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
    _editingUrl: (Scalars['String'] | null)
    _updatedAt: Scalars['DateTime']
    alt: (Scalars['String'] | null)
    author: (Scalars['String'] | null)
    basename: Scalars['String']
    blurUpThumb: (Scalars['String'] | null)
    blurhash: (Scalars['String'] | null)
    colors: ColorField[]
    copyright: (Scalars['String'] | null)
    customData: Scalars['CustomData']
    exifInfo: Scalars['CustomData']
    filename: Scalars['String']
    focalPoint: (focalPoint | null)
    format: Scalars['String']
    height: (Scalars['IntType'] | null)
    id: Scalars['UploadId']
    md5: Scalars['String']
    mimeType: Scalars['String']
    notes: (Scalars['String'] | null)
    responsiveImage: (ResponsiveImage | null)
    size: Scalars['IntType']
    smartTags: Scalars['String'][]
    tags: Scalars['String'][]
    thumbhash: (Scalars['String'] | null)
    title: (Scalars['String'] | null)
    url: Scalars['String']
    video: (UploadVideoField | null)
    width: (Scalars['IntType'] | null)
    __typename: 'FileField'
}

export type FileFieldInterface = (FileField) & { __isUnion?: true }

export interface GlobalSeoField {
    facebookPageUrl: (Scalars['String'] | null)
    fallbackSeo: (SeoField | null)
    siteName: (Scalars['String'] | null)
    titleSuffix: (Scalars['String'] | null)
    twitterAccount: (Scalars['String'] | null)
    __typename: 'GlobalSeoField'
}

export type ImgixParamsAuto = 'enhance' | 'format' | 'redeye' | 'compress'

export type ImgixParamsBlendAlign = 'top' | 'bottom' | 'middle' | 'left' | 'right' | 'center'

export type ImgixParamsBlendCrop = 'top' | 'bottom' | 'left' | 'right' | 'faces'

export type ImgixParamsBlendFit = 'clamp' | 'clip' | 'crop' | 'scale' | 'max'

export type ImgixParamsBlendMode = 'color' | 'burn' | 'dodge' | 'darken' | 'difference' | 'exclusion' | 'hardlight' | 'hue' | 'lighten' | 'luminosity' | 'multiply' | 'overlay' | 'saturation' | 'screen' | 'softlight' | 'normal'

export type ImgixParamsBlendSize = 'inherit'

export type ImgixParamsCh = 'width' | 'dpr' | 'saveData'

export type ImgixParamsCrop = 'top' | 'bottom' | 'left' | 'right' | 'faces' | 'entropy' | 'edges' | 'focalpoint'

export type ImgixParamsCs = 'srgb' | 'adobergb1998' | 'tinysrgb' | 'strip'

export type ImgixParamsFill = 'solid' | 'blur' | 'gen' | 'generative' | 'gradient'

export type ImgixParamsFillGenPos = 'top' | 'bottom' | 'middle' | 'left' | 'right' | 'center'

export type ImgixParamsFillGradientCs = 'linear' | 'srgb' | 'oklab' | 'hsl' | 'lch'

export type ImgixParamsFillGradientLinearDirection = 'top' | 'bottom' | 'left' | 'right'

export type ImgixParamsFillGradientType = 'linear' | 'radial'

export type ImgixParamsFit = 'clamp' | 'clip' | 'crop' | 'facearea' | 'fill' | 'fillmax' | 'max' | 'min' | 'scale'

export type ImgixParamsFlip = 'h' | 'v' | 'hv'

export type ImgixParamsFm = 'gif' | 'jpg' | 'jp2' | 'json' | 'jxr' | 'pjpg' | 'mp4' | 'png' | 'png8' | 'png32' | 'webp' | 'webm' | 'blurhash' | 'avif'

export type ImgixParamsIptc = 'allow' | 'block'

export type ImgixParamsMarkAlign = 'top' | 'middle' | 'bottom' | 'left' | 'center' | 'right'

export type ImgixParamsMarkFit = 'clip' | 'crop' | 'fill' | 'max' | 'scale'

export type ImgixParamsMarkTile = 'grid'

export type ImgixParamsPalette = 'css' | 'json'

export type ImgixParamsTransparency = 'grid'

export type ImgixParamsTrim = 'auto' | 'color'

export type ImgixParamsTxtAlign = 'top' | 'middle' | 'bottom' | 'left' | 'center' | 'right'

export type ImgixParamsTxtClip = 'start' | 'middle' | 'end' | 'ellipsis'

export type ImgixParamsTxtFit = 'max'

export type ItemStatus = 'draft' | 'updated' | 'published'

export interface JsonFieldMultiLocaleField {
    locale: (SiteLocale | null)
    value: (Scalars['JsonField'] | null)
    __typename: 'JsonFieldMultiLocaleField'
}


/** Record of type Layout (layout) */
export interface LayoutRecord {
    _allAiFollowLinksLocales: (JsonFieldMultiLocaleField[] | null)
    _allAiResearchFollowLinksLocales: (JsonFieldMultiLocaleField[] | null)
    _allBackBitcashLocales: (StringMultiLocaleField[] | null)
    _allBackHomeLocales: (StringMultiLocaleField[] | null)
    _allBitcashNewsFollowLinksLocales: (JsonFieldMultiLocaleField[] | null)
    _allBitcoinFollowLinksLocales: (JsonFieldMultiLocaleField[] | null)
    _allCookieConsentCtaLocales: (StringMultiLocaleField[] | null)
    _allCookieConsentDescriptionLocales: (StringMultiLocaleField[] | null)
    _allCryptoFollowLinksLocales: (JsonFieldMultiLocaleField[] | null)
    _allEli5FollowLinksLocales: (JsonFieldMultiLocaleField[] | null)
    _allHomeFollowLinksLocales: (JsonFieldMultiLocaleField[] | null)
    _allInvestingFollowLinksLocales: (JsonFieldMultiLocaleField[] | null)
    _allNavigationCategoriesLocales: (JsonFieldMultiLocaleField[] | null)
    _allNavigationPoliciesTermsLocales: (JsonFieldMultiLocaleField[] | null)
    _allNavigationTopicLocales: (JsonFieldMultiLocaleField[] | null)
    _allSearchInputPlaceholderLocales: (StringMultiLocaleField[] | null)
    _allStartUpsFollowLinksLocales: (JsonFieldMultiLocaleField[] | null)
    _allSubscriptionCtaLocales: (StringMultiLocaleField[] | null)
    _allSubscriptionInputPlaceholderLocales: (StringMultiLocaleField[] | null)
    _allSubscriptionSubtitleLocales: (StringMultiLocaleField[] | null)
    _allSubscriptionTitleLocales: (StringMultiLocaleField[] | null)
    _createdAt: Scalars['DateTime']
    /** Editing URL */
    _editingUrl: (Scalars['String'] | null)
    _firstPublishedAt: (Scalars['DateTime'] | null)
    _isValid: Scalars['BooleanType']
    _modelApiKey: Scalars['String']
    _publicationScheduledAt: (Scalars['DateTime'] | null)
    _publishedAt: (Scalars['DateTime'] | null)
    /** Generates SEO and Social card meta tags to be used in your frontend */
    _seoMetaTags: Tag[]
    _status: ItemStatus
    _unpublishingScheduledAt: (Scalars['DateTime'] | null)
    _updatedAt: Scalars['DateTime']
    aiFollowLinks: (Scalars['JsonField'] | null)
    aiResearchFollowLinks: (Scalars['JsonField'] | null)
    backBitcash: (Scalars['String'] | null)
    backHome: (Scalars['String'] | null)
    bitcashNewsFollowLinks: (Scalars['JsonField'] | null)
    bitcoinFollowLinks: (Scalars['JsonField'] | null)
    cookieConsentCta: (Scalars['String'] | null)
    cookieConsentDescription: (Scalars['String'] | null)
    cryptoFollowLinks: (Scalars['JsonField'] | null)
    eli5FollowLinks: (Scalars['JsonField'] | null)
    homeFollowLinks: (Scalars['JsonField'] | null)
    id: Scalars['ItemId']
    investingFollowLinks: (Scalars['JsonField'] | null)
    navigationCategories: (Scalars['JsonField'] | null)
    navigationPoliciesTerms: (Scalars['JsonField'] | null)
    navigationTopic: (Scalars['JsonField'] | null)
    searchInputPlaceholder: (Scalars['String'] | null)
    startUpsFollowLinks: (Scalars['JsonField'] | null)
    subscriptionCta: (Scalars['String'] | null)
    subscriptionInputPlaceholder: (Scalars['String'] | null)
    subscriptionSubtitle: (Scalars['String'] | null)
    subscriptionTitle: (Scalars['String'] | null)
    __typename: 'LayoutRecord'
}

export type MuxThumbnailFormatType = 'jpg' | 'png' | 'gif'

export type PageSeoModelOrderBy = '_createdAt_ASC' | '_createdAt_DESC' | 'id_ASC' | 'id_DESC' | '_firstPublishedAt_ASC' | '_firstPublishedAt_DESC' | '_publicationScheduledAt_ASC' | '_publicationScheduledAt_DESC' | '_unpublishingScheduledAt_ASC' | '_unpublishingScheduledAt_DESC' | '_publishedAt_ASC' | '_publishedAt_DESC' | '_status_ASC' | '_status_DESC' | '_updatedAt_ASC' | '_updatedAt_DESC' | '_isValid_ASC' | '_isValid_DESC' | 'seoType_ASC' | 'seoType_DESC' | 'title_ASC' | 'title_DESC' | 'description_ASC' | 'description_DESC'


/** Record of type Page SEO (page_seo) */
export interface PageSeoRecord {
    _allDescriptionLocales: (StringMultiLocaleField[] | null)
    _allPageSeoLocales: (SeoFieldMultiLocaleField[] | null)
    _allTitleLocales: (StringMultiLocaleField[] | null)
    _createdAt: Scalars['DateTime']
    /** Editing URL */
    _editingUrl: (Scalars['String'] | null)
    _firstPublishedAt: (Scalars['DateTime'] | null)
    _isValid: Scalars['BooleanType']
    _locales: SiteLocale[]
    _modelApiKey: Scalars['String']
    _publicationScheduledAt: (Scalars['DateTime'] | null)
    _publishedAt: (Scalars['DateTime'] | null)
    /** Generates SEO and Social card meta tags to be used in your frontend */
    _seoMetaTags: Tag[]
    _status: ItemStatus
    _unpublishingScheduledAt: (Scalars['DateTime'] | null)
    _updatedAt: Scalars['DateTime']
    description: (Scalars['String'] | null)
    id: Scalars['ItemId']
    pageSeo: (SeoField | null)
    seoType: (Scalars['String'] | null)
    title: (Scalars['String'] | null)
    __typename: 'PageSeoRecord'
}

export interface PrivacyPolicyModelMainContentField {
    blocks: Scalars['String'][]
    links: Scalars['String'][]
    value: Scalars['JsonField']
    __typename: 'PrivacyPolicyModelMainContentField'
}

export interface PrivacyPolicyModelMainContentFieldMultiLocaleField {
    locale: (SiteLocale | null)
    value: (PrivacyPolicyModelMainContentField | null)
    __typename: 'PrivacyPolicyModelMainContentFieldMultiLocaleField'
}


/** Record of type Privacy Policy (privacy_policy) */
export interface PrivacyPolicyRecord {
    _allMainContentLocales: (PrivacyPolicyModelMainContentFieldMultiLocaleField[] | null)
    _createdAt: Scalars['DateTime']
    /** Editing URL */
    _editingUrl: (Scalars['String'] | null)
    _firstPublishedAt: (Scalars['DateTime'] | null)
    _isValid: Scalars['BooleanType']
    _locales: SiteLocale[]
    _modelApiKey: Scalars['String']
    _publicationScheduledAt: (Scalars['DateTime'] | null)
    _publishedAt: (Scalars['DateTime'] | null)
    /** Generates SEO and Social card meta tags to be used in your frontend */
    _seoMetaTags: Tag[]
    _status: ItemStatus
    _unpublishingScheduledAt: (Scalars['DateTime'] | null)
    _updatedAt: Scalars['DateTime']
    id: Scalars['ItemId']
    mainContent: (PrivacyPolicyModelMainContentField | null)
    __typename: 'PrivacyPolicyRecord'
}


/** The query root for this schema */
export interface Query {
    /** Returns meta information regarding a record collection */
    _allBlogAisMeta: CollectionMetadata
    /** Returns meta information regarding a record collection */
    _allBlogBitcashesMeta: CollectionMetadata
    /** Returns meta information regarding a record collection */
    _allBlogBitcoinsMeta: CollectionMetadata
    /** Returns meta information regarding a record collection */
    _allBlogBitlaunchersMeta: CollectionMetadata
    /** Returns meta information regarding a record collection */
    _allBlogCryptosMeta: CollectionMetadata
    /** Returns meta information regarding a record collection */
    _allBlogInvestingsMeta: CollectionMetadata
    /** Returns meta information regarding a record collection */
    _allBlogNewsMeta: CollectionMetadata
    /** Returns meta information regarding a record collection */
    _allBlogStartupsMeta: CollectionMetadata
    /** Returns meta information regarding a record collection */
    _allPageSeosMeta: CollectionMetadata
    /** Returns meta information regarding a record collection */
    _allResearchAisMeta: CollectionMetadata
    /** Returns meta information regarding an assets collection */
    _allUploadsMeta: CollectionMetadata
    /** Returns the single instance record */
    _site: Site
    /** Returns a collection of records */
    allBlogAis: BlogAiRecord[]
    /** Returns a collection of records */
    allBlogBitcashes: BlogBitcashRecord[]
    /** Returns a collection of records */
    allBlogBitcoins: BlogBitcoinRecord[]
    /** Returns a collection of records */
    allBlogBitlaunchers: BlogBitlauncherRecord[]
    /** Returns a collection of records */
    allBlogCryptos: BlogCryptoRecord[]
    /** Returns a collection of records */
    allBlogInvestings: BlogInvestingRecord[]
    /** Returns a collection of records */
    allBlogNews: BlogNewsRecord[]
    /** Returns a collection of records */
    allBlogStartups: BlogStartupRecord[]
    /** Returns a collection of records */
    allPageSeos: PageSeoRecord[]
    /** Returns a collection of records */
    allResearchAis: ResearchAiRecord[]
    /** Returns a collection of assets */
    allUploads: FileField[]
    /** Returns a specific record */
    blogAi: (BlogAiRecord | null)
    /** Returns a specific record */
    blogBitcash: (BlogBitcashRecord | null)
    /** Returns a specific record */
    blogBitcoin: (BlogBitcoinRecord | null)
    /** Returns a specific record */
    blogBitlauncher: (BlogBitlauncherRecord | null)
    /** Returns a specific record */
    blogCrypto: (BlogCryptoRecord | null)
    /** Returns a specific record */
    blogInvesting: (BlogInvestingRecord | null)
    /** Returns a specific record */
    blogNews: (BlogNewsRecord | null)
    /** Returns a specific record */
    blogStartup: (BlogStartupRecord | null)
    /** Returns the single instance record */
    layout: (LayoutRecord | null)
    /** Returns a specific record */
    pageSeo: (PageSeoRecord | null)
    /** Returns the single instance record */
    privacyPolicy: (PrivacyPolicyRecord | null)
    /** Returns a specific record */
    researchAi: (ResearchAiRecord | null)
    /** Returns the single instance record */
    termsAndCondition: (TermsAndConditionRecord | null)
    /** Returns a specific asset */
    upload: (FileField | null)
    __typename: 'Query'
}

export type RecordInterface = (BlogAiRecord | BlogBitcashRecord | BlogBitcoinRecord | BlogBitlauncherRecord | BlogCryptoRecord | BlogInvestingRecord | BlogNewsRecord | BlogStartupRecord | ContentBlockRecord | LayoutRecord | PageSeoRecord | PrivacyPolicyRecord | ResearchAiRecord | TermsAndConditionRecord | TopicRecord) & { __isUnion?: true }

export type ResearchAiModelOrderBy = '_createdAt_ASC' | '_createdAt_DESC' | 'id_ASC' | 'id_DESC' | '_firstPublishedAt_ASC' | '_firstPublishedAt_DESC' | '_publicationScheduledAt_ASC' | '_publicationScheduledAt_DESC' | '_unpublishingScheduledAt_ASC' | '_unpublishingScheduledAt_DESC' | '_publishedAt_ASC' | '_publishedAt_DESC' | '_status_ASC' | '_status_DESC' | '_updatedAt_ASC' | '_updatedAt_DESC' | '_isValid_ASC' | '_isValid_DESC' | 'authorName_ASC' | 'authorName_DESC' | 'description_ASC' | 'description_DESC' | 'title_ASC' | 'title_DESC'


/** Record of type AI Research (research_ai) */
export interface ResearchAiRecord {
    _allSeoLocales: (SeoFieldMultiLocaleField[] | null)
    _allTitleLocales: (StringMultiLocaleField[] | null)
    _createdAt: Scalars['DateTime']
    /** Editing URL */
    _editingUrl: (Scalars['String'] | null)
    _firstPublishedAt: (Scalars['DateTime'] | null)
    _isValid: Scalars['BooleanType']
    _locales: SiteLocale[]
    _modelApiKey: Scalars['String']
    _publicationScheduledAt: (Scalars['DateTime'] | null)
    _publishedAt: (Scalars['DateTime'] | null)
    /** Generates SEO and Social card meta tags to be used in your frontend */
    _seoMetaTags: Tag[]
    _status: ItemStatus
    _unpublishingScheduledAt: (Scalars['DateTime'] | null)
    _updatedAt: Scalars['DateTime']
    authorName: (Scalars['String'] | null)
    authorPicture: (FileField | null)
    contentBlock: ContentBlockRecord[]
    description: (Scalars['String'] | null)
    id: Scalars['ItemId']
    seo: (SeoField | null)
    slug: (Scalars['String'] | null)
    thumbnail: (FileField | null)
    title: (Scalars['String'] | null)
    topics: (Scalars['JsonField'] | null)
    __typename: 'ResearchAiRecord'
}

export type ResolutionType = 'icon' | 'small' | 'medium' | 'large'

export interface ResponsiveImage {
    alt: (Scalars['String'] | null)
    aspectRatio: Scalars['FloatType']
    base64: (Scalars['String'] | null)
    bgColor: (Scalars['String'] | null)
    height: Scalars['IntType']
    sizes: Scalars['String']
    src: Scalars['String']
    srcSet: Scalars['String']
    title: (Scalars['String'] | null)
    webpSrcSet: Scalars['String']
    width: Scalars['IntType']
    __typename: 'ResponsiveImage'
}

export interface SeoField {
    description: (Scalars['String'] | null)
    image: (FileField | null)
    noIndex: (Scalars['BooleanType'] | null)
    title: (Scalars['String'] | null)
    twitterCard: (Scalars['String'] | null)
    __typename: 'SeoField'
}

export interface SeoFieldMultiLocaleField {
    locale: (SiteLocale | null)
    value: (SeoField | null)
    __typename: 'SeoFieldMultiLocaleField'
}

export interface Site {
    favicon: (FileField | null)
    faviconMetaTags: Tag[]
    globalSeo: (GlobalSeoField | null)
    locales: SiteLocale[]
    noIndex: (Scalars['BooleanType'] | null)
    __typename: 'Site'
}

export type SiteLocale = 'en' | 'es' | 'zh' | 'id' | 'vi' | 'ko' | 'pt' | 'fr'

export interface StringMultiLocaleField {
    locale: (SiteLocale | null)
    value: (Scalars['String'] | null)
    __typename: 'StringMultiLocaleField'
}

export interface Tag {
    attributes: (Scalars['MetaTagAttributes'] | null)
    content: (Scalars['String'] | null)
    tag: Scalars['String']
    __typename: 'Tag'
}

export interface TermsAndConditionModelMainContentField {
    blocks: Scalars['String'][]
    links: Scalars['String'][]
    value: Scalars['JsonField']
    __typename: 'TermsAndConditionModelMainContentField'
}

export interface TermsAndConditionModelMainContentFieldMultiLocaleField {
    locale: (SiteLocale | null)
    value: (TermsAndConditionModelMainContentField | null)
    __typename: 'TermsAndConditionModelMainContentFieldMultiLocaleField'
}


/** Record of type Terms and Condition (terms_and_condition) */
export interface TermsAndConditionRecord {
    _allMainContentLocales: (TermsAndConditionModelMainContentFieldMultiLocaleField[] | null)
    _createdAt: Scalars['DateTime']
    /** Editing URL */
    _editingUrl: (Scalars['String'] | null)
    _firstPublishedAt: (Scalars['DateTime'] | null)
    _isValid: Scalars['BooleanType']
    _locales: SiteLocale[]
    _modelApiKey: Scalars['String']
    _publicationScheduledAt: (Scalars['DateTime'] | null)
    _publishedAt: (Scalars['DateTime'] | null)
    /** Generates SEO and Social card meta tags to be used in your frontend */
    _seoMetaTags: Tag[]
    _status: ItemStatus
    _unpublishingScheduledAt: (Scalars['DateTime'] | null)
    _updatedAt: Scalars['DateTime']
    id: Scalars['ItemId']
    mainContent: (TermsAndConditionModelMainContentField | null)
    __typename: 'TermsAndConditionRecord'
}


/** Block of type Topics (topic) */
export interface TopicRecord {
    _createdAt: Scalars['DateTime']
    /** Editing URL */
    _editingUrl: (Scalars['String'] | null)
    _firstPublishedAt: (Scalars['DateTime'] | null)
    _isValid: Scalars['BooleanType']
    _modelApiKey: Scalars['String']
    _publicationScheduledAt: (Scalars['DateTime'] | null)
    _publishedAt: (Scalars['DateTime'] | null)
    /** Generates SEO and Social card meta tags to be used in your frontend */
    _seoMetaTags: Tag[]
    _status: ItemStatus
    _unpublishingScheduledAt: (Scalars['DateTime'] | null)
    _updatedAt: Scalars['DateTime']
    id: Scalars['ItemId']
    __typename: 'TopicRecord'
}

export type UploadOrderBy = '_createdAt_ASC' | '_createdAt_DESC' | 'size_ASC' | 'size_DESC' | 'resolution_ASC' | 'resolution_DESC' | 'filename_ASC' | 'filename_DESC' | 'basename_ASC' | 'basename_DESC' | 'mimeType_ASC' | 'mimeType_DESC' | 'format_ASC' | 'format_DESC' | '_updatedAt_ASC' | '_updatedAt_DESC' | 'id_ASC' | 'id_DESC'

export type UploadOrientation = 'landscape' | 'portrait' | 'square'

export type UploadType = 'image' | 'audio' | 'video' | 'richtext' | 'presentation' | 'spreadsheet' | 'pdfdocument' | 'archive'

export interface UploadVideoField {
    alt: (Scalars['String'] | null)
    blurUpThumb: (Scalars['String'] | null)
    blurhash: (Scalars['String'] | null)
    duration: (Scalars['Int'] | null)
    framerate: (Scalars['Int'] | null)
    height: Scalars['IntType']
    mp4Url: (Scalars['String'] | null)
    muxAssetId: Scalars['String']
    muxPlaybackId: Scalars['String']
    streamingUrl: Scalars['String']
    thumbhash: (Scalars['String'] | null)
    thumbnailUrl: Scalars['String']
    title: (Scalars['String'] | null)
    width: Scalars['IntType']
    __typename: 'UploadVideoField'
}

export type VideoMp4Res = 'low' | 'medium' | 'high'

export interface focalPoint {
    x: Scalars['FloatType']
    y: Scalars['FloatType']
    __typename: 'focalPoint'
}

export interface BlogAiModelFilter {_createdAt?: (CreatedAtFilter | null),id?: (ItemIdFilter | null),_firstPublishedAt?: (PublishedAtFilter | null),_publicationScheduledAt?: (PublishedAtFilter | null),_unpublishingScheduledAt?: (PublishedAtFilter | null),_publishedAt?: (PublishedAtFilter | null),_status?: (StatusFilter | null),_updatedAt?: (UpdatedAtFilter | null),_isValid?: (BooleanFilter | null),_locales?: (LocalesFilter | null),authorPicture?: (FileFilter | null),description?: (StringFilter | null),thumbnail?: (FileFilter | null),seo?: (SeoFilter | null),topics?: (JsonFilter | null),authorName?: (StringFilter | null),slug?: (SlugFilter | null),title?: (StringFilter | null),OR?: ((BlogAiModelFilter | null)[] | null),AND?: ((BlogAiModelFilter | null)[] | null)}


/** Record of type AI Blog (blog_ai) */
export interface BlogAiRecordGenqlSelection{
    _allSeoLocales?: (SeoFieldMultiLocaleFieldGenqlSelection & { __args?: {
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    _allTitleLocales?: (StringMultiLocaleFieldGenqlSelection & { __args?: {
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    _createdAt?: boolean | number
    /** Editing URL */
    _editingUrl?: boolean | number
    _firstPublishedAt?: boolean | number
    _isValid?: boolean | number
    _locales?: boolean | number
    _modelApiKey?: boolean | number
    _publicationScheduledAt?: boolean | number
    _publishedAt?: boolean | number
    /** Generates SEO and Social card meta tags to be used in your frontend */
    _seoMetaTags?: (TagGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null)} })
    _status?: boolean | number
    _unpublishingScheduledAt?: boolean | number
    _updatedAt?: boolean | number
    authorName?: boolean | number
    authorPicture?: FileFieldGenqlSelection
    contentBlock?: ContentBlockRecordGenqlSelection
    description?: boolean | number
    id?: boolean | number
    seo?: (SeoFieldGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    slug?: boolean | number
    thumbnail?: FileFieldGenqlSelection
    title?: { __args: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} } | boolean | number
    topics?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BlogBitcashModelFilter {_createdAt?: (CreatedAtFilter | null),id?: (ItemIdFilter | null),_firstPublishedAt?: (PublishedAtFilter | null),_publicationScheduledAt?: (PublishedAtFilter | null),_unpublishingScheduledAt?: (PublishedAtFilter | null),_publishedAt?: (PublishedAtFilter | null),_status?: (StatusFilter | null),_updatedAt?: (UpdatedAtFilter | null),_isValid?: (BooleanFilter | null),_locales?: (LocalesFilter | null),authorPicture?: (FileFilter | null),thumbnail?: (FileFilter | null),topics?: (JsonFilter | null),slug?: (SlugFilter | null),authorName?: (StringFilter | null),seo?: (SeoFilter | null),description?: (StringFilter | null),title?: (StringFilter | null),OR?: ((BlogBitcashModelFilter | null)[] | null),AND?: ((BlogBitcashModelFilter | null)[] | null)}


/** Record of type Bitcash Blog (blog_bitcash) */
export interface BlogBitcashRecordGenqlSelection{
    _allDescriptionLocales?: (StringMultiLocaleFieldGenqlSelection & { __args?: {
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    _allSeoLocales?: (SeoFieldMultiLocaleFieldGenqlSelection & { __args?: {
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    _allTitleLocales?: (StringMultiLocaleFieldGenqlSelection & { __args?: {
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    _createdAt?: boolean | number
    /** Editing URL */
    _editingUrl?: boolean | number
    _firstPublishedAt?: boolean | number
    _isValid?: boolean | number
    _locales?: boolean | number
    _modelApiKey?: boolean | number
    _publicationScheduledAt?: boolean | number
    _publishedAt?: boolean | number
    /** Generates SEO and Social card meta tags to be used in your frontend */
    _seoMetaTags?: (TagGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null)} })
    _status?: boolean | number
    _unpublishingScheduledAt?: boolean | number
    _updatedAt?: boolean | number
    authorName?: boolean | number
    authorPicture?: FileFieldGenqlSelection
    contentBlock?: ContentBlockRecordGenqlSelection
    description?: { __args: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} } | boolean | number
    id?: boolean | number
    seo?: (SeoFieldGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    slug?: boolean | number
    thumbnail?: FileFieldGenqlSelection
    title?: { __args: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} } | boolean | number
    topics?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BlogBitcoinModelFilter {_createdAt?: (CreatedAtFilter | null),id?: (ItemIdFilter | null),_firstPublishedAt?: (PublishedAtFilter | null),_publicationScheduledAt?: (PublishedAtFilter | null),_unpublishingScheduledAt?: (PublishedAtFilter | null),_publishedAt?: (PublishedAtFilter | null),_status?: (StatusFilter | null),_updatedAt?: (UpdatedAtFilter | null),_isValid?: (BooleanFilter | null),_locales?: (LocalesFilter | null),topics?: (JsonFilter | null),authorPicture?: (FileFilter | null),thumbnail?: (FileFilter | null),seo?: (SeoFilter | null),authorName?: (StringFilter | null),slug?: (SlugFilter | null),title?: (StringFilter | null),description?: (StringFilter | null),OR?: ((BlogBitcoinModelFilter | null)[] | null),AND?: ((BlogBitcoinModelFilter | null)[] | null)}


/** Record of type Bitcoin Blog (blog_bitcoin) */
export interface BlogBitcoinRecordGenqlSelection{
    _allDescriptionLocales?: (StringMultiLocaleFieldGenqlSelection & { __args?: {
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    _allSeoLocales?: (SeoFieldMultiLocaleFieldGenqlSelection & { __args?: {
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    _allTitleLocales?: (StringMultiLocaleFieldGenqlSelection & { __args?: {
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    _createdAt?: boolean | number
    /** Editing URL */
    _editingUrl?: boolean | number
    _firstPublishedAt?: boolean | number
    _isValid?: boolean | number
    _locales?: boolean | number
    _modelApiKey?: boolean | number
    _publicationScheduledAt?: boolean | number
    _publishedAt?: boolean | number
    /** Generates SEO and Social card meta tags to be used in your frontend */
    _seoMetaTags?: (TagGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null)} })
    _status?: boolean | number
    _unpublishingScheduledAt?: boolean | number
    _updatedAt?: boolean | number
    authorName?: boolean | number
    authorPicture?: FileFieldGenqlSelection
    contentBlock?: ContentBlockRecordGenqlSelection
    description?: { __args: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} } | boolean | number
    id?: boolean | number
    seo?: (SeoFieldGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    slug?: boolean | number
    thumbnail?: FileFieldGenqlSelection
    title?: { __args: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} } | boolean | number
    topics?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BlogBitlauncherModelFilter {_createdAt?: (CreatedAtFilter | null),id?: (ItemIdFilter | null),_firstPublishedAt?: (PublishedAtFilter | null),_publicationScheduledAt?: (PublishedAtFilter | null),_unpublishingScheduledAt?: (PublishedAtFilter | null),_publishedAt?: (PublishedAtFilter | null),_status?: (StatusFilter | null),_updatedAt?: (UpdatedAtFilter | null),_isValid?: (BooleanFilter | null),authorName?: (StringFilter | null),authorPicture?: (FileFilter | null),description?: (StringFilter | null),seo?: (SeoFilter | null),thumbnail?: (FileFilter | null),title?: (StringFilter | null),topics?: (JsonFilter | null),slug?: (SlugFilter | null),OR?: ((BlogBitlauncherModelFilter | null)[] | null),AND?: ((BlogBitlauncherModelFilter | null)[] | null)}


/** Record of type Bitlauncher Blog (blog_bitlauncher) */
export interface BlogBitlauncherRecordGenqlSelection{
    _allDescriptionLocales?: (StringMultiLocaleFieldGenqlSelection & { __args?: {
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    _allSeoLocales?: (SeoFieldMultiLocaleFieldGenqlSelection & { __args?: {
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    _allTitleLocales?: (StringMultiLocaleFieldGenqlSelection & { __args?: {
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    _createdAt?: boolean | number
    /** Editing URL */
    _editingUrl?: boolean | number
    _firstPublishedAt?: boolean | number
    _isValid?: boolean | number
    _modelApiKey?: boolean | number
    _publicationScheduledAt?: boolean | number
    _publishedAt?: boolean | number
    /** Generates SEO and Social card meta tags to be used in your frontend */
    _seoMetaTags?: (TagGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null)} })
    _status?: boolean | number
    _unpublishingScheduledAt?: boolean | number
    _updatedAt?: boolean | number
    authorName?: boolean | number
    authorPicture?: FileFieldGenqlSelection
    contentBlock?: ContentBlockRecordGenqlSelection
    description?: { __args: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} } | boolean | number
    id?: boolean | number
    seo?: (SeoFieldGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    slug?: boolean | number
    thumbnail?: FileFieldGenqlSelection
    title?: { __args: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} } | boolean | number
    topics?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BlogCryptoModelFilter {_createdAt?: (CreatedAtFilter | null),id?: (ItemIdFilter | null),_firstPublishedAt?: (PublishedAtFilter | null),_publicationScheduledAt?: (PublishedAtFilter | null),_unpublishingScheduledAt?: (PublishedAtFilter | null),_publishedAt?: (PublishedAtFilter | null),_status?: (StatusFilter | null),_updatedAt?: (UpdatedAtFilter | null),_isValid?: (BooleanFilter | null),_locales?: (LocalesFilter | null),authorPicture?: (FileFilter | null),thumbnail?: (FileFilter | null),slug?: (SlugFilter | null),topics?: (JsonFilter | null),authorName?: (StringFilter | null),seo?: (SeoFilter | null),title?: (StringFilter | null),description?: (StringFilter | null),OR?: ((BlogCryptoModelFilter | null)[] | null),AND?: ((BlogCryptoModelFilter | null)[] | null)}


/** Record of type Crypto Blog (blog_crypto) */
export interface BlogCryptoRecordGenqlSelection{
    _allDescriptionLocales?: (StringMultiLocaleFieldGenqlSelection & { __args?: {
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    _allSeoLocales?: (SeoFieldMultiLocaleFieldGenqlSelection & { __args?: {
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    _allTitleLocales?: (StringMultiLocaleFieldGenqlSelection & { __args?: {
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    _createdAt?: boolean | number
    /** Editing URL */
    _editingUrl?: boolean | number
    _firstPublishedAt?: boolean | number
    _isValid?: boolean | number
    _locales?: boolean | number
    _modelApiKey?: boolean | number
    _publicationScheduledAt?: boolean | number
    _publishedAt?: boolean | number
    /** Generates SEO and Social card meta tags to be used in your frontend */
    _seoMetaTags?: (TagGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null)} })
    _status?: boolean | number
    _unpublishingScheduledAt?: boolean | number
    _updatedAt?: boolean | number
    authorName?: boolean | number
    authorPicture?: FileFieldGenqlSelection
    contentBlock?: ContentBlockRecordGenqlSelection
    description?: { __args: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} } | boolean | number
    id?: boolean | number
    seo?: (SeoFieldGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    slug?: boolean | number
    thumbnail?: FileFieldGenqlSelection
    title?: { __args: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} } | boolean | number
    topics?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BlogInvestingModelFilter {_createdAt?: (CreatedAtFilter | null),id?: (ItemIdFilter | null),_firstPublishedAt?: (PublishedAtFilter | null),_publicationScheduledAt?: (PublishedAtFilter | null),_unpublishingScheduledAt?: (PublishedAtFilter | null),_publishedAt?: (PublishedAtFilter | null),_status?: (StatusFilter | null),_updatedAt?: (UpdatedAtFilter | null),_isValid?: (BooleanFilter | null),_locales?: (LocalesFilter | null),topics?: (JsonFilter | null),authorPicture?: (FileFilter | null),thumbnail?: (FileFilter | null),slug?: (SlugFilter | null),authorName?: (StringFilter | null),seo?: (SeoFilter | null),description?: (StringFilter | null),title?: (StringFilter | null),OR?: ((BlogInvestingModelFilter | null)[] | null),AND?: ((BlogInvestingModelFilter | null)[] | null)}


/** Record of type Investing Blog (blog_investing) */
export interface BlogInvestingRecordGenqlSelection{
    _allSeoLocales?: (SeoFieldMultiLocaleFieldGenqlSelection & { __args?: {
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    _allTitleLocales?: (StringMultiLocaleFieldGenqlSelection & { __args?: {
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    _createdAt?: boolean | number
    /** Editing URL */
    _editingUrl?: boolean | number
    _firstPublishedAt?: boolean | number
    _isValid?: boolean | number
    _locales?: boolean | number
    _modelApiKey?: boolean | number
    _publicationScheduledAt?: boolean | number
    _publishedAt?: boolean | number
    /** Generates SEO and Social card meta tags to be used in your frontend */
    _seoMetaTags?: (TagGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null)} })
    _status?: boolean | number
    _unpublishingScheduledAt?: boolean | number
    _updatedAt?: boolean | number
    authorName?: boolean | number
    authorPicture?: FileFieldGenqlSelection
    contentBlock?: ContentBlockRecordGenqlSelection
    description?: boolean | number
    id?: boolean | number
    seo?: (SeoFieldGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    slug?: boolean | number
    thumbnail?: FileFieldGenqlSelection
    title?: { __args: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} } | boolean | number
    topics?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BlogNewsModelFilter {_createdAt?: (CreatedAtFilter | null),id?: (ItemIdFilter | null),_firstPublishedAt?: (PublishedAtFilter | null),_publicationScheduledAt?: (PublishedAtFilter | null),_unpublishingScheduledAt?: (PublishedAtFilter | null),_publishedAt?: (PublishedAtFilter | null),_status?: (StatusFilter | null),_updatedAt?: (UpdatedAtFilter | null),_isValid?: (BooleanFilter | null),_locales?: (LocalesFilter | null),authorPicture?: (FileFilter | null),thumbnail?: (FileFilter | null),topics?: (JsonFilter | null),authorName?: (StringFilter | null),slug?: (SlugFilter | null),seo?: (SeoFilter | null),description?: (StringFilter | null),title?: (StringFilter | null),OR?: ((BlogNewsModelFilter | null)[] | null),AND?: ((BlogNewsModelFilter | null)[] | null)}


/** Record of type News Blog (blog_news) */
export interface BlogNewsRecordGenqlSelection{
    _allDescriptionLocales?: (StringMultiLocaleFieldGenqlSelection & { __args?: {
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    _allSeoLocales?: (SeoFieldMultiLocaleFieldGenqlSelection & { __args?: {
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    _allTitleLocales?: (StringMultiLocaleFieldGenqlSelection & { __args?: {
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    _createdAt?: boolean | number
    /** Editing URL */
    _editingUrl?: boolean | number
    _firstPublishedAt?: boolean | number
    _isValid?: boolean | number
    _locales?: boolean | number
    _modelApiKey?: boolean | number
    _publicationScheduledAt?: boolean | number
    _publishedAt?: boolean | number
    /** Generates SEO and Social card meta tags to be used in your frontend */
    _seoMetaTags?: (TagGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null)} })
    _status?: boolean | number
    _unpublishingScheduledAt?: boolean | number
    _updatedAt?: boolean | number
    authorName?: boolean | number
    authorPicture?: FileFieldGenqlSelection
    contentBlock?: ContentBlockRecordGenqlSelection
    description?: { __args: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} } | boolean | number
    id?: boolean | number
    seo?: (SeoFieldGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    slug?: boolean | number
    thumbnail?: FileFieldGenqlSelection
    title?: { __args: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} } | boolean | number
    topics?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BlogStartupModelFilter {_createdAt?: (CreatedAtFilter | null),id?: (ItemIdFilter | null),_firstPublishedAt?: (PublishedAtFilter | null),_publicationScheduledAt?: (PublishedAtFilter | null),_unpublishingScheduledAt?: (PublishedAtFilter | null),_publishedAt?: (PublishedAtFilter | null),_status?: (StatusFilter | null),_updatedAt?: (UpdatedAtFilter | null),_isValid?: (BooleanFilter | null),_locales?: (LocalesFilter | null),topics?: (JsonFilter | null),authorName?: (StringFilter | null),authorPicture?: (FileFilter | null),thumbnail?: (FileFilter | null),seo?: (SeoFilter | null),description?: (StringFilter | null),slug?: (SlugFilter | null),title?: (StringFilter | null),OR?: ((BlogStartupModelFilter | null)[] | null),AND?: ((BlogStartupModelFilter | null)[] | null)}


/** Record of type Startup Blog  (blog_startup) */
export interface BlogStartupRecordGenqlSelection{
    _allDescriptionLocales?: (StringMultiLocaleFieldGenqlSelection & { __args?: {
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    _allSeoLocales?: (SeoFieldMultiLocaleFieldGenqlSelection & { __args?: {
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    _allTitleLocales?: (StringMultiLocaleFieldGenqlSelection & { __args?: {
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    _createdAt?: boolean | number
    /** Editing URL */
    _editingUrl?: boolean | number
    _firstPublishedAt?: boolean | number
    _isValid?: boolean | number
    _locales?: boolean | number
    _modelApiKey?: boolean | number
    _publicationScheduledAt?: boolean | number
    _publishedAt?: boolean | number
    /** Generates SEO and Social card meta tags to be used in your frontend */
    _seoMetaTags?: (TagGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null)} })
    _status?: boolean | number
    _unpublishingScheduledAt?: boolean | number
    _updatedAt?: boolean | number
    authorName?: boolean | number
    authorPicture?: FileFieldGenqlSelection
    contentBlock?: ContentBlockRecordGenqlSelection
    description?: { __args: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} } | boolean | number
    id?: boolean | number
    seo?: (SeoFieldGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    slug?: boolean | number
    thumbnail?: FileFieldGenqlSelection
    title?: { __args: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} } | boolean | number
    topics?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Specifies how to filter Boolean fields */
export interface BooleanFilter {
/** Search for records with an exact match */
eq?: (Scalars['BooleanType'] | null)}

export interface CollectionMetadataGenqlSelection{
    count?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ColorFieldGenqlSelection{
    alpha?: boolean | number
    blue?: boolean | number
    cssRgb?: boolean | number
    green?: boolean | number
    hex?: boolean | number
    red?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ContentBlockModelMainContentFieldGenqlSelection{
    blocks?: boolean | number
    links?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Block of type Content Block (content_block) */
export interface ContentBlockRecordGenqlSelection{
    _createdAt?: boolean | number
    /** Editing URL */
    _editingUrl?: boolean | number
    _firstPublishedAt?: boolean | number
    _isValid?: boolean | number
    _modelApiKey?: boolean | number
    _publicationScheduledAt?: boolean | number
    _publishedAt?: boolean | number
    /** Generates SEO and Social card meta tags to be used in your frontend */
    _seoMetaTags?: (TagGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null)} })
    _status?: boolean | number
    _unpublishingScheduledAt?: boolean | number
    _updatedAt?: boolean | number
    id?: boolean | number
    mainContent?: ContentBlockModelMainContentFieldGenqlSelection
    topImages?: FileFieldGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Specifies how to filter by creation datetime */
export interface CreatedAtFilter {
/** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
gt?: (Scalars['DateTime'] | null),
/** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
lt?: (Scalars['DateTime'] | null),
/** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
gte?: (Scalars['DateTime'] | null),
/** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
lte?: (Scalars['DateTime'] | null),
/** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
eq?: (Scalars['DateTime'] | null),
/** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
neq?: (Scalars['DateTime'] | null),
/** Filter records with the specified field defined (i.e. with any value) or not */
exists?: (Scalars['BooleanType'] | null)}

export interface FileFieldGenqlSelection{
    _createdAt?: boolean | number
    /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
    _editingUrl?: boolean | number
    _updatedAt?: boolean | number
    alt?: { __args: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} } | boolean | number
    author?: boolean | number
    basename?: boolean | number
    blurUpThumb?: { __args: {
    /** Controls the "punch" value (~contrast) of the blurhash decoding algorithm (defaults to 1.0) */
    punch?: Scalars['Float'], 
    /** Maximum image dimension (defaults to 24px) */
    size?: Scalars['Int'], 
    /** Image quality (defaults to 70%) */
    quality?: Scalars['Int'], 
    /** Imgix transformations to apply to the image */
    imgixParams?: (ImgixParams | null)} } | boolean | number
    blurhash?: boolean | number
    colors?: ColorFieldGenqlSelection
    copyright?: boolean | number
    customData?: { __args: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} } | boolean | number
    exifInfo?: boolean | number
    filename?: boolean | number
    focalPoint?: (focalPointGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    format?: boolean | number
    height?: boolean | number
    id?: boolean | number
    md5?: boolean | number
    mimeType?: boolean | number
    notes?: boolean | number
    responsiveImage?: (ResponsiveImageGenqlSelection & { __args?: {
    /** Imgix transformations to apply to the image */
    imgixParams?: (ImgixParams | null), 
    /** Specify a custom `sizes` attribute for the image */
    sizes?: (Scalars['String'] | null), 
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    size?: boolean | number
    smartTags?: boolean | number
    tags?: boolean | number
    thumbhash?: boolean | number
    title?: { __args: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} } | boolean | number
    url?: { __args: {
    /** Imgix transformations to apply to the image */
    imgixParams?: (ImgixParams | null)} } | boolean | number
    video?: UploadVideoFieldGenqlSelection
    width?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FileFieldInterfaceGenqlSelection{
    _createdAt?: boolean | number
    /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
    _editingUrl?: boolean | number
    _updatedAt?: boolean | number
    alt?: { __args: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} } | boolean | number
    author?: boolean | number
    basename?: boolean | number
    blurUpThumb?: { __args: {
    /** Controls the "punch" value (~contrast) of the blurhash decoding algorithm (defaults to 1.0) */
    punch?: Scalars['Float'], 
    /** Maximum image dimension (defaults to 24px) */
    size?: Scalars['Int'], 
    /** Image quality (defaults to 70%) */
    quality?: Scalars['Int'], 
    /** Imgix transformations to apply to the image */
    imgixParams?: (ImgixParams | null)} } | boolean | number
    blurhash?: boolean | number
    colors?: ColorFieldGenqlSelection
    copyright?: boolean | number
    customData?: { __args: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} } | boolean | number
    exifInfo?: boolean | number
    filename?: boolean | number
    focalPoint?: (focalPointGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    format?: boolean | number
    height?: boolean | number
    id?: boolean | number
    md5?: boolean | number
    mimeType?: boolean | number
    notes?: boolean | number
    responsiveImage?: (ResponsiveImageGenqlSelection & { __args?: {
    /** Imgix transformations to apply to the image */
    imgixParams?: (ImgixParams | null), 
    /** Specify a custom `sizes` attribute for the image */
    sizes?: (Scalars['String'] | null), 
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    size?: boolean | number
    smartTags?: boolean | number
    tags?: boolean | number
    thumbhash?: boolean | number
    title?: { __args: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} } | boolean | number
    url?: { __args: {
    /** Imgix transformations to apply to the image */
    imgixParams?: (ImgixParams | null)} } | boolean | number
    video?: UploadVideoFieldGenqlSelection
    width?: boolean | number
    on_FileField?: FileFieldGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Specifies how to filter Single-file/image fields */
export interface FileFilter {
/** Search for records with an exact match. The specified value must be an Upload ID */
eq?: (Scalars['UploadId'] | null),
/** Exclude records with an exact match. The specified value must be an Upload ID */
neq?: (Scalars['UploadId'] | null),
/** Filter records that have one of the specified uploads */
in?: ((Scalars['UploadId'] | null)[] | null),
/** Filter records that do not have one of the specified uploads */
notIn?: ((Scalars['UploadId'] | null)[] | null),
/** Filter records with the specified field defined (i.e. with any value) or not */
exists?: (Scalars['BooleanType'] | null)}

export interface GlobalSeoFieldGenqlSelection{
    facebookPageUrl?: boolean | number
    fallbackSeo?: SeoFieldGenqlSelection
    siteName?: boolean | number
    titleSuffix?: boolean | number
    twitterAccount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ImgixParams {
/**
 * Aspect Ratio
 * 
 * Specifies an aspect ratio to maintain when resizing and cropping the image
 * 
 * Depends on: `fit=crop`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/ar)
 */
ar?: (Scalars['String'] | null),
/**
 * Automatic
 * 
 * Applies automatic enhancements to images.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/auto)
 */
auto?: (ImgixParamsAuto[] | null),
/**
 * Background Removal Fallback
 * 
 * Overrides default fallback behavior for bg-remove failures.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/bg-remove)
 */
bgRemoveFallback?: (Scalars['BooleanType'] | null),
/**
 * Background Removal
 * 
 * Removes background from image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/bg-remove)
 */
bgRemove?: (Scalars['BooleanType'] | null),
/**
 * Background Removal Fallback
 * 
 * Overrides default fallback behavior for bg-replace failures.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/bg-replace)
 */
bgReplaceFallback?: (Scalars['BooleanType'] | null),
/**
 * Background Replacement Negative Prompt
 * 
 * Provides a negative text suggestion for background replacement.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/bg-replace-neg-prompt)
 */
bgReplaceNegPrompt?: (Scalars['String'] | null),
/**
 * Background Replacement
 * 
 * Replaces background from image using a string based prompt.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/bg-replace)
 */
bgReplace?: (Scalars['String'] | null),
/**
 * Background Color
 * 
 * Colors the background of padded and partially-transparent images.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/bg)
 */
bg?: (Scalars['String'] | null),
/**
 * Blend Align
 * 
 * Changes the blend alignment relative to the parent image.
 * 
 * Depends on: `blend`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-align)
 */
blendAlign?: (ImgixParamsBlendAlign[] | null),
/**
 * Blend Alpha
 * 
 * Changes the alpha of the blend image.
 * 
 * Depends on: `blend`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-alpha)
 */
blendAlpha?: (Scalars['IntType'] | null),
/**
 * Blend Color
 * 
 * Specifies a color to use when applying the blend.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-color)
 */
blendColor?: (Scalars['String'] | null),
/**
 * Blend Crop
 * 
 * Specifies the type of crop for blend images.
 * 
 * Depends on: `blend`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-crop)
 */
blendCrop?: (ImgixParamsBlendCrop[] | null),
/**
 * Blend Fit
 * 
 * Specifies the fit mode for blend images.
 * 
 * Depends on: `blend`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-fit)
 */
blendFit?: (ImgixParamsBlendFit | null),
/**
 * Blend Height
 * 
 * Adjusts the height of the blend image.
 * 
 * Depends on: `blend`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-h)
 */
blendH?: (Scalars['FloatType'] | null),
/**
 * Blend Mode
 * 
 * Sets the blend mode for a blend image.
 * 
 * Depends on: `blend`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-mode)
 */
blendMode?: (ImgixParamsBlendMode | null),
/**
 * Blend Padding
 * 
 * Applies padding to the blend image.
 * 
 * Depends on: `blend`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-pad)
 */
blendPad?: (Scalars['IntType'] | null),
/**
 * Blend Size
 * 
 * Adjusts the size of the blend image.
 * 
 * Depends on: `blend`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-size)
 */
blendSize?: (ImgixParamsBlendSize | null),
/**
 * Blend Width
 * 
 * Adjusts the width of the blend image.
 * 
 * Depends on: `blend`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-w)
 */
blendW?: (Scalars['FloatType'] | null),
/**
 * Blend X Position
 * 
 * Adjusts the x-offset of the blend image relative to its parent.
 * 
 * Depends on: `blend`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-x)
 */
blendX?: (Scalars['IntType'] | null),
/**
 * Blend Y Position
 * 
 * Adjusts the y-offset of the blend image relative to its parent.
 * 
 * Depends on: `blend`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-y)
 */
blendY?: (Scalars['IntType'] | null),
/**
 * Blend
 * 
 * Specifies the location of the blend image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend)
 */
blend?: (Scalars['String'] | null),
/**
 * Gaussian Blur
 * 
 * Applies a gaussian blur to an image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/blur)
 */
blur?: (Scalars['IntType'] | null),
/**
 * Border Bottom
 * 
 * Sets bottom border of an image.
 * 
 * Depends on: `border`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-bottom)
 */
borderBottom?: (Scalars['IntType'] | null),
/**
 * Border Left
 * 
 * Sets left border of an image.
 * 
 * Depends on: `border`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-left)
 */
borderLeft?: (Scalars['IntType'] | null),
/**
 * Inner Border Radius
 * 
 * Sets the inner radius of the image's border in pixels.
 * 
 * Depends on: `border`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner)
 */
borderRadiusInner?: (Scalars['String'] | null),
/**
 * Outer Border Radius
 * 
 * Sets the outer radius of the image's border in pixels.
 * 
 * Depends on: `border`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius)
 */
borderRadius?: (Scalars['String'] | null),
/**
 * Border Right
 * 
 * Sets right border of an image.
 * 
 * Depends on: `border`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-right)
 */
borderRight?: (Scalars['IntType'] | null),
/**
 * Border Top
 * 
 * Sets top border of an image.
 * 
 * Depends on: `border`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-top)
 */
borderTop?: (Scalars['IntType'] | null),
/**
 * Border Size & Color
 * 
 * Applies a border to an image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border)
 */
border?: (Scalars['String'] | null),
/**
 * Brightness
 * 
 * Adjusts the brightness of the source image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/bri)
 */
bri?: (Scalars['IntType'] | null),
/**
 * Client Hints
 * 
 * Sets one or more Client-Hints headers
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/ch)
 */
ch?: (ImgixParamsCh[] | null),
/**
 * Chroma Subsampling
 * 
 * Specifies the output chroma subsampling rate.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/chromasub)
 */
chromasub?: (Scalars['IntType'] | null),
/**
 * Color Quantization
 * 
 * Limits the number of unique colors in an image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/colorquant)
 */
colorquant?: (Scalars['IntType'] | null),
/**
 * Palette Color Count
 * 
 * Specifies how many colors to include in a palette-extraction response.
 * 
 * Depends on: `palette`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/colors)
 */
colors?: (Scalars['IntType'] | null),
/**
 * Contrast
 * 
 * Adjusts the contrast of the source image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/con)
 */
con?: (Scalars['IntType'] | null),
/**
 * Mask Corner Radius
 * 
 * Specifies the radius value for a rounded corner mask.
 * 
 * Depends on: `mask=corners`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/corner-radius)
 */
cornerRadius?: (Scalars['String'] | null),
/**
 * Crop Mode
 * 
 * Specifies how to crop an image.
 * 
 * Depends on: `fit=crop`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/crop)
 */
crop?: (ImgixParamsCrop[] | null),
/**
 * Color Space
 * 
 * Specifies the color space of the output image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/cs)
 */
cs?: (ImgixParamsCs | null),
/**
 * Download
 * 
 * Forces a URL to use send-file in its response.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dl)
 */
dl?: (Scalars['String'] | null),
/**
 * Dots Per Inch
 * 
 * Sets the DPI value in the EXIF header.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dpi)
 */
dpi?: (Scalars['IntType'] | null),
/**
 * Device Pixel Ratio
 * 
 * Adjusts the device-pixel ratio of the output image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/dpr)
 */
dpr?: (Scalars['FloatType'] | null),
/**
 * Duotone Alpha
 * 
 * Changes the alpha of the duotone effect atop the source image.
 * 
 * Depends on: `duotone`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone-alpha)
 */
duotoneAlpha?: (Scalars['IntType'] | null),
/**
 * Duotone
 * 
 * Applies a duotone effect to the source image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone)
 */
duotone?: (Scalars['String'] | null),
/**
 * Exposure
 * 
 * Adjusts the exposure of the output image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/exp)
 */
exp?: (Scalars['IntType'] | null),
/**
 * Url Expiration Timestamp
 * 
 * A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/expires)
 */
expires?: (Scalars['IntType'] | null),
/**
 * Face Index
 * 
 * Selects a face to crop to.
 * 
 * Depends on: `fit=facearea`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faceindex)
 */
faceindex?: (Scalars['IntType'] | null),
/**
 * Face Padding
 * 
 * Adjusts padding around a selected face.
 * 
 * Depends on: `fit=facearea`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/facepad)
 */
facepad?: (Scalars['FloatType'] | null),
/**
 * Json Face Data
 * 
 * Specifies that face data should be included in output when combined with `fm=json`.
 * 
 * Depends on: `fm=json`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faces)
 */
faces?: (Scalars['IntType'] | null),
/**
 * Fill Color
 * 
 * Sets the fill color for images with additional space created by the fit setting
 * 
 * Depends on: `fill=solid`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-color)
 */
fillColor?: (Scalars['String'] | null),
/**
 * Fill Generative Fallback
 * 
 * Sets the fallback behavior for generative fill.
 * 
 * Depends on: `fit=fill`, `fill=gen`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gen-fallback)
 */
fillGenFallback?: (Scalars['BooleanType'] | null),
/**
 * Fill Generative Negative Prompt
 * 
 * Provides a negative text suggestion to the generative fill parameter. Used to reduce the probability of a subject, detail, or object appearing in generative output.
 * 
 * Depends on: `fit=fill`, `fill=gen`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gen-neg-prompt)
 */
fillGenNegPrompt?: (Scalars['String'] | null),
/**
 * Fill Generative Position
 * 
 * Sets the position of the Origin Image in relation to the generative fill.
 * 
 * Depends on: `fit=fill`, `fill=gen`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gen-pos)
 */
fillGenPos?: (ImgixParamsFillGenPos[] | null),
/**
 * Fill Generative Prompt
 * 
 * Provides a text suggestion to the generative fill parameter.
 * 
 * Depends on: `fit=fill`, `fill=gen`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gen-prompt)
 */
fillGenPrompt?: (Scalars['String'] | null),
/**
 * Fill Generative Seed
 * 
 * Sets the generative seed value. Used to generate similar outputs from different prompts.
 * 
 * Depends on: `fit=fill`, `fill=gen`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gen-seed)
 */
fillGenSeed?: (Scalars['IntType'] | null),
/**
 * Fill Gradient Color Space
 * 
 * Defines the color space as linear, sRGB, Oklab, HSL, or LCH for gradient color interpolation
 * 
 * Depends on: `fit=fill`, `fill=gradient`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-cs)
 */
fillGradientCs?: (ImgixParamsFillGradientCs | null),
/**
 * Fill Gradient Linear Direction
 * 
 * The fill-gradient-linear-direction specifies the gradient's direction, flowing towards the bottom, top, right, or left
 * 
 * Depends on: `fit=fill`, `fill=gen`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-linear-direction)
 */
fillGradientLinearDirection?: (ImgixParamsFillGradientLinearDirection[] | null),
/**
 * Fill Gradient Linear
 * 
 * Blends a gradient between two colors, {color1} and {color2}, along a straight path
 * 
 * Depends on: `fit=fill`, `fill=gradient`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-linear)
 */
fillGradientLinear?: (Scalars['String'] | null),
/**
 * Fill Gradient Radial Radius
 * 
 * Parameter defines the radial gradient's radius as pixels or a percentage (0.0-1.0) of the image's smallest dimension
 * 
 * Depends on: `fit=fill`, `fill=gradient`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-radial-radius)
 */
fillGradientRadialRadius?: (Scalars['String'] | null),
/**
 * Fill Gradient Radial X
 * 
 * Specifies the location of the radial gradient's center along the x-axis, using either a pixel value or a floating point percentage (ranging from 0.0 to 1.0) of the image's width
 * 
 * Depends on: `fit=fill`, `fill=gradient`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-radial-x)
 */
fillGradientRadialX?: (Scalars['FloatType'] | null),
/**
 * Fill Gradient Radial Y
 * 
 * Parameter sets the radial gradient's center on the y-axis, using pixels or a 0.0 to 1.0 percentage of the image's height
 * 
 * Depends on: `fit=fill`, `fill=gradient`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-radial-y)
 */
fillGradientRadialY?: (Scalars['FloatType'] | null),
/**
 * Fill Gradient Radial
 * 
 * The fill-gradient-radial parameter creates a circular gradient transitioning from a central color (Color1) to an outer color (Color2)
 * 
 * Depends on: `fit=fill`, `fill=gradient`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-radial)
 */
fillGradientRadial?: (Scalars['String'] | null),
/**
 * Fill Gradient Type
 * 
 * Specifies if a gradient is radial (circular) or linear (straight)
 * 
 * Depends on: `fit=fill`, `fill=gradient`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-type)
 */
fillGradientType?: (ImgixParamsFillGradientType | null),
/**
 * Fill Mode
 * 
 * Determines how to fill in additional space created by the fit setting
 * 
 * Depends on: `fit`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill)
 */
fill?: (ImgixParamsFill | null),
/**
 * Resize Fit Mode
 * 
 * Specifies how to map the source image to the output image dimensions.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/fit)
 */
fit?: (ImgixParamsFit | null),
/**
 * Flip Axis
 * 
 * Flips an image on a specified axis.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/flip)
 */
flip?: (ImgixParamsFlip | null),
/**
 * Output Format
 * 
 * Changes the format of the output image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/fm)
 */
fm?: (ImgixParamsFm | null),
/**
 * Focal Point Debug
 * 
 * Displays crosshairs identifying the location of the set focal point
 * 
 * Depends on: `fit=crop`, `crop=focalpoint`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug)
 */
fpDebug?: (Scalars['BooleanType'] | null),
/**
 * Focal Point X Position
 * 
 * Sets the relative horizontal value for the focal point of an image
 * 
 * Depends on: `fit=crop`, `crop=focalpoint`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-x)
 */
fpX?: (Scalars['FloatType'] | null),
/**
 * Focal Point Y Position
 * 
 * Sets the relative vertical value for the focal point of an image
 * 
 * Depends on: `fit=crop`, `crop=focalpoint`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-y)
 */
fpY?: (Scalars['FloatType'] | null),
/**
 * Focal Point Zoom
 * 
 * Sets the relative zoom value for the focal point of an image
 * 
 * Depends on: `fit=crop`, `crop=focalpoint`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-z)
 */
fpZ?: (Scalars['FloatType'] | null),
/**
 * Frames Per Second
 * 
 * Specifies the framerate of the generated image.
 */
fps?: (Scalars['IntType'] | null),
/**
 * Frame Selection
 * 
 * Specifies the frame of an animated image to use.
 */
frame?: (Scalars['String'] | null),
/**
 * Gamma
 * 
 * Adjusts the gamma of the source image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/gam)
 */
gam?: (Scalars['IntType'] | null),
/**
 * Animated Gif Quality
 * 
 * Specifies the quality of the animated gif. The higher the value, the better more compression is applied.
 * 
 * Depends on: `fm=gif`
 */
gifQ?: (Scalars['IntType'] | null),
/**
 * Grid Colors
 * 
 * Sets grid colors for the transparency checkerboard grid.
 * 
 * Depends on: `transparency`
 */
gridColors?: (Scalars['String'] | null),
/**
 * Grid Size
 * 
 * Sets grid size for the transparency checkerboard grid.
 * 
 * Depends on: `transparency`
 */
gridSize?: (Scalars['IntType'] | null),
/**
 * Image Height
 * 
 * Adjusts the height of the output image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/h)
 */
h?: (Scalars['FloatType'] | null),
/**
 * Highlight
 * 
 * Adjusts the highlights of the source image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/high)
 */
high?: (Scalars['IntType'] | null),
/**
 * Halftone
 * 
 * Applies a half-tone effect to the source image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/htn)
 */
htn?: (Scalars['IntType'] | null),
/**
 * Hue Shift
 * 
 * Adjusts the hue of the source image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/hue)
 */
hue?: (Scalars['IntType'] | null),
/**
 * Frame Interval
 * 
 * Displays every Nth frame starting with the first frame.
 */
interval?: (Scalars['IntType'] | null),
/**
 * Invert
 * 
 * Inverts the colors on the source image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/invert)
 */
invert?: (Scalars['BooleanType'] | null),
/**
 * Iptc Passthrough
 * 
 * Determine if IPTC data should be passed for JPEG images.
 */
iptc?: (ImgixParamsIptc | null),
/**
 * Jpg Progressive
 * 
 * Specifies whether or not a jpg/jpeg uses progressive (true) or baseline (false)
 */
jpgProgressive?: (Scalars['BooleanType'] | null),
/**
 * Animation Loop Count
 * 
 * Specifies the number of times an animated image should repeat. A value of 0 means infinite looping.
 */
loop?: (Scalars['IntType'] | null),
/**
 * Lossless Compression
 * 
 * Specifies that the output image should be a lossless variant.
 * 
 * Depends on: `fm=webp`, `fm=jxr`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/lossless)
 */
lossless?: (Scalars['BooleanType'] | null),
/**
 * Watermark Alignment Mode
 * 
 * Changes the watermark alignment relative to the parent image.
 * 
 * Depends on: `mark`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-align)
 */
markAlign?: (ImgixParamsMarkAlign[] | null),
/**
 * Watermark Alpha
 * 
 * Changes the alpha of the watermark image.
 * 
 * Depends on: `mark`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-alpha)
 */
markAlpha?: (Scalars['IntType'] | null),
/**
 * Watermark Base Url
 * 
 * Changes base URL of the watermark image.
 * 
 * Depends on: `mark`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-base)
 */
markBase?: (Scalars['String'] | null),
/**
 * Watermark Fit Mode
 * 
 * Specifies the fit mode for watermark images.
 * 
 * Depends on: `mark`, `markw`, `markh`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-fit)
 */
markFit?: (ImgixParamsMarkFit | null),
/**
 * Watermark Height
 * 
 * Adjusts the height of the watermark image.
 * 
 * Depends on: `mark`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-h)
 */
markH?: (Scalars['FloatType'] | null),
/**
 * Watermark Padding
 * 
 * Applies padding to the watermark image.
 * 
 * Depends on: `mark`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-pad)
 */
markPad?: (Scalars['IntType'] | null),
/**
 * Watermark Rotation
 * 
 * Rotates a watermark or tiled watermarks by a specified number of degrees.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-rot)
 */
markRot?: (Scalars['FloatType'] | null),
/**
 * Watermark Scale
 * 
 * Adjusts the scale of the watermark image.
 * 
 * Depends on: `mark`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-scale)
 */
markScale?: (Scalars['IntType'] | null),
/**
 * Watermark Tile
 * 
 * Adds tiled watermark.
 * 
 * Depends on: `mark`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-tile)
 */
markTile?: (ImgixParamsMarkTile | null),
/**
 * Watermark Width
 * 
 * Adjusts the width of the watermark image.
 * 
 * Depends on: `mark`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-w)
 */
markW?: (Scalars['FloatType'] | null),
/**
 * Watermark X Position
 * 
 * Adjusts the x-offset of the watermark image relative to its parent.
 * 
 * Depends on: `mark`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-x)
 */
markX?: (Scalars['IntType'] | null),
/**
 * Watermark Y Position
 * 
 * Adjusts the y-offset of the watermark image relative to its parent.
 * 
 * Depends on: `mark`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-y)
 */
markY?: (Scalars['IntType'] | null),
/**
 * Watermark Image Url
 * 
 * Specifies the location of the watermark image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark)
 */
mark?: (Scalars['String'] | null),
/**
 * Mask Background Color
 * 
 * Colors the background of the transparent mask area of images
 * 
 * Depends on: `mask`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/mask-bg)
 */
maskBg?: (Scalars['String'] | null),
/**
 * Mask Type
 * 
 * Defines the type of mask and specifies the URL if that type is selected.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask)
 */
mask?: (Scalars['String'] | null),
/**
 * Maximum Height
 * 
 * Specifies the maximum height of the output image in pixels.
 * 
 * Depends on: `fit=crop`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-height)
 */
maxH?: (Scalars['IntType'] | null),
/**
 * Maximum Width
 * 
 * Specifies the maximum width of the output image in pixels.
 * 
 * Depends on: `fit=crop`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-width)
 */
maxW?: (Scalars['IntType'] | null),
/**
 * Minimum Height
 * 
 * Specifies the minimum height of the output image in pixels.
 * 
 * Depends on: `fit=crop`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-height)
 */
minH?: (Scalars['IntType'] | null),
/**
 * Minimum Width
 * 
 * Specifies the minimum width of the output image in pixels.
 * 
 * Depends on: `fit=crop`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-width)
 */
minW?: (Scalars['IntType'] | null),
/**
 * Monochrome
 * 
 * Applies a monochrome effect to the source image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/monochrome)
 */
monochrome?: (Scalars['String'] | null),
/**
 * Noise Reduction Bound
 * 
 * Reduces the noise in an image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nr)
 */
nr?: (Scalars['IntType'] | null),
/**
 * Noise Reduction Sharpen
 * 
 * Provides a threshold by which to sharpen an image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nrs)
 */
nrs?: (Scalars['IntType'] | null),
/**
 * Orientation
 * 
 * Changes the image orientation.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/orient)
 */
orient?: (Scalars['IntType'] | null),
/**
 * Padding Bottom
 * 
 * Sets bottom padding of an image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-bottom)
 */
padBottom?: (Scalars['IntType'] | null),
/**
 * Padding Left
 * 
 * Sets left padding of an image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-left)
 */
padLeft?: (Scalars['IntType'] | null),
/**
 * Padding Right
 * 
 * Sets right padding of an image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-right)
 */
padRight?: (Scalars['IntType'] | null),
/**
 * Padding Top
 * 
 * Sets top padding of an image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-top)
 */
padTop?: (Scalars['IntType'] | null),
/**
 * Padding
 * 
 * Pads an image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad)
 */
pad?: (Scalars['IntType'] | null),
/**
 * Pdf Page Number
 * 
 * Selects a page from a PDF for display.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/page)
 */
page?: (Scalars['IntType'] | null),
/**
 * Color Palette Extraction
 * 
 * Specifies an output format for palette-extraction.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/palette)
 */
palette?: (ImgixParamsPalette | null),
/**
 * Pdf Annotation
 * 
 * Enables or disables PDF annotation.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/pdf-annotation)
 */
pdfAnnotation?: (Scalars['BooleanType'] | null),
/**
 * Css Prefix
 * 
 * Specifies a CSS prefix for all classes in palette-extraction.
 * 
 * Depends on: `palette=css`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/prefix)
 */
prefix?: (Scalars['String'] | null),
/**
 * Pixellate
 * 
 * Applies a pixelation effect to an image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/px)
 */
px?: (Scalars['IntType'] | null),
/**
 * Output Quality
 * 
 * Adjusts the quality of an output image.
 * 
 * Depends on: `fm=jpg`, `fm=pjpg`, `fm=webp`, `fm=jxr`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/q)
 */
q?: (Scalars['IntType'] | null),
/**
 * Source Rectangle Region
 * 
 * Crops an image to a specified rectangle.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/rect)
 */
rect?: (Scalars['String'] | null),
/**
 * Reverse
 * 
 * Reverses the frame order on the source animation.
 */
reverse?: (Scalars['BooleanType'] | null),
/**
 * Rotation
 * 
 * Rotates an image by a specified number of degrees.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/rot)
 */
rot?: (Scalars['FloatType'] | null),
/**
 * Saturation
 * 
 * Adjusts the saturation of an image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sat)
 */
sat?: (Scalars['IntType'] | null),
/**
 * Sepia Tone
 * 
 * Applies a sepia effect to an image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/sepia)
 */
sepia?: (Scalars['IntType'] | null),
/**
 * Shadow
 * 
 * Adjusts the highlights of the source image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/shad)
 */
shad?: (Scalars['FloatType'] | null),
/**
 * Sharpen
 * 
 * Adjusts the sharpness of the source image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sharp)
 */
sharp?: (Scalars['FloatType'] | null),
/**
 * Frame Skip
 * 
 * Skips every Nth frame starting with the first frame.
 */
skip?: (Scalars['IntType'] | null),
/**
 * Sanitize Svg
 * 
 * Specifies whether to sanitize an SVG.
 */
svgSanitize?: (Scalars['BooleanType'] | null),
/**
 * Transparency
 * 
 * Adds checkerboard behind images which support transparency.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/transparency)
 */
transparency?: (ImgixParamsTransparency | null),
/**
 * Trim Color
 * 
 * Specifies a trim color on a trim operation.
 * 
 * Depends on: `trim=color`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-color)
 */
trimColor?: (Scalars['String'] | null),
/**
 * Trim Mean Difference
 * 
 * Specifies the mean difference on a trim operation.
 * 
 * Depends on: `trim=auto`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-md)
 */
trimMd?: (Scalars['FloatType'] | null),
/**
 * Trim Padding
 * 
 * Pads the area of the source image before trimming.
 * 
 * Depends on: `trim`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-pad)
 */
trimPad?: (Scalars['IntType'] | null),
/**
 * Trim Standard Deviation
 * 
 * Specifies the standard deviation on a trim operation.
 * 
 * Depends on: `trim=auto`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-sd)
 */
trimSd?: (Scalars['FloatType'] | null),
/**
 * Trim Tolerance
 * 
 * Specifies the tolerance on a trim operation.
 * 
 * Depends on: `trim=color`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-tol)
 */
trimTol?: (Scalars['FloatType'] | null),
/**
 * Trim Image
 * 
 * Trims the source image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim)
 */
trim?: (ImgixParamsTrim | null),
/**
 * Text Align
 * 
 * Sets the vertical and horizontal alignment of rendered text relative to the base image.
 * 
 * Depends on: `txt`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-align)
 */
txtAlign?: (ImgixParamsTxtAlign[] | null),
/**
 * Text Clipping Mode
 * 
 * Sets the clipping properties of rendered text.
 * 
 * Depends on: `txt`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-clip)
 */
txtClip?: (ImgixParamsTxtClip[] | null),
/**
 * Text Color
 * 
 * Specifies the color of rendered text.
 * 
 * Depends on: `txt`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-color)
 */
txtColor?: (Scalars['String'] | null),
/**
 * Text Fit Mode
 * 
 * Specifies the fit approach for rendered text.
 * 
 * Depends on: `txt`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-fit)
 */
txtFit?: (ImgixParamsTxtFit | null),
/**
 * Text Font
 * 
 * Selects a font for rendered text.
 * 
 * Depends on: `txt`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-font)
 */
txtFont?: (Scalars['String'] | null),
/**
 * Text Leading
 * 
 * Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint.
 * 
 * Depends on: `txt`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-lead)
 */
txtLead?: (Scalars['IntType'] | null),
/**
 * Text Outline Color
 * 
 * Specifies a text outline color.
 * 
 * Depends on: `txt`, `txtline`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line-color)
 */
txtLineColor?: (Scalars['String'] | null),
/**
 * Text Outline
 * 
 * Outlines the rendered text with a specified color.
 * 
 * Depends on: `txt`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line)
 */
txtLine?: (Scalars['IntType'] | null),
/**
 * Text Padding
 * 
 * Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image.
 * 
 * Depends on: `txt`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-pad)
 */
txtPad?: (Scalars['IntType'] | null),
/**
 * Text Shadow
 * 
 * Applies a shadow to rendered text.
 * 
 * Depends on: `txt`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-shad)
 */
txtShad?: (Scalars['FloatType'] | null),
/**
 * Text Font Size
 * 
 * Sets the font size of rendered text.
 * 
 * Depends on: `txt`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-size)
 */
txtSize?: (Scalars['IntType'] | null),
/**
 * Text Tracking
 * 
 * Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint.
 * 
 * Depends on: `txt`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-track)
 */
txtTrack?: (Scalars['IntType'] | null),
/**
 * Text Width
 * 
 * Sets the width of rendered text.
 * 
 * Depends on: `txt`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-width)
 */
txtWidth?: (Scalars['IntType'] | null),
/**
 * Text X Position
 * 
 * Sets the horizontal (x) position of the text in pixels relative to the left edge of the base image.
 * 
 * Depends on: `txt`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-x)
 */
txtX?: (Scalars['IntType'] | null),
/**
 * Text Y Position
 * 
 * Sets the vertical (y) position of the text in pixels relative to the top edge of the base image.
 * 
 * Depends on: `txt`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-y)
 */
txtY?: (Scalars['IntType'] | null),
/**
 * Text String
 * 
 * Sets the text string to render.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt)
 */
txt?: (Scalars['String'] | null),
/**
 * Super Resolution Fallback
 * 
 * Overrides default fallback behavior for super resolution failures
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/super-resolution/upscale-fallback)
 */
upscaleFallback?: (Scalars['BooleanType'] | null),
/**
 * Super Resolution
 * 
 * Uses generative AI fill to upscale low resolution images.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/super-resolution/upscale)
 */
upscale?: (Scalars['BooleanType'] | null),
/**
 * Unsharp Mask
 * 
 * Sharpens the source image using an unsharp mask.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usm)
 */
usm?: (Scalars['IntType'] | null),
/**
 * Unsharp Mask Radius
 * 
 * Specifies the radius for an unsharp mask operation.
 * 
 * Depends on: `usm`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usmrad)
 */
usmrad?: (Scalars['FloatType'] | null),
/**
 * Vibrance
 * 
 * Adjusts the vibrance of an image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/vib)
 */
vib?: (Scalars['IntType'] | null),
/**
 * Image Width
 * 
 * Adjusts the width of the output image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/w)
 */
w?: (Scalars['FloatType'] | null),
/**
 * Bypasses any [DatoCMS Automatic Image Optimization](https://www.datocms.com/docs/cdn-settings/advanced-asset-settings) that might be set up for the project.
 * 
 * Exercise caution when using this parameter, as it could significantly increase your bandwidth costs.
 */
skipDefaultOptimizations?: (Scalars['BooleanType'] | null)}


/** Specifies how to filter by usage */
export interface InUseFilter {
/** Search uploads that are currently used by some record or not */
eq?: (Scalars['BooleanType'] | null)}


/** Specifies how to filter by ID */
export interface ItemIdFilter {
/** Search the record with the specified ID */
eq?: (Scalars['ItemId'] | null),
/** Exclude the record with the specified ID */
neq?: (Scalars['ItemId'] | null),
/** Search records with the specified IDs */
in?: ((Scalars['ItemId'] | null)[] | null),
/** Search records that do not have the specified IDs */
notIn?: ((Scalars['ItemId'] | null)[] | null)}

export interface JsonFieldMultiLocaleFieldGenqlSelection{
    locale?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Specifies how to filter JSON fields */
export interface JsonFilter {
/** Filter records with the specified field defined (i.e. with any value) or not */
exists?: (Scalars['BooleanType'] | null)}


/** Record of type Layout (layout) */
export interface LayoutRecordGenqlSelection{
    _allAiFollowLinksLocales?: (JsonFieldMultiLocaleFieldGenqlSelection & { __args?: {
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    _allAiResearchFollowLinksLocales?: (JsonFieldMultiLocaleFieldGenqlSelection & { __args?: {
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    _allBackBitcashLocales?: (StringMultiLocaleFieldGenqlSelection & { __args?: {
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    _allBackHomeLocales?: (StringMultiLocaleFieldGenqlSelection & { __args?: {
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    _allBitcashNewsFollowLinksLocales?: (JsonFieldMultiLocaleFieldGenqlSelection & { __args?: {
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    _allBitcoinFollowLinksLocales?: (JsonFieldMultiLocaleFieldGenqlSelection & { __args?: {
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    _allCookieConsentCtaLocales?: (StringMultiLocaleFieldGenqlSelection & { __args?: {
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    _allCookieConsentDescriptionLocales?: (StringMultiLocaleFieldGenqlSelection & { __args?: {
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    _allCryptoFollowLinksLocales?: (JsonFieldMultiLocaleFieldGenqlSelection & { __args?: {
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    _allEli5FollowLinksLocales?: (JsonFieldMultiLocaleFieldGenqlSelection & { __args?: {
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    _allHomeFollowLinksLocales?: (JsonFieldMultiLocaleFieldGenqlSelection & { __args?: {
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    _allInvestingFollowLinksLocales?: (JsonFieldMultiLocaleFieldGenqlSelection & { __args?: {
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    _allNavigationCategoriesLocales?: (JsonFieldMultiLocaleFieldGenqlSelection & { __args?: {
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    _allNavigationPoliciesTermsLocales?: (JsonFieldMultiLocaleFieldGenqlSelection & { __args?: {
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    _allNavigationTopicLocales?: (JsonFieldMultiLocaleFieldGenqlSelection & { __args?: {
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    _allSearchInputPlaceholderLocales?: (StringMultiLocaleFieldGenqlSelection & { __args?: {
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    _allStartUpsFollowLinksLocales?: (JsonFieldMultiLocaleFieldGenqlSelection & { __args?: {
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    _allSubscriptionCtaLocales?: (StringMultiLocaleFieldGenqlSelection & { __args?: {
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    _allSubscriptionInputPlaceholderLocales?: (StringMultiLocaleFieldGenqlSelection & { __args?: {
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    _allSubscriptionSubtitleLocales?: (StringMultiLocaleFieldGenqlSelection & { __args?: {
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    _allSubscriptionTitleLocales?: (StringMultiLocaleFieldGenqlSelection & { __args?: {
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    _createdAt?: boolean | number
    /** Editing URL */
    _editingUrl?: boolean | number
    _firstPublishedAt?: boolean | number
    _isValid?: boolean | number
    _modelApiKey?: boolean | number
    _publicationScheduledAt?: boolean | number
    _publishedAt?: boolean | number
    /** Generates SEO and Social card meta tags to be used in your frontend */
    _seoMetaTags?: (TagGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null)} })
    _status?: boolean | number
    _unpublishingScheduledAt?: boolean | number
    _updatedAt?: boolean | number
    aiFollowLinks?: { __args: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} } | boolean | number
    aiResearchFollowLinks?: { __args: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} } | boolean | number
    backBitcash?: { __args: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} } | boolean | number
    backHome?: { __args: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} } | boolean | number
    bitcashNewsFollowLinks?: { __args: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} } | boolean | number
    bitcoinFollowLinks?: { __args: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} } | boolean | number
    cookieConsentCta?: { __args: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} } | boolean | number
    cookieConsentDescription?: { __args: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} } | boolean | number
    cryptoFollowLinks?: { __args: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} } | boolean | number
    eli5FollowLinks?: { __args: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} } | boolean | number
    homeFollowLinks?: { __args: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} } | boolean | number
    id?: boolean | number
    investingFollowLinks?: { __args: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} } | boolean | number
    navigationCategories?: { __args: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} } | boolean | number
    navigationPoliciesTerms?: { __args: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} } | boolean | number
    navigationTopic?: { __args: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} } | boolean | number
    searchInputPlaceholder?: { __args: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} } | boolean | number
    startUpsFollowLinks?: { __args: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} } | boolean | number
    subscriptionCta?: { __args: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} } | boolean | number
    subscriptionInputPlaceholder?: { __args: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} } | boolean | number
    subscriptionSubtitle?: { __args: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} } | boolean | number
    subscriptionTitle?: { __args: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} } | boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Specifies how to filter by locale */
export interface LocalesFilter {
/** Filter records that are localized in all the specified locales */
allIn?: (SiteLocale[] | null),
/** Filter records that are localized in at least one of the specified locales */
anyIn?: (SiteLocale[] | null),
/** Filter records that are not localized in any of the specified locales */
notIn?: (SiteLocale[] | null)}


/** Specifies how to filter by image orientation */
export interface OrientationFilter {
/** Search uploads with the specified orientation */
eq?: (UploadOrientation | null),
/** Exclude uploads with the specified orientation */
neq?: (UploadOrientation | null)}

export interface PageSeoModelFilter {_createdAt?: (CreatedAtFilter | null),id?: (ItemIdFilter | null),_firstPublishedAt?: (PublishedAtFilter | null),_publicationScheduledAt?: (PublishedAtFilter | null),_unpublishingScheduledAt?: (PublishedAtFilter | null),_publishedAt?: (PublishedAtFilter | null),_status?: (StatusFilter | null),_updatedAt?: (UpdatedAtFilter | null),_isValid?: (BooleanFilter | null),_locales?: (LocalesFilter | null),seoType?: (StringFilter | null),pageSeo?: (SeoFilter | null),title?: (StringFilter | null),description?: (StringFilter | null),OR?: ((PageSeoModelFilter | null)[] | null),AND?: ((PageSeoModelFilter | null)[] | null)}


/** Record of type Page SEO (page_seo) */
export interface PageSeoRecordGenqlSelection{
    _allDescriptionLocales?: (StringMultiLocaleFieldGenqlSelection & { __args?: {
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    _allPageSeoLocales?: (SeoFieldMultiLocaleFieldGenqlSelection & { __args?: {
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    _allTitleLocales?: (StringMultiLocaleFieldGenqlSelection & { __args?: {
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    _createdAt?: boolean | number
    /** Editing URL */
    _editingUrl?: boolean | number
    _firstPublishedAt?: boolean | number
    _isValid?: boolean | number
    _locales?: boolean | number
    _modelApiKey?: boolean | number
    _publicationScheduledAt?: boolean | number
    _publishedAt?: boolean | number
    /** Generates SEO and Social card meta tags to be used in your frontend */
    _seoMetaTags?: (TagGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null)} })
    _status?: boolean | number
    _unpublishingScheduledAt?: boolean | number
    _updatedAt?: boolean | number
    description?: { __args: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} } | boolean | number
    id?: boolean | number
    pageSeo?: (SeoFieldGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    seoType?: boolean | number
    title?: { __args: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} } | boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PrivacyPolicyModelMainContentFieldGenqlSelection{
    blocks?: boolean | number
    links?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PrivacyPolicyModelMainContentFieldMultiLocaleFieldGenqlSelection{
    locale?: boolean | number
    value?: PrivacyPolicyModelMainContentFieldGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Record of type Privacy Policy (privacy_policy) */
export interface PrivacyPolicyRecordGenqlSelection{
    _allMainContentLocales?: (PrivacyPolicyModelMainContentFieldMultiLocaleFieldGenqlSelection & { __args?: {
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    _createdAt?: boolean | number
    /** Editing URL */
    _editingUrl?: boolean | number
    _firstPublishedAt?: boolean | number
    _isValid?: boolean | number
    _locales?: boolean | number
    _modelApiKey?: boolean | number
    _publicationScheduledAt?: boolean | number
    _publishedAt?: boolean | number
    /** Generates SEO and Social card meta tags to be used in your frontend */
    _seoMetaTags?: (TagGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null)} })
    _status?: boolean | number
    _unpublishingScheduledAt?: boolean | number
    _updatedAt?: boolean | number
    id?: boolean | number
    mainContent?: (PrivacyPolicyModelMainContentFieldGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Specifies how to filter by publication datetime */
export interface PublishedAtFilter {
/** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
gt?: (Scalars['DateTime'] | null),
/** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
lt?: (Scalars['DateTime'] | null),
/** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
gte?: (Scalars['DateTime'] | null),
/** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
lte?: (Scalars['DateTime'] | null),
/** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
eq?: (Scalars['DateTime'] | null),
/** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
neq?: (Scalars['DateTime'] | null),
/** Filter records with the specified field defined (i.e. with any value) or not */
exists?: (Scalars['BooleanType'] | null)}


/** The query root for this schema */
export interface QueryGenqlSelection{
    /** Returns meta information regarding a record collection */
    _allBlogAisMeta?: (CollectionMetadataGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), filter?: (BlogAiModelFilter | null)} })
    /** Returns meta information regarding a record collection */
    _allBlogBitcashesMeta?: (CollectionMetadataGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), filter?: (BlogBitcashModelFilter | null)} })
    /** Returns meta information regarding a record collection */
    _allBlogBitcoinsMeta?: (CollectionMetadataGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), filter?: (BlogBitcoinModelFilter | null)} })
    /** Returns meta information regarding a record collection */
    _allBlogBitlaunchersMeta?: (CollectionMetadataGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), filter?: (BlogBitlauncherModelFilter | null)} })
    /** Returns meta information regarding a record collection */
    _allBlogCryptosMeta?: (CollectionMetadataGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), filter?: (BlogCryptoModelFilter | null)} })
    /** Returns meta information regarding a record collection */
    _allBlogInvestingsMeta?: (CollectionMetadataGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), filter?: (BlogInvestingModelFilter | null)} })
    /** Returns meta information regarding a record collection */
    _allBlogNewsMeta?: (CollectionMetadataGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), filter?: (BlogNewsModelFilter | null)} })
    /** Returns meta information regarding a record collection */
    _allBlogStartupsMeta?: (CollectionMetadataGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), filter?: (BlogStartupModelFilter | null)} })
    /** Returns meta information regarding a record collection */
    _allPageSeosMeta?: (CollectionMetadataGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), filter?: (PageSeoModelFilter | null)} })
    /** Returns meta information regarding a record collection */
    _allResearchAisMeta?: (CollectionMetadataGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), filter?: (ResearchAiModelFilter | null)} })
    /** Returns meta information regarding an assets collection */
    _allUploadsMeta?: (CollectionMetadataGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), filter?: (UploadFilter | null)} })
    /** Returns the single instance record */
    _site?: (SiteGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    /** Returns a collection of records */
    allBlogAis?: (BlogAiRecordGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null), 
    /** Skip the first results */
    skip?: (Scalars['IntType'] | null), 
    /** Limit the number of results */
    first?: (Scalars['IntType'] | null), filter?: (BlogAiModelFilter | null), orderBy?: ((BlogAiModelOrderBy | null)[] | null)} })
    /** Returns a collection of records */
    allBlogBitcashes?: (BlogBitcashRecordGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null), 
    /** Skip the first results */
    skip?: (Scalars['IntType'] | null), 
    /** Limit the number of results */
    first?: (Scalars['IntType'] | null), filter?: (BlogBitcashModelFilter | null), orderBy?: ((BlogBitcashModelOrderBy | null)[] | null)} })
    /** Returns a collection of records */
    allBlogBitcoins?: (BlogBitcoinRecordGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null), 
    /** Skip the first results */
    skip?: (Scalars['IntType'] | null), 
    /** Limit the number of results */
    first?: (Scalars['IntType'] | null), filter?: (BlogBitcoinModelFilter | null), orderBy?: ((BlogBitcoinModelOrderBy | null)[] | null)} })
    /** Returns a collection of records */
    allBlogBitlaunchers?: (BlogBitlauncherRecordGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null), 
    /** Skip the first results */
    skip?: (Scalars['IntType'] | null), 
    /** Limit the number of results */
    first?: (Scalars['IntType'] | null), filter?: (BlogBitlauncherModelFilter | null), orderBy?: ((BlogBitlauncherModelOrderBy | null)[] | null)} })
    /** Returns a collection of records */
    allBlogCryptos?: (BlogCryptoRecordGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null), 
    /** Skip the first results */
    skip?: (Scalars['IntType'] | null), 
    /** Limit the number of results */
    first?: (Scalars['IntType'] | null), filter?: (BlogCryptoModelFilter | null), orderBy?: ((BlogCryptoModelOrderBy | null)[] | null)} })
    /** Returns a collection of records */
    allBlogInvestings?: (BlogInvestingRecordGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null), 
    /** Skip the first results */
    skip?: (Scalars['IntType'] | null), 
    /** Limit the number of results */
    first?: (Scalars['IntType'] | null), filter?: (BlogInvestingModelFilter | null), orderBy?: ((BlogInvestingModelOrderBy | null)[] | null)} })
    /** Returns a collection of records */
    allBlogNews?: (BlogNewsRecordGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null), 
    /** Skip the first results */
    skip?: (Scalars['IntType'] | null), 
    /** Limit the number of results */
    first?: (Scalars['IntType'] | null), filter?: (BlogNewsModelFilter | null), orderBy?: ((BlogNewsModelOrderBy | null)[] | null)} })
    /** Returns a collection of records */
    allBlogStartups?: (BlogStartupRecordGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null), 
    /** Skip the first results */
    skip?: (Scalars['IntType'] | null), 
    /** Limit the number of results */
    first?: (Scalars['IntType'] | null), filter?: (BlogStartupModelFilter | null), orderBy?: ((BlogStartupModelOrderBy | null)[] | null)} })
    /** Returns a collection of records */
    allPageSeos?: (PageSeoRecordGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null), 
    /** Skip the first results */
    skip?: (Scalars['IntType'] | null), 
    /** Limit the number of results */
    first?: (Scalars['IntType'] | null), filter?: (PageSeoModelFilter | null), orderBy?: ((PageSeoModelOrderBy | null)[] | null)} })
    /** Returns a collection of records */
    allResearchAis?: (ResearchAiRecordGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null), 
    /** Skip the first results */
    skip?: (Scalars['IntType'] | null), 
    /** Limit the number of results */
    first?: (Scalars['IntType'] | null), filter?: (ResearchAiModelFilter | null), orderBy?: ((ResearchAiModelOrderBy | null)[] | null)} })
    /** Returns a collection of assets */
    allUploads?: (FileFieldGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null), 
    /** Skip the first results */
    skip?: (Scalars['IntType'] | null), 
    /** Limit the number of results */
    first?: (Scalars['IntType'] | null), filter?: (UploadFilter | null), orderBy?: ((UploadOrderBy | null)[] | null)} })
    /** Returns a specific record */
    blogAi?: (BlogAiRecordGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null), filter?: (BlogAiModelFilter | null), orderBy?: ((BlogAiModelOrderBy | null)[] | null)} })
    /** Returns a specific record */
    blogBitcash?: (BlogBitcashRecordGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null), filter?: (BlogBitcashModelFilter | null), orderBy?: ((BlogBitcashModelOrderBy | null)[] | null)} })
    /** Returns a specific record */
    blogBitcoin?: (BlogBitcoinRecordGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null), filter?: (BlogBitcoinModelFilter | null), orderBy?: ((BlogBitcoinModelOrderBy | null)[] | null)} })
    /** Returns a specific record */
    blogBitlauncher?: (BlogBitlauncherRecordGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null), filter?: (BlogBitlauncherModelFilter | null), orderBy?: ((BlogBitlauncherModelOrderBy | null)[] | null)} })
    /** Returns a specific record */
    blogCrypto?: (BlogCryptoRecordGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null), filter?: (BlogCryptoModelFilter | null), orderBy?: ((BlogCryptoModelOrderBy | null)[] | null)} })
    /** Returns a specific record */
    blogInvesting?: (BlogInvestingRecordGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null), filter?: (BlogInvestingModelFilter | null), orderBy?: ((BlogInvestingModelOrderBy | null)[] | null)} })
    /** Returns a specific record */
    blogNews?: (BlogNewsRecordGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null), filter?: (BlogNewsModelFilter | null), orderBy?: ((BlogNewsModelOrderBy | null)[] | null)} })
    /** Returns a specific record */
    blogStartup?: (BlogStartupRecordGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null), filter?: (BlogStartupModelFilter | null), orderBy?: ((BlogStartupModelOrderBy | null)[] | null)} })
    /** Returns the single instance record */
    layout?: (LayoutRecordGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    /** Returns a specific record */
    pageSeo?: (PageSeoRecordGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null), filter?: (PageSeoModelFilter | null), orderBy?: ((PageSeoModelOrderBy | null)[] | null)} })
    /** Returns the single instance record */
    privacyPolicy?: (PrivacyPolicyRecordGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    /** Returns a specific record */
    researchAi?: (ResearchAiRecordGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null), filter?: (ResearchAiModelFilter | null), orderBy?: ((ResearchAiModelOrderBy | null)[] | null)} })
    /** Returns the single instance record */
    termsAndCondition?: (TermsAndConditionRecordGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    /** Returns a specific asset */
    upload?: (FileFieldGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null), filter?: (UploadFilter | null), orderBy?: ((UploadOrderBy | null)[] | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RecordInterfaceGenqlSelection{
    _createdAt?: boolean | number
    /** Editing URL */
    _editingUrl?: boolean | number
    _firstPublishedAt?: boolean | number
    _isValid?: boolean | number
    _modelApiKey?: boolean | number
    _publicationScheduledAt?: boolean | number
    _publishedAt?: boolean | number
    /** Generates SEO and Social card meta tags to be used in your frontend */
    _seoMetaTags?: (TagGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null)} })
    _status?: boolean | number
    _unpublishingScheduledAt?: boolean | number
    _updatedAt?: boolean | number
    id?: boolean | number
    on_BlogAiRecord?: BlogAiRecordGenqlSelection
    on_BlogBitcashRecord?: BlogBitcashRecordGenqlSelection
    on_BlogBitcoinRecord?: BlogBitcoinRecordGenqlSelection
    on_BlogBitlauncherRecord?: BlogBitlauncherRecordGenqlSelection
    on_BlogCryptoRecord?: BlogCryptoRecordGenqlSelection
    on_BlogInvestingRecord?: BlogInvestingRecordGenqlSelection
    on_BlogNewsRecord?: BlogNewsRecordGenqlSelection
    on_BlogStartupRecord?: BlogStartupRecordGenqlSelection
    on_ContentBlockRecord?: ContentBlockRecordGenqlSelection
    on_LayoutRecord?: LayoutRecordGenqlSelection
    on_PageSeoRecord?: PageSeoRecordGenqlSelection
    on_PrivacyPolicyRecord?: PrivacyPolicyRecordGenqlSelection
    on_ResearchAiRecord?: ResearchAiRecordGenqlSelection
    on_TermsAndConditionRecord?: TermsAndConditionRecordGenqlSelection
    on_TopicRecord?: TopicRecordGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ResearchAiModelFilter {_createdAt?: (CreatedAtFilter | null),id?: (ItemIdFilter | null),_firstPublishedAt?: (PublishedAtFilter | null),_publicationScheduledAt?: (PublishedAtFilter | null),_unpublishingScheduledAt?: (PublishedAtFilter | null),_publishedAt?: (PublishedAtFilter | null),_status?: (StatusFilter | null),_updatedAt?: (UpdatedAtFilter | null),_isValid?: (BooleanFilter | null),_locales?: (LocalesFilter | null),authorPicture?: (FileFilter | null),thumbnail?: (FileFilter | null),topics?: (JsonFilter | null),authorName?: (StringFilter | null),slug?: (SlugFilter | null),seo?: (SeoFilter | null),description?: (StringFilter | null),title?: (StringFilter | null),OR?: ((ResearchAiModelFilter | null)[] | null),AND?: ((ResearchAiModelFilter | null)[] | null)}


/** Record of type AI Research (research_ai) */
export interface ResearchAiRecordGenqlSelection{
    _allSeoLocales?: (SeoFieldMultiLocaleFieldGenqlSelection & { __args?: {
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    _allTitleLocales?: (StringMultiLocaleFieldGenqlSelection & { __args?: {
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    _createdAt?: boolean | number
    /** Editing URL */
    _editingUrl?: boolean | number
    _firstPublishedAt?: boolean | number
    _isValid?: boolean | number
    _locales?: boolean | number
    _modelApiKey?: boolean | number
    _publicationScheduledAt?: boolean | number
    _publishedAt?: boolean | number
    /** Generates SEO and Social card meta tags to be used in your frontend */
    _seoMetaTags?: (TagGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null)} })
    _status?: boolean | number
    _unpublishingScheduledAt?: boolean | number
    _updatedAt?: boolean | number
    authorName?: boolean | number
    authorPicture?: FileFieldGenqlSelection
    contentBlock?: ContentBlockRecordGenqlSelection
    description?: boolean | number
    id?: boolean | number
    seo?: (SeoFieldGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    slug?: boolean | number
    thumbnail?: FileFieldGenqlSelection
    title?: { __args: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} } | boolean | number
    topics?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Specifies how to filter by upload type */
export interface ResolutionFilter {
/** Search uploads with the specified resolution */
eq?: (ResolutionType | null),
/** Exclude uploads with the specified resolution */
neq?: (ResolutionType | null),
/** Search uploads with the specified resolutions */
in?: ((ResolutionType | null)[] | null),
/** Search uploads without the specified resolutions */
notIn?: ((ResolutionType | null)[] | null)}

export interface ResponsiveImageGenqlSelection{
    alt?: boolean | number
    aspectRatio?: boolean | number
    base64?: boolean | number
    bgColor?: boolean | number
    height?: boolean | number
    sizes?: boolean | number
    src?: boolean | number
    srcSet?: boolean | number
    title?: boolean | number
    webpSrcSet?: boolean | number
    width?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SeoFieldGenqlSelection{
    description?: boolean | number
    image?: FileFieldGenqlSelection
    noIndex?: boolean | number
    title?: boolean | number
    twitterCard?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SeoFieldMultiLocaleFieldGenqlSelection{
    locale?: boolean | number
    value?: SeoFieldGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Specifies how to filter SEO meta tags fields */
export interface SeoFilter {
/** Filter records with the specified field defined (i.e. with any value) or not */
exists?: (Scalars['BooleanType'] | null)}

export interface SiteGenqlSelection{
    favicon?: FileFieldGenqlSelection
    faviconMetaTags?: (TagGenqlSelection & { __args?: {
    /** The variants to build */
    variants?: ((FaviconType | null)[] | null)} })
    globalSeo?: (GlobalSeoFieldGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    locales?: boolean | number
    noIndex?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Specifies how to filter Slug fields */
export interface SlugFilter {
/** Search for records with an exact match */
eq?: (Scalars['String'] | null),
/** Exclude records with an exact match */
neq?: (Scalars['String'] | null),
/** Filter records that have one of the specified slugs */
in?: ((Scalars['String'] | null)[] | null),
/** Filter records that do have one of the specified slugs */
notIn?: ((Scalars['String'] | null)[] | null)}


/** Specifies how to filter by status */
export interface StatusFilter {
/** Search the record with the specified status */
eq?: (ItemStatus | null),
/** Exclude the record with the specified status */
neq?: (ItemStatus | null),
/** Search records with the specified statuses */
in?: ((ItemStatus | null)[] | null),
/** Search records without the specified statuses */
notIn?: ((ItemStatus | null)[] | null)}


/** Specifies how to filter Single-line string fields */
export interface StringFilter {
/** Filter records based on a regular expression */
matches?: (StringMatchesFilter | null),
/** Exclude records based on a regular expression */
notMatches?: (StringMatchesFilter | null),
/** Filter records with the specified field set as blank (null or empty string) */
isBlank?: (Scalars['BooleanType'] | null),
/** Filter records with the specified field present (neither null, nor empty string) */
isPresent?: (Scalars['BooleanType'] | null),
/** Search for records with an exact match */
eq?: (Scalars['String'] | null),
/** Exclude records with an exact match */
neq?: (Scalars['String'] | null),
/** Filter records that equal one of the specified values */
in?: ((Scalars['String'] | null)[] | null),
/** Filter records that do not equal one of the specified values */
notIn?: ((Scalars['String'] | null)[] | null),
/** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
exists?: (Scalars['BooleanType'] | null)}

export interface StringMatchesFilter {pattern: Scalars['String'],caseSensitive?: (Scalars['BooleanType'] | null),regexp?: (Scalars['BooleanType'] | null)}

export interface StringMultiLocaleFieldGenqlSelection{
    locale?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TagGenqlSelection{
    attributes?: boolean | number
    content?: boolean | number
    tag?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TermsAndConditionModelMainContentFieldGenqlSelection{
    blocks?: boolean | number
    links?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TermsAndConditionModelMainContentFieldMultiLocaleFieldGenqlSelection{
    locale?: boolean | number
    value?: TermsAndConditionModelMainContentFieldGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Record of type Terms and Condition (terms_and_condition) */
export interface TermsAndConditionRecordGenqlSelection{
    _allMainContentLocales?: (TermsAndConditionModelMainContentFieldMultiLocaleFieldGenqlSelection & { __args?: {
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    _createdAt?: boolean | number
    /** Editing URL */
    _editingUrl?: boolean | number
    _firstPublishedAt?: boolean | number
    _isValid?: boolean | number
    _locales?: boolean | number
    _modelApiKey?: boolean | number
    _publicationScheduledAt?: boolean | number
    _publishedAt?: boolean | number
    /** Generates SEO and Social card meta tags to be used in your frontend */
    _seoMetaTags?: (TagGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null)} })
    _status?: boolean | number
    _unpublishingScheduledAt?: boolean | number
    _updatedAt?: boolean | number
    id?: boolean | number
    mainContent?: (TermsAndConditionModelMainContentFieldGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Block of type Topics (topic) */
export interface TopicRecordGenqlSelection{
    _createdAt?: boolean | number
    /** Editing URL */
    _editingUrl?: boolean | number
    _firstPublishedAt?: boolean | number
    _isValid?: boolean | number
    _modelApiKey?: boolean | number
    _publicationScheduledAt?: boolean | number
    _publishedAt?: boolean | number
    /** Generates SEO and Social card meta tags to be used in your frontend */
    _seoMetaTags?: (TagGenqlSelection & { __args?: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null)} })
    _status?: boolean | number
    _unpublishingScheduledAt?: boolean | number
    _updatedAt?: boolean | number
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Specifies how to filter by upload type */
export interface TypeFilter {
/** Search uploads with the specified type */
eq?: (UploadType | null),
/** Exclude uploads with the specified type */
neq?: (UploadType | null),
/** Search uploads with the specified types */
in?: ((UploadType | null)[] | null),
/** Search uploads without the specified types */
notIn?: ((UploadType | null)[] | null)}


/** Specifies how to filter by update datetime */
export interface UpdatedAtFilter {
/** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
gt?: (Scalars['DateTime'] | null),
/** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
lt?: (Scalars['DateTime'] | null),
/** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
gte?: (Scalars['DateTime'] | null),
/** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
lte?: (Scalars['DateTime'] | null),
/** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
eq?: (Scalars['DateTime'] | null),
/** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
neq?: (Scalars['DateTime'] | null),
/** Filter records with the specified field defined (i.e. with any value) or not */
exists?: (Scalars['BooleanType'] | null)}


/** Specifies how to filter by default alt */
export interface UploadAltFilter {
/** Filter uploads based on a regular expression */
matches?: (StringMatchesFilter | null),
/** Exclude uploads based on a regular expression */
notMatches?: (StringMatchesFilter | null),
/** Search the uploads with the specified alt */
eq?: (Scalars['String'] | null),
/** Exclude the uploads with the specified alt */
neq?: (Scalars['String'] | null),
/** Search uploads with the specified values as default alt */
in?: ((Scalars['String'] | null)[] | null),
/** Search uploads that do not have the specified values as default alt */
notIn?: ((Scalars['String'] | null)[] | null),
/** Filter uploads with the specified field defined (i.e. with any value) or not */
exists?: (Scalars['BooleanType'] | null)}


/** Specifies how to filter by auhtor */
export interface UploadAuthorFilter {
/** Filter uploads based on a regular expression */
matches?: (StringMatchesFilter | null),
/** Exclude uploads based on a regular expression */
notMatches?: (StringMatchesFilter | null),
/** Filter uploads with the specified field defined (i.e. with any value) or not */
exists?: (Scalars['BooleanType'] | null)}


/** Specifies how to filter by basename */
export interface UploadBasenameFilter {
/** Filter uploads based on a regular expression */
matches?: (StringMatchesFilter | null),
/** Exclude uploads based on a regular expression */
notMatches?: (StringMatchesFilter | null)}


/** Specifies how to filter by colors */
export interface UploadColorsFilter {
/** Filter uploads that have the specified colors */
contains?: (ColorBucketType | null),
/** Filter uploads that have all of the specified colors */
allIn?: ((ColorBucketType | null)[] | null),
/** Filter uploads that have at least one of the specified colors */
anyIn?: ((ColorBucketType | null)[] | null),
/** Filter uploads that do not have any of the specified colors */
notIn?: ((ColorBucketType | null)[] | null),
/** Search for uploads with an exact match */
eq?: ((ColorBucketType | null)[] | null)}


/** Specifies how to filter by copyright */
export interface UploadCopyrightFilter {
/** Filter uploads based on a regular expression */
matches?: (StringMatchesFilter | null),
/** Exclude uploads based on a regular expression */
notMatches?: (StringMatchesFilter | null),
/** Filter records with the specified field defined (i.e. with any value) or not */
exists?: (Scalars['BooleanType'] | null)}


/** Specifies how to filter by creation datetime */
export interface UploadCreatedAtFilter {
/** Search for uploads with an exact match */
eq?: (Scalars['DateTime'] | null),
/** Exclude uploads with an exact match */
neq?: (Scalars['DateTime'] | null),
/** Filter uploads with a value that's less than the one specified */
lt?: (Scalars['DateTime'] | null),
/** Filter uploads with a value that's less or equal than the one specified */
lte?: (Scalars['DateTime'] | null),
/** Filter uploads with a value that's strictly greater than the one specified */
gt?: (Scalars['DateTime'] | null),
/** Filter uploads with a value that's greater than or equal to the one specified */
gte?: (Scalars['DateTime'] | null)}


/** Specifies how to filter by filename */
export interface UploadFilenameFilter {
/** Filter uploads based on a regular expression */
matches?: (StringMatchesFilter | null),
/** Exclude uploads based on a regular expression */
notMatches?: (StringMatchesFilter | null)}

export interface UploadFilter {type?: (TypeFilter | null),inUse?: (InUseFilter | null),resolution?: (ResolutionFilter | null),size?: (UploadSizeFilter | null),tags?: (UploadTagsFilter | null),smartTags?: (UploadTagsFilter | null),colors?: (UploadColorsFilter | null),orientation?: (OrientationFilter | null),id?: (UploadIdFilter | null),mimeType?: (UploadMimeTypeFilter | null),format?: (UploadFormatFilter | null),height?: (UploadHeightFilter | null),width?: (UploadWidthFilter | null),alt?: (UploadAltFilter | null),title?: (UploadTitleFilter | null),notes?: (UploadNotesFilter | null),md5?: (UploadMd5Filter | null),author?: (UploadAuthorFilter | null),copyright?: (UploadCopyrightFilter | null),basename?: (UploadBasenameFilter | null),filename?: (UploadFilenameFilter | null),_createdAt?: (UploadCreatedAtFilter | null),_updatedAt?: (UploadUpdatedAtFilter | null),OR?: ((UploadFilter | null)[] | null),AND?: ((UploadFilter | null)[] | null)}


/** Specifies how to filter by format */
export interface UploadFormatFilter {
/** Search the asset with the specified format */
eq?: (Scalars['String'] | null),
/** Exclude the asset with the specified format */
neq?: (Scalars['String'] | null),
/** Search assets with the specified formats */
in?: ((Scalars['String'] | null)[] | null),
/** Search assets that do not have the specified formats */
notIn?: ((Scalars['String'] | null)[] | null)}


/** Specifies how to filter by height */
export interface UploadHeightFilter {
/** Search all assets larger than the specified height */
gt?: (Scalars['IntType'] | null),
/** Search all assets smaller than the specified height */
lt?: (Scalars['IntType'] | null),
/** Search all assets larger or equal to the specified height */
gte?: (Scalars['IntType'] | null),
/** Search all assets larger or equal to the specified height */
lte?: (Scalars['IntType'] | null),
/** Search assets with the specified height */
eq?: (Scalars['IntType'] | null),
/** Search assets that do not have the specified height */
neq?: (Scalars['IntType'] | null)}


/** Specifies how to filter by ID */
export interface UploadIdFilter {
/** Search the asset with the specified ID */
eq?: (Scalars['UploadId'] | null),
/** Exclude the asset with the specified ID */
neq?: (Scalars['UploadId'] | null),
/** Search assets with the specified IDs */
in?: ((Scalars['UploadId'] | null)[] | null),
/** Search assets that do not have the specified IDs */
notIn?: ((Scalars['UploadId'] | null)[] | null)}


/** Specifies how to filter by MD5 */
export interface UploadMd5Filter {
/** Search the asset with the specified MD5 */
eq?: (Scalars['String'] | null),
/** Exclude the asset with the specified MD5 */
neq?: (Scalars['String'] | null),
/** Search assets with the specified MD5s */
in?: ((Scalars['String'] | null)[] | null),
/** Search assets that do not have the specified MD5s */
notIn?: ((Scalars['String'] | null)[] | null)}


/** Specifies how to filter by mime type */
export interface UploadMimeTypeFilter {
/** Filter uploads based on a regular expression */
matches?: (StringMatchesFilter | null),
/** Exclude uploads based on a regular expression */
notMatches?: (StringMatchesFilter | null),
/** Search the asset with the specified mime type */
eq?: (Scalars['String'] | null),
/** Exclude the asset with the specified mime type */
neq?: (Scalars['String'] | null),
/** Search assets with the specified mime types */
in?: ((Scalars['String'] | null)[] | null),
/** Search assets that do not have the specified mime types */
notIn?: ((Scalars['String'] | null)[] | null)}


/** Specifies how to filter by notes */
export interface UploadNotesFilter {
/** Filter uploads based on a regular expression */
matches?: (StringMatchesFilter | null),
/** Exclude uploads based on a regular expression */
notMatches?: (StringMatchesFilter | null),
/** Filter records with the specified field defined (i.e. with any value) or not */
exists?: (Scalars['BooleanType'] | null)}


/** Specifies how to filter by size */
export interface UploadSizeFilter {
/** Search all assets larger than the specified size (in bytes) */
gt?: (Scalars['IntType'] | null),
/** Search all assets smaller than the specified size (in bytes) */
lt?: (Scalars['IntType'] | null),
/** Search all assets larger or equal to the specified size (in bytes) */
gte?: (Scalars['IntType'] | null),
/** Search all assets larger or equal to the specified size (in bytes) */
lte?: (Scalars['IntType'] | null),
/** Search assets with the specified size (in bytes) */
eq?: (Scalars['IntType'] | null),
/** Search assets that do not have the specified size (in bytes) */
neq?: (Scalars['IntType'] | null)}


/** Specifies how to filter by tags */
export interface UploadTagsFilter {
/** Filter uploads linked to the specified tag */
contains?: (Scalars['String'] | null),
/** Filter uploads linked to all of the specified tags */
allIn?: (Scalars['String'][] | null),
/** Filter uploads linked to at least one of the specified tags */
anyIn?: (Scalars['String'][] | null),
/** Filter uploads not linked to any of the specified tags */
notIn?: (Scalars['String'][] | null),
/** Search for uploads with an exact match */
eq?: (Scalars['String'][] | null)}


/** Specifies how to filter by default title */
export interface UploadTitleFilter {
/** Filter uploads based on a regular expression */
matches?: (StringMatchesFilter | null),
/** Exclude uploads based on a regular expression */
notMatches?: (StringMatchesFilter | null),
/** Search the asset with the specified title */
eq?: (Scalars['String'] | null),
/** Exclude the asset with the specified title */
neq?: (Scalars['String'] | null),
/** Search assets with the specified as default title */
in?: ((Scalars['String'] | null)[] | null),
/** Search assets that do not have the specified as default title */
notIn?: ((Scalars['String'] | null)[] | null),
/** Filter assets with the specified field defined (i.e. with any value) or not */
exists?: (Scalars['BooleanType'] | null)}


/** Specifies how to filter by update datetime */
export interface UploadUpdatedAtFilter {
/** Search for uploads with an exact match */
eq?: (Scalars['DateTime'] | null),
/** Exclude uploads with an exact match */
neq?: (Scalars['DateTime'] | null),
/** Filter uploads with a value that's less than the one specified */
lt?: (Scalars['DateTime'] | null),
/** Filter uploads with a value that's less or equal than the one specified */
lte?: (Scalars['DateTime'] | null),
/** Filter uploads with a value that's strictly greater than the one specified */
gt?: (Scalars['DateTime'] | null),
/** Filter uploads with a value that's greater than or equal to the one specified */
gte?: (Scalars['DateTime'] | null)}

export interface UploadVideoFieldGenqlSelection{
    alt?: { __args: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} } | boolean | number
    blurUpThumb?: { __args: {
    /** Controls the "punch" value (~contrast) of the blurhash decoding algorithm (defaults to 1.0) */
    punch?: Scalars['Float'], 
    /** Maximum image dimension (defaults to 24px) */
    size?: Scalars['Int'], 
    /** Image quality (defaults to 70%) */
    quality?: Scalars['Int'], 
    /** Imgix transformations to apply to the image */
    imgixParams?: (ImgixParams | null)} } | boolean | number
    blurhash?: boolean | number
    duration?: boolean | number
    framerate?: boolean | number
    height?: boolean | number
    mp4Url?: { __args: {
    /** Pick highest resolution available up to the specified argument */
    res?: (VideoMp4Res | null), 
    /** Pick the exact resolution quality specified in the argument */
    exactRes?: (VideoMp4Res | null)} } | boolean | number
    muxAssetId?: boolean | number
    muxPlaybackId?: boolean | number
    streamingUrl?: boolean | number
    thumbhash?: boolean | number
    thumbnailUrl?: { __args: {
    /** The file extension of the requested image format. Either png, jpg or gif */
    format?: (MuxThumbnailFormatType | null)} } | boolean | number
    title?: { __args: {
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null), 
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)} } | boolean | number
    width?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Specifies how to filter by width */
export interface UploadWidthFilter {
/** Search all assets larger than the specified width */
gt?: (Scalars['IntType'] | null),
/** Search all assets smaller than the specified width */
lt?: (Scalars['IntType'] | null),
/** Search all assets larger or equal to the specified width */
gte?: (Scalars['IntType'] | null),
/** Search all assets larger or equal to the specified width */
lte?: (Scalars['IntType'] | null),
/** Search assets with the specified width */
eq?: (Scalars['IntType'] | null),
/** Search assets that do not have the specified width */
neq?: (Scalars['IntType'] | null)}

export interface focalPointGenqlSelection{
    x?: boolean | number
    y?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


    const BlogAiRecord_possibleTypes: string[] = ['BlogAiRecord']
    export const isBlogAiRecord = (obj?: { __typename?: any } | null): obj is BlogAiRecord => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBlogAiRecord"')
      return BlogAiRecord_possibleTypes.includes(obj.__typename)
    }
    


    const BlogBitcashRecord_possibleTypes: string[] = ['BlogBitcashRecord']
    export const isBlogBitcashRecord = (obj?: { __typename?: any } | null): obj is BlogBitcashRecord => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBlogBitcashRecord"')
      return BlogBitcashRecord_possibleTypes.includes(obj.__typename)
    }
    


    const BlogBitcoinRecord_possibleTypes: string[] = ['BlogBitcoinRecord']
    export const isBlogBitcoinRecord = (obj?: { __typename?: any } | null): obj is BlogBitcoinRecord => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBlogBitcoinRecord"')
      return BlogBitcoinRecord_possibleTypes.includes(obj.__typename)
    }
    


    const BlogBitlauncherRecord_possibleTypes: string[] = ['BlogBitlauncherRecord']
    export const isBlogBitlauncherRecord = (obj?: { __typename?: any } | null): obj is BlogBitlauncherRecord => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBlogBitlauncherRecord"')
      return BlogBitlauncherRecord_possibleTypes.includes(obj.__typename)
    }
    


    const BlogCryptoRecord_possibleTypes: string[] = ['BlogCryptoRecord']
    export const isBlogCryptoRecord = (obj?: { __typename?: any } | null): obj is BlogCryptoRecord => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBlogCryptoRecord"')
      return BlogCryptoRecord_possibleTypes.includes(obj.__typename)
    }
    


    const BlogInvestingRecord_possibleTypes: string[] = ['BlogInvestingRecord']
    export const isBlogInvestingRecord = (obj?: { __typename?: any } | null): obj is BlogInvestingRecord => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBlogInvestingRecord"')
      return BlogInvestingRecord_possibleTypes.includes(obj.__typename)
    }
    


    const BlogNewsRecord_possibleTypes: string[] = ['BlogNewsRecord']
    export const isBlogNewsRecord = (obj?: { __typename?: any } | null): obj is BlogNewsRecord => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBlogNewsRecord"')
      return BlogNewsRecord_possibleTypes.includes(obj.__typename)
    }
    


    const BlogStartupRecord_possibleTypes: string[] = ['BlogStartupRecord']
    export const isBlogStartupRecord = (obj?: { __typename?: any } | null): obj is BlogStartupRecord => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBlogStartupRecord"')
      return BlogStartupRecord_possibleTypes.includes(obj.__typename)
    }
    


    const CollectionMetadata_possibleTypes: string[] = ['CollectionMetadata']
    export const isCollectionMetadata = (obj?: { __typename?: any } | null): obj is CollectionMetadata => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCollectionMetadata"')
      return CollectionMetadata_possibleTypes.includes(obj.__typename)
    }
    


    const ColorField_possibleTypes: string[] = ['ColorField']
    export const isColorField = (obj?: { __typename?: any } | null): obj is ColorField => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isColorField"')
      return ColorField_possibleTypes.includes(obj.__typename)
    }
    


    const ContentBlockModelMainContentField_possibleTypes: string[] = ['ContentBlockModelMainContentField']
    export const isContentBlockModelMainContentField = (obj?: { __typename?: any } | null): obj is ContentBlockModelMainContentField => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isContentBlockModelMainContentField"')
      return ContentBlockModelMainContentField_possibleTypes.includes(obj.__typename)
    }
    


    const ContentBlockRecord_possibleTypes: string[] = ['ContentBlockRecord']
    export const isContentBlockRecord = (obj?: { __typename?: any } | null): obj is ContentBlockRecord => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isContentBlockRecord"')
      return ContentBlockRecord_possibleTypes.includes(obj.__typename)
    }
    


    const FileField_possibleTypes: string[] = ['FileField']
    export const isFileField = (obj?: { __typename?: any } | null): obj is FileField => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFileField"')
      return FileField_possibleTypes.includes(obj.__typename)
    }
    


    const FileFieldInterface_possibleTypes: string[] = ['FileField']
    export const isFileFieldInterface = (obj?: { __typename?: any } | null): obj is FileFieldInterface => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFileFieldInterface"')
      return FileFieldInterface_possibleTypes.includes(obj.__typename)
    }
    


    const GlobalSeoField_possibleTypes: string[] = ['GlobalSeoField']
    export const isGlobalSeoField = (obj?: { __typename?: any } | null): obj is GlobalSeoField => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGlobalSeoField"')
      return GlobalSeoField_possibleTypes.includes(obj.__typename)
    }
    


    const JsonFieldMultiLocaleField_possibleTypes: string[] = ['JsonFieldMultiLocaleField']
    export const isJsonFieldMultiLocaleField = (obj?: { __typename?: any } | null): obj is JsonFieldMultiLocaleField => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isJsonFieldMultiLocaleField"')
      return JsonFieldMultiLocaleField_possibleTypes.includes(obj.__typename)
    }
    


    const LayoutRecord_possibleTypes: string[] = ['LayoutRecord']
    export const isLayoutRecord = (obj?: { __typename?: any } | null): obj is LayoutRecord => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLayoutRecord"')
      return LayoutRecord_possibleTypes.includes(obj.__typename)
    }
    


    const PageSeoRecord_possibleTypes: string[] = ['PageSeoRecord']
    export const isPageSeoRecord = (obj?: { __typename?: any } | null): obj is PageSeoRecord => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPageSeoRecord"')
      return PageSeoRecord_possibleTypes.includes(obj.__typename)
    }
    


    const PrivacyPolicyModelMainContentField_possibleTypes: string[] = ['PrivacyPolicyModelMainContentField']
    export const isPrivacyPolicyModelMainContentField = (obj?: { __typename?: any } | null): obj is PrivacyPolicyModelMainContentField => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPrivacyPolicyModelMainContentField"')
      return PrivacyPolicyModelMainContentField_possibleTypes.includes(obj.__typename)
    }
    


    const PrivacyPolicyModelMainContentFieldMultiLocaleField_possibleTypes: string[] = ['PrivacyPolicyModelMainContentFieldMultiLocaleField']
    export const isPrivacyPolicyModelMainContentFieldMultiLocaleField = (obj?: { __typename?: any } | null): obj is PrivacyPolicyModelMainContentFieldMultiLocaleField => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPrivacyPolicyModelMainContentFieldMultiLocaleField"')
      return PrivacyPolicyModelMainContentFieldMultiLocaleField_possibleTypes.includes(obj.__typename)
    }
    


    const PrivacyPolicyRecord_possibleTypes: string[] = ['PrivacyPolicyRecord']
    export const isPrivacyPolicyRecord = (obj?: { __typename?: any } | null): obj is PrivacyPolicyRecord => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPrivacyPolicyRecord"')
      return PrivacyPolicyRecord_possibleTypes.includes(obj.__typename)
    }
    


    const Query_possibleTypes: string[] = ['Query']
    export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
      return Query_possibleTypes.includes(obj.__typename)
    }
    


    const RecordInterface_possibleTypes: string[] = ['BlogAiRecord','BlogBitcashRecord','BlogBitcoinRecord','BlogBitlauncherRecord','BlogCryptoRecord','BlogInvestingRecord','BlogNewsRecord','BlogStartupRecord','ContentBlockRecord','LayoutRecord','PageSeoRecord','PrivacyPolicyRecord','ResearchAiRecord','TermsAndConditionRecord','TopicRecord']
    export const isRecordInterface = (obj?: { __typename?: any } | null): obj is RecordInterface => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRecordInterface"')
      return RecordInterface_possibleTypes.includes(obj.__typename)
    }
    


    const ResearchAiRecord_possibleTypes: string[] = ['ResearchAiRecord']
    export const isResearchAiRecord = (obj?: { __typename?: any } | null): obj is ResearchAiRecord => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isResearchAiRecord"')
      return ResearchAiRecord_possibleTypes.includes(obj.__typename)
    }
    


    const ResponsiveImage_possibleTypes: string[] = ['ResponsiveImage']
    export const isResponsiveImage = (obj?: { __typename?: any } | null): obj is ResponsiveImage => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isResponsiveImage"')
      return ResponsiveImage_possibleTypes.includes(obj.__typename)
    }
    


    const SeoField_possibleTypes: string[] = ['SeoField']
    export const isSeoField = (obj?: { __typename?: any } | null): obj is SeoField => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSeoField"')
      return SeoField_possibleTypes.includes(obj.__typename)
    }
    


    const SeoFieldMultiLocaleField_possibleTypes: string[] = ['SeoFieldMultiLocaleField']
    export const isSeoFieldMultiLocaleField = (obj?: { __typename?: any } | null): obj is SeoFieldMultiLocaleField => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSeoFieldMultiLocaleField"')
      return SeoFieldMultiLocaleField_possibleTypes.includes(obj.__typename)
    }
    


    const Site_possibleTypes: string[] = ['Site']
    export const isSite = (obj?: { __typename?: any } | null): obj is Site => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSite"')
      return Site_possibleTypes.includes(obj.__typename)
    }
    


    const StringMultiLocaleField_possibleTypes: string[] = ['StringMultiLocaleField']
    export const isStringMultiLocaleField = (obj?: { __typename?: any } | null): obj is StringMultiLocaleField => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStringMultiLocaleField"')
      return StringMultiLocaleField_possibleTypes.includes(obj.__typename)
    }
    


    const Tag_possibleTypes: string[] = ['Tag']
    export const isTag = (obj?: { __typename?: any } | null): obj is Tag => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTag"')
      return Tag_possibleTypes.includes(obj.__typename)
    }
    


    const TermsAndConditionModelMainContentField_possibleTypes: string[] = ['TermsAndConditionModelMainContentField']
    export const isTermsAndConditionModelMainContentField = (obj?: { __typename?: any } | null): obj is TermsAndConditionModelMainContentField => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTermsAndConditionModelMainContentField"')
      return TermsAndConditionModelMainContentField_possibleTypes.includes(obj.__typename)
    }
    


    const TermsAndConditionModelMainContentFieldMultiLocaleField_possibleTypes: string[] = ['TermsAndConditionModelMainContentFieldMultiLocaleField']
    export const isTermsAndConditionModelMainContentFieldMultiLocaleField = (obj?: { __typename?: any } | null): obj is TermsAndConditionModelMainContentFieldMultiLocaleField => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTermsAndConditionModelMainContentFieldMultiLocaleField"')
      return TermsAndConditionModelMainContentFieldMultiLocaleField_possibleTypes.includes(obj.__typename)
    }
    


    const TermsAndConditionRecord_possibleTypes: string[] = ['TermsAndConditionRecord']
    export const isTermsAndConditionRecord = (obj?: { __typename?: any } | null): obj is TermsAndConditionRecord => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTermsAndConditionRecord"')
      return TermsAndConditionRecord_possibleTypes.includes(obj.__typename)
    }
    


    const TopicRecord_possibleTypes: string[] = ['TopicRecord']
    export const isTopicRecord = (obj?: { __typename?: any } | null): obj is TopicRecord => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTopicRecord"')
      return TopicRecord_possibleTypes.includes(obj.__typename)
    }
    


    const UploadVideoField_possibleTypes: string[] = ['UploadVideoField']
    export const isUploadVideoField = (obj?: { __typename?: any } | null): obj is UploadVideoField => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUploadVideoField"')
      return UploadVideoField_possibleTypes.includes(obj.__typename)
    }
    


    const focalPoint_possibleTypes: string[] = ['focalPoint']
    export const isfocalPoint = (obj?: { __typename?: any } | null): obj is focalPoint => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isfocalPoint"')
      return focalPoint_possibleTypes.includes(obj.__typename)
    }
    

export const enumBlogAiModelOrderBy = {
   _createdAt_ASC: '_createdAt_ASC' as const,
   _createdAt_DESC: '_createdAt_DESC' as const,
   id_ASC: 'id_ASC' as const,
   id_DESC: 'id_DESC' as const,
   _firstPublishedAt_ASC: '_firstPublishedAt_ASC' as const,
   _firstPublishedAt_DESC: '_firstPublishedAt_DESC' as const,
   _publicationScheduledAt_ASC: '_publicationScheduledAt_ASC' as const,
   _publicationScheduledAt_DESC: '_publicationScheduledAt_DESC' as const,
   _unpublishingScheduledAt_ASC: '_unpublishingScheduledAt_ASC' as const,
   _unpublishingScheduledAt_DESC: '_unpublishingScheduledAt_DESC' as const,
   _publishedAt_ASC: '_publishedAt_ASC' as const,
   _publishedAt_DESC: '_publishedAt_DESC' as const,
   _status_ASC: '_status_ASC' as const,
   _status_DESC: '_status_DESC' as const,
   _updatedAt_ASC: '_updatedAt_ASC' as const,
   _updatedAt_DESC: '_updatedAt_DESC' as const,
   _isValid_ASC: '_isValid_ASC' as const,
   _isValid_DESC: '_isValid_DESC' as const,
   description_ASC: 'description_ASC' as const,
   description_DESC: 'description_DESC' as const,
   authorName_ASC: 'authorName_ASC' as const,
   authorName_DESC: 'authorName_DESC' as const,
   title_ASC: 'title_ASC' as const,
   title_DESC: 'title_DESC' as const
}

export const enumBlogBitcashModelOrderBy = {
   _createdAt_ASC: '_createdAt_ASC' as const,
   _createdAt_DESC: '_createdAt_DESC' as const,
   id_ASC: 'id_ASC' as const,
   id_DESC: 'id_DESC' as const,
   _firstPublishedAt_ASC: '_firstPublishedAt_ASC' as const,
   _firstPublishedAt_DESC: '_firstPublishedAt_DESC' as const,
   _publicationScheduledAt_ASC: '_publicationScheduledAt_ASC' as const,
   _publicationScheduledAt_DESC: '_publicationScheduledAt_DESC' as const,
   _unpublishingScheduledAt_ASC: '_unpublishingScheduledAt_ASC' as const,
   _unpublishingScheduledAt_DESC: '_unpublishingScheduledAt_DESC' as const,
   _publishedAt_ASC: '_publishedAt_ASC' as const,
   _publishedAt_DESC: '_publishedAt_DESC' as const,
   _status_ASC: '_status_ASC' as const,
   _status_DESC: '_status_DESC' as const,
   _updatedAt_ASC: '_updatedAt_ASC' as const,
   _updatedAt_DESC: '_updatedAt_DESC' as const,
   _isValid_ASC: '_isValid_ASC' as const,
   _isValid_DESC: '_isValid_DESC' as const,
   authorName_ASC: 'authorName_ASC' as const,
   authorName_DESC: 'authorName_DESC' as const,
   description_ASC: 'description_ASC' as const,
   description_DESC: 'description_DESC' as const,
   title_ASC: 'title_ASC' as const,
   title_DESC: 'title_DESC' as const
}

export const enumBlogBitcoinModelOrderBy = {
   _createdAt_ASC: '_createdAt_ASC' as const,
   _createdAt_DESC: '_createdAt_DESC' as const,
   id_ASC: 'id_ASC' as const,
   id_DESC: 'id_DESC' as const,
   _firstPublishedAt_ASC: '_firstPublishedAt_ASC' as const,
   _firstPublishedAt_DESC: '_firstPublishedAt_DESC' as const,
   _publicationScheduledAt_ASC: '_publicationScheduledAt_ASC' as const,
   _publicationScheduledAt_DESC: '_publicationScheduledAt_DESC' as const,
   _unpublishingScheduledAt_ASC: '_unpublishingScheduledAt_ASC' as const,
   _unpublishingScheduledAt_DESC: '_unpublishingScheduledAt_DESC' as const,
   _publishedAt_ASC: '_publishedAt_ASC' as const,
   _publishedAt_DESC: '_publishedAt_DESC' as const,
   _status_ASC: '_status_ASC' as const,
   _status_DESC: '_status_DESC' as const,
   _updatedAt_ASC: '_updatedAt_ASC' as const,
   _updatedAt_DESC: '_updatedAt_DESC' as const,
   _isValid_ASC: '_isValid_ASC' as const,
   _isValid_DESC: '_isValid_DESC' as const,
   authorName_ASC: 'authorName_ASC' as const,
   authorName_DESC: 'authorName_DESC' as const,
   title_ASC: 'title_ASC' as const,
   title_DESC: 'title_DESC' as const,
   description_ASC: 'description_ASC' as const,
   description_DESC: 'description_DESC' as const
}

export const enumBlogBitlauncherModelOrderBy = {
   _createdAt_ASC: '_createdAt_ASC' as const,
   _createdAt_DESC: '_createdAt_DESC' as const,
   id_ASC: 'id_ASC' as const,
   id_DESC: 'id_DESC' as const,
   _firstPublishedAt_ASC: '_firstPublishedAt_ASC' as const,
   _firstPublishedAt_DESC: '_firstPublishedAt_DESC' as const,
   _publicationScheduledAt_ASC: '_publicationScheduledAt_ASC' as const,
   _publicationScheduledAt_DESC: '_publicationScheduledAt_DESC' as const,
   _unpublishingScheduledAt_ASC: '_unpublishingScheduledAt_ASC' as const,
   _unpublishingScheduledAt_DESC: '_unpublishingScheduledAt_DESC' as const,
   _publishedAt_ASC: '_publishedAt_ASC' as const,
   _publishedAt_DESC: '_publishedAt_DESC' as const,
   _status_ASC: '_status_ASC' as const,
   _status_DESC: '_status_DESC' as const,
   _updatedAt_ASC: '_updatedAt_ASC' as const,
   _updatedAt_DESC: '_updatedAt_DESC' as const,
   _isValid_ASC: '_isValid_ASC' as const,
   _isValid_DESC: '_isValid_DESC' as const,
   authorName_ASC: 'authorName_ASC' as const,
   authorName_DESC: 'authorName_DESC' as const,
   description_ASC: 'description_ASC' as const,
   description_DESC: 'description_DESC' as const,
   title_ASC: 'title_ASC' as const,
   title_DESC: 'title_DESC' as const
}

export const enumBlogCryptoModelOrderBy = {
   _createdAt_ASC: '_createdAt_ASC' as const,
   _createdAt_DESC: '_createdAt_DESC' as const,
   id_ASC: 'id_ASC' as const,
   id_DESC: 'id_DESC' as const,
   _firstPublishedAt_ASC: '_firstPublishedAt_ASC' as const,
   _firstPublishedAt_DESC: '_firstPublishedAt_DESC' as const,
   _publicationScheduledAt_ASC: '_publicationScheduledAt_ASC' as const,
   _publicationScheduledAt_DESC: '_publicationScheduledAt_DESC' as const,
   _unpublishingScheduledAt_ASC: '_unpublishingScheduledAt_ASC' as const,
   _unpublishingScheduledAt_DESC: '_unpublishingScheduledAt_DESC' as const,
   _publishedAt_ASC: '_publishedAt_ASC' as const,
   _publishedAt_DESC: '_publishedAt_DESC' as const,
   _status_ASC: '_status_ASC' as const,
   _status_DESC: '_status_DESC' as const,
   _updatedAt_ASC: '_updatedAt_ASC' as const,
   _updatedAt_DESC: '_updatedAt_DESC' as const,
   _isValid_ASC: '_isValid_ASC' as const,
   _isValid_DESC: '_isValid_DESC' as const,
   authorName_ASC: 'authorName_ASC' as const,
   authorName_DESC: 'authorName_DESC' as const,
   title_ASC: 'title_ASC' as const,
   title_DESC: 'title_DESC' as const,
   description_ASC: 'description_ASC' as const,
   description_DESC: 'description_DESC' as const
}

export const enumBlogInvestingModelOrderBy = {
   _createdAt_ASC: '_createdAt_ASC' as const,
   _createdAt_DESC: '_createdAt_DESC' as const,
   id_ASC: 'id_ASC' as const,
   id_DESC: 'id_DESC' as const,
   _firstPublishedAt_ASC: '_firstPublishedAt_ASC' as const,
   _firstPublishedAt_DESC: '_firstPublishedAt_DESC' as const,
   _publicationScheduledAt_ASC: '_publicationScheduledAt_ASC' as const,
   _publicationScheduledAt_DESC: '_publicationScheduledAt_DESC' as const,
   _unpublishingScheduledAt_ASC: '_unpublishingScheduledAt_ASC' as const,
   _unpublishingScheduledAt_DESC: '_unpublishingScheduledAt_DESC' as const,
   _publishedAt_ASC: '_publishedAt_ASC' as const,
   _publishedAt_DESC: '_publishedAt_DESC' as const,
   _status_ASC: '_status_ASC' as const,
   _status_DESC: '_status_DESC' as const,
   _updatedAt_ASC: '_updatedAt_ASC' as const,
   _updatedAt_DESC: '_updatedAt_DESC' as const,
   _isValid_ASC: '_isValid_ASC' as const,
   _isValid_DESC: '_isValid_DESC' as const,
   authorName_ASC: 'authorName_ASC' as const,
   authorName_DESC: 'authorName_DESC' as const,
   description_ASC: 'description_ASC' as const,
   description_DESC: 'description_DESC' as const,
   title_ASC: 'title_ASC' as const,
   title_DESC: 'title_DESC' as const
}

export const enumBlogNewsModelOrderBy = {
   _createdAt_ASC: '_createdAt_ASC' as const,
   _createdAt_DESC: '_createdAt_DESC' as const,
   id_ASC: 'id_ASC' as const,
   id_DESC: 'id_DESC' as const,
   _firstPublishedAt_ASC: '_firstPublishedAt_ASC' as const,
   _firstPublishedAt_DESC: '_firstPublishedAt_DESC' as const,
   _publicationScheduledAt_ASC: '_publicationScheduledAt_ASC' as const,
   _publicationScheduledAt_DESC: '_publicationScheduledAt_DESC' as const,
   _unpublishingScheduledAt_ASC: '_unpublishingScheduledAt_ASC' as const,
   _unpublishingScheduledAt_DESC: '_unpublishingScheduledAt_DESC' as const,
   _publishedAt_ASC: '_publishedAt_ASC' as const,
   _publishedAt_DESC: '_publishedAt_DESC' as const,
   _status_ASC: '_status_ASC' as const,
   _status_DESC: '_status_DESC' as const,
   _updatedAt_ASC: '_updatedAt_ASC' as const,
   _updatedAt_DESC: '_updatedAt_DESC' as const,
   _isValid_ASC: '_isValid_ASC' as const,
   _isValid_DESC: '_isValid_DESC' as const,
   authorName_ASC: 'authorName_ASC' as const,
   authorName_DESC: 'authorName_DESC' as const,
   description_ASC: 'description_ASC' as const,
   description_DESC: 'description_DESC' as const,
   title_ASC: 'title_ASC' as const,
   title_DESC: 'title_DESC' as const
}

export const enumBlogStartupModelOrderBy = {
   _createdAt_ASC: '_createdAt_ASC' as const,
   _createdAt_DESC: '_createdAt_DESC' as const,
   id_ASC: 'id_ASC' as const,
   id_DESC: 'id_DESC' as const,
   _firstPublishedAt_ASC: '_firstPublishedAt_ASC' as const,
   _firstPublishedAt_DESC: '_firstPublishedAt_DESC' as const,
   _publicationScheduledAt_ASC: '_publicationScheduledAt_ASC' as const,
   _publicationScheduledAt_DESC: '_publicationScheduledAt_DESC' as const,
   _unpublishingScheduledAt_ASC: '_unpublishingScheduledAt_ASC' as const,
   _unpublishingScheduledAt_DESC: '_unpublishingScheduledAt_DESC' as const,
   _publishedAt_ASC: '_publishedAt_ASC' as const,
   _publishedAt_DESC: '_publishedAt_DESC' as const,
   _status_ASC: '_status_ASC' as const,
   _status_DESC: '_status_DESC' as const,
   _updatedAt_ASC: '_updatedAt_ASC' as const,
   _updatedAt_DESC: '_updatedAt_DESC' as const,
   _isValid_ASC: '_isValid_ASC' as const,
   _isValid_DESC: '_isValid_DESC' as const,
   authorName_ASC: 'authorName_ASC' as const,
   authorName_DESC: 'authorName_DESC' as const,
   description_ASC: 'description_ASC' as const,
   description_DESC: 'description_DESC' as const,
   title_ASC: 'title_ASC' as const,
   title_DESC: 'title_DESC' as const
}

export const enumColorBucketType = {
   red: 'red' as const,
   orange: 'orange' as const,
   pink: 'pink' as const,
   cyan: 'cyan' as const,
   purple: 'purple' as const,
   blue: 'blue' as const,
   yellow: 'yellow' as const,
   green: 'green' as const,
   brown: 'brown' as const,
   grey: 'grey' as const,
   white: 'white' as const,
   black: 'black' as const
}

export const enumFaviconType = {
   icon: 'icon' as const,
   appleTouchIcon: 'appleTouchIcon' as const,
   msApplication: 'msApplication' as const
}

export const enumImgixParamsAuto = {
   enhance: 'enhance' as const,
   format: 'format' as const,
   redeye: 'redeye' as const,
   compress: 'compress' as const
}

export const enumImgixParamsBlendAlign = {
   top: 'top' as const,
   bottom: 'bottom' as const,
   middle: 'middle' as const,
   left: 'left' as const,
   right: 'right' as const,
   center: 'center' as const
}

export const enumImgixParamsBlendCrop = {
   top: 'top' as const,
   bottom: 'bottom' as const,
   left: 'left' as const,
   right: 'right' as const,
   faces: 'faces' as const
}

export const enumImgixParamsBlendFit = {
   clamp: 'clamp' as const,
   clip: 'clip' as const,
   crop: 'crop' as const,
   scale: 'scale' as const,
   max: 'max' as const
}

export const enumImgixParamsBlendMode = {
   color: 'color' as const,
   burn: 'burn' as const,
   dodge: 'dodge' as const,
   darken: 'darken' as const,
   difference: 'difference' as const,
   exclusion: 'exclusion' as const,
   hardlight: 'hardlight' as const,
   hue: 'hue' as const,
   lighten: 'lighten' as const,
   luminosity: 'luminosity' as const,
   multiply: 'multiply' as const,
   overlay: 'overlay' as const,
   saturation: 'saturation' as const,
   screen: 'screen' as const,
   softlight: 'softlight' as const,
   normal: 'normal' as const
}

export const enumImgixParamsBlendSize = {
   inherit: 'inherit' as const
}

export const enumImgixParamsCh = {
   width: 'width' as const,
   dpr: 'dpr' as const,
   saveData: 'saveData' as const
}

export const enumImgixParamsCrop = {
   top: 'top' as const,
   bottom: 'bottom' as const,
   left: 'left' as const,
   right: 'right' as const,
   faces: 'faces' as const,
   entropy: 'entropy' as const,
   edges: 'edges' as const,
   focalpoint: 'focalpoint' as const
}

export const enumImgixParamsCs = {
   srgb: 'srgb' as const,
   adobergb1998: 'adobergb1998' as const,
   tinysrgb: 'tinysrgb' as const,
   strip: 'strip' as const
}

export const enumImgixParamsFill = {
   solid: 'solid' as const,
   blur: 'blur' as const,
   gen: 'gen' as const,
   generative: 'generative' as const,
   gradient: 'gradient' as const
}

export const enumImgixParamsFillGenPos = {
   top: 'top' as const,
   bottom: 'bottom' as const,
   middle: 'middle' as const,
   left: 'left' as const,
   right: 'right' as const,
   center: 'center' as const
}

export const enumImgixParamsFillGradientCs = {
   linear: 'linear' as const,
   srgb: 'srgb' as const,
   oklab: 'oklab' as const,
   hsl: 'hsl' as const,
   lch: 'lch' as const
}

export const enumImgixParamsFillGradientLinearDirection = {
   top: 'top' as const,
   bottom: 'bottom' as const,
   left: 'left' as const,
   right: 'right' as const
}

export const enumImgixParamsFillGradientType = {
   linear: 'linear' as const,
   radial: 'radial' as const
}

export const enumImgixParamsFit = {
   clamp: 'clamp' as const,
   clip: 'clip' as const,
   crop: 'crop' as const,
   facearea: 'facearea' as const,
   fill: 'fill' as const,
   fillmax: 'fillmax' as const,
   max: 'max' as const,
   min: 'min' as const,
   scale: 'scale' as const
}

export const enumImgixParamsFlip = {
   h: 'h' as const,
   v: 'v' as const,
   hv: 'hv' as const
}

export const enumImgixParamsFm = {
   gif: 'gif' as const,
   jpg: 'jpg' as const,
   jp2: 'jp2' as const,
   json: 'json' as const,
   jxr: 'jxr' as const,
   pjpg: 'pjpg' as const,
   mp4: 'mp4' as const,
   png: 'png' as const,
   png8: 'png8' as const,
   png32: 'png32' as const,
   webp: 'webp' as const,
   webm: 'webm' as const,
   blurhash: 'blurhash' as const,
   avif: 'avif' as const
}

export const enumImgixParamsIptc = {
   allow: 'allow' as const,
   block: 'block' as const
}

export const enumImgixParamsMarkAlign = {
   top: 'top' as const,
   middle: 'middle' as const,
   bottom: 'bottom' as const,
   left: 'left' as const,
   center: 'center' as const,
   right: 'right' as const
}

export const enumImgixParamsMarkFit = {
   clip: 'clip' as const,
   crop: 'crop' as const,
   fill: 'fill' as const,
   max: 'max' as const,
   scale: 'scale' as const
}

export const enumImgixParamsMarkTile = {
   grid: 'grid' as const
}

export const enumImgixParamsPalette = {
   css: 'css' as const,
   json: 'json' as const
}

export const enumImgixParamsTransparency = {
   grid: 'grid' as const
}

export const enumImgixParamsTrim = {
   auto: 'auto' as const,
   color: 'color' as const
}

export const enumImgixParamsTxtAlign = {
   top: 'top' as const,
   middle: 'middle' as const,
   bottom: 'bottom' as const,
   left: 'left' as const,
   center: 'center' as const,
   right: 'right' as const
}

export const enumImgixParamsTxtClip = {
   start: 'start' as const,
   middle: 'middle' as const,
   end: 'end' as const,
   ellipsis: 'ellipsis' as const
}

export const enumImgixParamsTxtFit = {
   max: 'max' as const
}

export const enumItemStatus = {
   draft: 'draft' as const,
   updated: 'updated' as const,
   published: 'published' as const
}

export const enumMuxThumbnailFormatType = {
   jpg: 'jpg' as const,
   png: 'png' as const,
   gif: 'gif' as const
}

export const enumPageSeoModelOrderBy = {
   _createdAt_ASC: '_createdAt_ASC' as const,
   _createdAt_DESC: '_createdAt_DESC' as const,
   id_ASC: 'id_ASC' as const,
   id_DESC: 'id_DESC' as const,
   _firstPublishedAt_ASC: '_firstPublishedAt_ASC' as const,
   _firstPublishedAt_DESC: '_firstPublishedAt_DESC' as const,
   _publicationScheduledAt_ASC: '_publicationScheduledAt_ASC' as const,
   _publicationScheduledAt_DESC: '_publicationScheduledAt_DESC' as const,
   _unpublishingScheduledAt_ASC: '_unpublishingScheduledAt_ASC' as const,
   _unpublishingScheduledAt_DESC: '_unpublishingScheduledAt_DESC' as const,
   _publishedAt_ASC: '_publishedAt_ASC' as const,
   _publishedAt_DESC: '_publishedAt_DESC' as const,
   _status_ASC: '_status_ASC' as const,
   _status_DESC: '_status_DESC' as const,
   _updatedAt_ASC: '_updatedAt_ASC' as const,
   _updatedAt_DESC: '_updatedAt_DESC' as const,
   _isValid_ASC: '_isValid_ASC' as const,
   _isValid_DESC: '_isValid_DESC' as const,
   seoType_ASC: 'seoType_ASC' as const,
   seoType_DESC: 'seoType_DESC' as const,
   title_ASC: 'title_ASC' as const,
   title_DESC: 'title_DESC' as const,
   description_ASC: 'description_ASC' as const,
   description_DESC: 'description_DESC' as const
}

export const enumResearchAiModelOrderBy = {
   _createdAt_ASC: '_createdAt_ASC' as const,
   _createdAt_DESC: '_createdAt_DESC' as const,
   id_ASC: 'id_ASC' as const,
   id_DESC: 'id_DESC' as const,
   _firstPublishedAt_ASC: '_firstPublishedAt_ASC' as const,
   _firstPublishedAt_DESC: '_firstPublishedAt_DESC' as const,
   _publicationScheduledAt_ASC: '_publicationScheduledAt_ASC' as const,
   _publicationScheduledAt_DESC: '_publicationScheduledAt_DESC' as const,
   _unpublishingScheduledAt_ASC: '_unpublishingScheduledAt_ASC' as const,
   _unpublishingScheduledAt_DESC: '_unpublishingScheduledAt_DESC' as const,
   _publishedAt_ASC: '_publishedAt_ASC' as const,
   _publishedAt_DESC: '_publishedAt_DESC' as const,
   _status_ASC: '_status_ASC' as const,
   _status_DESC: '_status_DESC' as const,
   _updatedAt_ASC: '_updatedAt_ASC' as const,
   _updatedAt_DESC: '_updatedAt_DESC' as const,
   _isValid_ASC: '_isValid_ASC' as const,
   _isValid_DESC: '_isValid_DESC' as const,
   authorName_ASC: 'authorName_ASC' as const,
   authorName_DESC: 'authorName_DESC' as const,
   description_ASC: 'description_ASC' as const,
   description_DESC: 'description_DESC' as const,
   title_ASC: 'title_ASC' as const,
   title_DESC: 'title_DESC' as const
}

export const enumResolutionType = {
   icon: 'icon' as const,
   small: 'small' as const,
   medium: 'medium' as const,
   large: 'large' as const
}

export const enumSiteLocale = {
   en: 'en' as const,
   es: 'es' as const,
   zh: 'zh' as const,
   id: 'id' as const,
   vi: 'vi' as const,
   ko: 'ko' as const,
   pt: 'pt' as const,
   fr: 'fr' as const
}

export const enumUploadOrderBy = {
   _createdAt_ASC: '_createdAt_ASC' as const,
   _createdAt_DESC: '_createdAt_DESC' as const,
   size_ASC: 'size_ASC' as const,
   size_DESC: 'size_DESC' as const,
   resolution_ASC: 'resolution_ASC' as const,
   resolution_DESC: 'resolution_DESC' as const,
   filename_ASC: 'filename_ASC' as const,
   filename_DESC: 'filename_DESC' as const,
   basename_ASC: 'basename_ASC' as const,
   basename_DESC: 'basename_DESC' as const,
   mimeType_ASC: 'mimeType_ASC' as const,
   mimeType_DESC: 'mimeType_DESC' as const,
   format_ASC: 'format_ASC' as const,
   format_DESC: 'format_DESC' as const,
   _updatedAt_ASC: '_updatedAt_ASC' as const,
   _updatedAt_DESC: '_updatedAt_DESC' as const,
   id_ASC: 'id_ASC' as const,
   id_DESC: 'id_DESC' as const
}

export const enumUploadOrientation = {
   landscape: 'landscape' as const,
   portrait: 'portrait' as const,
   square: 'square' as const
}

export const enumUploadType = {
   image: 'image' as const,
   audio: 'audio' as const,
   video: 'video' as const,
   richtext: 'richtext' as const,
   presentation: 'presentation' as const,
   spreadsheet: 'spreadsheet' as const,
   pdfdocument: 'pdfdocument' as const,
   archive: 'archive' as const
}

export const enumVideoMp4Res = {
   low: 'low' as const,
   medium: 'medium' as const,
   high: 'high' as const
}
