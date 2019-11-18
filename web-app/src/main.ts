import Vue from 'vue';
import '@/plugins/vuetify';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import '@/registerServiceWorker';

import VueRx from 'vue-rx';
import vuetify from './plugins/vuetify';
import '@babel/polyfill';
import { createProvider } from './vue-apollo';
Vue.use(VueRx);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	vuetify,
	apolloProvider: createProvider({
		tokenName: 'jwt'
	}),
	render: h => h(App)
}).$mount('#app');
