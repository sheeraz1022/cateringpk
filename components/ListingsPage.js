import React, { Fragment, useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'
import MyAppBar from './MyAppBar'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Listing from './Listing'
import { client } from '../client';
// import BuffetImg from 'buffet.jpg';

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


  export async function getServerSideProps(context) {
      console.log('Sheeraz => getServerSideProps');
    let caterers = [];
    client.getEntries().then((response) => {
        console.log('Response ==> ', response)
        caterers = response.items;
    }).catch(console.error)
    return {
      props: {
        caterers
      }, 
    }
  }
  

function ListingsPage(props) {
    const classes = useStyles();
    console.log('Sheeraz => props', props);
    const { caterers } = props;
    // const [caterers, setCaterers] = useState([]);

   

    // useEffect(() => {
    //     client.getEntries().then((response) => {
    //         console.log('Response ==> ', response)
    //         setCaterers(response.items);
    //     }).catch(console.error)
    // }, [])

   

    return (
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
            
    </Fragment>
    )
}



ListingsPage.propTypes = {

}

export default ListingsPage

