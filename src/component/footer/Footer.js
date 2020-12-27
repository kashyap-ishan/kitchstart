import React from "react";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Hidden from '@material-ui/core/Hidden';

import "./footer.css";
export const URLS = {
  faceBook: 'https://www.facebook.com/shutterifie/',
  twitter: 'https://twitter.com/shutterifie',
  instaGram: 'https://www.instagram.com/shutterifie/',
  youTube: 'https://www.youtube.com/channel/UCJJh38Ye4UPxOwlJ9nKUcKQ/',
  pinTerest: 'https://in.pinterest.com/shutterifie/'
}
const Footer = () => {
  const extRouteNav = whereTo => {
    window.open(URLS[whereTo], "_blank") //to open new page
  }
  return (
    <div className="app-footer">
      <Grid container align-items="center">
        <Hidden smDown>
        <Grid item xs>
          <Grid container>
            <div className="footer-content"> Kitchstart is building India’s largest network of Kitchens & Foodpreneurs to enable a hassle-free process from recipe to table.</div>
          </Grid>
        </Grid>
        </Hidden>
        <Grid item xs>
          <Grid container >
            <div className="footer-contacts">
              <a href="mailto:contact@kitchstart.com" target="_blank" rel='noreferrer'>contact@kitchstart.com</a>
            </div>
          </Grid>
          <Grid container >
             <div className="footer-contacts">
              <a href="tel:+91-892-908-5787">(892) 908-5787</a>
            </div>
          </Grid>
        </Grid>
        <Grid item xs>
          <Grid container >
            <div className="footer-header">We are Social</div>
          </Grid>
          <Grid container >
           <Button onClick={extRouteNav.bind(null, 'faceBook')} ><FacebookIcon /></Button>
            <Button onClick={extRouteNav.bind(null, 'instaGram')} ><InstagramIcon /></Button>
            <Button onClick={extRouteNav.bind(null, 'youTube')} ><YouTubeIcon /></Button>
            <Button onClick={extRouteNav.bind(null, 'twitter')} ><TwitterIcon /></Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}


export default Footer;