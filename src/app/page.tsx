'use client'
import Image from "next/image";

import React, {useState} from 'react';
import Header from './../components/ui/header';
import SearchBar from './../components/ui/search';
import BusinessCard from './../components/ui/card';
import { Button } from "@/components/ui/button";
import Business1img from './../../img/preview.jpg';

const Homepage: React.FC = () => {
  // Sample data (replace with your data fetching logic)
  const businesses = [
    {
      name: 'Business 1',
      description: 'Description for Business 1',
      rating: 4.5, // Sample rating value
      imageUrl: Business1img.src // Sample image source URL
    },
    {
      name: 'Business 2',
      description: 'Description for Business 2',
      rating: 3.7, // Sample rating value
      imageUrl: Business1img.src // Sample image source URL
    },
    {
      name: 'Business 2',
      description: 'Description for Business 2',
      rating: 3.7, // Sample rating value
      imageUrl: Business1img.src // Sample image source URL
    },
    {
      name: 'Business 2',
      description: 'Description for Business 2',
      rating: 3.7, // Sample rating value
      imageUrl: Business1img.src // Sample image source URL
    },
    {
      name: 'Business 2',
      description: 'Description for Business 2',
      rating: 3.7, // Sample rating value
      imageUrl: Business1img.src // Sample image source URL
    },
    {
      name: 'Business 2',
      description: 'Description for Business 2',
      rating: 3.7, // Sample rating value
      imageUrl: Business1img.src // Sample image source URL
    },
    {
      name: 'Business 2',
      description: 'Description for Business 2',
      rating: 3.7, // Sample rating value
      imageUrl: Business1img.src // Sample image source URL
    }
  ];

  const [filter, setFilter] = useState('')

  const handleNewFilter = (filter: string) => {
    setFilter(filter);
  }

  return (
    <>
      <div className="h-8 bg-black">
        <Header />
        <SearchBar filterSearch = {handleNewFilter}/>
      </div>
      <div className="mt-10 flex flex-col justify-center bg-black pb-16 pt-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {businesses.map((business, index) => (
              business.name.includes(filter) ? <BusinessCard key={index} {...business} /> : null
            ))}
          </div>
        </div>
      </div>
    </>
  );
};





export default Homepage;
