import Image from "next/image";
import React from "react";
import { gothic } from "../fonts";
import Link from "next/link";

const Card1 = () => {
  return (
    <div className="flex flex-col rounded-[20px] border-solid border-2 border-black sm:max-w-[300px] lg:max-w-none sm:mx-auto">
      <div>
        <Image
          src="/pokedex.svg"
          alt="pokedex image"
          width={180}
          height={180}
          className="w-[100%] h-[100%] rounded-t-[20px] bg-[#4A628A]"
        ></Image>
      </div>
      <div className={`${gothic.className} bg-[#4A628A] flex flex-col p-4 rounded-b-[20px] gap-y-3 `}>
        <div className="text-[2em]">Pokedex</div>
        <div className="text-[1em] tracking-wide">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit
        </div>
        <div className="flex flew-row justify-end gap-x-4">
          <Link href={"https://pokedex.software"} target="blank">
            <Image
              src="/internet.svg"
              alt="internet Icon"
              width={30}
              height={30}
              className="w-[auto] h-[1.5em]"
            ></Image>
          </Link>
          <Link href={"https://github.com/pupiesa/Pokedex"} target="blank">
            <Image
              src="/git.svg"
              alt="github Icon"
              width={30}
              height={30}
              className="w-[auto] h-[1.5em]"
            ></Image>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card1;
