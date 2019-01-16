import Vue from 'vue'
import App from './App.vue'
import router from './router'

import'mint-ui/lib/style.css'

Vue.config.productionTip = false
//5: 设置请求的根路径 
//Vue.http.options.root = "http://127.0.0.1/vue_ser/";
//6:全局设置post 时候表音的数据组织格式为 application/x-www-form-urlencoded
//Vue.http.options.emulateJSON = true;
// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
import './lib/mui/css/mui.css'
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
import './lib/mui/css/icons-extra.css'

//1:引入mint-ui Header组件
import {Header,Swipe,SwipeItem,Button} from "mint-ui"
//2:注册Header组件
Vue.component(Header.name,Header);
//3:注册Swipe/SwipeItem组件
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);
Vue.component(Button.name,Button)
//3.1:引入axios库
import axios from 'axios'
//3.2:跨域保存session值
axios.defaults.withCredentials = true;
//3.3:注册组件
Vue.prototype.axios = axios;


//4:日期过滤器
//val:原先日期对象
Vue.filter("datatimeFilter",function(val){
  //4.1:创建日期对象
  var data = new Date(val)
  //4.2:获取年月日时分秒
  var y = data.getFullYear();
  var m = data.getMonth()+1;
  var d = data.getDate();
  var h = data.getHours();
  var mi = data.getMinutes();
  var s = data.getSeconds();
  //4.3日期格式判断
  m<10&&(m="0"+m);
  d<10&&(d="0"+d);
  //4.4:拼接字符串返回
  return `${y}-${m}-${d} ${h}:${mi}:${s}`;
})

//6.1引入vue-touch
import VueTouch from 'vue-touch'
//6.2注册vue-touch
Vue.use(VueTouch,{name:'v-touch'})
VueTouch.config.swipe = {
  threshold:100 //手指左右滑动距离
}
//5.1引入Vuex
import Vuex from 'vuex'
//5.2注册Vuex
Vue.use(Vuex)
//5.3创建Vuex实例对象
var store = new Vuex.Store({
  state:{
    cartCount:0 //购物车中数量
  },
  mutations:{   //修改共享数据
    increment(state,count){state.cartCount+=parseInt(count)},
    subscribe(state){state.cartCount--},
    clear(state){state.cartCount = 0}
  },
  getters:{     //获取共享数据的方法
    optCartCount:function(state){
      return state.cartCount;
    }
  }
})
//5.4将Vuex对象注册Vue实例

new Vue({
  router,
  render: h => h(App),
  store          //将Vuex对象注册Vue实例
}).$mount('#app')
