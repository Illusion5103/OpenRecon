import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import {Link} from 'react-router-dom'
import {Header} from "../components/Header"
import {Container, Typography, Button, Box, Grid, Card, Collapse} from '@mui/material'
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import L0 from '../assets/l0.png'

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

function Learn() {

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
                height: '100%'
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
              <img src={L0} width='250'/>
              <br/>
              <br/>
              <Typography variant='h6'>
                Collecting OSINT is much easier with the right tools. You'll find a toolbox below.
              </Typography>
              <br/>
            </Card>

            <br/>
            <br/>

            <Card sx={{
              backgroundColor: '#2b2b2b',
            }}>

            <br/>

            <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                    <Typography variant='h4' sx={{
                      fontWeight: 'bold'
                    }}>
                    Toolbox
                    </Typography>
                    <br/>
                    <br/>
                    <ExpandMoreIcon />
                </ExpandMore>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                <iframe src='https://www.osintframework.com/' width="90%" height="1000" />
                <br/>
                <br/>
                <a target="_blank" href='https://www.osintframework.com/' style={{color: 'green'}}>
                  OSINTFramework.com 
                </a>
              
                </Collapse>
              <br/>
            <br/>
            </Card>
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
            </Box>

            </Container>
            </Container>
        </ThemeProvider>
        </Box>
        </div>
    )
}

export default Learn;