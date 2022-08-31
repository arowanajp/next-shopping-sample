import { css } from "@emotion/react"
import { FC } from "react"

type Props = {
  title: string
}

export const UtilTitle: FC<Props> = ({ title }) => {
  return (
    <div>
      <h2 css={styles.title}>{title}</h2>
    </div>
  )
}

const styles = {
  title: css`
    font-size: 28px;
    font-weight: bold;
  `,
}
