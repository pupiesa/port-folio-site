'use client'
import React,{ useContext} from "react";
import { lateef } from "../fonts";
import Card1 from "./Card1";
import { DataContext } from "./DataContext";

interface AboutItem {
  key: string;
  value: string;
}
interface projects {
  key: number;
  name: string;
  description: string;
  image: string;
  link: string;
  git: string;
}
const Work = () => {
  const myContext = useContext(DataContext);
  const about = (myContext?.data1 as { about?: Array<AboutItem> })?.about;
  const project = (myContext?.data2 as { projects?: Array<projects>})?.projects;
  return (
    <>
      {/* work */}
      <div className={`flex flex-col items-center ${lateef.className} mb-4`}>
        <div className="font-bold text-[4rem]">{about ? about[1].value : ""}</div>
        <div className="">{about ? about[2].value : ""}</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-[2rem] gap-y-8 lg:gap-x-[2rem] sm:px[6rem] h-[auto]">
      {project ? project.map(function(data:projects) {
      return (
         <Card1
          key={data.key}
          names={data.name}
          desc={data.description}
          imgs={data.image}
          links={data.link}
          gitlinks={data.git}
        />
        
      )
    }) : ""}
      </div>
    </>
  );
};

export default Work;
