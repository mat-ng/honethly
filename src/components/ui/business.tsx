import React, { useRef } from 'react';
import { Business } from '@/app/page';

export const BusinessModal = (props: { business: Business, isShowing: boolean, setIsShowing: (b: boolean) => void }) => {
  const { isShowing, business, setIsShowing} = props;
  const {name,description,rating} = business;
  const modalRef = useRef(null);

  const closeModal = (e: any) => {
    if (modalRef.current) {
      setIsShowing(false);
    }
  };

  const redirectToWallet = () => {
    window.open('/examples/wallet');
  };

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
            <div className="mt-2 flex items-center">
              <span className="text-yellow-500">{rating} stars</span>
            </div>
            <button
              onClick={redirectToWallet}
              className="bg-gray-500 hover:bg-gray-600 text-white rounded-md px-2 py-1 my-2 focus:outline-none mr-2"
            >
              Pay
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessModal;