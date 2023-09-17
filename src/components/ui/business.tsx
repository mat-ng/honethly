'use client'
import React, { useEffect, useState, useRef } from 'react';
import {Pay} from '@/components/ui/pay'
import { Business } from '@/app/page';

export const BusinessModal = (props: { business: Business, isShowing: boolean, setIsShowing: (b: boolean) => void }) => {
  const { isShowing, business, setIsShowing} = props;
  const {name,description,rating} = business;
  const modalRef = useRef(null);

  const [isVerified, setIsVerified] = useState(false)
  const [textValue, setTextValue] = useState('')

  const closeModal = (e: any) => {
    if (modalRef.current) {
      setIsShowing(false);
    }
  };

  const [reviews, setReviews] = useState(["The pizza is very tasty", "Good customer service. I would come again.", "Affordable price and clean restaurant ."])

  const redirectToWallet = () => {
    window.open('/transfer');
  };

  const handleReview = async () => {
    console.log(isVerified)
    const res = await fetch('https://api-goerli.etherscan.io/api?module=account&action=txlist&address=0x71896ddf262ceaedb7f064c5d5d43703981f388e&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=8BVPPZIHUYX9HDBQ388S6ST3TFESSZWU31')
    const data = await res.json()
    console.log(data.result)
    data.result.map((transaction: any) => {
        if (transaction.to == "0xe650ac792a9244dd9e97e37548a1123d9ba27003") { //check if user transferred money to company
            setIsVerified(true)
        }
  })
}

const handleSubmit = (e: any) => {
  if (e.code == "Enter") {
    setReviews(prevState => ([e.target.value, ...prevState]))
    setTextValue('')
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
            
            {isVerified ? <>
              <input
                value={textValue}
                type="text"
                placeholder="Enter a review"
                onKeyUp={handleSubmit}
                onChange={e => setTextValue(e.target.value)}
              />
              {reviews.map((review) => {
                return <p>{review}</p>
              })}
            </>
            :
            <p>You need to connect your wallet to view or leave reviews!</p>
            }
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessModal;