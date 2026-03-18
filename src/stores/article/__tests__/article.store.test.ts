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

describe('useArticleStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('initial state is empty and not loading', () => {
    const store = useArticleStore();
    expect(store.loading).toBe(false);
    expect(store.error).toBeNull();
    expect(store.articles).toEqual([]);
    expect((store as unknown as { ads: unknown }).ads).toBeUndefined();
  });

  it('loadArticles sets loading to true then false', async () => {
    vi.spyOn(articleServiceModule.articleService, 'fetchArticles').mockResolvedValue(mockArticles);

    const store = useArticleStore();
    const promise = store.loadArticles();
    expect(store.loading).toBe(true);
    await promise;
    expect(store.loading).toBe(false);
  });

  it('loadArticles populates articles only', async () => {
    vi.spyOn(articleServiceModule.articleService, 'fetchArticles').mockResolvedValue(mockArticles);

    const store = useArticleStore();
    await store.loadArticles();

    expect(store.articles).toHaveLength(12);
  });

  it('feed converts existing articles to sponsored ads at prime indices >= 3', async () => {
    vi.spyOn(articleServiceModule.articleService, 'fetchArticles').mockResolvedValue(mockArticles);

    const store = useArticleStore();
    await store.loadArticles();

    // The store identifies primes based on 0-based index: 3, 5, 7, 11...
    const expectedSponsoredIndices = [3, 5, 7, 11];

    store.feed.forEach((item, index) => {
      if (expectedSponsoredIndices.includes(index)) {
        expect('isSponsored' in item && item.isSponsored).toBe(true);
      } else {
        expect('isSponsored' in item).toBe(false);
      }
    });

    const sponsoredItems = store.feed.filter((item) => 'isSponsored' in item && item.isSponsored);
    expect(sponsoredItems.length).toBe(4);

    const firstSponsoredIndex = store.feed.findIndex(
      (item) => 'isSponsored' in item && item.isSponsored,
    );
    expect(firstSponsoredIndex).toBe(3);
  });

  it('sets error when fetch fails', async () => {
    vi.spyOn(articleServiceModule.articleService, 'fetchArticles').mockRejectedValue(
      new Error('Network Error'),
    );

    const store = useArticleStore();
    await store.loadArticles();

    expect(store.error).toBe('Network Error');
    expect(store.loading).toBe(false);
  });
});
