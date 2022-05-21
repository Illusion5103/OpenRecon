import {Container, Typography, Button, Box, Grid} from '@mui/material'
import {useEthers} from "@usedapp/core"
import { Link } from "react-router-dom"

function BountyButton() {
  const {account, activateBrowserWallet, deactivate} = useEthers()

  const isConnected = account !== undefined

  return (
    <Box sx={{
      display: 'inline',
      alignItems: 'right',
      marginLeft: 'auto',
      marginRight: 0,
      align: 'right'
    }}>
    {isConnected ? (
      <Link to="/post" style={{all:"unset"}}>
        <Button sx={{align: 'right'}} 
          size='large' 
          color="primary"
          variant="outlined"
          className="Post-Bounty">
          Post Bounty
        </Button>              
      </Link>
    ) : (
      <Link to="/post" style={{all:"unset"}}>
        <Button sx={{align: 'right'}} 
          size='large'
          color="primary"
          variant="outlined"
          className="Post-Bounty"
          onClick={() => activateBrowserWallet()}>
          Post Bounty
        </Button>
      </Link>
    )}
    </Box>
  )
}

export default BountyButton;