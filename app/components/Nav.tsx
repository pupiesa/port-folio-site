import * as React from "react";
import { gothic } from "../fonts";
import ModeToggle from "@/components/mode-toggle";

const Nav: React.FC = () => {
  return (
    <nav
      className={`${gothic.className} fixed top-0 w-full z-50 bg-[#7AB2D3] dark:bg-slate-900 backdrop-blur-md border-b`}
    >
      <div className="container px-4">
        <div className="flex items-center justify-between h-12">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
