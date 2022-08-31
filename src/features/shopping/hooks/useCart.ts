import { useCallback } from "react"
import { useRecoilState } from "recoil"

import { cartState } from "../stores/cartState"
import { Product } from "../types"

export const useCart = () => {
  const [cart, setCart] = useRecoilState(cartState)

  const addCart = useCallback(
    (product: Product): void => {
      const selectedItem = cart.products.find(
        (_product) => _product.id === product.id
      )

      if (!selectedItem) {
        product.quantity = 1
        setCart({
          products: [...cart.products, product],
        })
      } else {
        setCart((prevCart) => {
          return {
            products: prevCart.products.map((_product) =>
              _product.id === selectedItem.id
                ? { ..._product, quantity: _product.quantity + 1 }
                : _product
            ),
          }
        })
      }
    },
    [cart]
  )

  const removeCart = useCallback(
    (product: Product) => {
      const selectedItem = cart.products.find((v) => v.id === product.id)

      if (!selectedItem) return

      if (selectedItem.quantity > 1) {
        const updatedProducts = cart.products.map((product) =>
          product.id === selectedItem.id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        setCart({ products: updatedProducts })
      } else {
        const index = cart.products.findIndex(
          (product) => product.id === selectedItem.id
        )
        if (index === -1) return

        const products = [...cart.products]
        products.splice(index, 1)

        setCart({ products })
      }
    },
    [setCart]
  )
  return { addCart, removeCart }
}
