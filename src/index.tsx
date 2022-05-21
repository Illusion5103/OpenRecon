import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import App from './pages/App'
import BountyMapper from './pages/Bounties'
import Dash from './pages/Dash'
import Post from './pages/Post'
import Submit from './pages/Submit'
import About from './pages/About'
import Learn from './pages/Learn'
import Privacy from './pages/Privacy'
import Contact from './pages/Contact'
import Send from './pages/Send'
import SendIntel from './pages/SendIntel'
import { Header } from './components/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import { formatEther } from '@ethersproject/units'
import { Mainnet, DAppProvider, useEtherBalance, useEthers, Config } from '@usedapp/core'
import { getDefaultProvider } from 'ethers'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: getDefaultProvider('mainnet'),
  },
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <DAppProvider config={config}>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/explore" element={<BountyMapper />} />
        <Route path="/dash" element={<Dash />} />
        <Route path="/post" element={<Post />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/about" element={<About />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/send" element={<Send />} />
        <Route path="/sendintel" element={<SendIntel />} />
      </Routes>
    </Router>
  </DAppProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
