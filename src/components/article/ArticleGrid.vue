<template>
  <div class="article-grid" data-testid="article-grid">
    <div v-for="(item, index) in items" :key="index" class="article-grid__item">
      <SponsoredCard v-if="isSponsoredArticle(item)" :article="item" />
      <ArticleCard v-else :article="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ArticleCard from 'src/components/article/ArticleCard.vue';
import SponsoredCard from 'src/components/article/SponsoredCard.vue';
import { isSponsoredArticle } from 'src/types/article';
import type { FeedItem } from 'src/types/article';

defineProps<{
  items: FeedItem[];
}>();
</script>

<style scoped lang="scss">
.article-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  &__item {
    min-width: 0;
  }
}
</style>
