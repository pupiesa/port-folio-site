import Image from "next/image";
import React from "react";
import { gothic } from "../fonts";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Card1Props {
  names: string;
  desc: string;
  imgs: string;
  links: string;
  gitlinks: string;
}

const Card1: React.FC<Card1Props> = ({
  names,
  desc,
  imgs,
  links,
  gitlinks,
}) => {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border">
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <div
          className="w-full h-48 bg-cover bg-center bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-blue-900 dark:to-indigo-800"
          style={{ backgroundImage: `url(${imgs})` }}
        >
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
        </div>
        <div className="absolute top-4 right-4">
          <Badge
            variant="secondary"
            className="bg-white/90 text-black hover:bg-white"
          >
            Project
          </Badge>
        </div>
      </div>

      {/* Card Content */}
      <CardHeader className="pb-3">
        <CardTitle
          className={`${gothic.className} text-xl tracking-wide font-bold text-foreground/80 group-hover:text-foreground/40 transition-colors`}
        >
          {names}
        </CardTitle>
      </CardHeader>

      <CardContent className="pt-0">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3 cursor-help hover:text-muted-foreground/80 transition-colors">
                {desc}
              </p>
            </TooltipTrigger>
            <TooltipContent side="top" className="max-w-xs p-4">
              <p className="text-sm leading-relaxed">{desc}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {links && (
            <Button asChild size="sm" className="flex-1">
              <Link href={links} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                <p>View Live</p>
              </Link>
            </Button>
          )}
          {gitlinks && (
            <Button asChild variant="outline" size="sm" className="flex-1">
              <Link href={gitlinks} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Code
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default Card1;
