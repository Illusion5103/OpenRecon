import UAuth from '@uauth/js'
import {useEthers} from "@usedapp/core"

// display the uauth.user() object on the screen
function displayUser(   ) {
  const {account, activateBrowserWallet, deactivate} = useEthers()
  const uauth = new UAuth({
    clientID: 'uauth_example_spa_id',
    redirectUri: 'http://localhost:5000/callback',
  })
  const user = uauth.user()
  return (
    <div>
      <pre>
        <code>
          {JSON.stringify(user, null, 2)}
        </code>
      </pre>
    </div>
  )
}

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