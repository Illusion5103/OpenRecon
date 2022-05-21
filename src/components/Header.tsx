import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import {useEthers} from "@usedapp/core"
import {Button, makeStyles, Toolbar, Typography, IconButton, Box} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import {Link} from 'react-router-dom'
import DiamondIcon from '@mui/icons-material/Diamond'
import HiveIcon from '@mui/icons-material/Hive'
import GraphicEqIcon from '@mui/icons-material/GraphicEq'
import IMAGE from '../Removal-815.png'

export const Header = () => {

    const {account, activateBrowserWallet, deactivate} = useEthers()

    const isConnected = account !== undefined

    return (
            
                <div>
                <AppBar color='transparent' position='sticky' sx={{
                    boxShadow: 'none',
                }}>
                    <Toolbar>
                    {/* <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon />
                    </IconButton> */}

                    <Box sx={{
                            // flexGrow: 1,
                            // ml: 12
                        }}>
                        <Link to={"/"} style={{textDecoration:"none"}} >                        
                            <GraphicEqIcon fontSize='large' sx={{
                                color: '#026e1f',
                                
                            }}
                                />
                        {/* <img src={IMAGE} height='60' /> */}
                        </Link>

                

                    </Box>

                    <IconButton edge="end" sx={{
                        marginLeft: 'auto',
                    }}>
                    {isConnected ? (
                        <Box sx={{
                            edge: 'end'
                        }}>
                        <Link to="/dash" style={{all:"unset"}}>
                            <Button sx={{align: 'right'}}
                                variant="outlined"
                                size='large'
                                >
                                Dashboard
                            </Button>              
                        </Link>
                        </Box>
                    ) : (
                        <Box sx={{
                        }}>
                        <Link to="/dash" style={{all:"unset"}}>
                            <Button sx={{align: 'right'}}
                                variant="outlined"
                                onClick={() => activateBrowserWallet()}
                                >
                                Dashboard
                            </Button>
                        </Link>
                        </Box>
                    )}
                    </IconButton>
                    </Toolbar>
                </AppBar>
                </div>
    );
}