"use client"
import React, { useState } from 'react';
import Header from './../components/ui/header';
import SearchBar from './../components/ui/search';
import BusinessCard from './../components/ui/card';
import Business1img from './../../img/preview.jpg';
import {BusinessModal} from "@/components/ui/business";
import campuspizza from './../../img/campuspizza.jpg';
import music from './../../img/music.jpg';
import pharmasave from './../../img/pharmasave.jpg';

export interface Business {
  name: string;
  description: string;
  rating: number;
  imageUrl: string;
  ethAddress: string;
}
const Homepage: React.FC = () => {
  // Sample data (replace with your data fetching logic)
  const businesses: Business[] = [
    {
      name: 'Campus Pizza',
      description: 'Pizza',
      rating: 4.5, // Sample rating value
      imageUrl: campuspizza.src, // Sample image source URL
      ethAddress:'0x853A2208e924466ff7048E2878eaa596e9868a4C',
    } as Business,
    {
      name: 'Long & McQuade',
      description: 'Musical Instruments',
      rating: 3.7, // Sample rating value
      imageUrl: music.src,// Sample image source URL,
      ethAddress:'0xE650ac792a9244dd9E97e37548a1123D9ba27003',
    } as Business,
    {
      name: 'Pharmasave Westmount Place ',
      description: 'Pharmacy & Home Health Care',
      rating: 3.7, // Sample rating value
      imageUrl: pharmasave.src,// Sample image source URL,
      ethAddress:'0xE650ac792a9244dd9E97e37548a1123D9ba27003',
    } as Business,
    {
      name: 'Business 2',
      description: 'Description for Business 2',
      rating: 3.7, // Sample rating value
      imageUrl: Business1img.src,// Sample image source URL,
      ethAddress:'0xE650ac792a9244dd9E97e37548a1123D9ba27003',
    } as Business,
    {
      name: 'Business 2',
      description: 'Description for Business 2',
      rating: 3.7, // Sample rating value
      imageUrl: Business1img.src,// Sample image source URL,
      ethAddress:'0xE650ac792a9244dd9E97e37548a1123D9ba27003',
    } as Business,
    {
      name: 'Business 2',
      description: 'Description for Business 2',
      rating: 3.7, // Sample rating value
      imageUrl: Business1img.src,// Sample image source URL,
      ethAddress:'0xE650ac792a9244dd9E97e37548a1123D9ba27003',
    } as Business,
    {
      name: 'Business 2',
      description: 'Description for Business 2',
      rating: 3.7, // Sample rating value
      imageUrl: Business1img.src,// Sample image source URL,
      ethAddress:'0xE650ac792a9244dd9E97e37548a1123D9ba27003',
    } as Business,
  ];
  const [showModal, setShowModal] = useState(false);
  const [selectedBusiness, setSelectedBusiness] = useState<Business>(businesses[0]);
  const handleClickBusiness = (business: Business) => {
    setSelectedBusiness(business);
    setShowModal(true);
  }
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 ">
            {businesses.map((business, index) => (
              business.name.includes(filter) ? <BusinessCard key={index} business={business} onPress={handleClickBusiness} /> : null
            ))}
          </div>
        </div>
      </div>
      <BusinessModal business={selectedBusiness} isShowing={showModal} setIsShowing={setShowModal}/>

    </>
  );
};





export default Homepage;
