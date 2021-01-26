import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { PropTypes } from 'prop-types'
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SvgIcon from '@material-ui/core/SvgIcon';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { green } from '@material-ui/core/colors';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import IconButton from '@material-ui/core/IconButton';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Carousel from 'react-material-ui-carousel'
import Stars from './Stars';

const useStyles = makeStyles({
  root: {
    minWidth: 748,
  },
  bottom: {
    justifyContent: 'flex-end',
  },
  stars: {
    backgrounSize: '20px 30px',
  },
  media: {
    height: 280,
  },
  avatar: {
    backgroundColor: green[500],
  },
  cardHeader: {
    background: 'linear-gradient(to right bottom, #33ccff, #ff99cc)'
    // backgroundColor: 'linear-gradient(to right, red , yellow)'
  }
});

const openFB = () => {
  window.open('https://www.facebook.com', '_blank');
    // e.preventDefault();
    // window.location.href='http://google.com';
};

const openWhatsApp = () =>{
  window.open('https://web.whatsapp.com/send?phone=60173920363&text=Hi%0A%0AI%20have%20got%20your%20information%20from%20Catering%20PK.', '_blank');
}

export function Listing({heading, rate, speciality, description, image: {url}}) {
  const classes = useStyles();
  
  console.log('description before', description);
  console.log('description', documentToReactComponents(description));

  return (
    <Card className={classes.root}>
        <CardHeader className={classes.cardHeader}
        avatar={
          <Avatar className={classes.avatar}>
            S
          </Avatar>
        }
        title={heading}
        subheader="September 14, 2016"
      />
      
        <Carousel animation="slide" navButtonsAlwaysVisible={true} autoPlay={false}>
          <CardMedia
            key={1}
            className={classes.media}
            image={url}
            title="Contemplative Reptile"
          />
            <CardMedia
            key={2}
            className={classes.media}
            image={url}
            title="Contemplative Reptile"
          />
        </Carousel>
        <CardActionArea>
         <CardContent>
            <Grid container justify="flex-start" alignItems="center" spacing={1}>
                <Grid item>
                    <Typography variant="subtitle1">
                        Speciality:
                    </Typography>
                    
                </Grid>
                <Grid item>
                    <Typography variant="h5" component="h3">
                        {speciality}
                    </Typography>
                </Grid>
          </Grid>
          <Grid container justify="flex-start" alignItems="center" spacing={3}>
                <Grid item>
                    <Typography variant="subtitle1">
                            Cost:
                    </Typography>
                </Grid>
                <Grid item>
                <Typography variant="h6" component="h6">
                    {rate}
                </Typography>
                </Grid>
          </Grid>
          <Typography variant="body2" color="textSecondary" component="p">
            Special discount on booking of 500 persons
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {documentToReactComponents(description)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{justifyContent:'space-between'}}>
        <Paper elevation={0}>
        <IconButton color="primary" aria-label="facebook" component="span" onClick={openFB}>
            <FacebookIcon />
        </IconButton>
        <IconButton color="primary" aria-label="whatsapp" component="span" onClick={openWhatsApp}>
            <WhatsAppIcon />
        </IconButton>
      </Paper>
      <Stars  star={5}/>
      </CardActions>
    </Card>
  );
}

Listing.propTypes = {
    heading: PropTypes.string,
    
}

export default Listing;
