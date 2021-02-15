import React, {Fragment, useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../components/Layout'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Listing from '../components/Listing'
import { gqlClient } from '../client';
import _ from 'lodash';
import { ApolloProvider, gql } from '@apollo/client';

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


// export async function getServerSideProps() {
//   console.log('Sheeraz => getServerSideProps');
//   let caterers = [];
//   const response = await client.getEntries();
//   caterers = response.items;

//   return {
//     props: {
//       caterers
//     }
//   }
// }




const Index = (props) => {
  const classes = useStyles();
  
  const [caterers, setCaterers] = useState([]);

   

  useEffect(() => {


    gqlClient.query({
    query: gql`query {
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
}`
  })
  .then(result => {
      console.log('Sheeraz => result', result);
      let listings = [];
      listings = result.data.nameCollection.items.map((item) => {
          console.log('Sheeraz => item', item);
          const { name, slug, rate, speciality, description: { json } , imagesCollection: { items } } = item;
          return {
              name,
              slug,
              rate,
              speciality,
              description: json,
              images: items.map((imageItem) => imageItem.url)
          }
      })
      setCaterers(listings);
  });


    //   client.getEntries({'content_type':'name'}).then((response) => {
    //       console.log('Response ==> ', response);
    //       console.log('items ==> ', response.items);
    //       let listings = [];
    //       listings = response.items.map((item) => {
    //           const { name, rate, speciality, description, images=[] } = item.fields;
    //           return {
    //               name,
    //               rate,
    //               speciality,
    //               description,
    //               images: images.map((imageItem) => imageItem.fields.file.url)
    //           }  
    //       })
    //       console.log('listings ==> ', listings);
    //       setCaterers(listings);
    //   }).catch(console.error)
  }, [])

  // const { caterers } = props;
  return  (
      <ApolloProvider client={gqlClient}>
    <Layout>
        
            <Box>
                <img style={{backgroundColor: "#e5e5e5"}} src="./bg_image.jpg" height="600px" width="100%"/>
            </Box>
            <div style={{backgroundColor: "#e5e5e5"}}>
            <Container className={classes.root}>
            <Paper style={{backgroundColor: "#e5e5e5"}}>
            
            <Typography className={classes.heading} variant="h5" display="block">
                Catering Services in Karachi
            </Typography>
            <Grid container spacing={8} style={{display: "block"}}>
                {/* {caterers.map(({fields: {name, rate, speciality, description, image: {fields: {file: url}}}}) => {  */}
                {caterers.map(({name, rate, speciality, description=null, images}) => <Grid item>
                        <Listing rate={rate} heading={name} speciality={speciality} description={description} images={images}/>
                    </Grid>
                )}
            </Grid>
            </Paper>
            </Container>
            </div>
            
    </Layout> 
    </ApolloProvider>)
 
};

export default Index;
