import { rest } from "msw"

import { mockGetItems } from "./api/shopping/item"

export const handlers = [rest.get(`/items`, mockGetItems)]
