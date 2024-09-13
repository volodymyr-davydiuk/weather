"use client"

import Input from './component/Input';
import React, {useEffect, useState} from 'react';
import Current from './component/Current';
import WeekForecast from '@/app/component/WeekForecast';
import WeatherDetails from '@/app/component/WeatherDetails';

const Home = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const [activeDay, setActiveDay] = useState(0);
  let localCity: string | null = localStorage.getItem("city");

  const url = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KYE}&q=${location}&days=7&aqi=yes&alerts=yes`;

  useEffect(() => {
    if (localCity) {
      setLocation(localCity);
      const handleLocalSearch = async () => {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
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
      handleLocalSearch()
    }
  }, [localCity])

  return (
    <div className="bg-cover bg-gradient-to-r from-blue-600 to-blue-300 h-fit">
      <div className="bg-white/25 w-full h-fit flex flex-col">
        {/*Header*/}
        <header className="flex flex-col md:flex-row justify-between items-center p-12">
          <Input
            setLocation={setLocation}
          />
          <h1 className="mb-8 md:mb-0 order-1 text-white py-2 px-4 rounded-xl italic font-bold">Weather App.</h1>
        </header>
        <main>
          {
            Object.keys(data).length === 0 && error === "" ? (
              <div className="text-white text-center h-screen mt-[5rem]">
                <h2 className="text-3xl font-bold mb-4">Welcome to the weather app.</h2>
                <p className="text-xl">Enter a city name to get the weather forecast.</p>
              </div>
            ) : error !== "" ? (
              <div className="text-white text-center h-screen mt-[5rem]">
                <p className="text-3xl font-bold mb-4">The city not found!</p>
                <p className="text-xl">Please, enter a valid city.</p>
              </div>
            ) : (
              <>
                <div className="flex md:flex-row flex-col p-12 items-center justify-between">
                  <Current data={data}/>
                  <WeekForecast data={data} activeDay={activeDay} setActiveDay={setActiveDay}/>
                </div>
                <div>
                  <WeatherDetails data={data} activeDay={activeDay}/>
                </div>
              </>
            )
          }
        </main>
      </div>
    </div>
  );
};

export default Home;