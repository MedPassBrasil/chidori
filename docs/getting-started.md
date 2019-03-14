---
id: getting-started
title: Getting Started
sidebar_label: Installation
---

You must to have installed NodeJS (recommend v10+) and NPM (recommend v5+)

## Structure

```bash
- docusaurus
    └── docs
    └── website
- src
    └── scss
```

In `docusaurus` path is where installed Docusaurus from facebook, if you want to know more about, check it out: [docusaurus](https://docusaurus.io/)

In `src` path is where our styleguide is being constructed, using `sass` lang, which will be converted to a minified css into a path named `build`

## Putting style into your code

At the root path `./` please run the command below

```bash
npm install && npm build
```

It will generate a path named `build`, inside this path, has a file named `chidori.min.css`, just copy it to your project (at this time we hasn't automated versions)

## Contributing

If you wanna to add some documentation, please access the path `docusaurus/docs`, this path has some docs written in `markdown`, please check this [navigation](https://docusaurus.io/docs/en/navigation) to see how build a markdown page.
