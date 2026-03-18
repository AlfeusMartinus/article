<template>
  <Story title="Article/ArticleCard" group="article" :layout="{ type: 'single', width: 360 }">
    <Variant title="Not Bookmarked">
      <ArticleCard :article="articleNotBookmarked" />
    </Variant>
    <Variant title="Bookmarked">
      <ArticleCard :article="articleBookmarked" />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import ArticleCard from './ArticleCard.vue';

const articleNotBookmarked = {
  title: 'Long Title Text That May Get Wrapped to New Line',
  cover: 'https://picsum.photos/600/400?random=1',
  summary:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet mattis massa, a consequat erat pretium in. Mauris id lorem id purus lacinia scelerisque tincidunt vitae turpis.',
  bookmarked: false,
  likes: 72,
};

const articleBookmarked = {
  title: 'Long Title Text That May Get Wrapped to New Line',
  cover: 'https://picsum.photos/600/400?random=2',
  summary:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet mattis massa, a consequat erat pretium in. Mauris id lorem id purus lacinia scelerisque tincidunt vitae turpis.',
  bookmarked: true,
  likes: 72,
};
</script>
