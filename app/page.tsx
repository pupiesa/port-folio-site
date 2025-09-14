import Image from "next/image";
import About from "./components/About";
import Work from "./components/Work";
import Cert from "./components/Cert";

export default function Home() {
  return (
    <main className="min-h-screen bg-background dark:bg-background">
      <About />
      {/* Work Section Background */}
      <div className="relative">
        <Work />
        <Cert />
        <Image
          src="Bottom.svg"
          alt="section divider"
          width={180}
          height={180}
          className="w-full h-auto"
          priority
        />
      </div>
    </main>
  );
}
