import Vue from 'vue'
import Router from 'vue-router'
import LoaderTiny from '@/components/LoaderTiny'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: LoaderTiny
    }]
})