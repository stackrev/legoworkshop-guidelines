# Nuxt 3 and Vuejs - the Canvas for Building your Event's App 

 <!-- title: Nuxt 3 and Vuejs - the Canvas for Building your Event's App  -->
![Image: Nuxt3](banner.png "Nuxt3")

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->
- [Nuxt 3 and Vuejs - the Canvas for Building your Event's App](#nuxt-3-and-vuejs---the-canvas-for-building-your-events-app)
- [Initiatlize your Project](#initiatlize-your-project)
- [Generate the content](#generate-the-content)
  - [Project Structure](#project-structure)
  - [Land some Attendees](#land-some-attendees)
- [Build and Deploy](#build-and-deploy)
- [GitActions for Automations](#gitactions-for-automations)
- [Conclusion](#conclusion)
  - [References](#references)
  - [Github](#github)

NuxtJs is the defacto VueJs framework you would use to build your apps, these being Single Page App (SPA), Server-side Rendering (SSR), or Static-Site Generating (SSG). It's the latter that we will use to create an application for our event - an Agile Development Workshop with Legos.

Why Nuxt and a Static app? 

Nuxt simplifies and structures your projects, paving the path to enterprise-ready architecture with various CLIs and tools to boot. 
We choose a Static app, because we want a Universal Application, which is discoverable and optimized for various search engines, plus the usecase here is simple with no external content to load or manipulate.

The Nuxt shown here, is part of the release candidate 3, which is a major upgrade of the Nuxt used in the industry and wa released with VueJs' major update to version 3.

# Initiatlize your Project

For this project I will use *yarn* instead of *npm* to manage dependencies and build the app.

To setup a project, nuxt offers a simple command to run within your node environment:

`npx nuxi init app`

Go to the *app* directory, and install all packages with using an  *yarn install*. Once this is done, run an *yarn dev* and navigate to *http://localhost:3000/* in your browser.

![Image: Quickstart page on Brower](quickstart.PNG "Quickstart page on Brower")

Since out of the box, nuxt3 comes with typescript, we should leverage the typing benefits by adding the required liraries and configuring type checkings. 
Add the libraries with:

`yarn add -D vue-tsc typescript`

Go to *nuxt.config.ts* in the app directory and enable automatic typechecking:

```ts
export default defineNuxtConfig({
  typescript: {
   typeCheck: true,
 },
})
```

run the eslint command `npx eslint --init` and go through the options to select vue and typescript to generate the correct eslint configuration file.
For nuxt3, this is how our *.eslintrc.yaml* is configured:

```yml
env:
  browser: true
  es2021: true
extends:
  - plugin:vue/base
  - plugin:vue/vue3-recommended
  - plugin:@typescript-eslint/recommended
  - '@nuxtjs/eslint-config-typescript'
parser: 'vue-eslint-parser'
parserOptions:
  parser: "@typescript-eslint/parser"
  ecmaVersion: latest
  ecmaFeatures: 
    jsx: true
  sourceType: module
plugins:
  - vue
  - '@typescript-eslint'
```

Don't forget to add the **--fix** to the linting command created in your package.json.

# Generate the content

## Project Structure

Let's plan our event app. We know we want a landing page, a registration page with sends these somewhere and an articles page, so that our organizers can generate content to be displayed.
Breaking it down in a Nuxt structure, this is what we plan:

- | *public*/: robots.txt and favicon.ico
- | *assets*/: Images and CSS we will deploy to the users.
- | *pages*/: Pages we will deploy. Nuxt will automatically import anything here.
  - | *index.vue*: Landing page.
  - | *register.vue*: How to register.
- | *content*/: Any additional articles or blogs the organizers want to show.

Our app should be pretty, and what better way to do this than to add a *Vuetify* template:

`vue add vuetify`

Choose vuetify 3 with VITE.

## Land some Attendees



# Build and Deploy

We will build a Static site generation (SSG), which means it prerenders every route of our app so navigation happens organically through html pages. Nuxt does this with a crawler to generate each HTML file. Add these configurations to the **nuxt.config.ts** to hint that we want a full static, not and preview version - which would have fetch API calls to each static page:

```ts
export default defineNuxtConfig({
  ...
  target: 'static', // This will make us full static, without api calls asyncData and fetch.
  ssr: false
})
```

# GitActions for Automations

# Conclusion


## References

- https://nuxtjs.org/
- https://vuejs.org/
- https://content.nuxtjs.org/
- https://next.vuetifyjs.com/en/getting-started/installation/


## Github

Code in this article is available on [Github](https://github.com/adamd1985/legoworkshop-guidelines).

#

<div align="right">Made with :heartpulse: by <b>Adam</b></div>