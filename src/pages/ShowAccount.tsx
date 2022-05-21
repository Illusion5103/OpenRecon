import UAuth from '@uauth/js'
import {useEthers} from "@usedapp/core"

async function ShowAccount() {

    const {account} = useEthers()

    const uauth = new UAuth({
        clientID: 'uauth_example_spa_id',
        redirectUri: 'http://localhost:5000/callback',
      })

    if (account) {
        return (
            <div>
                {account}
            </div>
        )
    } 
    if (await uauth.user()) {
        return (
            <div>
                <pre>
                    <code>
                    {JSON.stringify(uauth.user, null, 2)}
                    </code>
                </pre>
            </div>
        )
    }
}

export default ShowAccount;