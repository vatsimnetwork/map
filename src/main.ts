import Vue from 'vue';
import VueContext from 'vue-context';

/*
 * We import the mapbox-gl lib globally so we can access it freely in
 * all MapComponents.
 */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import mapboxgl from 'mapbox-gl';

import App from './App.vue';
import router from './router';
import store from './store';
import './assets/scss/index.scss';

Vue.component('VueContext', VueContext);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
