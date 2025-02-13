'use client'
import React,{ useContext} from "react";
import { lateef } from "../fonts";
import Card1 from "./Card1";
import { DataContext } from "./DataContext";
const Work = () => {
  const myContext = useContext(DataContext);
  const about = (myContext?.data1 as { about?: any })?.about;
  const project = (myContext?.data2 as { projects?: any})?.projects;
  const pokedex = [
    "Pokedex",
    "A Next.js project practicing API integration, fetching and displaying Pokémon data from PokeAPI. Styled with Tailwind CSS and deployed on Vercel",
    "/pokedex.svg",
    "https://pokedex.software",
    "https://github.com/pupiesa/Pokedex",
  ];
  const premid = [
    "Dek-d Premid Presence",
    `Contributed to this open-source browser extension that displays the current browsing website on a user's Discord status. Added support for Dek-D by implementing TypeScript for site detection and integration.`,
    "/dekd.svg",
    "https://premid.app/store/presences/Dek-d",
    "https://github.com/PreMiD/Presences",
  ];
  return (
    <>
      {/* work */}
      <div className={`flex flex-col items-center ${lateef.className} mb-4`}>
        <div className="font-bold text-[4rem]">{about ? about[1].value : ""}</div>
        <div className="">{about ? about[2].value : ""}</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-[2rem] gap-y-8 lg:gap-x-[2rem] sm:px[6rem] h-[auto]">
      {project ? project.map(function(data:any) {
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
