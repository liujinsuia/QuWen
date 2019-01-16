<!--src/components/tabbar/Home.Vue;-->
<template>
  <div class="app-home" id="top">
      <!-- 返回顶部 -->
     <div class="gotop" :style="s1">
       <a href="#top">
         <img src="img/goTop.png" alt="">
       </a>
     </div>
     <!--2:轮播图-->
     <div id="slider">
       <div class="swipe">
         <ul class="container" :style="containerStyle">
           <li v-if="list[list.length-1]">
             <img :src="list[list.length-1].img_url">
             <div class="swipe-title">
               <span>{{list[list.length-1].title}}</span>
             </div>
           </li>
           <li v-for="(item,index) in list" :key="index" @touchstart="toStart" @touchend="toEnd">
             <img :src="item.img_url">
             <div class="swipe-title">
              <span>{{item.title}}</span>
            </div>
            <div class="swipe-shadow"></div>
           </li>
           <li v-if="list[0]">
             <img :src="list[0].img_url">
             <div class="swipe-title">
              <span>{{list[0].title}}</span>
            </div>
           </li>
         </ul>
         <ul class="dots">
           <li v-for="(dot,i) in list" :key="i" :class="{active:i===(currentIndex-1)}" @click="jump(i+1)"></li>
         </ul>
       </div>
      </div>
     <!--3:九宫格-->
      <ul class="card">
        <li class="card-item">
          <router-link to="/newsList" class="bord mui-icon-extra mui-icon-extra-lamp card-x">
          </router-link>
          <div class="card-title">新鲜事</div>
        </li>
        <li class="card-item">
          <router-link to="/home" class="bord mui-icon mui-icon-star card-q">
          </router-link>
          <div class="card-title">趣事</div>
        </li>
        <li class="card-item">
          <router-link to="/Home" class="bord mui-icon mui-icon-chat card-t">
          </router-link>
          <div class="card-title">讨论</div>
        </li>
        <li class="card-item">
          <router-link to="/Home" class="bord mui-icon mui-icon-list card-l">
          </router-link>
          <div class="card-title">专题</div>
        </li>
        <li class="card-item">
          <router-link to="/view" class="bord mui-icon-extra mui-icon-extra-topic card-y">
          </router-link>
          <div class="card-title">阅读</div>
        </li>
        <li class="card-item">
          <router-link to="/view" class="bord mui-icon-extra mui-icon-extra-dictionary card-d">
          </router-link>
          <div class="card-title">订阅</div>
        </li>
        <li class="card-item">
          <router-link to="/Home" class="bord mui-icon mui-icon-compose card-z">
          </router-link>
          <div class="card-title">专栏</div>
        </li>
        <li class="card-item" @click="listShow">
          <div class="bord mui-icon-extra  mui-icon-extra-class card-g"></div>
          <div class="card-title">更多</div>
        </li>
      </ul> 
      <!-- 弹出层 -->
      <div class="moer-list" :class="show">
        <div class="moer-list-block">
          <div class="moer-close" @click="listClose">x</div>
          <div class="moer-list-block">
            <div>
              <div class="moer-list-block-name">阅读 Read</div>
              <router-link to="/newsList" class="block-line">
                <div class="mui-icon-extra mui-icon-extra-lamp card-x block-line-ico"></div>
                <div class="block-line-font">新鲜事</div>
              </router-link>
              <router-link to="" class="block-line">
                <div class="mui-icon mui-icon-star card-q block-line-ico"></div>
                <div class="block-line-font">趣事</div>
              </router-link>
              <router-link to="" class="block-line">
                <div class="mui-icon mui-icon-list card-l block-line-ico"></div>
                <div class="block-line-font">专题</div>
              </router-link>
              <router-link to="/view" class="block-line">
                <div class="mui-icon-extra mui-icon-extra-topic card-y block-line-ico"></div>
                <div class="block-line-font">阅读</div>
              </router-link>
              <router-link to="/view" class="block-line">
                <div class="mui-icon-extra mui-icon-extra-dictionary card-d block-line-ico"></div>
                <div class="block-line-font">订阅</div>
              </router-link>
              <router-link to="" class="block-line">
                <div class="mui-icon mui-icon-compose card-z block-line-ico"></div>
                <div class="block-line-font">专栏</div>
              </router-link>
              <div class="moer-list-block-name block-name-height">服务 Service</div>
              <router-link to="" class="block-line">
                <div class="mui-icon-extra mui-icon-extra-lamp card-x block-line-ico"></div>
                <div class="block-line-font">新鲜事</div>
              </router-link>
              <router-link to="" class="block-line">
                <div class="mui-icon mui-icon-star card-q block-line-ico"></div>
                <div class="block-line-font">趣事</div>
              </router-link>
              <router-link to="" class="block-line">
                <div class="mui-icon mui-icon-list card-l block-line-ico"></div>
                <div class="block-line-font">专题</div>
              </router-link>
              <router-link to="" class="block-line">
                <div class="mui-icon-extra mui-icon-extra-topic card-y block-line-ico"></div>
                <div class="block-line-font">阅读</div>
              </router-link>
              <router-link to="" class="block-line">
                <div class="mui-icon-extra mui-icon-extra-dictionary card-d block-line-ico"></div>
                <div class="block-line-font">订阅</div>
              </router-link>
              <router-link to="" class="block-line">
                <div class="mui-icon mui-icon-compose card-z block-line-ico"></div>
                <div class="block-line-font">专栏</div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
     <!-- newlist -->
     <headlines-box></headlines-box>
    </div>
</template>
<script>
  import headlines from '../sub/headlines.vue'
   export default {
      data(){
        return {
          list:[],
          s1:{
            display:"none",
          },
          show:{
            listShow:false
          },
          distance:-375,
          currentIndex:1,
          speed:15,
          transitionEnd:true,
          startX:0,
          endX:0
        }
      },
      created(){
        this.getImage();
        this.init();
      },
      mounted(){
        //监听 滚动事件
        window.addEventListener("scroll",this.onscroll,true);
      },
      methods:{
        getImage(){
          var url = "http://127.0.0.1:3000/imagelist";
          this.axios.get(url).then(result=>{
            //console.log(result.data);
            this.list = result.data;
          })
        },
        onscroll(){
          //页面滚动距离顶部距离
          var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
          var scroll = 200;
          //console.log(scrollTop)
          if(scrollTop >= scroll){
            this.s1.display = "block";
          }else{
            this.s1.display = "none";
          }
        },
        listShow(){
          this.show.listShow = true
        },
        listClose(){
          this.show.listShow = false
        },
        init(){
          this.play();
          window.onblur = function(){this.stop()}.bind(this);
          window.onfocus = function(){this.play()}.bind(this);
        },
        getStyle(el,name){
          if(window.getComputedStyle){
            return window.getComputedStyle(el,null)
          }else{
            return el.currentStyle
          }
        },
        move(offset,direction,speed){
          if(!this.transitionEnd) return
          this.transitionEnd = false
          direction === -1 ? this.currentIndex += offset/375 : this.currentIndex -= offset/375
          if(this.currentIndex > 3) this.currentIndex = 1
          if(this.currentIndex < 1) this.currentIndex = 3
          const destination = this.distance + offset * direction
          this.animate(destination,direction,speed)
        },
        animate(des,direction,speed){
          if(this.temp){
            window.clearInterval(this.temp)
            this.temp = null
          }
          this.temp = window.setInterval(()=>{
            if((direction === -1 && des < this.distance) || (direction === 1 && des> this.distance)){
              this.distance += speed * direction
            }else{
              this.transitionEnd = true
              window.clearInterval(this.temp)
              this.distance = des
              if(des < -375*3) this.distance = -375
              if(des > -375) this.distance = -375*3
            }
          },20)
        },
        jump(index){
          window.clearInterval(this.timer)
          const direction = index - this.currentIndex >= 0 ? -1 : 1
          const offset = Math.abs(index - this.currentIndex) * 375
          const jumpSpeed = Math.abs(index - this.currentIndex === 0 ? this.speed : Math.abs(index - this.currentIndex) * this.speed)
          this.move(offset,direction,jumpSpeed)
          this.play()
        },
        play(){
          if(this.timer){
            window.clearInterval(this.timer)
            this.timer = null
          }
          this.timer = window.setInterval(()=>{
            this.move(375,-1,this.speed)
          },3500)
        },
        stop(){
          window.clearInterval(this.timer)
          this.timer = null
        },
        toStart(e){
          e.preventDefault();
          this.startX = e.touches[0].clientX // 记录滑动开始的位置
        },
        toEnd(e){
          e.preventDefault();
          // 记录结束位置
          this.endX = e.changedTouches[0].clientX
          window.clearInterval(this.timer)
          //左滑
          if((this.startX - this.endX) > 30){
            //console.log("左滑")
            this.move(375,-1,this.speed)
            this.play()
          }
          //右滑
          if((this.startX - this.endX) < -30){
            //console.log("右滑")
            this.move(375,1,this.speed)
            this.play()
          }
        }
      },
      computed:{
        containerStyle(){
          return {
            transform:`translate3d(${this.distance}px,0,0)`
          }
        }
      },
      components:{
        "headlines-box":headlines
      }
   }
</script>
<style>
  .app-home{
    position: relative;
  }
  #slider{
    max-width: 640px;
    position: relative;
    overflow: hidden;
  }
  .swipe{
    touch-action: pan-x !important;
    max-width: 640px;
    position: relative;
    width: 100%;
    white-space: nowrap; 
  }
  .swipe-title{
    width: 100%;
    position: absolute;
    bottom: 30px;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    z-index: 8;
  }
  .swipe-shadow{
    background: url(/img/flshadow.png);
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    bottom: 0;
    background-size: 236%;
  }
  .container{
    max-width: 640px;
    position: relative;
    width: 100%;
  }
  .container li{
    display: inline-block;
  }
  .dots{
    position: absolute;
    text-align: center;
    bottom: 2px;
    width: 100%;
  }
  .dots li{
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 50%;
    width: 8px;
    height: 8px;
    margin-left: 5px;
  }
  .active{
    background-color: #fe9700;
  }
  .container img{
    width: 100%;
  }
 .gotop{
    opacity: .9;
    bottom: 10px;
    right: 10px;
    width: 32px;
    position: fixed;
    min-height: 32px;
    z-index: 1010;
    overflow: hidden;
    text-align: center;
 }
 .gotop a img{
   max-width: 32px;
 }
 .card{
   list-style: none;
   margin: 0;
   padding: 5px;
   padding-bottom: 5px;
   padding-top: 16px;
   text-align: center;
 }
 .card::after{
   content: "";
   display: block;
   clear: both;
 }
 .card .card-item{
   width: 25%;
   float: left;
   margin-bottom: 3px;
 }
 .bord{
  margin: 3px;
  width: 60px;
  height: 60px;
  display: inline-block;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 50%;
  background-clip: padding-box;
 }
 .card-item .mui-icon-extra {
  font-family: MuiiconSpread;
  font-size: 26px;
  font-weight: normal;
  font-style: normal;
  line-height: 2;
  display: inline-block;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  color: #fff;
  }
  .card-item .mui-icon {
    font-family: Muiicons;
    font-size: 35px;
    font-weight: normal;
    font-style: normal;
    line-height: 1.5;
    display: inline-block;
    text-decoration: none;
    -webkit-font-smoothing: antialiased;
    color: #fff;
  }
  .card-item .card-title{
    text-align: center;
    font-size: 15px;
  }
  .card-x{
    background: #fe9700;
  }
  .card-q{
    background: #f26765;
  }
  .card-t{
    background: #6f68df;
  }
  .card-l{
    background: #7f2d00;
  }
  .card-y{
    background: #fd7a49;
  }
  .card-d{
    background: #19cf8a;
  }
  .card-z{
    background: #4493f7;
  }
  .card-g{
    background: #7fd02b;
  }
  .d-1{
    width: 100%;
    height: 35px;
    text-align: center;
    font-size: 14px;
    color: #757575;
    margin-top: 20px;
  }
  .moer-list{
    width: 100%;
    height: 80%;
    background: rgba(48,52,53,.9);
    z-index: 9999;
    position: fixed;
    transition: all 0.5s;
    bottom: -9999px;
  }
  .listShow{
    bottom:0;
    transition: all 0.5s;
  }
  .moer-list-block{
    width: 98%;
    margin: 0 auto;
    text-align: center;
    color: #fff;
    max-width: 640px;
  }
  .moer-close{
    font-size: 30px;
    text-align: right;
    color: #cbc8d9;
    padding-right: 15px;
    height: 30px;
    line-height: 35px;
    width: 100%;
  }
  .moer-list-block-name{
    color: #918f90;
    font-size: 15px;
    padding-bottom: 10px;
  }
  .block-line{
    cursor: pointer;
    color: #fff;
    height: 30px;
    line-height: 30px;
    width: 90px;
    margin: 5px;
    margin-left: 0;
    display: inline-block;
    background: #303435;
    border-radius: 5px;
  }
  .block-line:active{
    color: #fff;
  }
  .block-line-ico{
    margin: 4px 0 0 5px;
    display: block;
    float: left;
    width: 23px;
    height: 23px;
    margin-right: 5px;
    border-radius: 50%;
    color: #fff;
    font-size: 15px !important;
    line-height: 1.5 !important;
    text-align: center;
  }
  .block-line-font{
    display: block;
    float: left;
    height: 25px;
    line-height: 22px;
    padding-left: 8px;
    padding-top: 4px;
    font-size: 15px;
  }
  .block-name-height{
    padding-top: 10px;
  }
</style>
