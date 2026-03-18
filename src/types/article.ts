export interface Article {
  title: string;
  cover: string;
  summary: string;
  bookmarked: boolean;
  likes: number;
}

export interface SponsoredArticle extends Article {
  isSponsored: true;
}

export type FeedItem = Article | SponsoredArticle;

export function isSponsoredArticle(item: FeedItem): item is SponsoredArticle {
  return (item as SponsoredArticle).isSponsored === true;
}
