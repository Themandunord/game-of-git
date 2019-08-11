import Vue from 'vue';
import '@/plugins/vuetify';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import '@/registerServiceWorker';

import VueRx from 'vue-rx';
import vuetify from './plugins/vuetify';
import '@babel/polyfill';
Vue.use(VueRx);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	vuetify,
	render: h => h(App)
}).$mount('#app');
