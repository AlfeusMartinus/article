<template>
  <Story title="Base/Card" group="base" :layout="{ type: 'single', width: 380 }">
    <Variant title="Default">
      <Card>
        <div class="story-slot-demo">Slot content renders here inside the card.</div>
      </Card>
    </Variant>

    <Variant title="With Image & Text">
      <Card>
        <img
          src="https://picsum.photos/600/400?random=10"
          alt="Preview"
          style="
            width: 100%;
            aspect-ratio: 3/2;
            object-fit: cover;
            display: block;
            border-radius: 10px;
            margin: 12px 12px 0;
            width: calc(100% - 24px);
          "
        />
        <div class="story-slot-demo">
          <strong>Card Title</strong>
          <p style="font-size: 13px; color: #6b7280; margin-top: 8px">
            Any content can be slotted inside this base card.
          </p>
        </div>
      </Card>
    </Variant>

    <Variant title="Minimal (No Content)">
      <Card>
        <div style="height: 120px" />
      </Card>
    </Variant>

    <Variant title="Playground">
      <Card>
        <div class="story-slot-demo" :style="{ background: state.bgColor }">
          {{ state.text }}
        </div>
      </Card>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import Card from './Card.vue';

const state = reactive({
  text: 'Edit me in the controls panel!',
  bgColor: '#f9fafb',
});
</script>

<style scoped>
.story-slot-demo {
  padding: 24px;
  font-size: 14px;
  color: #374151;
}
</style>

<docs lang="md">
# Card

The base container component providing a consistent surface with rounded corners, drop shadow, and a subtle lift animation on hover.

## Usage

```vue
<Card>
  <p>Your content goes here</p>
</Card>
```

## Props

This component has no props — its entire content is provided via the default **slot**.

## Variants

| Variant           | Description                                        |
| ----------------- | -------------------------------------------------- |
| Default           | Plain slot usage                                   |
| With Image & Text | Shows a typical article-like composition           |
| Minimal           | Just an empty box to test sizing                   |
| Playground        | Interactive — modify the slot content via controls |

## Notes

- `height: 100%` and `display: flex` allow it to stretch to full grid row height automatically.
- Hover state adds `translateY(-2px)` lift for premium feel.
</docs>
