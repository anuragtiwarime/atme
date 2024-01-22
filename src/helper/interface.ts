export interface IJourneyDetails {
  companyName: string;
  designation: string;
  startDate: string;
  endDate: string;
}

export interface IToolsData {
  url: string;
  name: string;
}

export interface ISocialMedia {
  name: string;
  image: string;
  link: string;
}

export interface IThumbnailData {
  url: string;
  height: number;
  width: number;
}

export interface IYoutubeVideoData {
  channelId: string;
  channelTitle: string;
  description: string;
  title: string;
  publishTime: string;
  publishedAt: string;
  thumbnails: {
    default: IThumbnailData;
    high: IThumbnailData;
    medium: IThumbnailData;
  };
}
