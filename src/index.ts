import { createSubscription } from "../lib/shopify/admin"
import { createCheckoutFor } from "../lib/shopify/storefront"

createSubscription(null as any, null as any, true)
createCheckoutFor(1, null as any)

export { createCheckoutFor, createSubscription }
