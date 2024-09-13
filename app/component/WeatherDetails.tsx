import React from 'react';
import { LuWind } from 'react-icons/lu';
import { WiHumidity } from 'react-icons/wi';
import { GiCompass, GiWindSlap } from 'react-icons/gi';
import { BsSunrise, BsSunset } from 'react-icons/bs';
import { FaEye } from 'react-icons/fa';
import { CiTempHigh } from 'react-icons/ci';

interface WeatherDetailsProps {
  data: {
    current?: {
      wind_kph: number;
      humidity: number;
      wind_dir: string;
      pressure_mb: number;
      feelslike_c: number;
      vis_km: number;
    }
    forecast?: {
      forecastday: {
        astro: {
          sunrise: string;
          sunset: string;
        }
      }[]
    }
  }
}

const WeatherDetails = ({ data }: WeatherDetailsProps) => {
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
               {data?.current?.wind_kph} km/h
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
               {data?.current?.humidity} %
             </p>
           </div>
           <div>
             <WiHumidity fontSize={40}/>
           </div>
         </div>
         <div className="bg-white/50 p-4 flex items-center justify-center gap-6 rounded-xl">
           <div className="text-2xl">
             <h3>
               Wind direction:
             </h3>
             <p>
               {data?.current?.wind_dir}
             </p>
           </div>
           <div>
             <GiCompass fontSize={40}/>
           </div>
         </div>
         <div className="bg-white/50 p-4 flex items-center justify-center gap-6 rounded-xl">
           <div className="text-2xl">
             <h3>
               Sunrise:
             </h3>
             <p>
               {data?.forecast?.forecastday[0].astro.sunrise}
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
               {data?.forecast?.forecastday[0].astro.sunset}
             </p>
           </div>
           <div>
             <BsSunset fontSize={40}/>
           </div>
         </div>
         <div className="bg-white/50 p-4 flex items-center justify-center gap-6 rounded-xl">
           <div className="text-2xl">
             <h3>
               Air pressure:
             </h3>
             <p>
               {data?.current?.pressure_mb} hPa
             </p>
           </div>
           <div>
             <GiWindSlap fontSize={40}/>
           </div>
         </div>
         <div className="bg-white/50 p-4 flex items-center justify-center gap-6 rounded-xl">
           <div className="text-2xl">
             <h3>
               Feels like:
             </h3>
             <p>
               {data?.current?.feelslike_c} °C
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
               {data?.current?.vis_km} km
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