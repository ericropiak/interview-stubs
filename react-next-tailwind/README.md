# Steps to get going

## Installation

- `npx create-next-app@latest`

## Restructuring to use `pages`

- Replace the `app/` directory with `pages/`. Globals should live as siblings to `pages/`
- Remove layout.tsx
- Remove `"./src/app/**/*.{js,ts,jsx,tsx,mdx}",` from tailwind config
- Move the generated home page into `pages/index.tsx`
- Create `_app.tsx` in `pages` and add this code to reuse a single layout for the application:

```
import { AppProps } from 'next/app';

import "../globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  )
}
```

## Add pageComponents

- Add `pageComponents/` directory
- Move `pages/index.ts` into a component at `pageComponents/HomePage`
- Export that component from `pages/index.ts`
- Add `"./src/pageComponents/**/*.{js,ts,jsx,tsx,mdx}",` to tailwind config


## Creating API endpoint

- https://nextjs.org/docs/pages/building-your-application/routing/api-routes
- Add directory at `pages/api`
- Add `hello.ts` with snippet from link above

## Interact with API endpoint

- Inside of `pageComponents/HomePage` add `getServerSideProps.ts`
- Add `"axios": "1.6.7"` to package json and npm install
- Try to hit our API endpoint `const resp =  await axios.get('http://localhost:3000/api/hello')`