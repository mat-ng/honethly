'use client'
import React, { useEffect, useState, useRef } from 'react';
import {Pay} from '@/components/ui/pay'
import { Business } from '@/app/page';
import { useAccount } from 'wagmi';

export const BusinessModal = (props: { business: Business, isShowing: boolean, setIsShowing: (b: boolean) => void }) => {
  const { isShowing, business, setIsShowing} = props;
  const {name,description,rating} = business;
  const modalRef = useRef(null);

  const { address, isConnected } = useAccount();

  
  const [isVerified, setIsVerified] = useState(false)
  const [pizzaTextDisabled, setPizzaTextDisabled] = useState(false)
  const [musicTextDisabled, setMusicTextDisabled] = useState(false)

  const closeModal = (e: any) => {
    if (modalRef.current) {
      setIsShowing(false);
    }
  };

  const [pizzaReviews, setPizzaReviews] = useState(["The pizza is very tasty", "Good customer service. I would come again.", "Affordable price and clean restaurant ."])
  const [musicReviews, setMusicReviews] = useState(["nice and helpful staff, very informative", "Great selection of instruments"])

  const redirectToWallet = () => {
    window.open(`/transfer?to=${business.ethAddress}`);
  };

  const handleReview = async () => {
    if(!isConnected){
      setIsVerified(false);
      return;
    }
    const res = await fetch(`https://api-goerli.etherscan.io/api?module=account&action=txlist&address=${address?.toLocaleLowerCase()}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=8BVPPZIHUYX9HDBQ388S6ST3TFESSZWU31`)
    const data = await res.json()
    data.result.map((transaction: any) => {
        if (transaction.to == "0xe650ac792a9244dd9e97e37548a1123d9ba27003" && transaction.from == address?.toLocaleLowerCase()) { 
          //check if user transferred money to company
            setIsVerified(true)
        }
  })
}

const handlePizzaSubmit = (e: any) => {
  if (e.code == "Enter") {
    setPizzaReviews(prevState => ([e.target.value, ...prevState]))
    setPizzaTextDisabled(true)
  }
}

const handleMusicSubmit = (e: any) => {
  if (e.code == "Enter") {
    setMusicReviews(prevState => ([e.target.value, ...prevState]))
    setMusicTextDisabled(true)
  }
}

  return (
    <div>
      {isShowing && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50"
          onClick={closeModal}
        >
          <div
            ref={modalRef}
            className="bg-white p-6 rounded-lg shadow-lg w-96"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-semibold mb-4">{name}</h2>
            <p className="text-gray-600 mb-4">{description}</p>
            <button
              onClick={redirectToWallet}
              className="bg-gray-500 hover:bg-gray-600 text-white rounded-md px-2 py-1 my-2 focus:outline-none mr-2"
            >
              Pay
            </button>
            <button
              onClick={handleReview}
              className="bg-gray-500 hover:bg-gray-600 text-white rounded-md px-2 py-1 my-2 focus:outline-none mr-2"
            >
              Review
            </button>
            
            {isVerified ? business.name=="Campus Pizza" ? <>
              <input
                type="text"
                placeholder="Enter a review"
                onKeyUp={handlePizzaSubmit}
                style={{display: pizzaTextDisabled ? 'none' : ''}}
              />
              {pizzaReviews.map((review) => {
                return <p>{review}</p>
              })}
              </>
              :
              <>
              <input
                type="text"
                placeholder="Enter a review"
                onKeyUp={handleMusicSubmit}
                style={{display: musicTextDisabled ? 'none' : ''}}
                />
              {musicReviews.map((review) => {
                return <p>{review}</p>
              })}
            </>
            :
            <p className="text-red-600">You need to connect your wallet to view or leave reviews!</p>
            }
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessModal;