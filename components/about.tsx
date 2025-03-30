"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timelineItems = [
    {
      year: "2025",
      title: "Hackathon Winner",
      description: "Won First Prize at DebugOn Hackathon",
    },
    {
      year: "2024",
      title: "Hackathon Winner",
      description: "Won second Prize at Supermove Hackathon",
    },
    {
      year: "2024",
      title: "FullStack Internship",
      description:
        "Got selected for a full-stack internship at UnlockDiscounts",
    },
    {
      year: "2024",
      title: "AlgoUniversity's Graph Camp",
      description:
        "Participated in intensive graph algorithms training program",
    },
    {
      year: "2022",
      title: "NSUT",
      description: "Started Computer Science  Engineering degree at NSUT",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            ref={ref}
          >
            <Badge className="mb-4  text-white">About Me</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              My Journey & Expertise
            </h2>
            <p className="text-muted-foreground max-w-[800px] mx-auto">
              A passionate full-stack developer with expertise in modern web
              technologies, blockchain development, and AI-powered applications.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-2">Background</h3>
              <p className="text-muted-foreground">
                I'm a full-stack developer with a passion for building
                innovative digital solutions. Currently pursuing my Computer
                Science degree at NSUT, I specialize in MERN Stack, Rust,
                Docker, Blockchain, React Native, and AI-powered applications.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-2">Achievements</h3>
              <p className="text-muted-foreground">
                I've won multiple hackathons with innovative solutions and
                participated in AlgoUniversity's Graph Camp to enhance my
                algorithmic skills. My projects have been recognized for their
                technical excellence and user-centric design.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Timeline</h3>
              <div className="space-y-4">
                {timelineItems.map((item, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex items-center p-4">
                        <div className="bg-primary  px-3 py-1 rounded text-sm font-medium mr-4  text-white">
                          {item.year}
                        </div>
                        <div>
                          <h4 className="font-semibold">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
