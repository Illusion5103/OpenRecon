import React from 'react'
import {Container, Typography, Button, Box, Grid, Card} from '@mui/material'
import {Link} from 'react-router-dom'
import '../App.LESS'

function Footer() {
    return (
        <div>

            <Box sx={{flexGrow: 1}}>
                <Grid container spacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1}} columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 4 }}>
                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                        <Link to='/about' style={{textDecoration:"none"}}>
                            <Typography color='#acacad'>
                                About OpenRecon
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                        <Link to='/explore' style={{textDecoration:"none"}}>
                            <Typography color='#acacad'>
                                Explore Bounties
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                        <Link to='/post' style={{textDecoration:"none"}}>
                            <Typography color='#acacad'>
                                Post Bounty
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                        <Link to='/learn' style={{textDecoration:"none"}}>
                            <Typography color='#acacad'>
                                Learn OSINT
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                        <Link to='/dash' style={{textDecoration:"none"}}>
                            <Typography color='#acacad'>
                                Dashboard
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                        <Link to='/privacy' style={{textDecoration:"none"}}>
                            <Typography color='#acacad'>
                                Privacy
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                        <Link to='/contact' style={{textDecoration:"none"}}>
                            <Typography color='#acacad'>
                                Contact
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                        <Link to='https://github.com/fraanetski/openrecon' style={{textDecoration:"none"}}>
                            <Typography color='#acacad'>
                                Code
                            </Typography>
                        </Link>
                    </Grid>
                </Grid>

            <br/>
            <br/>
            
            <Typography color='#acacad'>
            Powered by&nbsp;
            <Link to='https://meter.io' style={{color:"green", textDecoration:"none"}}>
            Meter.io
            </Link>
            &nbsp;and&nbsp;
            <Link to='https://ipfs.io/' style={{color:"green", textDecoration:"none"}}>
            IPFS/Filecoin
            </Link>
            </Typography>
            <Typography color="#acacad">
                Made possible by the&nbsp;
            <Link to='https://gitcoin.co/hackathon/Rollathon/?' style={{color: "green", textDecoration:"none"}}>
                L2 Rollathon 
            </Link>
            </Typography>
            <Typography color='#acacad'>
            Built by&nbsp;
            <Link to='https://twitter.com/netski' style={{color:"green", textDecoration:"none"}}>
             netski
            </Link>
            </Typography>

            <br/>
            <br/>

            </Box>

        </div>
    )
}

export default Footer;