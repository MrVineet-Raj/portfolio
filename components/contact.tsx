"use client";

import type React from "react";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Twitter, Calendar } from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent! Thank you for reaching out.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);

    // In a real implementation, you would send the form data to a server
    // try {
    //   const response = await fetch('/api/contact', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData)
    //   });
    //   const data = await response.json();
    //   if (data.success) {
    //     toast({
    //       title: "Message sent!",
    //       description: "Thank you for your message. I'll get back to you soon.",
    //     });
    //     setFormData({ name: "", email: "", message: "" });
    //   } else {
    //     toast({
    //       title: "Error",
    //       description: data.message || "Something went wrong. Please try again.",
    //       variant: "destructive",
    //     });
    //   }
    // } catch (error) {
    //   toast({
    //     title: "Error",
    //     description: "Something went wrong. Please try again.",
    //     variant: "destructive",
    //   });
    // } finally {
    //   setIsSubmitting(false);
    // }
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/MrVineetRaj",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://linkedin.com/in/mrvineetraj",
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-5 w-5" />,
      url: "https://twitter.com/mrvineetraj",
    },
    // {
    //   name: "Calendly",
    //   icon: <Calendar className="h-5 w-5" />,
    //   url: "https://calendly.com/vineetraj",
    // },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            ref={ref}
          >
            <Badge className="mb-4  text-white">Contact</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Get In Touch
            </h2>
            <p className="text-muted-foreground max-w-[800px] mx-auto">
              Have a project in mind or want to discuss a potential
              collaboration? Feel free to reach out!
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full  text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Connect With Me</h3>
              <p className="text-muted-foreground mb-6">
                You can also reach out to me through social media or schedule a
                meeting directly.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start"
                    asChild
                  >
                    <Link
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="mr-2">{link.icon}</span>
                      {link.name}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Availability</h3>
              <p className="text-muted-foreground">
                I'm currently open to full-time opportunities, freelance
                projects, and collaborations. Feel free to reach out to discuss
                how we can work together.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Location</h3>
              <p className="text-muted-foreground">
                Based in New Delhi, India. Available for remote work worldwide.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
