interface DayForecast {
  date: string;
  day: {
    condition: {
      icon: string;
      text: string;
    };
    mintemp_c: number;
    maxtemp_c: number;
  };
}

interface WeekForecastProps {
  data: {
    forecast?: {
      forecastday: DayForecast[];
    };
  };
}

const WeekForecast = ({ data }: WeekForecastProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 w-full">
      {data?.forecast?.forecastday?.map((item, index) => {
        const imgData = item?.day?.condition;
        return (
          <div key={`day-${index}`} className="bg-white/40 p-2 rounded-lg flex flex-col items-center text-center">
            <p>
              {new Date(item.date).toLocaleDateString("en-US", {weekday: "short"})}
            </p>
            {imgData && (
              <img src={imgData.icon} alt={imgData.text}/>
            )}
            <p>Min: {item?.day?.mintemp_c.toFixed()} °C</p>
            <p>Max: {item?.day?.maxtemp_c.toFixed()} °C</p>
          </div>
        )
      })}
    </div>
  );
};

export default WeekForecast;