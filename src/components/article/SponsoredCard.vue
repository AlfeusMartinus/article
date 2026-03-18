<template>
  <Card data-testid="sponsored-card">
    <div class="sponsored-card__cover-wrapper">
      <img :src="article.cover" :alt="article.title" class="sponsored-card__cover" />
    </div>

    <div class="sponsored-card__body">
      <h2 class="sponsored-card__title">{{ article.title }}</h2>
      <p class="sponsored-card__summary">{{ article.summary }}</p>

      <div class="sponsored-card__footer">
        <span class="sponsored-card__label" data-testid="sponsored-label">Sponsored Ad</span>

        <div class="sponsored-card__actions">
          <span class="sponsored-card__likes">{{ article.likes }}</span>
          <q-btn flat round dense icon="favorite_border" class="action-btn" size="sm" />
          <q-btn flat round dense icon="sell" class="action-btn action-btn--sponsored" size="sm" />
          <q-btn flat round dense icon="share" class="action-btn" size="sm" />
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import Card from 'src/components/base/card/Card.vue';
import type { SponsoredArticle } from 'src/types/article';

defineProps<{
  article: SponsoredArticle;
}>();
</script>

<style scoped lang="scss">
.sponsored-card {
  &__cover-wrapper {
    width: 100%;
    aspect-ratio: 3 / 2;
    padding: 12px 12px 0 12px;
  }

  &__cover {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    display: block;
    transition: transform 0.3s ease;
  }

  &__body {
    padding: 20px 24px 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__title {
    font-size: 24px;
    font-weight: 500;
    line-height: 1.25;
    color: #111827;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &__summary {
    font-size: 14px;
    line-height: 1.5;
    color: #374151;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &__footer {
    margin-top: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__label {
    font-size: 14px;
    font-weight: 600;
    color: #2563eb;
    letter-spacing: 0.01em;
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__likes {
    font-size: 16px;
    font-weight: 600;
    color: #111827;
    margin-right: 4px;
  }
}

.action-btn {
  color: #374151;

  &:hover {
    color: #111827;
  }

  &--sponsored {
    color: #2563eb;
  }
}
</style>
