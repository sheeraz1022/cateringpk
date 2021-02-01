import React, {Fragment, useState, useEffect} from 'react';
import ListingsPage from '../components/ListingsPage';
import { makeStyles } from '@material-ui/core/styles';
import MyAppBar from '../components/MyAppBar'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Listing from '../components/Listing'
import { client } from '../client';

const useStyles = makeStyles({
  root: {
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
      client.getEntries().then((response) => {
          console.log('Response ==> ', response)
          setCaterers(response.items);
      }).catch(console.error)
  }, [])

  // const { caterers } = props;
  return  (
    <Fragment>
        <MyAppBar />
            <img src="./bg_image.jpg" height="600px" width="100%"/>
            <Container className={classes.root}>
            <Paper>
            
            <Typography className={classes.heading} variant="h5" display="block">
                Catering Services in Karachi
            </Typography>
            <Grid container spacing={8}>
                {caterers.map(({fields: {name, rate, speciality, description, image: {fields: {file: url}}}}) => { 
                    return <Grid item>
                        <Listing rate={rate} heading={name} speciality={speciality} description={description} image={url}/>
                    </Grid>
                })}
            </Grid>
            </Paper>
            </Container>
            
    </Fragment> )
 
};

export default Index;
