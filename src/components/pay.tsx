import { usePrepareSendTransaction, useSendTransaction, useWaitForTransaction } from "wagmi";
import { parseEther } from 'viem';
import { Button } from "./ui/button";

export function Pay(props: {
    to: string,
    amount: string,
}){
    const { to, amount } = props;
    const { config } = usePrepareSendTransaction({
        to: to,
        value: parseEther(amount),
        chainId: 5,
    })
    const { data, sendTransaction } = useSendTransaction(config);
    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
      })
    const handleClick = () => {
        sendTransaction?.();
    }

    return (
        <div className='flex flex-col items-center'>
            <Button className='w-64' disabled={isLoading || !sendTransaction} onClick={handleClick}> {isLoading ? 'Sending' : 'Send'} </Button>
            {isSuccess && (
                <div>
                Successfully sent {amount} ether to {to}
                </div>
            )}
        </div>
    );
}