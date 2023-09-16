import React from 'react';

interface BusinessCardProps {
  name: string;
  description: string;
  // Add more business-related fields as needed
}

const BusinessCard: React.FC<BusinessCardProps> = ({ name, description }) => {
  return (
    <div className="business-card">
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default BusinessCard;
