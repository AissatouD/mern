import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import { Formik } from 'formik';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as yup from 'yup';

const validationRules = yup.object().shape({
  email: yup.string().required('Email is required').email('Invalid email address'),
  password: yup.string().required('Password is required'),
});

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: theme.spacing(2),
    height: theme.spacing(6)
  }
}));

const SignIn = () => {
  const classes = useStyles();

  return (
    <div>
      <Formik
        validateOnMount={true}
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validationRules}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          setTimeout(() => {
            setSubmitting(false);
            toast.info('👍 Your registration has been sent', {
              position: 'bottom-right',
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: false,
              draggable: true
            });
          }, 3000);
        }}>
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <Container component='main' maxWidth='sm'>
            <h1>Sign In</h1>
            <div style={{ marginTop: 10 }}>
              <form onSubmit={handleSubmit}>
                <Grid item xs={12}>
                  <TextField
                    variant='outlined'
                    required
                    fullWidth
                    id='email'
                    name='email'
                    label='Email Address'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.email && errors.email ? <div className='error'>{errors.email}</div> : null}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant='outlined'
                    required
                    fullWidth
                    id='password'
                    name='password'
                    label='Password'
                    type='password'
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.password && errors.password ? <div className='error'>{errors.password}</div> : null}
                </Grid>
                <Button
                  className={classes.button}
                  type='submit'
                  disabled={isSubmitting || Object.entries(errors).length !== 0}
                  fullWidth
                  variant='contained'
                  color='primary'
                  startIcon={<SendIcon />}>
                  Register
                </Button>
              </form>
            </div>
          </Container>
        )}
      </Formik>
      <ToastContainer
        position='bottom-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover={false}
      />
    </div>
  );
};
export default SignIn;
