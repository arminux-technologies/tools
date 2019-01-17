
require('./bootstrap');

window._ = require('lodash');

import Vue from 'vue';
import { sync } from 'vuex-router-sync'
import App from './components/App';
import './utilities';
import store from './store';
import router from './router'
sync(store, router);

new Vue({
    components:{App},
    store,
    router,
    el: '#app',
});
