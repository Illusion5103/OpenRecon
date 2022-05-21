import {Typography, Box, Grid} from '@mui/material'
import {Link} from 'react-router-dom'
import '../styles/App.LESS'

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
            <a target="_blank" href="https://meter.io" style={{color:"green", textDecoration:"none"}}>
            Meter.io
            </a>
            &nbsp;and&nbsp;
            <a target="_blank" href='https://ipfs.io/' style={{color:"green", textDecoration:"none"}}>
            IPFS/Filecoin
            </a>
            </Typography>
            <Typography color="#acacad">
                Made possible by the&nbsp;
            <a target='_blank' href='https://gitcoin.co/hackathon/Rollathon/?' style={{color: "green", textDecoration:"none"}}>
                L2 Rollathon 
            </a>
            </Typography>
            <Typography color='#acacad'>
            Built by&nbsp;
            <a target="_blank" href='https://twitter.com/fraanetski' style={{color:"green", textDecoration:"none"}}>
             netski
            </a>
            </Typography>

            <br/>
            <br/>

            </Box>

        </div>
    )
}

export default Footer;