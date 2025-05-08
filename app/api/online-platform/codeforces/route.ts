import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username") || "mrvineetraj"; // Default to your username if not provided

  //console.log("Fetching Codeforces data for username:", username);

  try {
    const response = await axios.get(
      `https://codeforces.com/api/user.info?handles=${username}`
    );
    const data = response.data;

    if (data.status !== "OK") {
      throw new Error(data.comment || "Failed to fetch Codeforces data");
    }

    const user = data.result[0];
    const handle = user.handle;
    const rating = user.rating || null;
    const rank = user.rank || "Unrated";

    const userStatusResponse = await fetch(
      `https://codeforces.com/api/user.status?handle=${handle}`
    );
    const userStatusData = await userStatusResponse.json();
    if (userStatusData.status !== "OK") {
      throw new Error(
        userStatusData.comment || "Failed to fetch Codeforces user status"
      );
    }
    const submissions = userStatusData.result;
    const solvedProblems = submissions.filter(
      (submission: any) => submission.verdict === "OK"
    );
    const solvedCount = new Set();
    solvedProblems.forEach((sub: any) => {
      solvedCount.add(`${sub.problem.contestId}-${sub.problem.index}`);
    });
    const problemsSolved = solvedCount.size;
    const result = {
      username: handle,
      totalSolved: problemsSolved,
      contestRating: rating,
    };

    return NextResponse.json(
      {
        success: true,
        ...result,
      },
      { status: 200 }
    );
  } catch (error: any) {
    //console.error(`Error fetching Codeforces data for ${username}:`, error);
    return NextResponse.json(
      {
        success: false,
        error:
          error.message ||
          "An unknown error occurred while fetching Codeforces data.",
      },
      {
        status: 500,
      }
    );
  }
}
