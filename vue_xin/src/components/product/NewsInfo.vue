<template>
  <div class="newsinfo">
    <moer-box></moer-box>
    <div class="pet-content">
      <div class="pet-content-block">
        <div class="pet-content-article">
          <div class="u-img">
            <img src="img/a1.png" alt="">
            <span class="u-title">EGOIST</span>
          </div>
          <h1 class="pet-article-title">你认识萌萌的小熊猫吗？</h1>
          <div class="pet-article-time">发表于：2015-09-25</div>
          <img src="img/a2.jpg" alt="">
          <p class="title-p">
            南极洲又称
            <a href="###">第七大陆</a>
            ，是地球上最后一个被发现、唯一没有土著人居住的大陆。
          </p>
          <p class="title-p">南极大陆为通常所说的南大洋（太平洋、印度洋和大西洋的南部水域）所包围，它与南美洲最近的距离为965公里，距新西兰2000公里、距澳大利亚2500公里、距南非3800公里、距中国北京的距离约有12000公里。南极大陆的总面积为1390万平方公里，相当于中国和印巴次大陆面积的总和，居世界各洲第五位。</p>
          <blockquote>
            <p class="title-p">有一天我们也要去南极走走！！</p>
          </blockquote>
          <img src="img/a3.jpg" alt="">
          <p class="title-p">整个南极大陆被一个巨大的冰盖所覆盖，平均海拔为2350米。南极洲是由冈瓦纳大陆分离解体而成，是世界上最高的大陆。南极横断山脉将南极大陆分成东西两部分。这两部分在地理和地质上差别很大。</p>
          <img src="img/a2.jpg" alt="">
          <p class="title-p">东南极洲是一块很古老的大陆，据科学家推算,已有几亿年的历史。它的中心位于难接近点，从任何海边到难接近点的距离都很远。东南极洲平均海拔高度2500米，最大高度4800 米。在东南极洲有南极大陆最大的活火山，即位于罗斯岛上的埃里伯斯火山，海拔高度3795米，有四个喷火口</p>
        </div>
        <ul class="like-block">
          <li>
            <a href="###" class="like-a">
              <span class="mui-icon-extra mui-icon-extra-like s-1"></span>
              1460
            </a>
          </li>
          <li>
            <a href="###" class="like-a">
              <span class="mui-icon mui-icon-weixin s-2"></span>
              微信
            </a>
          </li>
          <li>
            <a href="###" class="like-a">
              <span class="mui-icon mui-icon-pengyouquan s-3"></span>
              朋友圈
            </a>
          </li>
        </ul>
      </div>
    </div>
    <content-box></content-box>
    <div class="y-like">猜你喜欢</div>
    <headlines-box></headlines-box>
  </div>
</template>
<script>
import Moer from '../sub/Moer.vue'
import headlines from '../sub/headlines.vue'
import content from '../sub/content.vue'
export default {
  data(){
    return {
      
    }
  },
  components:{
    "moer-box":Moer,
    "headlines-box":headlines,
    "content-box":content
  }
}
</script>
<style>
  .newsinfo{
    background: #ececec;
    position: relative;
    padding-top: 48px;
  }
  .pet-content{
    border-radius: 5px;
    background: #fff;
    max-width: 100%;
    margin: 0 5px;
    margin-bottom: 20px;
    box-shadow: 0 1px 3px rgba(100,100,100,1);
  }
  .pet-content-block{
    width: 100%;
    background: #fff;
    margin: 0 auto;
    border-radius: 5px;
  }
  .pet-content-article{
    padding: 20px 8px 0;
    margin: 0 10px;
    color: #333;
    background-color: transparent;
  }
  .u-img{
    width: 26px;
    height: 40px;
    display: block;
  }
  .pet-content-article .u-img img{
    height: 25px;
    vertical-align: top;
    width: 100%;
    border-radius: 50%;
  }
  .u-title{
    position: relative;
    left: 40px;
    top: -36px;
    font-size: 16px;
    line-height: 50px;
    color: #918f90;
  }
  .pet-article-title{
    color: #222;
    margin:0;
    font-size: 1.5rem;
    font-weight: bold;
  }
  .pet-article-time{
    color: #aaaaaa;
    font-size: 14px;
    margin-bottom: 10px;
  }
  .pet-content-article img{
    width: 100%;
    border: none;
    padding: 0;
    margin: 0 auto;
    border-radius: 5px;
    display: block;
  }
  .title-p{
    color: #333;
    font-size: 17px;
    line-height: 1.8;
    margin: 10px 0;
  }
  .title-p a{
    color: #ff5656;
  }
  .title-p a:active{
    color: #ff5656;
  }
  blockquote {
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 15px;
    border-left: 4px solid #ddd;
    margin: 0 0 1rem;
    margin-top: 1rem;
    font-family: Georgia,"Times New Roman",Times,Kai,"Kaiti SC",KaiTi,BiauKai,FontAwesome,serif;
  }
  blockquote .title-p{
    margin: 0;
  }
  .like-block{
    width: 100%;
    padding: 25px 15px 10px;
    overflow: hidden;
    margin-top: 15px;
  }
  .like-block li{
    width: 33.33%;
    padding: 0 5px;
    float: left;
  }
  .like-a{
    color: #979797;
    font-size: 14px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    display: block;
    border-radius: 20px;
    border: 1px solid #dcdcdc;
  }
  .like-block li a span{
    font-size: 18px;
  }
  .like-block li a .s-1{
    color: #e86060;
  }
  .like-block li a .s-2{
    color: #6dc35e;
  }
  .like-block li a .s-3{
    color: #6959f0;
  }
  .like-block li a:active{
    color: #979797;
  }
  .y-like{
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    background: #fff;
    max-width: 100%;
    margin: 0 5px;
    box-shadow: 0px 0px 1px rgba(100,100,100,1);
    position: relative;
    top: 3px;
    font-weight: bold;
    color: #222;
    font-size: 16px;
    padding:15px 0;
    text-indent: 1em;
  }
</style>