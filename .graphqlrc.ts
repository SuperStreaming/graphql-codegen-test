import { ApiType, shopifyApiProject } from "@shopify/api-codegen-preset"

export default {
  schema: "https://shopify.dev/storefront-graphql-direct-proxy/2024-10",
  documents: ["lib/**/*.ts"],
  projects: {
    default: shopifyApiProject({
      apiType: ApiType.Admin,
      apiVersion: "2024-10",
      documents: ["./lib/shopify/admin/*.ts"],
      outputDir: "./lib/graphql-types/admin"
    }),
    storefront: shopifyApiProject({
      apiType: ApiType.Storefront,
      apiVersion: "2024-10",
      documents: ["./lib/shopify/storefront/*.ts"],
      outputDir: "./lib/graphql-types/storefront"
    })
  }
}
