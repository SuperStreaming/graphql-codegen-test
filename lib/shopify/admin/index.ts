import { GraphqlClient } from "@shopify/shopify-api"
import { CurrencyCode } from "lib/graphql-types/storefront/storefront.types"

type AdminProp = {
  admin: GraphqlClient
}

export async function createSubscription(
  subProp: {
    name: string
    returnUrl: string
    amount: number
    currencyCode: string
  },
  adminProp: AdminProp,
  test: boolean,
  terms = "Charge based on usage",
  currencyCode = CurrencyCode.Usd
) {
  const { admin } = adminProp

  const resp = await admin.request(
    /* GraphQL */ `
      mutation CreateSubscription(
        $name: String!
        $test: Boolean!
        $returnUrl: URL!
        $lineItems: [AppSubscriptionLineItemInput!]!
      ) {
        appSubscriptionCreate(
          name: $name
          test: $test
          returnUrl: $returnUrl
          lineItems: $lineItems
        ) {
          userErrors {
            field
            message
          }
          confirmationUrl
          appSubscription {
            id
            lineItems {
              id
              plan {
                pricingDetails {
                  __typename
                }
              }
            }
          }
        }
      }
    `,
    {
      variables: {
        test,
        name: subProp.name,
        returnUrl: subProp.returnUrl,
        lineItems: [
          {
            plan: {
              appUsagePricingDetails: {
                terms,
                cappedAmount: {
                  amount: subProp.amount,
                  currencyCode: currencyCode
                }
              }
            }
          }
        ]
      }
    }
  )

  return resp
}
