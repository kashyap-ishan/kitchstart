import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Hidden from '@material-ui/core/Hidden';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';


import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import './contactus.css';

const PURPOSE = ['Rent', 'Sale', 'Lease'];
const ContactUs = () => {
  const [userName, setUserName] = useState('');
  const [kitRequiremnt, setKitRequiremnt] = useState('');
  const [typeOfSpace, setTypeOfSpace] = useState({});
  const [kitArea, setKitArea] = useState('');
  const [floorSpace, setFloorSpace] = useState('');
  const [purpose, setPurpose] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const variant ='outlined';
  return (
    <div className="column-form">
      <Grid container spacing={3}
        alignItems="center"
        justify="center"
      >
        <Hidden smDown>
          <Grid item xs={1} sm={1} md={3} lg={3} xl={3} align="center" />
        </Hidden>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} align="center" className="column-form__container" p={4}>
          <Grid item xs={10} sm={10} md={10} lg={11} xl={11}>
            <Typography variant='h5' component='h5' className="description__header" align="center">
              Drop your details, and leave it on us.
            </Typography>
            <div className="separator"></div>
          </Grid>
          <Grid item xs={10} sm={10} md={10} lg={11} xl={11}>
            <form noValidate>

              <FormControl component="fieldset" className="left-align" fullWidth>
                <FormLabel component="legend">Kitchen Space Requirements</FormLabel>
                <RadioGroup aria-label="kitSpace" name="kitSpaceRadio" value={kitRequiremnt} onChange={e => setKitRequiremnt(e.target.value)}>
                  <FormControlLabel value="i own a space" control={<Radio />} label="I own a kitchen space" />
                  <FormControlLabel value="i am looking for a kitchen space" control={<Radio />} label="I am looking for kitchen Space" />
                </RadioGroup>
              </FormControl>
              <TextField
                variant={variant}
                autoComplete
                margin="dense"
                required
                fullWidth
                id="username"
                type="text"
                label="Your name"
                name="username"
                value={userName}
                onChange={e => setUserName(e.target.value)}
              />

              <FormControl variant={variant} fullWidth className="left-align">
                <InputLabel id="typeOfSpaceId">Type Of Space</InputLabel>
                <Select
                  labelId="typeOfSpaceId"
                  id="typeOfSpaceSelect"
                  value={typeOfSpace}
                  fullWidth
                  variant={variant}
                  label="Type of Space"
                  onChange={e => setTypeOfSpace(e.target.value)}
                >
                  <MenuItem value={1}>Fine Dine</MenuItem>
                  <MenuItem value={2}>Resto Lounge</MenuItem>
                  <MenuItem value={3}>Tuck Shop</MenuItem>
                  <MenuItem value={4}>Cloud Kitchen</MenuItem>
                  <MenuItem value={5}>Production Kitchen</MenuItem>
                </Select>
              </FormControl>
              <TextField
                variant={variant}
                autoComplete
                margin="dense"
                required
                fullWidth
                id="kitArea"
                type="text"
                label="Area"
                name="kitArea"
                onChange={e => setKitArea(e.target.value)}
                value={kitArea}
              />
              <TextField
                variant={variant}
                autoComplete
                margin="dense"
                required
                fullWidth
                id="floorSpace"
                type="text"
                label="Floor Space"
                name="floorSpace"
                value={floorSpace}
                onChange={e => setFloorSpace(e.target.value)}
              />
              <FormControl variant={variant} fullWidth className="left-align">
                <InputLabel id="purposeId">Purpose</InputLabel>
                <Select
                  labelId="purposeId"
                  id="purposeSelect"
                  value={purpose}
                  fullWidth
                  multiple
                  variant={variant}
                  label="Type of Space"
                  onChange={e => setPurpose(e.target.value)}
                  renderValue={(purpose) => purpose.join(', ')}
                >
                  {PURPOSE.map((p) => (
                    <MenuItem key={p} value={p}>
                      <Checkbox checked={purpose.indexOf(p) > -1} />
                      <ListItemText primary={p} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                variant={variant}
                autoComplete
                margin="dense"
                required
                fullWidth
                id="username"
                type="text"
                label="Contact Number"
                name="username"
                value={phoneNumber}
                onChange={e => setPhoneNumber(e.target.value)}
              />
              <TextField
                variant={variant}
                autoComplete
                margin="dense"
                required
                fullWidth
                label="Email"
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <Grid item xs={10} sm={10} md={10} lg={11} xl={11}>
                {/* <div className="separator separator__bottom"></div> */}
                {/* <Typography variant='h6' component='h2' className="description__footer" align="center">
                  <div class='blue-text ml-1 forgot-pwd new-user__link'>
                    Submit
                  </div>
                </Typography> */}
                <Button variant="contained" color="primary">
                  Submit
                </Button>
              </Grid>
            </form>
          </Grid>
        </Grid>
        <Hidden smDown>
          <Grid item xs={1} sm={1} md={3} lg={3} xl={3} align="center" />
        </Hidden>
      </Grid>
    </div>
  )
}

export default ContactUs;