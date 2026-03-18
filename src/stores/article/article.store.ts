import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { articleService } from 'src/services/article.service';
import { getPrimeIndicesAbove3 } from 'src/utils/prime.util';
import type { Article, FeedItem, SponsoredArticle } from 'src/types/article';

export const useArticleStore = defineStore('article', () => {
  const articles = ref<Article[]>([]);
  const ads = ref<Article[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const feed = computed<FeedItem[]>(() => {
    const result: FeedItem[] = [...articles.value];
    const primeIndices = getPrimeIndicesAbove3(result.length + ads.value.length);
    let adIndex = 0;

    for (const prime of primeIndices) {
      const insertAt = prime - 1;
      if (insertAt > result.length || adIndex >= ads.value.length) break;

      const sponsored = {
        ...ads.value[adIndex % ads.value.length],
        isSponsored: true,
      } as SponsoredArticle;

      result.splice(insertAt, 0, sponsored);
      adIndex++;
    }

    return result;
  });

  async function loadArticles(): Promise<void> {
    loading.value = true;
    error.value = null;

    try {
      const [fetchedArticles, fetchedAds] = await Promise.all([
        articleService.fetchArticles(),
        articleService.fetchAds(),
      ]);
      articles.value = fetchedArticles;
      ads.value = fetchedAds;
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to load articles';
    } finally {
      loading.value = false;
    }
  }

  return { articles, ads, loading, error, feed, loadArticles };
});
