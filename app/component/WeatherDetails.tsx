import React from 'react';
import { LuWind } from 'react-icons/lu';
import { WiHumidity } from 'react-icons/wi';
import { GiWindSlap } from 'react-icons/gi';
import { BsSunrise, BsSunset } from 'react-icons/bs';
import { FaEye } from 'react-icons/fa';
import { CiTempHigh } from 'react-icons/ci';

interface WeatherDetailsProps {
  data: {
    forecast?: {
      forecastday: {
        astro: {
          sunrise: string;
          sunset: string;
        }
        day: {
          maxwind_kph: number;
          avghumidity: number;
          condition: {
            icon: string;
            text: string;
          };
          totalprecip_mm: number;
          mintemp_c: number;
          maxtemp_c: number;
          avgvis_km: number;
        }
      }[]
    }
  };
  activeDay: number;
}

const WeatherDetails = ({ data, activeDay }: WeatherDetailsProps) => {
  const currentData = data?.forecast?.forecastday[activeDay].day;

  return (
    <>
     <div className="p-12">
       <h2 className="mb-4 text-2xl text-white">
         Weather details:
       </h2>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
         <div className="bg-white/50 p-4 flex items-center justify-center gap-6 rounded-xl">
           <div className="text-2xl">
             <h3>
               Wind speed:
             </h3>
             <p>
               {currentData?.maxwind_kph} km/h
             </p>
           </div>
           <div>
             <LuWind fontSize={40}/>
           </div>
         </div>
         <div className="bg-white/50 p-4 flex items-center justify-center gap-6 rounded-xl">
           <div className="text-2xl">
             <h3>
               Humidity:
             </h3>
             <p>
               {currentData?.avghumidity} %
             </p>
           </div>
           <div>
             <WiHumidity fontSize={40}/>
           </div>
         </div>
         <div className="bg-white/50 p-4 flex items-center justify-center gap-6 rounded-xl">
           <div className="text-2xl">
             <p>
               {currentData?.condition.text}
             </p>
           </div>
           <div>
             <img src={currentData?.condition.icon} alt={currentData?.condition.text}/>
           </div>
         </div>
         <div className="bg-white/50 p-4 flex items-center justify-center gap-6 rounded-xl">
           <div className="text-2xl">
             <h3>
               Sunrise:
             </h3>
             <p>
               {data?.forecast?.forecastday[activeDay].astro.sunrise}
             </p>
           </div>
           <div>
             <BsSunrise fontSize={40}/>
           </div>
         </div>
         <div className="bg-white/50 p-4 flex items-center justify-center gap-6 rounded-xl">
           <div className="text-2xl">
             <h3>
               Sunset:
             </h3>
             <p>
               {data?.forecast?.forecastday[activeDay].astro.sunset}
             </p>
           </div>
           <div>
             <BsSunset fontSize={40}/>
           </div>
         </div>
         <div className="bg-white/50 p-4 flex items-center justify-center gap-6 rounded-xl">
           <div className="text-2xl">
             <h3>
               Total precip:
             </h3>
             <p>
               {currentData?.totalprecip_mm} mm
             </p>
           </div>
           <div>
             <GiWindSlap fontSize={40}/>
           </div>
         </div>
         <div className="bg-white/50 p-4 flex items-center justify-center gap-6 rounded-xl">
           <div className="text-2xl">
             <h3>
               Temperature:
             </h3>
             <p>
               Min: {currentData?.mintemp_c.toFixed()} °C
             </p>
             <p>
               Max: {currentData?.maxtemp_c.toFixed()} °C
             </p>
           </div>
           <div>
             <CiTempHigh fontSize={40}/>
           </div>
         </div>
         <div className="bg-white/50 p-4 flex items-center justify-center gap-6 rounded-xl">
           <div className="text-2xl">
             <h3>
               Visibility:
             </h3>
             <p>
               {currentData?.avgvis_km} km
             </p>
           </div>
           <div>
             <FaEye fontSize={40}/>
           </div>
         </div>
       </div>
     </div>
    </>
  );
};

export default WeatherDetails;