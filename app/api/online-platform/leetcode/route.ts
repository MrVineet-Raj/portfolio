import { LeetCode, LeetCodeCN } from "leetcode-query";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username") || "mrvineetraj"; // Default to your username if not provided

  //console.log("Fetching LeetCode data for username:", username);

  const leetcode = new LeetCode();
  try {
    const data = await leetcode.user(username);
    const userContest = await leetcode.user_contest_info(username);

    return NextResponse.json(
      {
        success: true,
        username: data.matchedUser?.username || username,
        totalSolved:
          data.matchedUser?.submitStats?.acSubmissionNum?.find(
            (s: any) => s.difficulty === "All"
          )?.count || 0,
        contestRating: userContest.userContestRanking.rating,
      },
      { status: 200 }
    );
  } catch (error: any) {
    //console.error(`Error fetching LeetCode data for ${username}:`, error);
    return NextResponse.json(
      {
        success: false,
        error:
          error.message ||
          "An unknown error occurred while fetching LeetCode data.",
      },
      {
        status: 500,
      }
    );
  }
}
