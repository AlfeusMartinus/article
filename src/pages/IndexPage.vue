<template>
  <q-page class="article-list-page">
    <div class="article-list-page__header">
      <h1 class="article-list-page__heading">Latest Articles</h1>
      <p class="article-list-page__sub">Stay informed with curated stories from around the world</p>
    </div>

    <div v-if="loading" class="article-list-page__loader">
      <q-spinner-dots color="primary" size="48px" />
    </div>

    <div v-else-if="error" class="article-list-page__error">
      <q-icon name="error_outline" size="48px" color="negative" />
      <p>{{ error }}</p>
      <q-btn label="Retry" color="primary" unelevated @click="loadArticles" />
    </div>

    <ArticleGrid v-else :items="feed" />
  </q-page>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import ArticleGrid from 'src/components/article/ArticleGrid.vue';
import { useArticleList } from 'src/composables/useArticleList';

const { feed, loading, error, loadArticles } = useArticleList();

onMounted(() => {
  void loadArticles();
});
</script>

<style scoped lang="scss">
.article-list-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 24px;

  &__header {
    margin-bottom: 40px;
    text-align: center;
  }

  &__heading {
    font-size: 32px;
    font-weight: 700;
    color: #1a1a2e;
    margin: 0 0 8px;
  }

  &__sub {
    font-size: 15px;
    color: #6b7280;
    margin: 0;
  }

  &__loader,
  &__error {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    min-height: 300px;
    color: #6b7280;
  }
}
</style>
