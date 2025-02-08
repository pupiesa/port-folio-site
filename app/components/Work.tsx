import React from "react";
import { lateef } from "../fonts";
import Card1 from "./Card1";

const Work = () => {
  const pokedex = ['Pokedex','A Next.js project practicing API integration, fetching and displaying Pokémon data from PokeAPI. Styled with Tailwind CSS and deployed on Vercel','/pokedex.svg','https://pokedex.software',"https://github.com/pupiesa/Pokedex"]
  const premid = ['Dek-d Premid Presence',`Contributed to this open-source browser extension that displays the current browsing website on a user's Discord status. Added support for Dek-D by implementing TypeScript for site detection and integration.`,'/dekd.svg','https://premid.app/store/presences/Dek-d','https://github.com/PreMiD/Presences']
  return (
    <>
      {/* work */}
      <div className={`flex flex-col items-center ${lateef.className} mb-4`}>
        <div className="font-bold text-[4rem]">My Work</div>
        <div className="">Check out what I’ve been working on</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-[2rem] gap-y-8 lg:gap-x-[2rem] sm:px[6rem] h-[auto]">
        <Card1 names={pokedex[0]} desc={pokedex[1]} imgs={pokedex[2]} links={pokedex[3]} gittlinks={pokedex[4]}/>
        <Card1 names={premid[0]} desc={premid[1]} imgs={premid[2]} links={premid[3]} gittlinks={premid[4]}/>
        <Card1 names={pokedex[0]} desc={pokedex[1]} imgs={pokedex[2]} links={pokedex[3]} gittlinks={pokedex[4]}/>
      </div>
    </>
  );
};

export default Work;
