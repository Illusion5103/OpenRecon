import React from 'react'
import OR1 from '../assets/openrecon1.jpg'
import OR2 from '../assets/openrecon2.jpg'
import OR3 from '../assets/or3.jpg'
import OR4 from '../assets/or4.jpg'
import {useEthers} from "@usedapp/core"
import  '../styles/App.css'
import {Link} from 'react-router-dom'
import {Header} from "../components/Header"
import {Container, Typography, Button, Box, Grid} from '@mui/material'
//import { MetamaskConnect } from './components/MetamaskConnect'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { CardActionArea, CardActions } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Globe from '../components/Globe'
import Footer from '../components/Footer'
import web3 from 'web3'
import OpenReconABI from './abi.json'

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

function App() {

  const {account, activateBrowserWallet, deactivate} = useEthers()

  const isConnected = account !== undefined

  return (
    <div>
    <ThemeProvider theme={theme}>

    <Container maxWidth={false}
    disableGutters={true}
    sx={{ backgroundColor: 'primary.dark',
        textAlign: 'center',
    }}>

    <Container maxWidth='xl' disableGutters={true}>

    <Header />
    <Globe />
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
        <Typography variant='h3'
        sx={{
          color: 'primary.contrastText',
          fontWeight: 'bold',
          }}>
          Welcome to Phaeros
        </Typography>
        <br/>
        <Container maxWidth='md'>
        <Typography variant="h6"
                sx={{
                  color: '#acacad',
                  }}>
          Open source investigative journalism with citations and peer review
        </Typography>
        </Container>
        <br/>

        <Link to="/explore" style={{all:"unset"}}>
          <Button size='large' variant="contained"
            className="Explore-Bounties">
            Explore Bounties
          </Button>
        </Link>
        
    </Container>
    </Container>
    </ThemeProvider>
    </div>
  )
}

export default App;
