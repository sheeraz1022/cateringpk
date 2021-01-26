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
        // width: '100%',
        // height: '100%',
        // position: 'relative',
        // backgroundImage: `url('./buffet.jpg')`,
        // opacity: 1,
        // display: 'block',
        // zIndex: -1,
        // opacity: ,
        // "&::after":{
            
        //     content: '',
            
        //     position: 'absolute',
        //     top: 0,
        //     left: 0,
        //     bottom: 0,
        //     right: 0,
        //     zIndex: -1, 
        // }
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

  

function ListingsPage() {
    const classes = useStyles();
    const [caterers, setCaterers] = useState([]);

   

    useEffect(() => {
        client.getEntries().then((response) => {
            console.log('Response ==> ', response)
            setCaterers(response.items);
        }).catch(console.error)
    }, [])

   

    return (
    <Fragment>
        <MyAppBar />
            <img src="./buffet.jpg" height="400px" width="100%"/>
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

