import { Business } from '@/app/page';
import React from 'react';

interface BusinessCardProps {
  business: Business;
  onPress: (business: Business) => void;
}

const BusinessCard: React.FC<BusinessCardProps> = ({ business, onPress }) => {
  const {name, imageUrl, description, rating } = business;
  return (
    <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-4 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-105 hover:bg-zinc-200 duration-300 cursor-pointer border hover:border-emerald-400 border-4" onClick={()=>onPress(business)}>
      <div className="mb-4">
        <img src={imageUrl} alt={name} className="w-full h-auto rounded-lg" />
      </div>
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p>{description}</p>
      <div className="mt-2 flex items-center">
      </div>
    </div>
  );
};

export default BusinessCard;
