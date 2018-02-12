# vue-cli-tiny-err

> A Vue.js project

# Vue-cli with Webpack template:
[vuejs webpack template](https://github.com/vuejs-templates/webpack)  

$ npm install -g vue-cli   
$ vue init webpack vue-cli-tiny-err    
$ cd vue-cli-tiny-err    
$ npm install  
$ npm install tiny-json-http --save 
$ npm run dev  

## New Component: LoaderTiny.vue
./src/components/LoaderTiny.vue

## Amendments in a Router:
./src/router/index.js

```
import LoaderTiny from '@/components/LoaderTiny'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: LoaderTiny
    }]
})
```

## ERROR:
Uncaught Error: Cannot find module 'http'


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

   

 