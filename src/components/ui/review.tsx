// import { usePrepareSendTransaction, useSendTransaction, useWaitForTransaction } from "wagmi";
// import { parseEther } from 'viem';
import { Button } from "./button";

export function Review(
    // props: {
    // to: string,
    // amount: string,
// }
){
    // const { to, amount } = props;
    // const { config } = usePrepareSendTransaction({
    //     to: to,
    //     value: parseEther(amount),
    //     chainId: 5,
    // })
    // const { data, sendTransaction } = useSendTransaction(config);
    // const { isLoading, isSuccess } = useWaitForTransaction({
    //     hash: data?.hash,
    //   })
    // const handleClick = () => {
    //     sendTransaction?.();
    // }

    return (
        <div className='flex flex-col items-center'>
            <Button className='w-64' >Review</Button>
        </div>
    );
}
