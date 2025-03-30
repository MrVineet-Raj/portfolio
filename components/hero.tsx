"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Animated background effect
  useEffect(() => {
    if (!containerRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = Math.round((clientX / window.innerWidth) * 100);
      const y = Math.round((clientY / window.innerHeight) * 100);

      containerRef.current!.style.background = `radial-gradient(circle at ${x}% ${y}%, var(--gradient-start), var(--gradient-end))`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const skills = [
    "Full-Stack Development",
    "Blockchain",
    "Generative AI",
    "DevOps",
  ];

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden"
      style={
        {
          "--gradient-start": "hsl(var(--background))",
          "--gradient-end": "hsl(var(--muted))",
        } as React.CSSProperties
      }
    >
      <div className="container px-4 md:px-6 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Hi, I'm <span className="text-primary">Vineet Raj</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-12 overflow-hidden text-center"
          >
            <div className="animate-slide">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="text-xl md:text-2xl font-medium h-12 flex items-center justify-center "
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-muted-foreground text-lg max-w-[600px] text-center"
          >
            I build modern, high-performance web and mobile applications with a
            focus on user experience and scalability.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center mt-4"
          >
            <Button size="lg" asChild>
              <Link href="#projects" className="text-white">
                Explore My Work
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
          </motion.div>
        </div>

        {/* <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative hidden md:block md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary">
            <Image
              src="/placeholder.svg?height=320&width=320"
              alt="Vineet Raj"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div> */}
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-muted-foreground"
        >
          <path
            d="M12 5V19M12 19L5 12M12 19L19 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
