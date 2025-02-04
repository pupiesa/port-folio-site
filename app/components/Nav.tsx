import * as React from 'react';
import {gothic} from "../fonts";
import Link from 'next/link';

const Nav: React.FC = () => {
  return (
    <nav className={`${gothic.className} mb-[4rem] md:mb=[7rem]`}>
      <ul className='h-[0.5rem] flex flex-row justify-center justify-items-center text-center bg-[#7AB2D3] text-[1.5rem]'>
        <Link href='#work'><li className='w-[6rem] h-[2.3rem] bg-[#4A628A] border-b-2 border-l-2 border-r border-solid border-black rounded-bl-3xl font-outline-2'>Work</li></Link>
        <Link href='#cert'><li className='w-[6rem] h-[2.3rem] bg-[#5F88A0] border-b-2 border-l border-r-2 border-solid border-black rounded-br-3xl font-outline-2'>Certificates</li></Link>
      </ul>
    </nav>
  );
}

export default Nav;