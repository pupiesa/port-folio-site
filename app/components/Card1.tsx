import Image from "next/image";
import React from "react";
import { gothic } from "../fonts";
import Link from "next/link";

interface Card1Props {
  names: string;
  desc: string;
  imgs: string;
  links: string;
  gittlinks: string;
}

const Card1: React.FC<Card1Props> = ({ names,desc,imgs,links,gittlinks }) => {
  return (
    <div className="flex flex-col rounded-[20px] border-solid border-2 border-black sm:max-w-[300px] lg:max-w-none sm:mx-auto">
      <div>
        <Image
          src={imgs}
          alt="pokedex image"
          width={180}
          height={180}
          className="w-[100%] h-[100%] rounded-t-[20px] bg-[#4A628A]"
        ></Image>
      </div>
      <div className={`${gothic.className} bg-[#4A628A] flex flex-col p-4 rounded-b-[20px] gap-y-3  h-[100%]`}>
        <div className="text-[2em]">{names}</div>
        <div className="text-[1em] tracking-wide h-[6em]">
          {desc}
        </div>
        <div className="flex flew-row justify-end gap-x-4">
          <Link href={links} target="blank">
            <Image
              src="/internet.svg"
              alt="internet Icon"
              width={30}
              height={30}
              className="w-[auto] h-[1.5em]"
            ></Image>
          </Link>
          <Link href={gittlinks} target="blank">
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
