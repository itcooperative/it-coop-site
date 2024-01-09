# itcoop

## Require

- Ensure that you have node v.16 in your local machine.
- Credentials for prismic.io repository.

## Build Setup

```bash
# install dependencies
$ yarn install

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate

# dev project
$ yarn dev
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Prismic CMS

App integrated with [Prismic CMS](https://prismic.io/).

For create any prismic data structure you hould use [slicemachine](https://prismic.io/docs/content-modeling#run-slice-machine)

```
$ yarn slicemachine
```
On `http://localhost:9999/` you can create new components and page and edit existing components.

## Tailwind

For styling used [Tailwind](https://tailwindcss.com/docs/) framework

## Netlify

Deploy in [Netlify](https://www.netlify.com/).

Contact form connect with netlify form manage system.

Deploy continue automaticly from github repo in every change main branch.

