import Vue from 'vue'
import Router from 'vue-router'
import { routes } from './routes'

Vue.use(Router)

const router = new Router({
    mode: 'hash',
    linkActiveClass: 'is-active',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        {
            name: 'Home',
            path: '/home',
            component: require('../components/views/Home')
        },
        ...routes,
        {
            path: '*',
            redirect: '/home'
        }
    ]
});

export default router

