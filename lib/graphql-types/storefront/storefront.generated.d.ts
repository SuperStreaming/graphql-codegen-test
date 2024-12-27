/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import type * as StorefrontTypes from './storefront.types';

export type GetCheckoutUrlMutationVariables = StorefrontTypes.Exact<{
  input: StorefrontTypes.CartInput;
}>;


export type GetCheckoutUrlMutation = { cartCreate?: StorefrontTypes.Maybe<{ cart?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Cart, 'checkoutUrl'>>, userErrors: Array<Pick<StorefrontTypes.CartUserError, 'field' | 'message'>> }> };

interface GeneratedQueryTypes {
}

interface GeneratedMutationTypes {
  "\n      mutation getCheckoutUrl($input: CartInput!) {\n        cartCreate(input: $input) {\n          cart {\n            checkoutUrl\n          }\n          userErrors {\n            field\n            message\n          }\n        }\n      }\n    ": {return: GetCheckoutUrlMutation, variables: GetCheckoutUrlMutationVariables},
  "#graphql\n      mutation getCheckoutUrl($input: CartInput!) {\n        cartCreate(input: $input) {\n          cart {\n            checkoutUrl\n          }\n          userErrors {\n            field\n            message\n          }\n        }\n      }": {return: GetCheckoutUrlMutation, variables: GetCheckoutUrlMutationVariables},
}
declare module '@shopify/storefront-api-client' {
  type InputMaybe<T> = StorefrontTypes.InputMaybe<T>;
  interface StorefrontQueries extends GeneratedQueryTypes {}
  interface StorefrontMutations extends GeneratedMutationTypes {}
}
