import Vue from 'vue';

import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);
// baseUrl is a global variable, we get it through Laravel

Vue.axios.defaults.baseURL = baseUrl;
Vue.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// Don't throw errors on 422, 403 and 401 status code (used for validations)
Vue.axios.defaults.validateStatus = (status =>
    status === 422 ||
    status === 401 ||
    status === 403 ||
    status >= 200 &&
    status < 300
);
