import { css } from "@emotion/react"
import { FC } from "react"

import { vwCalcFn } from "../../../styles/mixin"
import { useCart } from "../hooks/useCart"
import { Product } from "../types"

type Props = {
  product: Product
}

export const ProductCard: FC<Props> = ({ product }) => {
  const { addCart } = useCart()
  return (
    <div css={styles.container}>
      <div css={styles.cardHeader}>
        <img css={styles.cardImage} src={product.url} alt='商品画像' />
      </div>
      <div css={styles.cardBody}>
        <h3 css={styles.productName}>{product.name}</h3>
        <p css={styles.productPrice}>¥{product.price.toLocaleString()}</p>
        <button css={styles.button} onClick={() => addCart(product)}>
          カートに入れる
        </button>
      </div>
    </div>
  )
}

const styles = {
  container: css`
    width: 100%;
    background-color: white;
    height: 100%;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  `,
  cardHeader: css`
    width: 100%;
    max-height: 300px;
  `,
  cardImage: css`
    max-width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 15px 15px 0 0;
  `,
  cardBody: css`
    padding: ${vwCalcFn(20)};
  `,
  productName: css`
    font-size: 20px;
    font-weight: bold;
  `,
  productPrice: css`
    margin-top: 10px;
    font-size: 16px;
  `,
  button: css`
    display: block;
    padding: 6px 6px;
    font-size: 14px;
    background-color: #a4c6ff;
    border: none;
    border-radius: 1000px;
    color: #fff;
    font-weight: bold;
    margin-left: auto;
    cursor: pointer;
    :hover {
      opacity: 0.8;
    }
  `,
}
