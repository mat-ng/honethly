import Image from "next/image";

import React from 'react';
import Header from './../components/ui/header';
import SearchBar from './../components/ui/search';
import BusinessCard from './../components/ui/card';

const Homepage: React.FC = () => {
  // Sample data (replace with your data fetching logic)
  const businesses = [
    { name: 'Business 1', description: 'Description for Business 1' },
    { name: 'Business 2', description: 'Description for Business 2' },
    // Add more business data as needed
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center bg-gray-100 dark:bg-gray-800">
      <Header />
      <SearchBar />
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {businesses.map((business, index) => (
            <BusinessCard key={index} {...business} />
          ))}
        </div>
      </div>
    </div>
  );
};





export default Homepage;
