import {
  createRouter,
  createMemoryHistory,
  createWebHashHistory
} from 'vue-router'

import Home from '../views/Home/index.vue';
import About from '../views/About/index.vue';

const isSSR = typeof window === 'undefined';

const history = isSSR ? createMemoryHistory() : createWebHashHistory();

const routes = [
  {
    path: '/',
    component: Home,
    name: Home
  },
  {
    path: '/about',
    component: About,
    name: About
  }
]

export default () => createRouter({
  history,
  routes
})