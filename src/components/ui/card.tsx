import React from 'react';

interface BusinessCardProps {
  name: string;
  description: string;
  rating: number;
  imageUrl: string;
}

const BusinessCard: React.FC<BusinessCardProps> = ({ name, description, rating, imageUrl }) => {
  return (
    <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-4">
      <div className="mb-4">
        <img src={imageUrl} alt={name} className="w-full h-auto rounded-lg" />
      </div>
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p>{description}</p>
      <div className="mt-2 flex items-center">
        <span className="text-yellow-500">{rating} stars</span>
      </div>
    </div>
  );
};

export default BusinessCard;
