"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const techCategories = [
    {
      id: "frontend",
      name: "Frontend",
      technologies: [
        { name: "React 18", icon: "⚛️" },
        { name: "Next.js 15", icon: "▲" },
        { name: "TypeScript", icon: "TS" },
        { name: "Tailwind CSS", icon: "🌊" },
        { name: "Framer Motion", icon: "🔄" },
        { name: "Redux", icon: "🔄" },
      ],
    },
    {
      id: "backend",
      name: "Backend",
      technologies: [
        { name: "Node.js", icon: "🟢" },
        { name: "Express", icon: "🚂" },
        { name: "Rust", icon: "🦀" },
        { name: "MongoDB", icon: "🍃" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "Docker", icon: "🐳" },
      ],
    },
    {
      id: "blockchain",
      name: "Blockchain",
      technologies: [
        { name: "Solidity", icon: "💎" },
        { name: "ethers.js", icon: "⚡" },
        { name: "Hardhat", icon: "🔨" },
        { name: "Xion", icon: "🔗" },
        { name: "IPFS", icon: "📦" },
        { name: "Web3.js", icon: "🕸️" },
      ],
    },
    {
      id: "mobile",
      name: "Mobile",
      technologies: [
        { name: "React Native", icon: "📱" },
        { name: "Expo", icon: "🔄" },
        { name: "Redux", icon: "🔄" },
        { name: "React Navigation", icon: "🧭" },
      ],
    },
    {
      id: "devops",
      name: "DevOps",
      technologies: [
        { name: "AWS", icon: "☁️" },
        { name: "Firebase", icon: "🔥" },
        { name: "Vercel", icon: "▲" },
        { name: "GitHub Actions", icon: "🔄" },
        { name: "Docker", icon: "🐳" },
      ],
    },
  ];

  return (
    <div className="w-full flex flex-col items-center border-b">
      <section id="tech-stack" className="w-full max-w-[1400px] bg-muted/30">
        <div className="container">
          <div className="flex flex-col items-center text-center border-x border-b">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              ref={ref}
              className="py-4 border-x px-4 md:px-6"
            >
              <Badge className="mb-4">Tech Stack</Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Technologies I Work With
              </h2>
              <p className="text-muted-foreground max-w-[800px] mx-auto">
                A comprehensive list of technologies, frameworks, and tools I
                use to build modern applications.
              </p>
            </motion.div>
          </div>

          <Tabs defaultValue="frontend" className="w-full">
            <div className="flex justify-center py-2 border-x border-b">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full max-w-3xl ">
                {techCategories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="">
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {techCategories.map((category) => (
              <TabsContent
                key={category.id}
                value={category.id}
                className="mt-0"
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 ">
                  {category.technologies.map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ y: -5 }}
                    >
                      <Card className="overflow-hidden h-full rounded-none">
                        <CardContent className="p-4 flex flex-col items-center justify-center text-center h-full">
                          <div className="text-3xl mb-2">{tech.icon}</div>
                          <div className="font-medium">{tech.name}</div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  );
}
