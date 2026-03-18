import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { articleService } from 'src/services/article.service';
import { isPrime } from 'src/utils/prime.util';
import type { Article, FeedItem, SponsoredArticle } from 'src/types/article';

export const useArticleStore = defineStore('article', () => {
  const articles = ref<Article[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const feed = computed<FeedItem[]>(() => {
    return articles.value.map((article, index) => {
      // index prima di atas 3 (3, 5, 7, 11...)
      if (index >= 3 && isPrime(index)) {
        return {
          ...article,
          isSponsored: true,
        } as SponsoredArticle;
      }
      return article;
    });
  });

  async function loadArticles(): Promise<void> {
    loading.value = true;
    error.value = null;

    try {
      articles.value = await articleService.fetchArticles();
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to load articles';
    } finally {
      loading.value = false;
    }
  }

  return { articles, loading, error, feed, loadArticles };
});
