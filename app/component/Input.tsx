"use client"

import { BiSearch } from 'react-icons/bi';
import React from 'react';

interface InputProps {
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({ setLocation }: InputProps) => {
  return (
    <form className="flex items-center md:w-2/4 w-full order-2 md:order-1">
      <input
        type="text"
        placeholder="Enter your city"
        className="w-full bg-transparent border-b-2 placeholder-white outline-none text-white text-2xl"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setLocation(e.target.value); localStorage.setItem("city", e.target.value)}}
      />
      <div className="ml-[-25px] text-white cursor-pointer text-2xl">
        <BiSearch />
      </div>
    </form>
  );
};

export default Input;