import axios, { AxiosError } from "axios";

const fetchCodeForcesData = async (username: string) => {
  try {
    const response = await axios.get(`/api/online-platform/codeforces`, {
      params: {
        username,
      },
    });
    const data = response.data;

    if (data.success) {
      return {
        username: data.username,
        totalSolved: data.totalSolved,
        contestRating: data.contestRating,
        success: true,
      };
    } else {
      return {
        success: false,
        error: data.error || "Failed to fetch Codeforces data",
      };
    }
  } catch (error: any) {
    if (error instanceof AxiosError) {
      return {
        success: false,
        error:
          error.response?.data.message || "Failed to fetch Codeforces data",
      };
    }
    return {
      success: false,
      error:
        error.message ||
        "An unknown error occurred while fetching Codeforces data",
    };
  }
};

const fetchLeetCodeData = async (username: string) => {
  try {
    const res = await axios.get("/api/online-platform/leetcode", {
      params: {
        username,
      },
    });
    const data = res.data;
    if (data.success) {
      return {
        username: data.username,
        totalSolved: data.totalSolved,
        contestRating: data.contestRating,
        success: true,
      };
    } else {
      return {
        success: false,
        error: data.error || "Failed to fetch LeetCode data",
      };
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        success: false,
        error: error.response?.data.message || "Failed to fetch LeetCode data",
      };
    }

    return {
      success: false,
      error: "Failed to fetch LeetCode data",
    };
  }
};

const fetchGitHubData = async (username: string) => {
  try {
    const res = await axios.get("/api/online-platform/github", {
      params: {
        username,
      },
    });
    const data = res.data;
    if (data.success) {
      return {
        repoCnt: data.repoCnt,
        success: true,
      };
    } else {
      return {
        success: false,
        error: data.error || "Failed to fetch GitHub data",
      };
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        success: false,
        error: error.response?.data.message || "Failed to fetch GitHub data",
      };
    }
    return {
      success: false,
      error: "Failed to fetch GitHub data",
    };
  }
};

export { fetchCodeForcesData, fetchLeetCodeData, fetchGitHubData };
