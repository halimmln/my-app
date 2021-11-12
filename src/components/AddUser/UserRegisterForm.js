import React, { Fragment } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
    Paper,
    Box,
    Grid,
    TextField,
    Typography,
    FormControlLabel,
    Checkbox,
    Button
  } from '@material-ui/core';
const UserRegister  = ()=> {
    const validate = (values) =>{

        const errors = {};
      //  errors.email = 'Invalid email address';

     
        return errors;
    }
    const validationSchema = Yup.object().shape({
        fname: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lname: Yup.string()
          .max(20, 'Must be 15 characters or less')
          .required('Required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
        password: Yup.string()
          .required('Required')
          .min(8 ,"Must be 8 characters or more")
          .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
        confirmPassword: Yup.string()
          .required('Required')
          .oneOf([Yup.ref('password'), null], 'Passwords must match'),
          check:Yup.boolean().required('Required').oneOf([true],"must be Check"),
      })
const userForm = useFormik({
    initialValues:{
        id:null,
        fname:'',
        lname:'',
        email:'',
        password:'',
        confirmPassword:'',
        phone:0,
        check:true
    },
    validationSchema ,
    onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      },

});

// return (
//     <form onSubmit={userForm.handleSubmit}>
//       <label htmlFor="fname">First Name</label>
//       <input
//         id="fname"
//         name="fname"
//         type="text"
//         onChange={userForm.handleChange}
//         value={userForm.values.fname}
//       />

//       <label htmlFor="lname">Last Name</label>
//       <input
//         id="lname"
//         name="lname"
//         type="text"
//         onChange={userForm.handleChange}
//         value={userForm.values.lname}
//       />

//       <label htmlFor="email">Email Address</label>
//       <input
//         id="email"
//         name="email"
//         type="email"
//         onChange={userForm.handleChange}
//         value={userForm.values.email}
//       />

//       <button type="submit">Submit</button>
//     </form>
//   );
return (
    <Fragment >
      
      <Paper align="center" >
        <Box align="center" sx={{ p: 2, border: '1px solid grey' }} width={600} height={500} >
          <Typography variant="h6" align="center" margin="dense">
            User Registration Form
          </Typography>

          <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="fname"
                name="fname"
                label="First Name"
                fullWidth
                margin="dense"
                onChange={userForm.handleChange}
                value={userForm.values.fname}
               
              />
              <Typography variant="inherit" color="textSecondary">
               {userForm.errors.fname ? <div>{userForm.errors.fname}</div> : null}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="lname"
                name="lname"
                label="Last Name"
                fullWidth
                margin="dense"
                onChange={userForm.handleChange}
                value={userForm.values.lname}
              />
              <Typography variant="inherit" color="textSecondary">
              {userForm.errors.lname ? <div>{userForm.errors.lname}</div> : null}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="email"
                name="email"
                label="Email"
                fullWidth
                margin="dense"
                onChange={userForm.handleChange}
                value={userForm.values.email}
              />
              <Typography variant="inherit" color="textSecondary">
              {userForm.errors.email ? <div>{userForm.errors.email}</div> : null}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="password"
                name="password"
                label="Password"
                type="password"
                fullWidth
                margin="dense"
                onChange={userForm.handleChange}
                value={userForm.values.password}
              />
              <Typography variant="inherit" color="textSecondary">
              {userForm.errors.password ? <div>{userForm.errors.password}</div> : null}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="confirmPassword"
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                fullWidth
                margin="dense"
                onChange={userForm.handleChange}
                value={userForm.values.confirmpassword}
              />
              <Typography variant="inherit" color="textSecondary">
              {userForm.errors.confirmPassword ? <div>{userForm.errors.confirmPassword}</div> : null}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox  name='check'  />}
                checked = {userForm.values.check }
                onChange={userForm.handleChange}
                label={
                  <Typography color={true ? 'error' : 'inherit'}>
                    I have read and agree to the Terms *
                  </Typography>
                }
              />
              <br />
              <Typography variant="inherit" color="textSecondary">
              {userForm.errors.check ? <div>{userForm.errors.check}</div> : null}
              </Typography>
            </Grid>
          </Grid>

          <Box mt={3}>
            <Button
              variant="contained"
              color="primary"
              onClick={userForm.handleSubmit}
               
            >
              Register
            </Button>
          </Box>
        </Box>
      </Paper>
    </Fragment>
  );
}
export default UserRegister;