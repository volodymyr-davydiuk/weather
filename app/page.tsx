"use client"

import Input from './component/Input';

const Home = () => {
  return (
    <div className="bg-cover bg-gradient-to-r from-blue-600 to-blue-300 h-screen">
      <div className="bg-white/25 w-full h-fit flex flex-col">
        {/*Header*/}
        <div className="flex flex-col md:flex-row justify-between items-center p-12">
          <Input/>
          <h1 className="mb-8 md:mb-0 order-1 text-white py-2 px-4 rounded-xl italic font-bold">Weather App.</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;