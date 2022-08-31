import { css } from "@emotion/react"
import * as Popover from "@radix-ui/react-popover"
import { FC } from "react"
import { ShoppingCart } from "react-feather"

import { slideDown, slideUp, vwCalcFn } from "../../../styles/mixin"
import { CardContent } from "./CardContent"

export const CartCard: FC = () => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <ShoppingCart size={vwCalcFn(36)} />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content css={styles.content} align='end' sideOffset={10}>
          <CardContent />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

const styles = {
  container: css``,
  content: css`
    width: ${vwCalcFn(500)};
    padding: ${vwCalcFn(32)};
    background-color: white;
    height: 100%;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    &[data-side="top"] {
      animation-name: ${slideUp};
    }
    &[data-side="bottom"] {
      animation-name: ${slideDown};
    }
    :focus {
      outline: none;
    }
  `,
}
