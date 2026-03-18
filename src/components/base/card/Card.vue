<template>
  <div class="card">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.card {
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  transition:
    box-shadow 0.2s ease,
    transform 0.2s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.14);
    transform: translateY(-2px);
  }
}
</style>
