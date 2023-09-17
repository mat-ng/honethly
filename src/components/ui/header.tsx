import React from 'react';
import { Button } from './button';
import { configureChains, useAccount, useConnect, useDisconnect } from "wagmi";
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import { goerli } from 'viem/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';


const Header: React.FC = () => {
  const { address, isConnected } = useAccount();

  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  const { disconnect } = useDisconnect();
  const { chains, publicClient, webSocketPublicClient } = configureChains(
    [goerli],
    [alchemyProvider({ apiKey: "zq4k85wT9YjooA5Fa1G1QS3nB0JteAWN" }), publicProvider()]
  );
  const connector =  new CoinbaseWalletConnector({
    chains,
    options: {
      appName: "wagmi", 
    },
  })
  return (
    <header className="fixed top-0 left-0 right-0 bg-gradient-to-b from-zinc-200 pb-2 pt-9 backdrop-blur-2xl dark:bg-zinc-800/30 ">
      <div className="container mx-auto px-6">
        <h1 className="font-bold text-2xl hover:text-emerald-600">honETHly
        <div className='float-right align-top'>
            {!isConnected ? (
              <Button className = "hover:text-emerald-600"
                disabled={!connector.ready}
                key={connector.id}
                onClick={() => connect({ connector })}
              >
                Connect to Coinbase Wallet
                {!connector.ready && " (unsupported)"}
                {isLoading &&
                  connector.id === pendingConnector?.id &&
                  " (connecting)"}
              </Button>
            ) : (<div className='flex items-right'> 
                  <div className='mr-3 mt-1'> Connected as {address?.substring(0,6) + '...' + address?.substring(address.length-4)} </div>
                  <Button className='float-right w-28' onClick={() => disconnect()}>
                    Disconnect
                  </Button>
                </div>
                )}
      </div>
        </h1>
        
      </div>
    </header>
  );
};

export default Header;
