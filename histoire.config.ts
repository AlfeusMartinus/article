import { defineConfig } from 'histoire';
import { HstVue } from '@histoire/plugin-vue';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [HstVue()],
  vite: {
    plugins: [vue()],
    resolve: {
      alias: {
        src: resolve(__dirname, './src'),
      },
    },
  },
  tree: {
    groups: [
      { id: 'base', title: 'Base Components' },
      { id: 'article', title: 'Article Components' },
    ],
  },
});
