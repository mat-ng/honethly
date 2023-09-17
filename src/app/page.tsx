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
import lazeez from './../../img/lazeez.jpeg';
import homedepot from './../../img/homedepot.jpg';
import autoshop from './../../img/autoshop.jpeg';

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
      imageUrl: campuspizza.src, // Sample image source URL
      ethAddress:'0x853A2208e924466ff7048E2878eaa596e9868a4C',
    } as Business,
    {
      name: 'Long & McQuade',
      description: 'Musical Instruments',
      imageUrl: music.src,// Sample image source URL,
      ethAddress:'0xE650ac792a9244dd9E97e37548a1123D9ba27003',
    } as Business,
    {
      name: 'Pharmasave Westmount Place ',
      description: 'Pharmacy & Home Health Care',
      imageUrl: pharmasave.src,// Sample image source URL,
      ethAddress:'0xE650ac792a9244dd9E97e37548a1123D9ba27003',
    } as Business,
    {
      name: 'Lazeez Shawarma',
      description: 'Mediterranean grill',
      imageUrl: lazeez.src,// Sample image source URL,
      ethAddress:'0xE650ac792a9244dd9E97e37548a1123D9ba27003',
    } as Business,
    {
      name: 'The Home Depot',
      description: 'Chain home improvement retailer for tools, appliances & other products',
      imageUrl: homedepot.src,// Sample image source URL,
      ethAddress:'0xE650ac792a9244dd9E97e37548a1123D9ba27003',
    } as Business,
    {
      name: 'Speedy Auto Service',
      description: 'Mechanic',
      imageUrl: autoshop.src,// Sample image source URL,
      ethAddress:'0xE650ac792a9244dd9E97e37548a1123D9ba27003',
    } as Business
  ];
  const [showModal, setShowModal] = useState(false);
  const [selectedBusiness, setSelectedBusiness] = useState<Business>(businesses[0]);
  const handleClickBusiness = (business: Business) => {
    setSelectedBusiness(business);
    setShowModal(true);
  }
  const [filter, setFilter] = useState('')

  const handleNewFilter = (filter: string) => {
    console.log(filter)
    setFilter(filter);
  }

  return (
    <>
      <div className="h-8 bg-black">
        
        <SearchBar filterSearch = {handleNewFilter}/>
      </div>
      <div className="mt-10 flex flex-col justify-center bg-black pb-16 pt-8">
        <div className="container mx-auto">
          <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 ">
            {businesses.map((business, index) => (
              business.name.toLowerCase().includes(filter.toLowerCase()) ? <BusinessCard key={index} business={business} onPress={handleClickBusiness} /> : null
            ))}
          </div>
        </div>
      </div>
      <Header />
      <BusinessModal business={selectedBusiness} isShowing={showModal} setIsShowing={setShowModal}/>

    </>
  );
};





export default Homepage;
