import { createApp } from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';

createApp(App)
  .use(store)
  .use(router)
  .use({
    install(Vue) {
      // eslint-disable-next-line no-param-reassign
      Vue.prototype.$axios = axios.create({
        baseURL: 'http://localhost:4000/api/v1/',
      });
    },
  })
  .mount('#app');
