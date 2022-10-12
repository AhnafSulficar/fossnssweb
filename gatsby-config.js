module.exports = {
    siteMetadata: {
        title: `FOSSNSS • Free and Open Source Software cell (FOSS Cell) of NSSCE`,
        description: `The FOSSNSSFOSS (FOSS Cell) of NSS College of Engineering, 
        Palakkad is a collective of students who like to explore and spread the open-source software and its ideology. 
        Roots of this FOSS Cell dates back to the year 2009. Leading the whole campus to the world of Freedom, Community and Free Software. 
        Free software, Free Campus, Free Society.`,
        author: 'foss@nssce.ac.in',
        siteUrl: `https://fossnss.org`,
    },
    plugins: [
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                implementation: require('node-sass'),
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `FOSSNSS - F.O.S.S. Cell of NSS College of Engineering`,
                short_name: `FOSSNSS`,
                start_url: `/`,
                background_color: `#f87c56`,
                theme_color: `#f87c56`,
                display: `standalone`,
                icon: `src/images/foss-icon.png`, // This path is relative to the root of the site.
            },
        },
        'gatsby-plugin-catch-links',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/pages`,
                name: 'pages',
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/content`,
                name: `markdown-pages`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 750,
                            linkImagesToOriginal: false,
                            tracedSVG: true,
                            showCaptions: true,
                            markdownCaptions: true,
                        },
                    },
                    {
                        resolve: `gatsby-remark-figure-caption`,
                        options: { figureClassName: 'md-figure' },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-nprogress`,
            options: {
                // Setting a color is optional.
                color: `tomato`,
                // Disable the loading spinner.
                showSpinner: false,
            },
        },
        {
            resolve: 'gatsby-source-mastodon',
            options: {
              // The api url of your mastodon instance (e.g https://aus.social/api/v1)
              api_url: 'https://mas.to/api/v1/',
              // Number of toots to return
              limit: 25,
              // Access token for your Mastodon application
              access_token: '3e6e-w7tWw-CRSj8VlgpFGNEmpklksOJ9bbQ5KI_CUU',
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        //  `gatsby-plugin-offline`, Disable during initial devloping
    ],
};
