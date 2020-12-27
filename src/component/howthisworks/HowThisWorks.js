import React from 'react';
import Grid from '@material-ui/core/Grid';
import Checklist from './../../asset/icon/checklists.svg';
import ContactLogo from './../../asset/icon/contact.svg';
import KitchenSpace from './../../asset/icon/kitchen.svg';
import DealLogo from './../../asset/icon/support.svg';

import './howthisworks.css';
const HowThisWorks = () => {
  return (
    <div className='how-container'>
      <Grid container>
        <Grid item xs>
          <Grid container className="steps-container">
            <img src={Checklist} alt="query" />
            <div className="step-count">1</div>
            <div className="step-text">Drop a query <br/> & leave it on us.</div>
          </Grid>
        </Grid>
        <Grid item xs>
          <Grid container className="steps-container">
            <img src={ContactLogo} alt="query" />
            <div className="step-count">2</div>
            <div className="step-text">Our Team will contact you and <br />understand your requiremnts</div>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs>
          <Grid container className="steps-container">
            <img src={KitchenSpace} alt="query" />
            <div className="step-count">3</div>
            <div className="step-text">Visit & have a look at space.</div>
          </Grid>
        </Grid>
        <Grid item xs>
          <Grid container className="steps-container">
            <img src={DealLogo} alt="query" />
            <div className="step-count">4</div>
            <div className="step-text">Finalize & "Set the Deal".</div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
};

export default HowThisWorks;