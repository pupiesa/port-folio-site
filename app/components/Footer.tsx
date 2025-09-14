"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { gothic } from "../fonts";
import { DataContext } from "./DataContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail } from "lucide-react";

interface AboutItem {
  [key: string]: string;
}

const Footer = () => {
  const myContext = useContext(DataContext);
  const about = myContext?.data1 as AboutItem;

  return (
    <footer className="bg-muted/50 dark:bg-muted/10 border-t">
      <div className="container mx-auto px-4 py-8">
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Contact Info */}
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-muted-foreground" />
                <span
                  className={`${gothic.className} text-sm text-muted-foreground`}
                >
                  {about && about["Email"]
                    ? about["Email"]
                    : "contact@example.com"}
                </span>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {about && about["git"] && (
                  <Button asChild variant="ghost" size="sm">
                    <Link
                      href={about["git"]}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </Button>
                )}
                {about && about["linkedIn"] && (
                  <Button asChild variant="ghost" size="sm">
                    <Link
                      href={about["linkedIn"]}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </Button>
                )}
              </div>
            </div>

            <Separator className="my-6" />

            {/* Footer Bottom */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
              <p>© 2025 Portfolio. All rights reserved.</p>
              <p className="text-center">Built with Next.js and Tailwind CSS</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </footer>
  );
};

export default Footer;
