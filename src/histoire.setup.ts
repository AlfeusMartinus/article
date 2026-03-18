import { defineSetupVue3 } from '@histoire/plugin-vue';
import { createPinia } from 'pinia';
import { Quasar } from 'quasar';
import 'quasar/src/css/index.sass';
import '@quasar/extras/material-icons/material-icons.css';
import './css/app.scss';

export const setupVue3 = defineSetupVue3(({ app }) => {
  app.use(createPinia());
  app.use(Quasar);
});
