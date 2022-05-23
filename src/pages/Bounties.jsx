import * as React from 'react'
import { Link } from "react-router-dom"
import Bounty from "./Bounty"
import {Header} from "../components/Header"
import {ThemeProvider, createTheme, Container, Typography, Box} from '@mui/material'
import { Web3Storage } from 'web3.storage'
import BountyButton from '../components/BountyButton'
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

// const bountyList = [
//   'bafkreiauxqhzmhpqicmzqlgefpt6374qrnmb755ltorjraprebwsk3dlwy',
//   'bafkreidal7acdzrtrttlla3zxegn4hdeatid5puli7molrk2dgvq6u3bgu',
//   'bafkreiacdp53zxwr2s7cc35k6fevpoua3mdjmzhuytj5hlvsh72xawicmu'
// ]

const ethEnabled = async () => {  
  if (window.ethereum) {    
    await window.ethereum.request({method: 'eth_requestAccounts'});    
    // window.web3 = new Web3(window.ethereum);    
    return true;  
  }  
return false;
}

class BountyMapper extends React.Component {
  // create a constructor
  constructor(props) {
    super(props);
    this.state = {
      bounties: [],
      title: [],
      prize: [],
      type: [],
      detail: []
    };
  }

  // take the web3.storage token and use it to retrieve the data, then parse the data into a json object
  async retrieve(cid) {
    const url = 'https://' + cid + '.ipfs.dweb.link'
    const res = await this.getIPFS(url)
    const data = JSON.parse(res)
    this.addBounty(cid)
    this.addTitle(data.title)
    this.addPrize(data.prize)
    this.addType(data.type)
    this.addDetail(data.detail)
  } 

  // add a thing to the title state array
  addTitle(title) {
    this.setState( prevState => ({
      title: [...prevState.title, title]
    }))
  }

  // add to the bounties state array
  addBounty(bounty) {
    this.setState( prevState => ({
      bounties: [...prevState.bounties, bounty],
    }))
  }

  addPrize(prize) {
    this.setState( prevState => ({
      prize: [...prevState.prize, prize],
    }))
  }

  addType(type) {
    this.setState( prevState => ({
      type: [...prevState.type, type],
    }))
  }

  addDetail(detail) {
    this.setState( prevState => ({
      detail: [...prevState.detail, detail],
    }))
  }

  getIPFS(url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.open('GET', url)
      xhr.onload = () => resolve(xhr.responseText)
      xhr.onerror = () => reject(xhr.statusText)
      xhr.send()
    })
  }

  // for each bounty in bountyList, call retrieve() on it
  dataGetter(data) {
    // use web3.js to get parent CIDs and store them in some sort of list (bountyList)
    data.map(cid => this.retrieve(cid))
  }

  async getCids() {
    const web3 = new Web3(window.ethereum)
    const contract = '0xC22c3257EAC9c8a8008a659c3711Dd4f251d6826'
    const orecon = new web3.eth.Contract(OpenReconABI, contract)  
    var abountyList = await orecon.methods.getCIDS().call()
    console.log(abountyList)
    return abountyList
  }

  componentDidMount() {
    this.getCids().then(data => this.dataGetter(data))
  }

  render() {

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
        <br/>
        <br/>
        <br/>
        <Box sx={{

        }}>
        <Typography color='white' variant='h4' sx={{
          textAlign: 'left',
          ml: 3,
          fontWeight: 'bold'
        }}>
          Explore Bounties 
          <BountyButton />
        </Typography>
        </Box>
        <br/>
        <Typography color='#acacad' sx={{
          textAlign: 'left',
          ml: 3,
          fontWeight: 'bold'
        }}>
          You must be on Meter Testnet to view bounties
        </Typography>
        <br/>
        <Box sx={{
                  verticalAlign: 'middle',
                  display: 'block',
                  padding: 3,
        }}>
          {this.state.bounties.map((id, index) => (
              <Bounty id={id} 
              title={this.state.title[index]} 
              type={this.state.type[index]} 
              prize={this.state.prize[index]} 
              detail={this.state.detail[index]}
              cid={this.state.bounties[index]}
              />
          ))}
        </Box>
        </Container>
        </Container>
        </ThemeProvider>
        </Box>
      </div>
    )
  }
}

export default BountyMapper;