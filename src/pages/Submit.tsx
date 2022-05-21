import {useEthers} from "@usedapp/core"
import {Header} from "../components/Header"
import SubmitForm from './SubmitForm'
import LoginSubmit from './LoginSubmit'
import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import {Link} from 'react-router-dom'
import {Container, Typography, Button, Box, Grid, Card} from '@mui/material'

function Connected() {
    return (
        <div>
            <SubmitForm />
        </div>
    )
}

function NotConnected() {
    return (
        <div>
            <LoginSubmit />
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