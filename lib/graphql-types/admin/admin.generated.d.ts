/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import type * as AdminTypes from './admin.types';

export type CreateSubscriptionMutationVariables = AdminTypes.Exact<{
  name: AdminTypes.Scalars['String']['input'];
  test: AdminTypes.Scalars['Boolean']['input'];
  returnUrl: AdminTypes.Scalars['URL']['input'];
  lineItems: Array<AdminTypes.AppSubscriptionLineItemInput> | AdminTypes.AppSubscriptionLineItemInput;
}>;


export type CreateSubscriptionMutation = { appSubscriptionCreate?: AdminTypes.Maybe<(
    Pick<AdminTypes.AppSubscriptionCreatePayload, 'confirmationUrl'>
    & { userErrors: Array<Pick<AdminTypes.UserError, 'field' | 'message'>>, appSubscription?: AdminTypes.Maybe<(
      Pick<AdminTypes.AppSubscription, 'id'>
      & { lineItems: Array<(
        Pick<AdminTypes.AppSubscriptionLineItem, 'id'>
        & { plan: { pricingDetails: { __typename: 'AppRecurringPricing' | 'AppUsagePricing' } } }
      )> }
    )> }
  )> };

interface GeneratedQueryTypes {
}

interface GeneratedMutationTypes {
  "\n      mutation CreateSubscription(\n        $name: String!\n        $test: Boolean!\n        $returnUrl: URL!\n        $lineItems: [AppSubscriptionLineItemInput!]!\n      ) {\n        appSubscriptionCreate(\n          name: $name\n          test: $test\n          returnUrl: $returnUrl\n          lineItems: $lineItems\n        ) {\n          userErrors {\n            field\n            message\n          }\n          confirmationUrl\n          appSubscription {\n            id\n            lineItems {\n              id\n              plan {\n                pricingDetails {\n                  __typename\n                }\n              }\n            }\n          }\n        }\n      }\n    ": {return: CreateSubscriptionMutation, variables: CreateSubscriptionMutationVariables},
}
declare module '@shopify/admin-api-client' {
  type InputMaybe<T> = AdminTypes.InputMaybe<T>;
  interface AdminQueries extends GeneratedQueryTypes {}
  interface AdminMutations extends GeneratedMutationTypes {}
}
