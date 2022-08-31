import { SerializedStyles, css, keyframes } from "@emotion/react"

import { maxSize, spSize, tabSize } from "./config"

export const vwCalcFn = (value: number, vp: number | string = maxSize) =>
  `calc(${value} / ${vp} * 100vw)`

export const spFn = (content: SerializedStyles) => css`
  @media (max-width: (${spSize})) {
    ${content}
  }
`

export const tabFn = (content: SerializedStyles) => css`
  @media (min-width: (${spSize})) and (max-width: (${tabSize})) {
    ${content}
  }
`
export const pcFn = (content: SerializedStyles) => css`
  @media (min-width: (${spSize})) {
    ${content}
  }
`

export const slideDown = keyframes`
  0%: { opacity: 0, transform: translateY(-2px) }
  100%: { opacity: 1, transform: translateY(0) }
`

export const slideUp = keyframes`
  0%: { opacity: 0, transform: translateY(2px) }
  100%: { opacity: 1, transform: translateY(0) }
`

export {}
