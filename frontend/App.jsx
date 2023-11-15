import React from "react"
import logo from "./assets/dfinity.svg"
/*
 * Connect2ic provides essential utilities for IC app development
 */
import { createClient } from "@connect2ic/core"
import { PlugWallet } from "@connect2ic/core/providers/plug-wallet"
import { defaultProviders } from "@connect2ic/core/providers"
import { ConnectButton, ConnectDialog, Connect2ICProvider } from "@connect2ic/react"
import "@connect2ic/core/style.css"
/*
 * Import canister definitions like this:
 */
import * as dip721 from "../.dfx/local/canisters/dip721"
/*
 * Some examples to get you started
 */
// import { Counter } from "./components/Counter"
// import { Transfer } from "./components/Transfer"
import { Profile } from "./components/Profile"
import Dip721NftMinter from "./components/MintNFT"

function App() {

  return (
    <div className="App">

      <div className="auth-section">
        <ConnectButton />
      </div>
      <ConnectDialog />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="slogan">
          DeveriFI
        </p>
      </header>


      <div className="examples">
        <Profile />
        <div className="example"><Dip721NftMinter /></div>

      </div>

    </div>
  )
}

const client = createClient({
  canisters: {
    dip721,
  },
  providers: [
    new PlugWallet(),
  ],
  globalProviderConfig: {
    /*
     * Disables dev mode in production
     * Should be enabled when using local canisters
     */
    dev: import.meta.env.DEV,
  },
})

export default () => (
  <Connect2ICProvider client={client}>
    <App />
  </Connect2ICProvider>
)
