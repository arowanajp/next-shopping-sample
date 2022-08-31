import { Global, css } from "@emotion/react"
import emotionReset from "emotion-reset"
import type { AppProps } from "next/app"
import { parseCookies, setCookie } from "nookies"
import { useEffect } from "react"
import { RecoilRoot } from "recoil"

import {
  Cart,
  useCartMutators,
  useCartState,
} from "../features/shopping/stores/cartState"

if (process.env.NODE_ENV === "development") {
  const MockServer = () => import("../mocks/worker")
  MockServer()
}

const styles = css`
  ${emotionReset}
`

function Init() {
  const { setCart } = useCartMutators()

  useEffect(() => {
    const cookies = parseCookies()

    if (cookies.cart) {
      const cookiesCart: Cart = JSON.parse(cookies.cart)

      if (cookiesCart.products.length > 0) {
        setCart({
          products: cookiesCart.products,
        })
      }
    }
  }, [setCart])

  return null
}

function WatchCart() {
  const cart = useCartState()

  useEffect(() => {
    setCookie(null, "cart", JSON.stringify(cart))
  }, [cart])

  return null
}
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Global styles={styles} />
      <Component {...pageProps} />
      <Init />
      <WatchCart />
    </RecoilRoot>
  )
}

export default MyApp
