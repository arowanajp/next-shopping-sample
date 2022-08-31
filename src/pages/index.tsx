import type { NextPage } from "next"
import { useEffect, useState } from "react"

import { UtilTitle } from "../components/elements/UtilTitle"
import { Layout } from "../components/layouts/Layout"
import { ProductList } from "../features/shopping/components/ProductList"
import { Product } from "../features/shopping/types"

const Home: NextPage = () => {
  const [items, setItems] = useState<Product[]>([])

  useEffect(() => {
    const getItems = async () => {
      const { products } = await fetch("/items").then((res) => res.json())
      setItems(products)
    }

    getItems()
  }, [])

  return (
    <Layout>
      <UtilTitle title='商品一覧' />
      <ProductList items={items} />
    </Layout>
  )
}

export default Home
