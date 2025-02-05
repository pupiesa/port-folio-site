import Image from "next/image";
import About from "./components/About";
import Work from "./components/Work";
import Cert from "./components/Cert";

export default function Home() {
  return (
    <>
      <About />
      <div className="bg-[#233149]">
        <Image
          src="Top.svg"
          alt="section image"
          width={180}
          height={180}
          className="w-full h-[auto] mt-4"
          priority
        ></Image>
        <Work />
        <Cert />
        <Image
          src="Bottom.svg"
          alt="section image"
          width={180}
          height={180}
          className="w-full h-[auto]"
          priority
        ></Image>
      </div>
    </>
  );
}
