import { ApolloClient } from "@apollo/client";
import { InMemoryCache } from "@apollo/client/cache";

export const apolloClient = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});
