import React from "react";
import Layout from "../../components/Layout";
import { QUERY_GET_ALL_SLUG, QUERY_GET_ITEM_BY_SLUG } from "../../src/queries";

export async function getStaticPaths() {
  let response = await fetch(
    "https://graphql.contentful.com/content/v1/spaces/tc2r8nsdfvnc",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        authorization: "Bearer IAmjEbbs5pNyT8Xymrzmse2bTE1rAuMWPrdEgrB99YM",
      },
      body: JSON.stringify({ query: QUERY_GET_ALL_SLUG }),
    }
  );

  const {
    data: {
      nameCollection: { items },
    },
  } = await response.json();

  const params = items.map((item) => {
    return {
      params: { slug: item.slug },
    };
  });

  return {
    paths: params,
    fallback: false, // See the "fallback" section below
  };
}

export async function getStaticProps(context) {
  const slug = context.params.slug;
  let response = await fetch(
    "https://graphql.contentful.com/content/v1/spaces/tc2r8nsdfvnc",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        authorization: "Bearer IAmjEbbs5pNyT8Xymrzmse2bTE1rAuMWPrdEgrB99YM",
      },
      body: JSON.stringify({
        query: QUERY_GET_ITEM_BY_SLUG,
        variables: { slug },
      }),
    }
  );

  const {
    data: {
      nameCollection: {
        items: [item],
      },
    },
  } = await response.json();

  return {
    props: { ...item },
  };
}

const ListingDetail = ({ name, slug, description: { json } }) => {
  return (
    <div>
      <Layout>{name}</Layout>
    </div>
  );
};

export default ListingDetail;
