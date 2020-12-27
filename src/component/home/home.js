import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ContactUs from './../contactus'
import HowThisWorks from './../howthisworks/HowThisWorks.js';
import Footer from './../footer/Footer';
import './home.css';
const Home = () => {
  return (
    <div>
      <Toolbar />
      <section className="primary">
        <div className='column-title'>
          <Typography variant='h1' component='h2'>
            <span className="title-heading">
              Ideal Kitchen space for growing food business!
            </span>
          </Typography>
          <ContactUs />
        </div>
      </section>
      <section className="secondary">
        <div className='title'>
          <Typography variant='h1' component='h2'>
            <span className="title-sub-heading">
              How this works?
            </span>
          </Typography>
        </div>
          <HowThisWorks/>
      </section>
      <section className="footer">
          <Footer />
      </section>
    </div>
  )
};

export default Home;