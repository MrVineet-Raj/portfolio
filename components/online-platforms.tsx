"use client";
import {
  fetchCodeForcesData,
  fetchGitHubData,
  fetchLeetCodeData,
} from "@/lib/platform.helper";
import { set } from "date-fns";
import React, { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";
import { ChartBarIncreasingIcon, User } from "lucide-react";
import Link from "next/link";

const USERNAME = "mrvineetraj";

interface ICodingPlatform {
  username: string;
  totalSolved: number;
  contestRating: number;
  success: boolean;
}

interface IGitHubUserData {
  repoCnt: number;
}

const platformIcons: {
  [key: string]: string;
} = {
  leetcode: "/icons/leetcode.svg",
  codeforces: "/icons/codeforces.svg",
  github: "/icons/github.svg",
};

const platformLinks: {
  [key: string]: string;
} = {
  leetcode: `https://leetcode.com/u/${USERNAME}/`,
  codeforces: `https://codeforces.com/profile/${USERNAME}`,
  github: `https://www.github.com/${USERNAME}`,
};
const CodingPlatformCard = ({
  totalSolved = 0,
  contestRating = 0,
  platformName = "leetcode",
  repoCnt = 0,
}: {
  totalSolved?: number;
  contestRating?: number;
  platformName?: string;
  repoCnt?: number;
}) => {
  const iconPath = platformIcons[platformName.toLowerCase()];
  return (
    <Link
      target="_blank"
      href={platformLinks[platformName.toLowerCase()]}
      className="flex flex-col items-end justify-end p-4 border rounded-lg shadow-md relative min-h-24 pt-8 bg-accent/30 hover:bg-accent/50 transition-all duration-300 ease-in-out"
    >
      <div className="flex gap-2 absolute top-2 left-2 items-center">
        <img
          src={iconPath}
          alt={`${platformName} icon`}
          className="w-6 h-6 md:w-8 md:h-8  "
        />
        <h2 className="text-lg font-bold ">{platformName}</h2>
      </div>
      <p className="text-gray-500 ">{`@${USERNAME}`}</p>
      {platformName?.toLowerCase() !== "github" ? (
        <>
          <p>Rating {contestRating.toFixed(0)}</p>
          <p>
            <span className="font-bold">{totalSolved}</span> problems solved
          </p>
        </>
      ) : (
        <>
          <p>
            <span className="font-bold">{repoCnt}</span> repositories
          </p>
        </>
      )}
    </Link>
  );
};
const OnlinePlatforms = () => {
  const [loading, setLoading] = useState(true);
  const [leetCodeData, setLeetCodeData] = useState<ICodingPlatform | null>(
    null
  );
  const [gitHubData, setGitHubData] = useState<IGitHubUserData | null>(null);
  const [codeforcesData, setCodeforcesData] = useState<ICodingPlatform | null>(
    null
  );
  useEffect(() => {
    setLoading(true);
    fetchGitHubData("mrvineetraj")
      .then((data) => {
        if (data.success) {
          setGitHubData(data as IGitHubUserData);
        }
      })
      .catch((err) => {
        console.error("Error fetching LeetCode data:", err);
      });

    fetchLeetCodeData("mrvineetraj")
      .then((data) => {
        if (data.success) {
          setLeetCodeData(data as ICodingPlatform);
        }
      })
      .catch((err) => {
        console.error("Error fetching GitHub data:", err);
      });

    fetchCodeForcesData("mrvineetraj")
      .then((data) => {
        if (data.success) {
          setCodeforcesData(data as ICodingPlatform);
        }
      })
      .catch((err) => {
        console.error("Error fetching Codeforces data:", err);
      });
  }, []);

  useEffect(() => {
    if (leetCodeData && gitHubData && codeforcesData) {
      setLoading(false);
    }
  }, [leetCodeData, gitHubData, codeforcesData]);

  return (
    <div className="grid sm:grid-cols-3 md:grid-cols-3 gap-4 p-4">
      {loading ? (
        <>
          <Skeleton className="h-15 " />
          <Skeleton className="h-15 " />
          <Skeleton className="h-15 sm:hidden md:block " />
        </>
      ) : (
        <>
          {leetCodeData && (
            <CodingPlatformCard
              platformName="LeetCode"
              totalSolved={leetCodeData?.totalSolved}
              contestRating={leetCodeData?.contestRating}
            />
          )}
          {gitHubData && (
            <CodingPlatformCard
              platformName="GitHub"
              repoCnt={gitHubData?.repoCnt}
            />
          )}
          {codeforcesData && (
            <CodingPlatformCard
              platformName="Codeforces"
              totalSolved={codeforcesData?.totalSolved}
              contestRating={codeforcesData?.contestRating}
            />
          )}
        </>
      )}
    </div>
  );
};

export default OnlinePlatforms;
