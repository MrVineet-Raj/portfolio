import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username") || "mrvineetraj"; // Default to your username if not provided

  //console.log("Fetching GitHub data for username:", username);

  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`
    );
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch GitHub data");
    }

    //console.log("GitHub data:", data);
    return NextResponse.json({
      success: true,
      repoCnt: data.reduce((acc: number, repo: any) => {
        return acc + (repo.fork ? 0 : 1);
      }, 0),
    });
  } catch (error: any) {
    //console.error(`Error fetching GitHub data for ${username}:`, error);
    return NextResponse.json(
      {
        success: false,
        error:
          error.message ||
          "An unknown error occurred while fetching GitHub data.",
      },
      {
        status: 500,
      }
    );
  }
}
