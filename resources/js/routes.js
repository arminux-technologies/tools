import Vue from 'vue';
import Router from 'vue-router';

import App from './components/App'

Vue.use(Router);

const routes = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: App,
      meta: {
       // title: Vue.i18n.translate('strings.home', null),
      },
    },
    
    {
      path: '*',
      redirect: '/',
    },
  ],
});

export default routes;
