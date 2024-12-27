import { StorefrontClient } from "@shopify/shopify-api/dist/ts/lib/clients/storefront/client"

type StorefrontProp = {
  storefront: StorefrontClient
}

export async function createCheckoutFor(
  variantId: number | string,
  adminProp: StorefrontProp
) {
  //`gid://shopify/ProductVariant/${variantId}`
  const merchandiseId =
    typeof variantId === "number"
      ? `gid://shopify/ProductVariant/${variantId}`
      : variantId

  const { storefront } = adminProp

  const resp = await storefront.request(
    /* GraphQL */ `
      mutation getCheckoutUrl($input: CartInput!) {
        cartCreate(input: $input) {
          cart {
            checkoutUrl
          }
          userErrors {
            field
            message
          }
        }
      }
    `,
    {
      variables: {
        input: {
          lines: [
            {
              merchandiseId,
              quantity: 1,
              asdf: 2
            }
          ]
        }
      }
    }
  )
  const errs = resp.data!.cartCreate?.userErrors

  const resp2 = await storefront.request(
    `#graphql
      mutation getCheckoutUrl($input: CartInput!) {
        cartCreate(input: $input) {
          cart {
            checkoutUrl
          }
          userErrors {
            field
            message
          }
        }
      }`,
    {
      variables: {
        input: {
          lines: [
            {
              merchandiseId,
              quantity: 1,
              asdf: 2
            }
          ]
        }
      }
    }
  )
  const errs2 = resp2.data.cartCreate2.userErrors2

  return { resp, errs, resp2, errs2 }
}
