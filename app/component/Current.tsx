import React from 'react';
import { getCurrentDate } from '../utils/currentDate';
import {FaLocationDot} from 'react-icons/fa6';

interface CurrentProps {
  data: {
    current?: {
      condition: {
        icon: string;
        text: string;
      }
      temp_c: number;
    };
    location?: {
      name: string;
      region: string;
      country: string;
    };
  };
}

const Current = ({ data }: CurrentProps) => {
  const currentDate = getCurrentDate();
  const weatherIconData = data?.current?.condition;

  return (
    <div className="flex flex-col mb-8 md:mb-0 items-start gap-2 w-full md:w-1/2 mr-0 md:mr-6">
      <div className="flex items-center">
        {
          weatherIconData && (
            <div>
              <h2 className="text-3xl text-white">Today</h2>
              <p className="text-white">
                {currentDate}
              </p>
            </div>
          )
        }
        {weatherIconData && (
          <div>
            <img className="w-[60px] object-cover" src={weatherIconData.icon} alt={weatherIconData.text} />
          </div>
        )}
      </div>
      <div>
        {data.current && (
          <div className="mb-4">
            <p className="text-5xl text-white">
              {
                data.current.temp_c.toFixed()
              }
              <span> °C</span>
            </p>
            <span className="text-white">{data.current.condition.text}</span>
          </div>
        )}
        {data.location && (
          <div className="flex items-center text-black bg-white/90 px-2 py-2 rounded-xl">
            <FaLocationDot/>
            <span>{data.location.name}, {data.location.region}, {data.location.country}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Current;