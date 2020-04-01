import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as yup from 'yup';
import './AddFishForm.scss';


const AddFishForm = () => {
  const validationRules = yup.object().shape({
    name: yup.string().required('name is required'),
    price: yup.number().required('Price is required'),
    status: yup.string().required('status is required'),
    desc: yup.string().required('description is required'),
    image: yup.string(' ')
  });

  const useStyles = makeStyles(theme => ({
    button: {
      marginTop: theme.spacing(2),
      height: theme.spacing(6)
    }
  }));

  const classes = useStyles();

  return (
    <div>
      <Formik
        validateOnMount={true}
        initialValues={{
          name: '',
          price: '',
          status: '',
          desc: '',
          image: '',
        }}
        validationSchema={validationRules}
        onSubmit={(values, { setSubmitting }) => {
          const val = {
            'name': values.name,
            'price': values.price,
            'status': values.status,
            'desc': values.desc,
            'image': values.image,
          };
          let formBody = [];
          for (let v in val) {
            var encodedKey = encodeURIComponent(v);
            var encodedValue = encodeURIComponent(val[v]);
            formBody.push(encodedKey + '=' + encodedValue);
          }
          formBody = formBody.join('&');
          console.log(formBody);

          fetch('http://localhost:3003/fish/add', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: formBody
          });

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
        {({ values, errors, handleChange, handleBlur,handleSubmit, isSubmitting }) => (
          <Container component='main' maxWidth='sm'>
            <h1>Add fish</h1>
            <div style={{ marginTop: 10 }}>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant='outlined'
                      fullWidth
                      id='name'
                      name='name'
                      label='Name'
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}></TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant='outlined'
                      fullWidth
                      id='price'
                      name='price'
                      label='Price'
                      value={values.price}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant='outlined'
                      required
                      fullWidth
                      id='desc'
                      name='desc'
                      label='desc'
                      value={values.desc}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />

                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant='outlined'
                      required
                      fullWidth
                      id='status'
                      name='status'
                      label='status'
                      type='status'
                      value={values.status}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />

                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      variant='outlined'
                      required
                      fullWidth
                      id='image'
                      name='image'
                      label='image'
                      type='image'
                      value={values.image}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Grid>

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

AddFishForm.propTypes = {
  addFish: PropTypes.func
};

export default AddFishForm;
