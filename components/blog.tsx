"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

type BlogPost = {
  id: string;
  title: string;
  brief: string;
  coverImage: string;
  dateAdded: string;
  readingTime: string;
  slug: string;
};

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  // In a real implementation, you would fetch blog posts from Hashnode API
  useEffect(() => {
    setLoading(true);
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get("/api/blog");
        console.log(response.data);
        // if (!response.data || !response.data.posts) {
        const data = response.data;
        setBlogPosts(data.posts);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogPosts();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="w-full flex flex-col items-center border-b">
      <section id="blog" className="w-full max-w-[1400px] bg-muted/30">
        <div className="container">
          <div className="flex flex-col items-center text-center border-x">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              ref={ref}
              className="border-b py-4 border-x px-4 md:px-8"
            >
              <Badge className="mb-4 text-white">Blog</Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Latest Articles
              </h2>
              <p className="text-muted-foreground max-w-[800px] mx-auto">
                Technical insights and tutorials from my experiences in web
                development, blockchain, and more.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-r border-l">
            {loading
              ? Array(3)
                  .fill(0)
                  .map((_, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="rounded-none"
                    >
                      <Card className="h-full flex flex-col overflow-hidden group animate-pulse !rounded-none">
                        <span className="relative h-48 overflow-hidden bg-gray-200"></span>
                        <CardHeader>
                          <CardTitle className="line-clamp-2">
                            <span className="h-4 bg-gray-200 animate-pulse rounded w-full"></span>
                          </CardTitle>
                          <CardDescription className="flex items-center gap-2 text-xs">
                            <CalendarDays className="h-3 w-3" />
                            <span className="h-3 bg-gray-200 animate-pulse rounded w-16"></span>
                            <span className="inline-flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              <span className="h-3 bg-gray-200 animate-pulse rounded w-16"></span>
                            </span>
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <p className="text-muted-foreground line-clamp-3">
                            <span className="h-3 bg-gray-200 animate-pulse rounded w-full"></span>
                          </p>
                        </CardContent>
                        <CardFooter>
                          <Button
                            variant="ghost"
                            className="w-full justify-between group"
                            asChild
                          >
                            <span className="h-4 bg-gray-200 animate-pulse rounded w-full"></span>
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))
              : blogPosts.map((post, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full flex flex-col overflow-hidden group !rounded-none border-0 border-r  border-t">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={post.coverImage || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="line-clamp-2">
                          {post.title}
                        </CardTitle>
                        <CardDescription className="flex items-center gap-2 text-xs">
                          <CalendarDays className="h-3 w-3" />
                          {formatDate(post.dateAdded)}
                          <span className="inline-flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {post.readingTime}
                          </span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-muted-foreground line-clamp-3">
                          {post.brief}
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button
                          variant="ghost"
                          className="w-full justify-between group"
                          asChild
                        >
                          <Link
                            href={`https://blog.unknownbug.tech/${post.slug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Read More
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
          </div>

          <div className="flex justify-center py-2 border-x border-t">
            <Button asChild className="flex items-start text-white gap-4 ">
              <Link
                href="https://blog.unknownbug.tech"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="py-1">View All Articles</span>
                <ExternalLink className="h-4 w-4 mr-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
