import { describe, it, expect, vi, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useArticleStore } from 'src/stores/article/article.store';
import * as articleServiceModule from 'src/services/article.service';
import type { Article } from 'src/types/article';

const mockArticles: Article[] = Array.from({ length: 12 }, (_, i) => ({
  title: `Article ${i + 1}`,
  cover: `https://picsum.photos/600/400?random=${i}`,
  summary: `Summary for article ${i + 1}`,
  bookmarked: false,
  likes: i * 3,
}));

const mockAds: Article[] = [
  {
    title: 'Sponsored Article A',
    cover: 'https://picsum.photos/600/400?random=99',
    summary: 'This is a sponsored summary.',
    bookmarked: true,
    likes: 10,
  },
  {
    title: 'Sponsored Article B',
    cover: 'https://picsum.photos/600/400?random=98',
    summary: 'Another sponsored summary.',
    bookmarked: false,
    likes: 5,
  },
];

describe('useArticleStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('initial state is empty and not loading', () => {
    const store = useArticleStore();
    expect(store.loading).toBe(false);
    expect(store.error).toBeNull();
    expect(store.articles).toEqual([]);
    expect(store.ads).toEqual([]);
  });

  it('loadArticles sets loading to true then false', async () => {
    vi.spyOn(articleServiceModule.articleService, 'fetchArticles').mockResolvedValue(mockArticles);
    vi.spyOn(articleServiceModule.articleService, 'fetchAds').mockResolvedValue(mockAds);

    const store = useArticleStore();
    const promise = store.loadArticles();
    expect(store.loading).toBe(true);
    await promise;
    expect(store.loading).toBe(false);
  });

  it('loadArticles populates articles and ads', async () => {
    vi.spyOn(articleServiceModule.articleService, 'fetchArticles').mockResolvedValue(mockArticles);
    vi.spyOn(articleServiceModule.articleService, 'fetchAds').mockResolvedValue(mockAds);

    const store = useArticleStore();
    await store.loadArticles();

    expect(store.articles).toHaveLength(12);
    expect(store.ads).toHaveLength(2);
  });

  it('feed inserts sponsored ads at prime indices above 3', async () => {
    vi.spyOn(articleServiceModule.articleService, 'fetchArticles').mockResolvedValue(mockArticles);
    vi.spyOn(articleServiceModule.articleService, 'fetchAds').mockResolvedValue(mockAds);

    const store = useArticleStore();
    await store.loadArticles();

    const sponsoredItems = store.feed.filter((item) => 'isSponsored' in item && item.isSponsored);
    expect(sponsoredItems.length).toBeGreaterThan(0);

    const firstSponsoredIndex = store.feed.findIndex(
      (item) => 'isSponsored' in item && item.isSponsored,
    );
    expect(firstSponsoredIndex).toBe(4);
  });

  it('sets error when fetch fails', async () => {
    vi.spyOn(articleServiceModule.articleService, 'fetchArticles').mockRejectedValue(
      new Error('Network Error'),
    );
    vi.spyOn(articleServiceModule.articleService, 'fetchAds').mockRejectedValue(
      new Error('Network Error'),
    );

    const store = useArticleStore();
    await store.loadArticles();

    expect(store.error).toBe('Network Error');
    expect(store.loading).toBe(false);
  });
});
