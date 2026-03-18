<template>
  <Story title="Base/BaseCard" group="base" :layout="{ type: 'single', width: 360 }">
    <Variant title="Default">
      <BaseCard>
        <div style="padding: 24px; font-size: 14px; color: #374151">
          Slot content renders here inside the card.
        </div>
      </BaseCard>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import BaseCard from './BaseCard.vue';
</script>
