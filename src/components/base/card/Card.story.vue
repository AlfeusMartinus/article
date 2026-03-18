<template>
  <Story title="Card" group="base" :layout="{ type: 'single', width: 400 }">
    <Variant title="Default">
      <Card>
        <div style="padding: 24px; font-size: 14px; color: #374151">
          Slot content renders here inside the card.
        </div>
      </Card>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import Card from './Card.vue';
</script>

<docs lang="md">
# Card Component
The base card component providing a consistent container with shadows, border radius, and hover effects.

## Usage
```vue
<Card>
  your content here
</Card>
```
</docs>
