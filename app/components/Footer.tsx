'use client'
import Image from "next/image";
import Link from "next/link";
import React,{ useContext } from "react";
import { gothic } from "../fonts";
import { DataContext } from "./DataContext";

interface AboutItem {
  [key: string]: string;
}

const Footer = () => {
  const myContext = useContext(DataContext);
  const about = myContext?.data1 as AboutItem;
  console.log(about)
  return (
    <div className="w-screen bg-[#000000] static bottom-0 h-20 flex flex-row items-center">
      <div className={`basis-1/2 px-8 text-[1em] ${gothic.className} tracking-[0.02rem]`}>{about && about["Email"]}</div>
      <div className="basis-1/2 flex flex-row justify-end gap-x-4 px-8">
        {about && <Link href={about && about["git"]} target="blank">
        <Image
          src="/git.svg"
          alt="github Icon"
          width={30}
          height={30}
          className="w-[auto] h-[1.5em]"
        ></Image></Link>}
        {about &&<Link href={about && about["linkedIn"]} target="blank">
        <Image
          src="/linkedin.svg"
          alt="linkedin Icon"
          width={30}
          height={30}
          className="w-[auto] h-[1.5em]"
        ></Image></Link>}
      </div>
    </div>
  );
};

export default Footer;
