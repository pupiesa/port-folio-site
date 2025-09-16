"use client";
import { lekton, barcode } from "../fonts";
import React, { useContext } from "react";
import { DataContext } from "./DataContext";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";

interface AboutItem {
  [key: string]: string;
}

const About: React.FC = () => {
  const myContext = useContext(DataContext);
  const about = myContext?.data1 as AboutItem;

  return (
    <section className="min-h-screen flex items-center justify-center py-10 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-end">
            <Card className="p-8 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900 border-0 rounded-full shadow-xl">
              <CardContent className="p-0">
                <Avatar className="w-64 h-64 mx-auto">
                  <AvatarImage
                    src="https://media.discordapp.net/attachments/857182686492622869/1416449578693296352/1751726005003.png?ex=68c6e2f7&is=68c59177&hm=eb21969d639eabf38705ff8a0301dba6b1523f3dfed6f11cc8ad23cb11cfad01&=&format=webp&quality=lossless&width=719&height=719"
                    alt="Profile"
                    className="object-cover"
                  />
                  <AvatarFallback className="text-6xl font-bold bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
                    {about?.text?.charAt(0) || "P"}
                  </AvatarFallback>
                </Avatar>
              </CardContent>
            </Card>
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left space-y-6">
            <div className="space-y-4">
              <h1
                className={`${barcode.className} text-6xl md:text-8xl tracking-wider text-foreground/80 font-bold`}
              >
                {about ? about["text"] : "PORTFOLIO"}
              </h1>
              <p
                className={`${lekton.className} text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl`}
              >
                {about
                  ? about["desc"]
                  : "Welcome to my portfolio website. I'm passionate about creating amazing digital experiences."}
              </p>
            </div>

            {/* Additional Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <Link href="#cert">
                    <h3 className="font-semibold text-primary">Experience</h3>
                  </Link>
                  {/* <p className="text-sm text-muted-foreground">
                    Building digital solutions
                  </p> */}
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <Link href="#work">
                    <h3 className="font-semibold text-primary">Projects</h3>
                  </Link>

                  {/* <p className="text-sm text-muted-foreground">
                    Creative & innovative
                  </p> */}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
