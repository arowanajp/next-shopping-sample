import { css } from "@emotion/react"
import { FC } from "react"

import { vwCalcFn } from "../../styles/mixin"
import { Header } from "./Header"

type Props = {
  children: React.ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div css={styles.container}>
      <Header />
      <main css={styles.main}>{children}</main>
      <footer css={styles.footer}>LOGO</footer>
    </div>
  )
}

const styles = {
  container: css`
    display: grid;
    grid-template-rows: auto 1fr auto;
  `,

  header: css`
    height: ${vwCalcFn(100)};
  `,

  main: css`
    background-color: #add8e6;
    min-height: 100%;
    padding: ${vwCalcFn(32)} ${vwCalcFn(40)};
  `,

  footer: css`
    height: ${vwCalcFn(200)};
    background-color: white;
  `,
}
