import React from "react";
import { lateef } from "../fonts";
import Card1 from "./Card1";

const Work = () => {
  return (
    <>
      {/* work */}
      <div className={`flex flex-col items-center ${lateef.className} mb-4`}>
        <div className="font-bold text-[4rem]">My Work</div>
        <div className="">Check out what I’ve been working on</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-[2rem] gap-y-8 lg:gap-x-[3rem]  h-[auto]">
        <Card1 />
        <Card1 />
        <Card1 />
      </div>
    </>
  );
};

export default Work;
