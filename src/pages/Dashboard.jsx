import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import {Link} from 'react-router-dom'
import {Header} from "../components/Header"
import {Container, Typography, Button, Box, Grid, Card} from '@mui/material'
import {useEthers} from "@usedapp/core"
import { Web3Storage } from 'web3.storage'


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

function getAccessToken() {
    return process.env.WEB3STORAGE_TOKEN
}

function makeStorageClient() {
    return new Web3Storage({ token: getAccessToken() })
}

// basically copy the Bounties class with the Dashboard components,
// but find cids corresponding to address (and then parse whether they're bounties or submissions),
// and find child cids for any cid corresponding to address that is a bounty
function Dashboard() {

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
                <div style={{fontWeight: 'bold'}}> Account: </div>
                 {account}
                </Typography>
                <br/>

                {isConnected ? (
                        <Box sx={{
                            edge: 'end'
                        }}>
                        <Link to="/dash" style={{all:"unset"}}>
                            <Button sx={{align: 'right'}}
                                variant="outlined"
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
                            <Button sx={{align: 'right'}}
                                variant="outlined"
                                size="large"
                                onClick={() => activateBrowserWallet()}
                                >
                                Connect
                            </Button>
                        </Link>
                        </Box>
                    )}
                <br/> 

            </Card>

            <br/>

            <Card sx={{
                backgroundColor: '#2b2b2b',
            }}>
                <br/>
                <Typography variant="h5" sx={{
                    fontWeight: 'bold'
                  }}>
                    Your Bounties 
                </Typography>
                <br/>
                <br/>
            </Card>

            <br/>

            <Card sx={{
                backgroundColor: '#2b2b2b',
            }}>
                <br/>
                <Typography variant="h5" sx={{
                    fontWeight: 'bold'
                  }}>
                    Your Submissions 
                </Typography>
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

export default Dashboard;