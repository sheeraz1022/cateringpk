import { gql } from "@apollo/client";

export const QUERY_GET_ALL_SLUG = `
  query {
    nameCollection(preview: false) {
      total
      items {
        slug
      }
    }
  }
`;

export const QUERY_GET_ITEM_BY_SLUG = `query($slug: String) {
	nameCollection(preview: false, where: {slug_contains: $slug}) {
    total
    items {
      name
      slug
      description {
        json
      }
      imagesCollection {
        items {
          url
        }
      }
    }
  }
}`;
