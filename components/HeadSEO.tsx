import Head from "next/head";

export default function HeadSEO({
    siteAuthor = process.env.SITE_AUTHOR,
    siteName = process.env.SITE_NAME,
    siteDescription = process.env.SITE_DESCRIPTION,
    siteUrl = process.env.SITE_URL,
    siteCanonicalUrl = process.env.SITE_URL,
    siteLogo = process.env.SITE_LOGO,
    siteLocale = process.env.SITE_LOCALE,
    siteType = process.env.SITE_TYPE,
    siteTitle = process.env.SITE_TITLE,
    children}: any) {

    const structuredData = JSON.stringify({
        "@context": `${siteCanonicalUrl}/`,
        "description": siteDescription
    });

    return (<Head>
        {/* Fundamental head elements important for SEO. */}
        <title>{siteTitle}</title>
        <meta name="author" content={siteAuthor} />
        <meta name="description" content={siteDescription} />
        <link rel="canonical" href={siteCanonicalUrl} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href={siteLogo} />

        {/* Open graph meta tags. */}
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content={siteLogo} />
        <meta property="og:locale" content={siteLocale} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:type" content={siteType} />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:url" content={siteUrl} />

        {/* Structured data. */}
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: structuredData}}
            key="item-jsonld"
        />
        { children }
    </Head>);
}