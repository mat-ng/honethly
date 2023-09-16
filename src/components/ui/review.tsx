'use client'
// import { usePrepareSendTransaction, useSendTransaction, useWaitForTransaction } from "wagmi";
// import { parseEther } from 'viem';
import {useState} from 'react'
import { Button } from "./button";

export function Review(

    // props: {
    // to: string,
    // amount: string,
// }
){
    const [isVerified, setIsVerified] = useState(false)
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

    const handleReview = async () => {
        console.log(isVerified)
        const res = await fetch('https://api-goerli.etherscan.io/api?module=account&action=txlist&address=0x71896ddf262ceaedb7f064c5d5d43703981f388e&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=8BVPPZIHUYX9HDBQ388S6ST3TFESSZWU31')
        const data = await res.json()
        data.result.map((transaction: any) => {
            if (transaction.to == "0xE650ac792a9244dd9E97e37548a1123D9ba27003") { //check if user transferred money to company
                setIsVerified(true)
            }
      })
    }

    return (
        <div className='flex flex-col items-center'>
            <Button className='w-64' onClick={handleReview}>Review</Button>
            {isVerified && <input
                type="text"
                placeholder="Enter a review"
            />}
        </div>
    );
}
