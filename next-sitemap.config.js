const { SITE_URL } = process.env;
if (!SITE_URL) {
    throw new Error('Invalid/Missing environment variable: "SITEMAP_URL"')
}

module.exports = {
    siteUrl: `${SITE_URL}/`,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            {userAgent: "*", disallow: ["/agb", "/datenschutz", "/impressum"] },
            {userAgent: "*", allow: "/"}
        ],
        additionalSitemaps: [
            `${SITE_URL}/sitemap.xml`,
            `${SITE_URL}/server-sitemap.xml`
        ]
    },
    exclude: ["/agb", "/datenschutz", "/impressum", "/server-sitemap.xml"]
}