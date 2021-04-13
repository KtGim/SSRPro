import Home from './Home';
import About from './About';

const routers = [
  {
    path: '/',
    component: Home,
    exact: true,
    loadData: Home.loadData,
  }, {
    ath: '/about',
    component: About,
    exact: true,
  }
]

export default routers;

