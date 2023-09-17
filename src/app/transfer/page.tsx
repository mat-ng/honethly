"use client";

import React from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import wallet from '../../../img/wallet.png';
import { Button } from "@/components/ui/button";
import { Pay } from "@/components/ui/pay";
import { useSearchParams } from 'next/navigation';

export default function Wallet() {
  const [copied, setCopied] = React.useState(false);
  const { address, isConnecting, isConnected, isDisconnected } = useAccount();

  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  const { disconnect } = useDisconnect();
  const searchParams = useSearchParams();
  const to = searchParams.get('to');
  const amount = '0.001'
  return (
    <div className="max-w-2xl flex flex-col gap-2 mx-auto p-48">
      <h2 className="text-xl font-bold text-center">Connect your wallet</h2>
      {address && (
        <div className="my-4">
          <pre className="bg-gray-200 rounded text-xs p-2">{`${address.slice(
            0,
            16
          )}...${address.slice(address.length - 16, address.length)}`}</pre>
          <div className="flex justify-between mt-2">
            <Button
              size="sm"
              variant="secondary"
              disabled={copied}
              onClick={() => {
                navigator.clipboard.writeText(address);
                setCopied(true);

                setTimeout(() => {
                  setCopied(false);
                }, 2000);
              }}
            >
              {copied ? "Copied" : "Copy Address"}
            </Button>
            <Button
              size="sm"
              variant="destructive"
              onClick={() => {
                disconnect();
              }}
            >
              Disconnect
            </Button>
          </div>
        </div>
      )}
      {connectors.map((connector) => (
        <Button
          disabled={!connector.ready || isConnected}
          key={connector.id}
          onClick={() => connect({ connector })}
        >
          {address ? 'Connected Wallet' : `Connect to ${connector.name}`}
          {!connector.ready && " (unsupported)"}
          {isLoading &&
            connector.id === pendingConnector?.id &&
            " (connecting)"}
        </Button>
      ))}
      {address && (
      <div className='flex flex-row items-center text-xs w-96'>
        <img src={wallet.src} alt={''} className="rounded-lg w-5 h-5" /> {amount} ETH from {' '}  
        {address.substring(0,5) + '...' + address.substring(address.length-4)} to {' '} 
        {to?.substring(0,5) + '...' + to?.substring(to.length-4)}
       </div>
        )}
      <div className='flex flex-row items-center justify-center'> 
        <Pay to={to!} amount={amount} /> 
      </div>

      {error && <div>{error.message}</div>}
    </div>
  );
}
