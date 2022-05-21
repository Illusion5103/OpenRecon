import {useEthers} from "@usedapp/core"
import {Header} from "./components/Header"
import Dashboard from "./Dashboard"
import Login from "./Login"

function Connected() {
    return (
        <div>
            <Dashboard />
        </div>
    )
}

function NotConnected() {
    return (
        <div>
            <Login />
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