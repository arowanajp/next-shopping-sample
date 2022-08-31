import { MockedRequest, ResponseResolver, restContext } from "msw"

export const mockGetItems: ResponseResolver<
  MockedRequest,
  typeof restContext
> = async (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      products: [
        {
          id: 1,
          name: "商品1",
          price: 3000,
          url: "https://source.unsplash.com/7cERndkOyDw",
        },
        {
          id: 2,
          name: "商品2",
          price: 2000,
          url: "https://source.unsplash.com/7cERndkOyDw",
        },
        {
          id: 3,
          name: "商品3",
          price: 5000,
          url: "https://source.unsplash.com/7cERndkOyDw",
        },
        {
          id: 4,
          name: "商品4",
          price: 400,
          url: "https://source.unsplash.com/7cERndkOyDw",
        },
        {
          id: 5,
          name: "商品5",
          price: 100,
          url: "https://source.unsplash.com/7cERndkOyDw",
        },
        {
          id: 6,
          name: "商品6",
          price: 8000,
          url: "https://source.unsplash.com/7cERndkOyDw",
        },
        {
          id: 7,
          name: "商品7",
          price: 2500,
          url: "https://source.unsplash.com/7cERndkOyDw",
        },
      ],
    })
  )
}
