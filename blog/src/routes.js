import Layout from './container/layout';
import Login from './container/Login';

export default [
    {
        path: '/index',
        component: Layout,
        key: 'index',
        exact: true,
        // routes: [
        //     {
        //         path: '/loginx',
        //         component: Login,
        //         key: 'loginx',
        //         exact: true,
        //     }
        // ]
    },
    {
        path: '/login',
        component: Login,
        key: 'login',
        exact: true,
    }
]