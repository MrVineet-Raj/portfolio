"use strict";
import axios from "axios";
import { NextResponse } from "next/server";
import { parseString } from "xml2js";
import { promisify } from "util";

const parseStringAsync = promisify(parseString);

// Define types for RSS feed structure
type RSSItem = {
  title?: string[];
  link?: string[];
  description?: string[];
  pubDate?: string[];
  guid?: string[];
  category?: string[];
  // coverImage?: string[];
  [key: string]: any;
};

type RSSChannel = {
  title?: string[];
  description?: string[];
  link?: string[];
  language?: string[];
  copyright?: string[];
  lastBuildDate?: string[];
  pubDate?: string[];
  ttl?: string[];
  item?: RSSItem[];
  [key: string]: any;
};

type RSSResult = {
  rss?: {
    channel?: RSSChannel[];
  };
};

export async function GET() {
  const RSS_FEED_URL = process.env.RSS_FEED_URL!;

  try {
    const response = await axios.get(RSS_FEED_URL);
    const xmlData = response.data as string;

    // Parse XML data
    const result = (await parseStringAsync(xmlData)) as RSSResult;

    // Extract blog items
    const channel = result.rss?.channel?.[0];
    const items = channel?.item || [];
    // let idIndex = 0;
    // Format blog posts
    const blogs = items.map((item: RSSItem) => {
      // console.log(item);
      return {
        id: item.guid?.[0],
        title: item.title?.[0],
        link: item.link?.[0],
        brief: item.description?.[0],
        dateAdded: item.pubDate?.[0],
        coverImage: item["hashnode:coverImage"]?.[0],
        slug: item.title?.[0].split(" ").join("-").toLowerCase(),
        readingTime: item["hashnode:readingTime"]?.[0],
      };
    });

    return NextResponse.json({
      message: "Posts Fetched!",
      posts: blogs.slice(0, 6),
      success: true,
    });
  } catch (error) {
    console.error("Error fetching or parsing RSS feed:", error);
    return NextResponse.json(
      {
        message: "Failed to fetch posts",
        error: error instanceof Error ? error.message : String(error),
        success: false,
      },
      { status: 500 }
    );
  }
}
