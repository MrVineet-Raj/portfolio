"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Github, ExternalLink, FileText, VideoIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  github?: string;
  demo?: string;
  blog?: string;
  video?: string;
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "Morphix",
      description:
        "A AI powered Video Editing PLatform that allows users to edit videos using single click or natural language commands. powered by UploadCare,Cloudinary,clerk and falAi",
      image: "/images/web/Morphix.png",
      category: "web",
      technologies: [
        "Next Js",
        "Tailwind CSS",
        "MongoDB",
        "Shadcn UI",
        "UploadCare",
        "Cloudinary",
        "Clerk",
        "FalAi",
      ],
      github: "https://github.com/MrVineetRaj/morphix",
      video: "https://www.youtube.com/watch?v=1doX2SVGFWw",
    },
    {
      id: 2,
      title: "Imaginify",
      description:
        "AI powered image editing tool that allows users to edit images using single click or  natural language commands. powered by Cloudinary and XION as all the transactions are done on Blockchain",
      image: "/images/blockchain/imaginify.png",
      category: "blockchain",
      technologies: [
        "Next Js",
        "Tailwind CSS",
        "MongoDB",
        "Shadcn UI",
        "Cloudinary",
        "XION",
        "Google Auto Tags",
      ],
      github:
        "https://github.com/MrVineetRaj/NextJs-Project/tree/main/AstraFin",
      // demo: "https://imaginify.unknownbug.tech",
      video: "https://youtu.be/lPXJAAPQf4I?si=cdAZQbchyAxe13CR",
    },
    {
      id: 3,
      title: "AstraFin",
      description:
        "A personal finance management web app that helps users track their expenses, set budgets, and achieve their financial goals.",
      image: "/images/web/AstraFin.png",
      category: "web",
      technologies: [
        "Next Js",
        "Tailwind CSS",
        "MongoDB",
        "Rechart.js",
        "Next Auth",
      ],
      github:
        "https://github.com/MrVineetRaj/NextJs-Project/tree/main/AstraFin",
      demo: "https://astrafin.unknownbug.tech",
    },
    {
      id: 4,
      title: "Snippet Wallet",
      description:
        "Chrome extension to save and organize code snippets with syntax highlighting",
      image: "/images/extension/Snippet Wallet.png",
      category: "extension",
      technologies: [
        "JavaScript",
        "Chrome API",
        "LocalStorage",
        "nodejs",
        "appwrite",
      ],
      github:
        "https://github.com/MrVineetRaj/chrome-extension/tree/master/Snippet%20Wallet",
      demo: "https://snippetwallet.unknownbug.tech",
    },
    {
      id: 5,
      title: "OrgMonitor",
      description:
        "A organization github repo monitoring tool that tracks and displays the status of repositories in a user-friendly interface.",
      image: "/images/web/Org Monitor.png",
      category: "web",
      technologies: ["React", "Appwrite"],
      github: "https://github.com/MrVineetRaj/React-Projects",
      demo: "https://orgmonitor.unknownbug.tech",
    },
    {
      id: 6,
      title: "Yum Yard",
      description:
        "Interactive resume builder with customizable templates and export options",
      image: "/images/web/Yum Yard.png",
      category: "web",
      technologies: ["Next.js", "Tailwind CSS", "Firebase"],
      github: "https://github.com/MrVineetRaj/React-Projects",
      demo: "https://yumyard.unknownbug.tech/",
    },
    {
      id: 7,
      title: "Xora",
      description:
        "Landing page of a SaaS product with a focus on user experience and design",
      image: "/images/web/Xora.png",
      category: "web",
      technologies: ["React", "Chart.js", "Appwrite"],
      github: "https://github.com/MrVineetRaj/React-Projects/tree/main/xora",
      demo: "https://xora.unknownbug.tech/",
    },
    {
      id: 8,
      title: "Kanban Board",
      description:
        "A simple Kanban board application built using React and Tailwind CSS. It allows users to create, edit, and delete tasks.",
      image: "/images/web/Kanban.png",
      category: "web",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/MrVineetRaj/jsprojects/tree/main/kanban",
      demo: "https://jsprojects.unknownbug.tech/kanban",
    },
    {
      id: 9,
      title: "Tic Tac Toe",
      description:
        "A simple Tic Tac Toe game built using HTML, CSS, and JavaScript. Play against a friend or the computer.",
      image: "/images/web/Tic Tac Toe.png",
      category: "web",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/MrVineetRaj/jsprojects/tree/main/tic-tac-toe",
      demo: "https://jsprojects.unknownbug.tech/tic-tac-toe",
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <section id="projects" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            ref={ref}
          >
            <Badge className="mb-4 text-white">Projects</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              My Recent Work
            </h2>
            <p className="text-muted-foreground max-w-[800px] mx-auto">
              A collection of projects that showcase my skills and expertise in
              various technologies.
            </p>
          </motion.div>
        </div>

        <Tabs
          defaultValue="all"
          className="w-full"
          onValueChange={setActiveTab}
        >
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="web">Web Apps</TabsTrigger>
              <TabsTrigger value="blockchain">Blockchain</TabsTrigger>
              <TabsTrigger value="extension">Extensions</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full flex flex-col overflow-hidden group">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex gap-2">
                      {project.github && (
                        <Button size="sm" variant="outline" asChild>
                          <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            GitHub
                          </Link>
                        </Button>
                      )}
                      {project.demo && (
                        <Button size="sm" variant="outline" asChild>
                          <Link
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Demo
                          </Link>
                        </Button>
                      )}
                      {project.blog && (
                        <Button size="sm" variant="outline" asChild>
                          <Link
                            href={project.blog}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FileText className="h-4 w-4 mr-2" />
                            Blog
                          </Link>
                        </Button>
                      )}
                      {project.video && (
                        <Button size="sm" variant="outline" asChild>
                          <Link
                            href={project.video}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <VideoIcon className="h-4 w-4 mr-2" />
                            Demo Video
                          </Link>
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
