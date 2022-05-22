import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import {Link} from 'react-router-dom'
import {Header} from "../components/Header"
import {Container, Typography, Button, Box, Grid, Card, Collapse} from '@mui/material'
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEthers } from "@usedapp/core"
import OpenReconABI from './abi.json'
import Web3 from 'web3'

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
  
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
}));

const ethEnabled = async () => {  
  if (window.ethereum) {    
    await window.ethereum.request({method: 'eth_requestAccounts'});    
    // window.web3 = new Web3(window.ethereum);    
    return true;  
  }  
return false;
}

function SendIntel(props) {

  const {account} = useEthers()

  // const [res, timer] = React.useState(null)

  ethEnabled()

  // const web3 = new Web3('https://rpctest.meter.io')
  const web3 = new Web3(window.ethereum)

  const cid = props.cid

  const orecon = new web3.eth.Contract(OpenReconABI, '0x377dC25F3a6Add80D749FE8362C85517f9B65A06')  
  var ret = orecon.methods.makeIntel("a", cid).send({from: account})
  // var ret = orecon.methods.fundBounty(cid).send({from: account, value: prize})

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

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

            <Alert variant="outlined" severity="info" >
            <Box sx={{
              justifyContent: 'flex',
              alignItems: 'center'
            }}>
            <Typography sx={{ 
              mr: '0%',
              alignItems: 'center',
              textAlign: 'center !important'
            }}>
              Collection saved on IPFS!               CID: {props.cid} 
            </Typography>
            </Box>
            </Alert>
    
            <br/>

            <Card sx={{
              backgroundColor: '#2b2b2b',
            }}>
            <br/>
            <br/>
            <Typography variant='h5' sx={{
              fontWeight: 'bold',
              ml: 3,
              mr: 3
            }}>
            Confirm on the OpenRecon smart contract on Meter to submit intel
            </Typography>
            <Typography sx={{
                    color: '#acacad',
                  }}>
           Note: ensure your wallet is connected to Meter Testnet! 
            </Typography>
            <Typography sx={{
                    color: '#acacad',
                  }}>
            Smart contract address:    0x377dC25F3a6Add80D749FE8362C85517f9B65A06
            </Typography>
            <br/>
            <br/>
            <Typography sx={{

                  }}>
              Need funds? Expand the Transak card below to purchase crypto without leaving OpenRecon:
            </Typography>
            <br/>
            <br/>
            <Card sx={{
                ml:5,
                mr:5,
                padding: 3,
                color: "#212121"
            }}>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                    <img src="https://transak.com/img/logo.png" height="70"/>
                    <br/>
                    <br/>
                    <ExpandMoreIcon />
                </ExpandMore>
                <br/>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                <iframe src='https://staging-global.transak.com/?apiKey=2b0fe3ce-1002-467b-b2b6-cdf2e973c832' width="500" height="650" />
                <br/>
                </Collapse>
            </Card>
            <br/>
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

export default SendIntel;