const path = require('path')

module.exports = {
  plugins: [
    {
      resolve: "smooth-doc",
      options: {
        name: "Rem Doc",
        description: "Rem Documentation Using Smooth Doc",
        siteUrl: "https://remdoc.gatsbyjs.io/",
        baseDirectory: path.resolve(__dirname, '../'),
        author: 'Rem',
        sections: ['About', 'Cheatsheet', 'Components', 'Reference'],
        navItems: [{ title: 'Docs', url: '/docs/' }],
      },
    },
  ],
};
