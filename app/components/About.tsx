import Image from "next/image";
import React from "react";
import { lekton, barcode } from "../fonts";

const About = () => {
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
            className={`${barcode.className} text-[4rem] md:text-[7rem] tracking-[0.6rem] mt-[3rem] md:mt-[0px]`}
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

export default About;