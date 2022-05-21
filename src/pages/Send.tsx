import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import {Link} from 'react-router-dom'
import {Header} from "../components/Header"
import {Container, Typography, Button, Box, Grid, Card, Collapse} from '@mui/material'
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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


interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }
  
  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
}));

function Send(props: any) {

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
              Submission saved on IPFS!               CID: {props.cid} 
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
            Send the prize to the OpenRecon smart contract to activate the bounty
            </Typography>
            <Typography sx={{
                    color: '#acacad',
                  }}>
            Smart contract address:     
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

export default Send;