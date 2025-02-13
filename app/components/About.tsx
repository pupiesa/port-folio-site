'use client'
import Image from "next/image";
import { lekton, barcode } from "../fonts";
import React, { useContext } from 'react';
import { DataContext } from './DataContext';

interface AboutItem {
  key: string;
  value: string;
}

const About: React.FC = () => {
  const myContext = useContext(DataContext);
  const about = (myContext?.data1 as { about?: Array<AboutItem> })?.about;
  return (
    <>
      <div className="grid grid-flow-col grid-cols-3 h-[90vh]">
        <div className="flex items-center justify-center col-span-full md:col-span-1 order-1">
          <Image
            src="Ellipse.svg"
            alt="computer"
            width={180}
            height={180}
            className="w-[auto] h-[15rem]"
            priority
          />
        </div>
        <div className="flex flex-col justify-center text-balance text-center gap-y-4 px-2 col-span-full md:col-span-2 order-2">
          <div
            className={`${barcode.className} text-[4rem] md:text-[7rem] tracking-[0.6rem] mt-[0px]`}
          >
          {about ? about[0].key: ""}
          </div>
          <div className={`${lekton.className} text-xs md:text-[1em]`}>
         {about ? about[0].value: ""}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;