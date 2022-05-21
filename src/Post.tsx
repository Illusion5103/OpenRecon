import {useEthers} from "@usedapp/core"
import {Header} from "./components/Header"
import PostForm from "./PostForm.jsx"
import LoginPost from "./LoginPost"
import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import {Link} from 'react-router-dom'
import {Container, Typography, Button, Box, Grid, Card} from '@mui/material'

// These two should probably just be other components or pages in other files to keep it clean
function Connected() {
    return (
        <div>
            <PostForm />
        </div>
    )
}

function NotConnected() {
    return (
        <div>
            <LoginPost />
        </div>
    )
}

function Access () {
    const {account} = useEthers()

    const isConnected = account !== undefined

    if (isConnected) {
        return (
            <div>
                <Connected />
            </div>
        )
    }
    return (
        <div>
            <NotConnected />
        </div>
    )
}

export default Access;