import Vue from 'vue'
import Router from 'vue-router'
//1:引入自定义组件
import Home from "./components/tabbar/Home.vue"
import News from "./components/product/NewsList.vue"
import NewsInfo from "./components/product/NewsInfo.vue"
import view from "./components/product/view.vue"

Vue.use(Router)
export default new Router({
  //2:为组件配置访问路径
  routes: [
    {path:'/',redirect:"/Home"},
    {path:"/Home",component:Home},
    {path:"/newsList",component:News},
    {path:"/newsInfo",component:NewsInfo},
    {path:"/view",component:view},
  ]
})
