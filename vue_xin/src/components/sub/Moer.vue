<template>
  <div class="new-header">
    <div class="header-left">
      <router-link to="/home" class="left-l"></router-link>
    </div>
    <div class="mui-icon-extra mui-icon-extra-class new-moer" @click="listShow"></div>
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
            <router-link to="" class="block-line">
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
  </div>
</template>
<script>
  export default {
    data(){
      return {
        show:{
          listShow:false
        },
      }
    },
    methods:{
      listClose(){
        this.show.listShow = false
      },
      listShow(){
        this.show.listShow = true
      }
    }
  }
</script>
<style>
  .new-header{
    position: fixed;
    background: #303435;
    max-width: 640px;
    margin: 0 auto;
    line-height: 53px;
    height: 48px;
    width: 100%;
    top: 0;
    z-index: 12;
  }
  .header-left{
    position: absolute;
    width: 48px;
    height: 30px;
    top: 8px;
    left: 15px;
    border-right: 1px solid #4c4a4b;
  }
  .left-l{
    position: absolute;
    top:8px;
    left: 18px;
    width: 13px;
    height: 13px;
    border-top: 1px solid #918f90;
    border-left: 1px solid #918f90;
    transform: rotate(-45deg);
  }
  .new-header .new-moer{
    position: absolute;
    text-align: center;
    line-height: 1.5;
    width: 48px;
    height: 53px;
    right: 10px;
    color: #918f90;
    font-size: 30px;
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