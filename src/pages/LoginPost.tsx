import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import {Link} from 'react-router-dom'
import {Header} from "../components/Header"
import {Container, Typography, Button, Box, Grid, Card} from '@mui/material'
import {useEthers} from "@usedapp/core"
import UAuth from '@uauth/js'

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

async function doLogin() {
  
  const uauth = new UAuth({
    clientID: "e2f8fed8-2ca7-46ff-831f-b53b2a1d256c",
    redirectUri: "http://127.0.0.1",
  })
  
    try {
      const authorization = await uauth.loginWithPopup()
   
      console.log(authorization)
    } catch (error) {
      console.error(error)
    }
}

function LoginPost() {

  const {account, activateBrowserWallet, deactivate} = useEthers()

  const isConnected = account !== undefined

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
            }}>

            <br/>
            <Typography color="white">
            Please connect with a web3 wallet.
            </Typography>

            <br/>

            {isConnected ? (
                        <Box sx={{
                            edge: 'end'
                        }}>
                        <Link to="/" style={{all:"unset"}}>
                            <Button sx={{align: 'right'}}
                                variant="contained"
                                size="large"
                                onClick={deactivate}>
                                Disconnect
                            </Button>              
                        </Link>
                        </Box>
                    ) : (
                        <Box sx={{
                        }}>
                        <Link to="/dash" style={{all:"unset"}}>
                            <Button sx={{align: 'right',
                            backgroundColor: '#eb7d34'}}
                                variant="contained"
                                size="large"
                                onClick={() => activateBrowserWallet()}
                                >
                                Connect with Metamask
                            </Button>
                        </Link>
                        </Box>
                    )}

                    <br/>

                    <Button 
                    onClick={doLogin}
                    sx={{align: 'right',
                    backgroundColor: '#4f34eb'}}
                                variant="contained"
                                size="large"
                                >
                      Login with Unstoppable 
                    </Button>

                    <br/>
                    <br/>
            </Card>
            </Box>

            </Container>
            </Container>
        </ThemeProvider>
        </Box>
        </div>
    )
}

export default LoginPost;