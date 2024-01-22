import { IYoutubeVideoData } from "./interface";

export const fetchYoutubeVideos = async () => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${process.env.NEXT_PUBLIC_API_KEY}&channelId=${process.env.NEXT_PUBLIC_CHANNEL_ID}&part=snippet,id&order=date&maxResults=${process.env.NEXT_PUBLIC_MAX_RESULT}`
    );
    const data = await response.json();
    const finalData: IYoutubeVideoData[] = [];
    data &&
      data?.items?.forEach((data: any) => {
        finalData.push(data?.snippet as IYoutubeVideoData);
      });
    return finalData;
  } catch (error) {
    console.log("Failed to fetch data", error);
  }
};

export const getYoutubeStats = async () => {
  try {
    // Fetch video count
    const videoResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${process.env.NEXT_PUBLIC_CHANNEL_ID}&key=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    const videoData = await videoResponse.json();

    // Fetch subscriber count
    const subscriberResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${process.env.NEXT_PUBLIC_CHANNEL_ID}&key=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    const subscriberData = await subscriberResponse.json();

    return {
      videoCount: videoData.items[0].statistics.videoCount as number,
      subscriberCount: subscriberData.items[0].statistics
        .subscriberCount as number,
    };
  } catch (error) {
    console.log("Failed to fetch data", error);
  }
};
