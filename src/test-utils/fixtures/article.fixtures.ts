import type { Article, SponsoredArticle } from 'src/types/article';

export const mockArticle: Article = {
  title: 'Long Title Text That May Get Wrapped to New Line',
  cover: 'https://picsum.photos/600/400?random=1',
  summary:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet mattis massa, a consequat erat pretium in. Mauris id lorem id purus lacinia scelerisque tincidunt vitae turpis. Phasellus lacinia velit est, placerat consectetur velit accumsan.',
  bookmarked: false,
  likes: 72,
};

export const mockArticleBookmarked: Article = {
  ...mockArticle,
  cover: 'https://picsum.photos/600/400?random=2',
  bookmarked: true,
};

export const mockSponsoredArticle: SponsoredArticle = {
  title: 'Long Title Text That May Get Wrapped to New Line',
  cover: 'https://picsum.photos/600/400?random=3',
  summary:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet mattis massa, a consequat erat pretium in. Mauris id lorem id purus lacinia scelerisque tincidunt vitae turpis. Phasellus lacinia velit est, placerat consectetur velit accumsan.',
  bookmarked: true,
  likes: 72,
  isSponsored: true,
};
