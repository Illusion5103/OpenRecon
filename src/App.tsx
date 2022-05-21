import React from 'react'
import logo from './logo.svg'
import IMAGE from './Removal-815.png'
import COMP from './assets/IMG_6696.jpg'
import OR1 from './assets/openrecon1.jpg'
import OR2 from './assets/openrecon2.jpg'
import {useEthers} from "@usedapp/core"
import  './App.css'
import {Link} from 'react-router-dom'
import {Header} from "./components/Header"
import {Container, Typography, Button, Box, Grid} from '@mui/material'
//import { MetamaskConnect } from './components/MetamaskConnect'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { CardActionArea, CardActions } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Globe from './components/Globe'
import Footer from './components/Footer'

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
          Welcome to OpenRecon
        </Typography>
        <br/>
        <Container maxWidth='md'>
        <Typography variant="h6"
                sx={{
                  color: '#acacad',
                  }}>
          OpenRecon is a bounty platform for open source intelligence collection powered by smart contracts and decentralized storage
        </Typography>
        </Container>
        <br/>

        <Link to="/explore" style={{all:"unset"}}>
          <Button size='large' variant="contained"
            className="Explore-Bounties">
            Explore Bounties
          </Button>
        </Link>

        {/* {isConnected ? (
          <Link to="/post" style={{all:"unset"}}>
            <Button size='large' 
              color="primary"
              variant="outlined"
              className="Post-Bounty">
              Post Bounty
            </Button>              
          </Link>
        ) : (
          <Link to="/post" style={{all:"unset"}}>
            <Button size='large'
              color="primary"
              variant="outlined"
              className="Post-Bounty"
              onClick={() => activateBrowserWallet()}>
              Post Bounty
            </Button>
          </Link>
        )} */}
        <br/>
        <br/>
        <br/>
        <br/>
        
        <div>
        <Card sx={{
          backgroundColor: '#2b2b2b'
        }}>
          <br/>

        <Box sx={{
              flexGrow: 1,
              fontSize: 20,
              mx: 3,
              textAlign: 'left',
        }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 2 }}>
          <Grid  item xs={1} sm={1} md={1} lg={1} xl={1}>
          <Link to='/about' style={{textDecoration:"none"}}>
            <Card  sx={{
              backgroundColor: '#212121'
            }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  src={OR2}
                  alt=""
                />
                <CardContent>
                  <Typography variant='h5' sx={{
                    fontWeight: 'bold',
                    color: 'white'
                  }}>
                    <br/>
                    Learn How It Works
                  </Typography>
                  <br/>
                  <Typography sx={{
                    color: '#acacad',
                  }}>
                    Bounties are created through a smart contract on the Meter blockchain, and all bounty data storage is decentralized through IPFS/Filecoin.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </Link>
            </Grid>

            <br />

            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
            <Link to='/learn' style={{textDecoration:"none"}}>
            <Card sx={{
              backgroundColor: '#212121'
            }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image={OR1}
                  alt=""
                />
                <CardContent>
                <Typography variant='h5' sx={{
                  fontWeight: 'bold',
                  color: 'white'
                }}>
                  <br/>
                    Learn OSINT
                  </Typography>
                  <br/>
                  <Typography sx={{
                    color: '#acacad',
                  }}>
                    Learn how to collect Open Source Intelligence (OSINT) via publicly available sources and methods.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </Link>
            </Grid>

            <br />

            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
            <Link to='/explore' style={{textDecoration:"none"}}>
            <Card sx={{
              backgroundColor: '#212121'
            }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  src={OR1}
                  alt=""
                />
                <CardContent>
                <Typography variant='h5' sx={{
                  fontWeight: 'bold',
                  color: 'white'
                }}>
                  <br/>
                    Be a Collector
                  </Typography>
                  <br/>
                  <Typography sx={{
                    color: '#acacad',
                  }}>
                    Explore active bounties, pick one that interests you, and start collecting OSINT. 
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </Link>
            </Grid>

            <br />

            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
            <Link to='/post' style={{textDecoration:"none"}}>
            <Card sx={{
              backgroundColor: '#212121'
            }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  src={OR2}
                  alt=""
                />
                <CardContent>
                <Typography variant='h5' sx={{
                  fontWeight: 'bold',
                  color: 'white'
                }}>
                  <br/>
                    Be a Client
                  </Typography>
                  <br/>
                  <Typography sx={{
                    color: '#acacad',
                  }}>
                    Post a bounty describing what you want to know.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </Link>
            </Grid>

            </Grid>
            <br/>
            </Box>
            </Card>
            </div>
            
            <br/>
            <br/>
            <br/>

                  <Footer />    
    </Container>
    </Container>
    </ThemeProvider>
    </div>
  )
}

export default App;
