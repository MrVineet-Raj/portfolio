"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Globe, Smartphone, Database, Cpu } from "lucide-react";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Web Development",
      description:
        "Building scalable and performant web applications using modern technologies like React, Next.js, and Node.js.",
      features: [
        "Responsive UI/UX design",
        "Server-side rendering",
        "API integration",
        "Performance optimization",
        "Gen Ai Integration",
        "1 year free support",
      ],
    },
    {
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: "Mobile Development",
      description:
        "Creating cross-platform mobile applications with React Native that work seamlessly on both iOS and Android.",
      features: [
        "Native-like experience",
        "Cross-platform compatibility",
        "Offline functionality",
        "Push notifications",
        "Gen Ai Integration",
        "1 year free support",
      ],
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            ref={ref}
          >
            <Badge className="mb-4">Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              What I Offer
            </h2>
            <p className="text-muted-foreground max-w-[800px] mx-auto">
              Specialized services to help you build and scale your digital
              products.These are the areas where I excel.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-5 w-5 text-primary mr-2 flex-shrink-0"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
