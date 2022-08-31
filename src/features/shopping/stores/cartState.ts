import { useCallback } from "react"
import {
  RecoilState,
  atom,
  selector,
  useRecoilValue,
  useSetRecoilState,
} from "recoil"

import { Product } from "../types"

export type Cart = {
  products: Product[]
}

const initialState: Cart = {
  products: [],
}

export const cartState: RecoilState<Cart> = atom({
  key: "cartState",
  default: initialState,
})

const totalPriceSelector = selector({
  key: "totalPriceSelector",
  get: ({ get }) => {
    const cart = get(cartState)
    return cart.products.reduce((sum, product) => {
      return sum + product.price * product.quantity
    }, 0)
  },
})

export const useCartState = () => {
  return useRecoilValue(cartState)
}

export const useTotalPrice = () => {
  return useRecoilValue(totalPriceSelector)
}

export const useCartMutators = (): { setCart: (cart: Cart) => void } => {
  const setState = useSetRecoilState(cartState)
  const setCart = useCallback((cart: Cart) => setState(cart), [setState])

  return { setCart }
}
