import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import axios from 'axios';
import { ArticleService } from 'src/services/article.service';
import type { Article } from 'src/types/article';

const mockArticles: Article[] = [
  {
    title: 'Test Article',
    cover: 'https://picsum.photos/600/400?random=1',
    summary: 'Test summary.',
    bookmarked: false,
    likes: 10,
  },
];

describe('ArticleService', () => {
  let service: ArticleService;

  beforeEach(() => {
    service = new ArticleService();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('fetchArticles returns data from the API', async () => {
    const getSpy = vi.spyOn(axios, 'get').mockResolvedValueOnce({ data: mockArticles });

    const result = await service.fetchArticles();

    expect(getSpy).toHaveBeenCalledOnce();
    expect(result).toEqual(mockArticles);
  });

  it('fetchArticles throws when the network request fails', async () => {
    vi.spyOn(axios, 'get').mockRejectedValueOnce(new Error('Network Error'));

    await expect(service.fetchArticles()).rejects.toThrow('Network Error');
  });
});
