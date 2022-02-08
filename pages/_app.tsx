import type { ReactElement, ReactNode } from "react"
import type { NextPage } from "next"
import type { AppProps } from "next/app"
import { Provider } from "react-redux"
import "tailwindcss/tailwind.css"
import "../styles/globals.css"
import { store } from "../store"
import "react-toastify/dist/ReactToastify.css"

import { ToastContainer } from "react-toastify"

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
