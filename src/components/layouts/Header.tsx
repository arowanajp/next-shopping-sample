import { css } from "@emotion/react"
import { FC } from "react"

import { CartCard } from "../../features/shopping/components/CartCard"
import { useCartState } from "../../features/shopping/stores/cartState"
import { vwCalcFn } from "../../styles/mixin"

export const Header: FC = () => {
  const cart = useCartState()
  const productCount = cart.products.length

  return (
    <header css={styles.header}>
      <h1 css={styles.logo}>SHOP</h1>
      <div css={styles.cart}>
        <CartCard />
        {productCount > 0 && <span css={styles.count}>{productCount}</span>}
      </div>
    </header>
  )
}

const styles = {
  header: css`
    padding: 0 ${vwCalcFn(40)};
    height: ${vwCalcFn(100)};
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  logo: css`
    font-size: 28px;
    font-weight: bold;
  `,
  cart: css`
    position: relative;
    display: flex;
    gap: 2px;
    cursor: pointer;
  `,
  count: css`
    position: absolute;
    top: -8px;
    right: -12px;
    padding: 4px 6px;
    background: red;
    border-radius: 50%;
    color: white;
    font-size: 8px;
  `,
}
