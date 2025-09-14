"use client";
import React, { useContext } from "react";
import { lateef } from "../fonts";
import Card1 from "./Card1";
import { DataContext } from "./DataContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface AboutItem {
  [key: string]: string;
}
interface projects {
  key: number;
  name: string;
  description: string;
  image: string;
  link: string;
  git: string;
}

const Work = () => {
  const myContext = useContext(DataContext);
  const about = myContext?.data1 as AboutItem;
  const project = myContext?.data2 as projects[];

  return (
    <section className="py-20 px-4 bg-muted/10 dark:bg-muted/55">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 ${lateef.className}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground/95 mb-4">
            {about ? about["header"] : "My Work"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {about
              ? about["subHeader"]
              : "Explore my latest projects and creative work"}
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {project ? (
            project.map(function (data: projects) {
              return (
                <Card1
                  key={data.key}
                  names={data.name}
                  desc={data.description}
                  imgs={data.image}
                  links={data.link}
                  gitlinks={data.git}
                />
              );
            })
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">Loading projects...</p>
            </div>
          )}
        </div>

        {/* Skills Showcase */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-muted-foreground/10 to-secondary/50 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                Technical Skills
              </h3>

              {/* Python & ML Libraries */}
              <div className="mb-6">
                <h4 className="text-lg font-medium mb-3 text-foreground/80">
                  Python & Machine Learning
                </h4>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  <Badge variant="outline" className="px-3 py-1">
                    NumPy
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1">
                    TensorFlow
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1">
                    Langchain
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1">
                    scikit-learn
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1">
                    OpenCV
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1">
                    MATLAB
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Machine Learning • Deep Learning • RAG (Retrieval-Augmented
                  Generation)
                </p>
              </div>

              {/* Web Development */}
              <div className="mb-6">
                <h4 className="text-lg font-medium mb-3 text-foreground/80">
                  Web Development
                </h4>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  <Badge variant="outline" className="px-3 py-1">
                    HTML
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1">
                    JavaScript
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1">
                    CSS
                  </Badge>
                </div>
              </div>

              {/* Data Engineering */}
              <div className="mb-6">
                <h4 className="text-lg font-medium mb-3 text-foreground/80">
                  Data Engineering
                </h4>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  <Badge variant="outline" className="px-3 py-1">
                    Apache Airflow
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1">
                    Kafka
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1">
                    Spark
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1">
                    Zookeeper
                  </Badge>
                </div>
              </div>

              {/* Databases */}
              <div className="mb-6">
                <h4 className="text-lg font-medium mb-3 text-foreground/80">
                  Databases
                </h4>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  <Badge variant="outline" className="px-3 py-1">
                    MySQL
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1">
                    PostgreSQL
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1">
                    Cassandra
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1">
                    PGvector
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1">
                    MongoDB
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1">
                    ChromaDB
                  </Badge>
                </div>
              </div>

              {/* DevOps & Tools */}
              <div className="mb-4">
                <h4 className="text-lg font-medium mb-3 text-foreground/80">
                  DevOps & Tools
                </h4>
                <div className="flex flex-wrap justify-center gap-2">
                  <Badge variant="outline" className="px-3 py-1">
                    Docker
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Work;
