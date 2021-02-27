import React, { Fragment, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../components/Layout";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Listing from "../components/Listing";
import { initializeApollo } from "../client";
import _ from "lodash";
import { useQuery, gql } from "@apollo/client";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#FFFFFF",
    padding: 0,
  },
  paper: {
    opacity: 1,
  },
  heading: {
    paddingTop: 10,
    paddingBottom: 20,
    paddingLeft: 0,
    paddingRight: 0,
  },
  listing: {
    maxWidth: 748,
  },
  media: {
    height: 280,
  },
});

const MY_QUERY = gql`
  query {
    nameCollection(preview: false) {
      total
      items {
        name
        slug
        rate
        speciality
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
  }
`;

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: MY_QUERY,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
}

const Index = (props) => {
  const classes = useStyles();

  const { loading, error, data } = useQuery(MY_QUERY);

  if (error) return <div>Error loading players.</div>;
  if (loading) return <div>Loading</div>;

  let caterers = [];
  if (data) {
    caterers = data.nameCollection.items.map((item) => {
      console.log("Sheeraz => item", item);
      const {
        name,
        slug,
        rate,
        speciality,
        description: { json },
        imagesCollection: { items },
      } = item;
      return {
        name,
        slug,
        rate,
        speciality,
        description: json,
        images: items.map((imageItem) => imageItem.url),
      };
    });
  }

  return (
    <Layout>
      <Box>
        <img
          style={{ backgroundColor: "#e5e5e5" }}
          src="./bg_image.jpg"
          height="600px"
          width="100%"
        />
      </Box>
      <div style={{ backgroundColor: "#e5e5e5" }}>
        <Container className={classes.root}>
          <Paper style={{ backgroundColor: "#e5e5e5" }}>
            <Typography
              className={classes.heading}
              variant="h5"
              display="block"
            >
              Catering Services in Karachi
            </Typography>
            <Grid container spacing={8} style={{ display: "block" }}>
              {/* {caterers.map(({fields: {name, rate, speciality, description, image: {fields: {file: url}}}}) => {  */}
              {caterers.map(
                ({ name, rate, speciality, description = null, images }) => (
                  <Grid item>
                    <Listing
                      rate={rate}
                      heading={name}
                      speciality={speciality}
                      description={description}
                      images={images}
                    />
                  </Grid>
                )
              )}
            </Grid>
          </Paper>
        </Container>
      </div>
    </Layout>
  );
};

export default Index;
