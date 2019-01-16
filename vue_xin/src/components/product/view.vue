<template>
  <div>
    <moer-box></moer-box>
    <div class="content-list">
      <div class="bg-c">
        <div class="article-like">
          <ul class="am-list">
            <li class="am-list-item">
              <a href="###" class="topci-block">
                <div class="topci-video">
                  <span>1:15</span>
                </div>
                <div class="topci-font">新 Xbox One 下月发布，暂不支持 Cortana。</div>
                <div class="topci-shadow"></div>
                <img src="img/c8.png" alt="">
              </a>
            </li>
            <li class="am-list-item">
              <a href="###" class="topci-block">
                <div class="topci-video">
                  <span>1:15</span>
                </div>
                <div class="topci-font">GitHub 宣布支持 U2F 两步认证。</div>
                <div class="topci-shadow"></div>
                <img src="img/c7.png" alt="">
              </a>
            </li>
            <li class="am-list-item">
              <a href="###" class="topci-block">
                <div class="topci-video">
                  <span>1:15</span>
                </div>
                <div class="topci-font">MAX 大会：Adobe 发布移动端新应用 Fix 和 Capture。</div>
                <div class="topci-shadow"></div>
                <img src="img/c5.png" alt="">
              </a>
            </li>
            <li class="am-list-item">
              <a href="###" class="topci-block">
                <div class="topci-video">
                  <span>1:15</span>
                </div>
                <div class="topci-font">iPhone 6s 采用 4G LTE Advanced 技术。</div>
                <div class="topci-shadow"></div>
                <img src="img/c3.png" alt="">
              </a>
            </li>
            <li class="am-list-item">
              <a href="###" class="topci-block">
                <div class="topci-video">
                  <span>1:15</span>
                </div>
                <div class="topci-font">Twitter 正式任命 Jack Dorsey 为 CEO。</div>
                <div class="topci-shadow"></div>
                <img src="img/c6.png" alt="">
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="d-2">我也是有底的~(*.*)~</div>
  </div>
</template>
<script>
  import Moer from '../sub/Moer.vue'
  export default {
    data(){
      return {

      }
    },
    components:{
      "moer-box":Moer
    }
  }
</script>
<style>
  .content-list{
    width: 100%;
    background: #ececec;
    position: relative;
    top: 48px;
  }
  .bg-c{
    background: #fff;
    padding: 10px;
    padding-top: 25px;
  }
  .article-like{
    width: 100%;
    background: #fff;
    box-shadow: 0 1px 2px rgba(0,0,0,0.05)
  }
  ul{
    list-style: none;
    margin: 0;
    padding: 0;
  }
  ul a{
    color: #fff;
  }
  ul a:active{
    color: #fff;
  }
  .am-list{
    position: relative;
  }
  .am-list-item{
    padding: 13px 0;
  }
  .topci-block{
    position: relative;
    width: 100%;
    display: block;
    overflow: hidden;
  }
  .topci-video{
    position: absolute;
    right: 10px;
    top: 20px;
    text-align: center;
    font-size: 12px;
    line-height: 18px;
    border: 1px solid #ccc;
    border-radius: 10px;
    width: 55px;
    height: 18px;
    background: rgba(0,0,0,0.3);
    z-index: 9;
  }
  .topci-font{
    position: absolute;
    top: 118px;
    left: 10px;
    z-index: 9;
    font-size:14px;
  }
  .topci-shadow{
    background: url(/img/flshadow.png) bottom no-repeat;
    position: absolute;
    z-index: 4;
    width: 100%;
    height: 100%;
    background-size: 100%;
    top: 20px;
  } 
  .topci-block img{
    width: 100%;
  }
  .d-2{
    position: relative;
    top: 48px;
    width: 100%;
    height: 35px;
    font-size: 15px;
    color: #757575;
    text-align: center;
    margin-top: 20px;
  }
</style>