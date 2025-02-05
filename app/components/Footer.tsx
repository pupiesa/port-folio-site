import Image from "next/image";
import Link from "next/link";
import React from "react";
import { gothic } from "../fonts";
const Footer = () => {
  return (
    <div className="w-screen bg-[#000000] static bottom-0 h-20 flex flex-row items-center">
      <div className={`basis-1/2 px-8 text-[1em] ${gothic.className} tracking-[0.02rem]`}>dutsakorn.t@outlook.com</div>
      <div className="basis-1/2 flex flex-row justify-end gap-x-4 px-8">
        <Link href={"https://github.com/pupiesa"} target="blank">
        <Image
          src="/git.svg"
          alt="github Icon"
          width={30}
          height={30}
          className="w-[auto] h-[1.5em]"
        ></Image></Link>
        <Link href={"https://www.linkedin.com/in/dutsakorn-tubsang-9a1b38256/"} target="blank">
        <Image
          src="/linkedin.svg"
          alt="linkedin Icon"
          width={30}
          height={30}
          className="w-[auto] h-[1.5em]"
        ></Image></Link>
      </div>
    </div>
  );
};

export default Footer;
