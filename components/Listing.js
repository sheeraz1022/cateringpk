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
  listingTitle: {
    // background: 'linear-gradient(to right bottom, #33ccff, #ff99cc)'
    color: "#D51365",
    fontSize: [20, "!important"],
    marginTop: 10
    // backgroundColor: 'linear-gradient(to right, red , yellow)'
  }, 
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
        <CardHeader
        avatar={
          <svg xmlns="http://www.w3.org/2000/svg" width="56.812" height="57.087" viewBox="0 0 56.812 57.087">
  <g id="buffet_1_" data-name="buffet (1)" transform="translate(-1.235)">
    <path id="Path_207" data-name="Path 207" d="M216.638,316.952c-1.383,0-1.833,1.093-3.148,2.243l-1.6-1.6a2.184,2.184,0,0,0-3.108,3.069l4.712,4.361c3.975-3.959,5.332-4.238,5.332-5.885C218.822,318.553,217.845,316.952,216.638,316.952Z" transform="translate(-183.849 -281.609)" fill="rgba(213,19,101,0.8)"/>
    <path id="Path_208" data-name="Path 208" d="M381.873,11.75A6.7,6.7,0,0,0,377.76,0l-.127,3.343a3.349,3.349,0,0,1,2.053,5.876c-5.184,4.479-3.558,10.3-3.858,12.521h3.345C379.469,19.187,378.077,15.029,381.873,11.75Z" transform="translate(-332.806)" fill="rgba(213,19,101,0.8)"/>
    <path id="Path_209" data-name="Path 209" d="M95.814,44.287a5.012,5.012,0,0,0,.176-7.634c-1.886-1.687-1.368-3.8-1.453-4.364H91.191a8.248,8.248,0,0,0,2.568,6.857,1.664,1.664,0,0,1-.056,2.545,7.489,7.489,0,0,0-2.726,5.857v2.879h3.345C94.5,48.658,93.682,46.02,95.814,44.287Z" transform="translate(-79.736 -28.689)" fill="rgba(213,19,101,0.8)"/>
    <path id="Path_210" data-name="Path 210" d="M62.818,176.449a5.53,5.53,0,0,1,7.058-8.457,5.53,5.53,0,0,1,7.058,8.457l-.047.045-4.211,3.9H93.232a23.465,23.465,0,0,0-18.808-21.3,5.017,5.017,0,1,0-9.1,0,23.465,23.465,0,0,0-18.808,21.3H67.076ZM68.2,156.975a1.673,1.673,0,1,1,1.673,1.673A1.675,1.675,0,0,1,68.2,156.975Z" transform="translate(-40.234 -135.013)" fill="rgba(213,19,101,0.8)"/>
    <path id="Path_211" data-name="Path 211" d="M1.235,436.956a10.052,10.052,0,0,0,9.9,8.363H48.151a10.052,10.052,0,0,0,9.9-8.363Z" transform="translate(0 -388.232)" fill="rgba(213,19,101,0.8)"/>
  </g>
</svg>

        }
        title={<Typography className={classes.listingTitle} variant="h5">
          {heading}
      </Typography>}
        // subheader="Reviews (100)"
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
