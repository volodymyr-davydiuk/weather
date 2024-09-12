"use client"

import Input from './component/Input';
import React, { useState } from 'react';

const Home = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const url = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KYE}&q=${location}&days=7&aqi=yes&alerts=yes`;

  const handleSearch = async(e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error();
        }
        const data = await response.json();
        setData(data);
        setLocation("");
        setError("");
      } catch (error) {
        console.error(error);
        setError("City not found");
        setData({});
      }
    }
  }

  console.log(data);

  return (
    <div className="bg-cover bg-gradient-to-r from-blue-600 to-blue-300 h-screen">
      <div className="bg-white/25 w-full h-fit flex flex-col">
        {/*Header*/}
        <div className="flex flex-col md:flex-row justify-between items-center p-12">
          <Input
            handleSearch={handleSearch}
            setLocation={setLocation}
          />
          <h1 className="mb-8 md:mb-0 order-1 text-white py-2 px-4 rounded-xl italic font-bold">Weather App.</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;