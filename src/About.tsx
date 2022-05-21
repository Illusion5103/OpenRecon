import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import {Link} from 'react-router-dom'
import {Header} from "./components/Header"
import {Container, Typography, Button, Box, Grid, Card} from '@mui/material'
import AB0 from './assets/ab0.png'
import AB1 from './assets/ab1.png'
import AB2 from './assets/ab2.png'
import AB3 from './assets/ab3.png'
import AB4 from './assets/ab4.png'

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
      fontFamily: 'ubuntu',
    },
  });


function About() {

    return (
        <div>
        <Box sx={{flexGrow: 1,
}}>
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

            <Box sx={{
                verticalAlign: 'middle',
                display: 'block',
                padding: 3
            }}>

            <Card sx={{
              backgroundColor: '#2b2b2b',
              padding: 2
            }}>
              <Typography variant='h4' color="white" sx={{
              }}>
                Overview
              </Typography>
              <br/>
              <img src={AB0} width='90%'/>
              <br/>
              <Typography color="white"></Typography>
            </Card>

            <br/>
            <br/>

            <Card sx={{
              backgroundColor: '#2b2b2b',
              padding: 2
            }}>
              <Typography variant='h4' color="white" sx={{
              }}>
                Posting a Bounty
              </Typography>
              <br/>
              <img src={AB1} width='90%'/>
              <br/>
              <Typography color="white"></Typography>
            </Card>

            <br/>
            <br/>

            <Card sx={{
              backgroundColor: '#2b2b2b',
              padding: 2
            }}>
              <Typography variant='h4' color="white" sx={{
              }}>
                Submitting Intel
              </Typography>
              <br/>
              <img src={AB2} width='90%'/>
              <br/>
              <Typography color="white"></Typography>
            </Card>

            <br/>
            <br/>

            <Card sx={{
              backgroundColor: '#2b2b2b',
              padding: 2
            }}>
              <Typography variant='h4' color="white" sx={{
              }}>
                Awarding a Bounty
              </Typography>
              <br/>
              <img src={AB3} width='90%'/>
              <br/>
              <Typography color="white"></Typography>
            </Card>

            <br/>
            <br/>

            <Card sx={{
              backgroundColor: '#2b2b2b',
              padding: 2
            }}>
              <Typography variant='h4' color="white" sx={{
              }}>
                Viewing Bounties
              </Typography>
              <br/>
              <img src={AB4} width='90%'/>
              <br/>
              <Typography color="white"></Typography>
            </Card>

            <br/>
            <br/>

            <Card sx={{
              backgroundColor: '#2b2b2b',
              padding: 2
            }}>
              <Typography variant='h4' color="white" sx={{
              }}>
                Code
              </Typography>

              <Typography variant='h6' color="white"> 
                The code for the project is open-sourced and available at&nbsp;
                <Link to='https://github.com/fraanetski/openrecon' style={{color:'green'}}> 
                  OpenRecon on Github
                </Link>
              </Typography>
            </Card>

              <br/>
              <br/>

            </Box>

            </Container>
            </Container>
        </ThemeProvider>
        </Box>
        </div>
    )
}

export default About;