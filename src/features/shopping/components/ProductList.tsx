import { css } from "@emotion/react"
import { FC } from "react"

import { vwCalcFn } from "../../../styles/mixin"
import { Product } from "../types"
import { ProductCard } from "./ProductCard"

type Props = {
  items: Product[]
}

export const ProductList: FC<Props> = ({ items }) => {
  return (
    <div css={styles.container}>
      {items.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

const styles = {
  container: css`
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(4, minmax(${vwCalcFn(300)}, 1fr));
    margin-top: 32px;
  `,
}
