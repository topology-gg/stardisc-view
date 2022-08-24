import {
  useStarknet,
  InjectedConnector
} from '@starknet-react/core'


export function ConnectWallet() {
  const { account, connect } = useStarknet()

  if (account) {
    return (
        <p
            className="connected_account"
            style={{padding:'0',margin:'0',height:'50px',lineHeight:'50px',verticalAlign:'middle',fontSize:'20px'}}
        >
            Connected account: {String(account).slice(0,5)}...{String(account).slice(-4)}
        </p>
    )
  }

  return <button
            onClick = {
                () => {
                    connect(new InjectedConnector())
                    console.log ('connect')
                }
            }
            style={{padding:'0 30px',fontSize:'20px',height:'50px',border:'0',color:'#333333',border:'1px solid #333'}}
            className = 'creamy-button'
        >
            Connect wallet
        </button>
}
