import * as contentful from "contentful";
import { ApolloClient, createHttpLink, InMemoryCache, gql } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

export const client = contentful.createClient({
    space: 'tc2r8nsdfvnc',
    accessToken: 'IAmjEbbs5pNyT8Xymrzmse2bTE1rAuMWPrdEgrB99YM',
});


const httpLink = createHttpLink({
    uri: 'https://graphql.contentful.com/content/v1/spaces/tc2r8nsdfvnc',
  });
  
  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = 'IAmjEbbs5pNyT8Xymrzmse2bTE1rAuMWPrdEgrB99YM';
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${token}`,
      }
    }
  });
  
  export const gqlClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });
