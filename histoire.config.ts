import { defineConfig } from 'histoire';
import { HstVue } from '@histoire/plugin-vue';

export default defineConfig({
  plugins: [HstVue()],
  setupFile: './src/histoire.setup.ts',
  tree: {
    groups: [
      { id: 'base', title: 'Base Components' },
      { id: 'article', title: 'Article Components' },
    ],
  },
});
