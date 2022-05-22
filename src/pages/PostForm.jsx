import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@mui/material/TextField'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {Container, Typography, Button, Box, Grid, Card, Select, MenuItem} from '@mui/material';
import {Web3Storage} from 'web3.storage'
import {Header} from "../components/Header"
import {Link} from 'react-router-dom'
import { render } from '@testing-library/react';
import Alert from '@mui/material/Alert';
import Send from './Send'
import { Formik } from 'formik'
import { Form, Field, ErrorMessage } from 'formik'
import { PromptProps } from 'react-router-dom';

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
    fontFamily: ['Ubuntu', '"Montserrat"'].join(',')
  },
});

const validationSchema = yup.object({
  title: yup
    .string('Enter your title')
    .required('Title is required'),
  prize: yup
    .string('Enter your password')
    .required('Password is required'),
  type: yup
    .string('Enter your type')
    .required('Type is required'),
  detail: yup
    .string('Enter details')
    .required('Details are required'),
});

const client = new Web3Storage({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGFFN0MxRDM3NmQ5MEYzNEVkODcwMGQyQzEzNGIzOWM2RkIzMGJlY2UiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTI3MzU4MTg1NTIsIm5hbWUiOiJPcGVuUmVjb24ifQ.g0cEihs9Uh-3CjRTYmIhjsow0w669vtmlf-48xdcRbY'});

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.Storer = this.Storer.bind(this);
    this.state = {
      submit: 0,
      id: '',
      prize: 0
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
              mr: 3,
              mt: 3
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
                initialValues={{ title: '', prize: '0', type: '', detail: ''}}
                //validationSchema={{validationSchema}}
                validation={{validationSchema}}
                onSubmit={(values) => {
                  {this.setState({prize: values.prize})}
                  this.setState({submit: 1})
                  this.Storer(values);
                }}
              >
                {props => (
                  <Form onSubmit={props.handleSubmit}>
                    <br/>
                    <br/>
                    <Typography variant="h4" sx={{
                      fontWeight: 'bold'
                    }}>
                      Post an intel bounty
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
                      A couple words that sum up what you're looking for
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
                      Type 
                    </Typography>
                    <Typography sx={{
                      color: '#acacad',
                    }}>
                      The type of collection this will entail
                    </Typography>
                    </Box>
                    <Select
                      labelId="demo-simple-select"
                      id="demo-simple-select"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.type}
                      name="type"
                      fullWidth={true}
                    >
                      <MenuItem value="">
                      </MenuItem>
                      <MenuItem value="Satellite Imagery">Satellite Imagery</MenuItem>
                      <MenuItem value="Social Media">Social Media</MenuItem>
                      <MenuItem value="Other">Other</MenuItem>
                    </Select>
                    {props.errors.type && <div id="feedback">{props.errors.type}</div>}
                    <br/>
                    <br/>

                    <Box sx={{
                    textAlign: 'left',
                    }}>
                    <Typography variant='h6' sx={{
                      fontWeight: 'bold'
                    }}>
                      Prize
                    </Typography>
                    <Typography sx={{
                      color: '#acacad',
                    }}>
                      The bounty prize, in $MTR
                    </Typography>
                    </Box>
                    <TextField
                      fullWidth={true}
                      id="outlined-number"
                      // label="Bounty Prize ($USDC)"
                      type="number"
                      name="prize"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.prize}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    {props.errors.prize && <div id="feedback">{props.errors.prize}</div>}
                    <br/>
                    <br/>

                    <Box sx={{
                    textAlign: 'left',
                    }}>
                    <Typography variant='h6' sx={{
                      fontWeight: 'bold'
                    }}>
                      Requested Intelligence
                    </Typography>
                    <Typography sx={{
                      color: '#acacad',
                    }}>
                      Detail the intelligence you need collected
                    </Typography>
                    </Box>
                    <TextField
                      fullWidth={true}
                      id="outlined-multiline-static"
                      multiline
                      name="detail"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.detail}
                      rows={4}
                    />
                    {props.errors.detail && <div id="feedback">{props.errors.detail}</div>}
                    <br/>
                    <br/>


                    </Box>
                    <br/> 
                    <br/>
                    <Button type="submit" variant="contained" size="large">
                      Post Bounty
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
          <Send cid={this.state.id} prize={this.state.prize}/>
        </div>
      )
  }

}

export default Main;