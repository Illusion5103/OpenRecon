import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@mui/material/TextField'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {Container, Typography, Button, Box, Grid, Card, Select, MenuItem} from '@mui/material';
import {Web3Storage} from 'web3.storage'
import {Header} from "./components/Header"
import {Link} from 'react-router-dom'
import { render } from '@testing-library/react';
import Alert from '@mui/material/Alert';
import SendIntel from './SendIntel'
import { Formik } from 'formik'
import { Form, Field, ErrorMessage } from 'formik'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#06BA00',
      dark: '#212121',
      main: '#026e1f',
      contrastText: '#fff',
    },
    secondary: {
      light: '#fff',
      dark: '#fff',
      main: '#fff',
    },
  },
  typography: {
    fontFamily: 'Ubuntu',
  },
});

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const client = new Web3Storage({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGFFN0MxRDM3NmQ5MEYzNEVkODcwMGQyQzEzNGIzOWM2RkIzMGJlY2UiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTI3MzU4MTg1NTIsIm5hbWUiOiJPcGVuUmVjb24ifQ.g0cEihs9Uh-3CjRTYmIhjsow0w669vtmlf-48xdcRbY'});

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.Storer = this.Storer.bind(this);
    this.state = {
      submit: 0,
      id: ''
    }
  }

  async Storer(values) {
    const str = JSON.stringify(values, null, 2);
    const file = new File([str], 'data.json', {type: 'application/json'});
    const cid = await client.put([file], {wrapWithDirectory: false});
    console.log(cid);
    this.setState({id: cid});
    return cid;
  }

  render() {

    if (!this.state.id) {
      return (
        <div>

        <Box
        sx={{
        flexGrow: 1,
        }}
        >
        <ThemeProvider theme={theme}>
        <Container maxWidth={false}
            disableGutters={true}
            sx={{ backgroundColor: 'primary.dark',
                textAlign: 'center',
                flex: 1,
                minHeight: '100vh'
            }}>
            <Container maxWidth='xl' disableGutters={true}>
            <Header />

            {this.state.submit
            ? <Alert variant="outlined" severity="info" sx={{
              ml: 3,
              mr: 3
            }}>
              Storing, please wait...
              </Alert>
            : <div/> 
            }
        
            <Box sx={{
                verticalAlign: 'middle',
                display: 'block',
                padding: 3
            }}>
        
            <Card sx={{
                backgroundColor: '#2b2b2b',
            }}>
              
              <Formik
                initialValues={{ title: '', detail: '', links: ''}}
                //validationSchema={{validationSchema}}
                onSubmit={(values) => {
                  this.setState({submit: 1})
                  this.Storer(values);
                }}
              >
                {props => (
                  <Form>
                    <br/>
                    <br/>
                    <Typography variant="h4" sx={{
                      fontWeight: 'bold'
                    }}>
                      Submit intel collection
                    </Typography>
                    <br/>
                    <br/>
                    <Box sx={{
                    textAlign: 'left',
                    pl: 10
                    }}>
                    <Typography variant='h6' sx={{
                      fontWeight: 'bold'
                    }}>
                      Title 
                    </Typography>
                    <Typography sx={{
                      color: '#acacad',
                    }}>
                      A couple words that sum up what you've found
                    </Typography>
                    </Box>
                    <Box sx={{
                      pl: 10,
                      pr: 10
                    }}>
                    <TextField
                      fullWidth={true}
                      type="text"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.title}
                      name="title"
                      variant="outlined"
                    />
                    {props.errors.title && <div id="feedback">{props.errors.title}</div>}

                    <br/>
                    <br/>

                    <Box sx={{
                      textAlign: 'left',
                    }}>
                    <Typography variant='h6' sx={{
                      fontWeight: 'bold'
                    }}>
                      Collected Intelligence 
                    </Typography>
                    <Typography sx={{
                      color: '#acacad',
                    }}>
                      Detail the intelligence you've collected
                    </Typography>
                    </Box>
                    <TextField
                      fullWidth={true}
                      id="outlined-multiline-static"
                      multiline
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.detail}
                      name="detail"
                      rows={4}
                    />
                    {props.errors.detail && <div id="feedback">{props.errors.detail}</div>}
                    <br/>
                    <br/>

                    <Box sx={{
                    textAlign: 'left',
                    }}>
                    <Typography variant='h6' sx={{
                      fontWeight: 'bold'
                    }}>
                      Resources
                    </Typography>
                    <Typography sx={{
                      color: '#acacad',
                    }}>
                      Links to collected intel (optional)
                    </Typography>
                    </Box>
                    <TextField
                      fullWidth={true}
                      id="outlined-multiline-static"
                      multiline
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.links}
                      name="links"
                      maxRows={4}
                    />
                    {props.errors.links && <div id="feedback">{props.errors.links}</div>}
                    <br/>
                    <br/>


                    </Box>
                    <br/> 
                    <br/>
                    <Button type="submit" variant="contained" size="large">
                      Submit Collection
                    </Button>
                    <br/>
                    <br/>
                  </Form>
                )}
              </Formik>

        </Card>
        </Box>
        </Container>
        </Container>
        </ThemeProvider>
        </Box>
        </div>
      )
    }
    
    
      return (
        <div>
          <SendIntel cid={this.state.id}/>
        </div>
      )
  }

}

export default Main;