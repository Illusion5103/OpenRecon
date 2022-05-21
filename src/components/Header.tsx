import AppBar from '@mui/material/AppBar'
import {useEthers} from "@usedapp/core"
import {Button, Toolbar, IconButton, Box} from '@mui/material'
import {Link} from 'react-router-dom'
import GraphicEqIcon from '@mui/icons-material/GraphicEq'

export const Header = () => {

    const {account, activateBrowserWallet, deactivate} = useEthers()

    const isConnected = account !== undefined

    return (
            
                <div>
                <AppBar color='transparent' position='sticky' sx={{
                    boxShadow: 'none',
                }}>
                    <Toolbar>

                    <Box sx={{
                        }}>
                        <Link to={"/"} style={{textDecoration:"none"}} >                        
                            <GraphicEqIcon fontSize='large' sx={{
                                color: '#026e1f',
                                
                            }}
                                />
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
                                size='large'
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