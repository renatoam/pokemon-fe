import { COMPANY_AT, FAVICON16, FAVICON32, FONT_GLOBAL } from '@constants/global';

export interface SEOProps {
  title: string | undefined
  description: string | undefined
  image: string | undefined
  shouldIndexPage?: boolean
}

export default function SEO(props: SEOProps) {
  const { title, description, image, shouldIndexPage = true } = props

  return (
    <>
      <title>{title}</title>

      {description && <meta name="description" content={description} />}
      {image && <meta name="image" content={image} />}

      {!shouldIndexPage && <meta name="robots" content="noindex,nofollow" />}

      {/* default metatags */}

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href={FONT_GLOBAL} rel="stylesheet" />
      <link rel="icon" type="image/png" sizes="32x32" href={FAVICON32} />
      <link rel="icon" type="image/png" sizes="16x16" href={FAVICON16} />

      <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
      <meta name="MobileOptimized" content="320" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="theme-color" content="#f3123c" />
      <meta name="msapplication-TileColor" content="#f3123c" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="google" content="notranslate" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={title} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:alt" content="Thumbnail" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={COMPANY_AT} />
      <meta name="twitter:creator" content={COMPANY_AT} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:src" content={image} />
      <meta name="twitter:image:alt" content="Thumbnail" />
      <meta name="twitter:image:width" content="1200" />
      <meta name="twitter:image:height" content="620" />
    </>
  )
}
