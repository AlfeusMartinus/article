<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="main-header">
      <q-toolbar class="main-header__toolbar">
        <q-toolbar-title class="main-header__brand">
          <q-icon name="newspaper" size="22px" class="main-header__logo-icon" />
          MediaDigital
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.main-header {
  background: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);

  &__toolbar {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0 24px;
    min-height: 60px;
  }

  &__brand {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 18px;
    font-weight: 700;
    color: #1a1a2e;
    letter-spacing: -0.3px;
  }

  &__logo-icon {
    color: #2563eb;
  }
}
</style>
