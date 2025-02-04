import Image from "next/image";
import React from "react";
import { lekton, barcode } from "../fonts";
const Work = () => {
  return (
    <>
      <div className="grid grid-flow-row auto-rows-auto grid-cols-12 2sm:grid-flow-col 2sm:grid-rows-1">
        <div className="flex items-center justify-center col-span-full 2sm:col-span-4 pl-2">
          <Image
            src="Ellipse.svg"
            alt="computer"
            width={180}
            height={180}
            className="w-[auto] h-[15rem]"
            priority
          ></Image>
        </div>
        <div className="flex flex-col justify-center text-balance text-center gap-y-4 px-2 2sm:col-span-8 col-span-full">
          <div
            className={`${barcode.className} text-[3em] md:text-[4rem] tracking-[0.6rem]`}
          >
            WELCOME.
          </div>
          <div className={`${lekton.className} text-xs md:text-[1em]`}>
            Hey, I’m Pup!. I’m into web development and currently studying
            computer engineering. I love messing around with new tools and
            building cool stuff for the web.
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
