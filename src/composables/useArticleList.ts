import { storeToRefs } from 'pinia';
import { useArticleStore } from 'src/stores/article/article.store';

export function useArticleList() {
  const store = useArticleStore();
  const { feed, loading, error } = storeToRefs(store);

  return {
    feed,
    loading,
    error,
    loadArticles: store.loadArticles,
  };
}
