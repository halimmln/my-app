import React, { Fragment } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useHistory, useParams } from 'react-router-dom';
import LocalStorage from '../../services/localStorageService';
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
  const { id } = useParams();
  alert(id);
  const LocalStorage1 =new LocalStorage();
  const values = LocalStorage1.getData('store');
  const history = useHistory();
  let initialState= {
   
    id:null,
    fname:'',
    lname:'',
    email:'',
    password:'',
    confirmPassword:'',
    phone:0,
    check:true
  }
  if((id != undefined || id != null ) && values.length ){
    let index = values.findIndex((i) => i.id == id);
    if(index != -1 ){
      initialState ={
      id:id,
      fname:values[index].fname,
      lname:values[index].lname,
      email:values[index].email,
      phone:values[index].phone
    }
   
  }
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
const UserForm = useFormik({
    initialValues: initialState,
    validationSchema ,
    onSubmit: values1 => {
        //alert(JSON.stringify(values1, null, 2));
        
 
        if (values1.id == undefined || values1.id == null) {
          if (localStorage.getItem('store') == null) {
            values1.id = 1;
          } else {
            values1.id = values.length + 1;
          }
          values.push(values1);
        } else {
          if (values1.id != undefined || values1.id == null) {
            let index = values.findIndex((i) => i.id == values1.id);
            if(index != -1 ){
             
              
              values[index].fname = values1.fname;
              values[index].lname =values1.lname
              values[index].email = values1.email
              values[index].phone = values1.phone;
            
            }
          
          }
        }
        LocalStorage1.setData('store',values);
        history.push('/userList');
      },

});

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
                onChange={UserForm.handleChange}
                value={UserForm.values.fname}
               
              />
              <Typography variant="inherit" color="textSecondary">
               {UserForm.errors.fname ? <div>{UserForm.errors.fname}</div> : null}
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
                onChange={UserForm.handleChange}
                value={UserForm.values.lname}
              />
              <Typography variant="inherit" color="textSecondary">
              {UserForm.errors.lname ? <div>{UserForm.errors.lname}</div> : null}
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
                onChange={UserForm.handleChange}
                value={UserForm.values.email}
              />
              <Typography variant="inherit" color="textSecondary">
              {UserForm.errors.email ? <div>{UserForm.errors.email}</div> : null}
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
                onChange={UserForm.handleChange}
                value={UserForm.values.password}
              />
              <Typography variant="inherit" color="textSecondary">
              {UserForm.errors.password ? <div>{UserForm.errors.password}</div> : null}
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
                onChange={UserForm.handleChange}
                value={UserForm.values.confirmpassword}
              />
              <Typography variant="inherit" color="textSecondary">
              {UserForm.errors.confirmPassword ? <div>{UserForm.errors.confirmPassword}</div> : null}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox  name='check'  />}
                checked = {UserForm.values.check }
                onChange={UserForm.handleChange}
                label={
                  <Typography color={true ? 'error' : 'inherit'}>
                    I have read and agree to the Terms *
                  </Typography>
                }
              />
              <br />
              <Typography variant="inherit" color="textSecondary">
              {UserForm.errors.check ? <div>{UserForm.errors.check}</div> : null}
              </Typography>
            </Grid>
          </Grid>

          <Box mt={3}>
            <Button
              variant="contained"
              color="primary"
              onClick={UserForm.handleSubmit}
               
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