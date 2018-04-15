
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
var _ = require('lodash');

import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'
import ElementUI from 'element-ui'
import VueFractionGrid from 'vue-fraction-grid'
import App from './components/App.vue'
import 'element-ui/lib/theme-default/index.css'
import 'animate.css/animate.css'

Vue.use(ElementUI);
Vue.use(VueAxios, axios);
Vue.use(VueFractionGrid, {
    container: '100%',
    gutter: '24px',
    approach: 'desktop-first',
    breakpoints: {
        xs: '768px',
        sm: '769px 1100px'
    }
});

sync(store, router);

const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
