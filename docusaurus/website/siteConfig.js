/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
  title: 'Chidori',
  tagline: 'MedPass\'s Styleguide',
  url: 'https://medpass.com.br',
  baseUrl: '/',
  projectName: 'chidori',
  organizationName: 'MedPass Brasil',
  defaultVersionShown: '1.0.0',
  headerLinks: [
    { doc: 'getting-started', label: 'Docs' },
    { page: 'help', label: 'Help' },
    { href: 'https://github.com/MedPassBrasil/chidori', label: 'GitHub' },
    { search: true }
  ],
  headerIcon: 'img/medpass.png',
  footerIcon: 'img/medpass.png',
  favicon: 'img/favicon.png',
  colors: {
    primaryColor: '#514285',
    secondaryColor: '#45c6d6',
  },
  copyright: `Copyright © ${new Date().getFullYear()} MedPass Brasil`,
  highlight: {
    theme: 'railscasts'
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,
  stylesheets: ['/css/chidori.css']
};

module.exports = siteConfig;
