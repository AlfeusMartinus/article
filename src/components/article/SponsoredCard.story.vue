<template>
  <Story title="Article/SponsoredCard" group="article" :layout="{ type: 'single', width: 360 }">
    <Variant title="Default">
      <SponsoredCard :article="sponsoredArticle" />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import SponsoredCard from './SponsoredCard.vue';

const sponsoredArticle = {
  title: 'Long Title Text That May Get Wrapped to New Line',
  cover: 'https://picsum.photos/600/400?random=3',
  summary:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet mattis massa, a consequat erat pretium in. Mauris id lorem id purus lacinia scelerisque tincidunt vitae turpis.',
  bookmarked: true,
  likes: 72,
  isSponsored: true as const,
};
</script>
