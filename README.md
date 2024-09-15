# w3

My awesome portfolio website redesigned & built with Next.js + React + TailwindCSS + ShadCN + MDX.

- [Live Demo](https://w3rudra.vercel.app/)
- Clean, minimal & modern UI
- Performance & SEO friendly
- Highly customizable and templatable, pulls data from `content/` directory
- Blog powered with MDX.js
- Work/Project showcase
- API based opengraph image generation
- Web analytics

## Getting Started

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/FireHead90544/w3.git
    cd w3
    ```

2. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

### Setup Environment Variables

Create a `.env.local` file in the root directory (or setup your production environment) and add the following environment variables:

| Environment Variable           | Required?                              | Example                                |
|--------------------------------|----------------------------------------|----------------------------------------|
| `HOST_DOMAIN`                  | No, if hosting on Vercel/localhost     | `mydomain.xyz`                         |
| `NEXT_PUBLIC_UMAMI_WEBSITE_ID` | No, if you don't want to use analytics | `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx` |
| `NEXT_PUBLIC_UMAMI_URL`        | No, if you don't want to use analytics | `https://cloud.umami.is`               |

### Setup Content/Template Data

Ensure the following files inside the `content` folder are set up correctly for data to be used in templates:

- `content/misc/meta.json`: Metadata, Template Data
- `content/misc/facts.json`: Fun Facts About You
- `content/work/projects.json`: Project Showcase Data

### Setup Assets

Ensure the following assets are present in the `public` folder to be used by the application:

- `public/fonts/*.ttf`: Fonts used with the OpenGraph Image generation API
- `public/meta/og-default.png`: Default OpenGraph Image for Metadata
- `public/meta/og-light.png`: Image Template to be used with OpenGraph Image generation API
- `public/resume.pdf`: Your good ol' resume

### Setup Blog

To create a post with the url `/blog/post-slug`, create `content/blog/post-slug.mdx` with the following data:

```mdx
---
title: Post Title
summary: SEO Friendly Description
publish_date: YYYY-MM-DD
---

# MDX Friendly Post Content Here
```

### Running the Development Server

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy

You can deploy this app on Vercel in a single click by using the button below.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FFireHead90544%2Fw3&env=NEXT_PUBLIC_UMAMI_WEBSITE_ID,NEXT_PUBLIC_UMAMI_URL&envDescription=UMAMI%20Integration%20for%20Web%20Analytics&envLink=https%3A%2F%2Fgithub.com%2FFireHead90544%2Fw3%2Ftree%2Fmain%2FREADME.md%23setup-environment-variables)

## LICENSE

This project is licensed under the Apache LICENSE 2.0. You can find it [here](https://github.com/FireHead90544/w3/blob/main/LICENSE).
