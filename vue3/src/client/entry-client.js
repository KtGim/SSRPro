import createApp from './main';

const {
  app,
  store
} = createApp();

console.log(window.__SERVER_STATE__, 'window.__SERVER_STATE__=========')
if (window.__SERVER_STATE__) {
  console.log(window.__SERVER_STATE__, 'window.__SERVER_STATE__');
  store.replaceState(window.__SERVER_STATE__)
}

app.mount('#app');