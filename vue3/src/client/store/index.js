import { createStore } from 'vuex';

import demo from './modules/demo/index';

export default () => createStore({
  modules: {
    demo
  }
})