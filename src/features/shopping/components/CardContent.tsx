import { css } from "@emotion/react"
import { FC } from "react"

import { useCartState, useTotalPrice } from "../stores/cartState"

export const CardContent: FC = () => {
  const cart = useCartState()
  const totalPrice = useTotalPrice()

  return (
    <div css={styles.container}>
      <div css={styles.products}>
        {cart.products.length === 0 && <p>カートに商品がありません</p>}
        {cart.products.map((product) => (
          <div css={styles.product} key={product.id}>
            <h3 css={styles.productName}>{product.name}</h3>
            <div css={styles.right}>
              <span css={styles.productQuantity}>{product.quantity}個</span>
              <span css={styles.productPrice}>
                ¥{product.price.toLocaleString()}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div css={styles.bottomWrapper}>
        {totalPrice > 0 && (
          <span css={styles.totalPrice}>¥{totalPrice.toLocaleString()}</span>
        )}
      </div>
    </div>
  )
}

const styles = {
  container: css``,
  products: css`
    display: flex;
    flex-direction: column;
    gap: 12px;
  `,
  product: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;
    padding-bottom: 12px;
  `,
  productName: css`
    font-size: 18px;
  `,
  right: css`
    display: flex;
    gap: 20px;
  `,
  productPrice: css``,
  productQuantity: css``,
  totalPrice: css`
    font-weight: bold;
  `,
  bottomWrapper: css`
    text-align: right;
    margin-top: 12px;
  `,
}
