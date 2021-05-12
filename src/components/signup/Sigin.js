import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { FormHelperText } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
 kiran:{
   justifyContent:'center',
 
  display:'flex',
  flexDirection:'column',
  margin: '0 auto',
},
}));


const  Sigin=()=>{
   const classes = useStyles()
   
 
  return (
    
    <div className={classes.kiran}>
             

      <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Grid container classname={classes.kiran}>
        
              <Grid item lg={3}>
          <form className={classes.form} noValidate>

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
    </form>
    </Grid>
    </Grid>
    </div>
  );
}

export default Sigin;

