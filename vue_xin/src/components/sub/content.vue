<template>
  <div class="news-content">
    <div class="news-content-list">
      <div class="content-list-title">精彩评论</div>
      <div class="content-list-tabs">
        <ul id="tab" class="t-tab">
          <li><a href="javascript:;" data-id="#content1" data-toggle="tab" @click="onshow" :class="tabs">人气</a></li>
          <li><a href="javascript:;" data-id="#content2" data-toggle="tab" @click="onshow2" :class="tabs2">最新</a></li>
          <li><a href="javascript:;" data-id="#content3" data-toggle="tab" @click="onshow3" :class="tabs3">最早</a></li>
        </ul>
        <div class="container container-ab" :style="s1">
          <div id="content1" class="content-1" :class="tab">
            <div class="container-block">
              <div class="container-block-l">
                <img src="img/a1.png" alt="">
              </div>
              <div class="container-block-r">
                <div class="container-block-r-info">Amaza</div>
                <div class="container-block-r-text">那时候有多好，任雨打湿裙角。忍不住哼起，心爱的旋律。绿油油的树叶，自由地在说笑。燕子忙归巢，风铃在舞蹈。</div>
                <div class="container-block-bottom">
                  <div class="container-block-bottom-l">10分钟前</div>
                  <div class="container-block-bottom-r">
                    <span>
                      <i class="mui-icon-extra mui-icon-extra-like content-1"></i>
                      5
                    </span>
                    <span>回复</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="container-block">
              <div class="container-block-l">
                <img src="img/a2.png" alt="">
              </div>
              <div class="container-block-r">
                <div class="container-block-r-info">一如既往</div>
                <div class="container-block-r-text">没有老友你的陪伴，日子真是漫长与你重逢之时，我会敞开心扉倾诉所有。</div>
                <div class="container-block-bottom">
                  <div class="container-block-bottom-l">15分钟前</div>
                  <div class="container-block-bottom-r">
                    <span>
                      <i class="mui-icon-extra mui-icon-extra-like content-1"></i>
                      5
                    </span>
                    <span>回复</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="container-block">
              <div class="container-block-l">
                <img src="img/a3.png" alt="">
              </div>
              <div class="container-block-r">
                <div class="container-block-r-info">AllThe</div>
                <div class="container-block-r-text">表紙の裏に移らないよに あけた一枚目のページの裏に透けた文字めくろうとして 指がとまって</div>
                <div class="container-block-bottom">
                  <div class="container-block-bottom-l">30分钟前</div>
                  <div class="container-block-bottom-r">
                    <span>
                      <i class="mui-icon-extra mui-icon-extra-like content-1"></i>
                      5
                    </span>
                    <span>回复</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="container-block">
              <div class="container-block-l">
                <img src="img/a4.png" alt="">
              </div>
              <div class="container-block-r">
                <div class="container-block-r-info">Drary</div>
                <div class="container-block-r-text">无论历经怎样的艰难坎坷，总有你相伴陪我度过。</div>
                <div class="container-block-bottom">
                  <div class="container-block-bottom-l">1小时前</div>
                  <div class="container-block-bottom-r">
                    <span>
                      <i class="mui-icon-extra mui-icon-extra-like content-1"></i>
                      5
                    </span>
                    <span>回复</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="content2" class="content-1" :class="tab2">
            <div class="container-block">
              <div class="container-block-l">
                <img src="img/a2.png" alt="">
              </div>
              <div class="container-block-r">
                <div class="container-block-r-info">一如既往</div>
                <div class="container-block-r-text">没有老友你的陪伴，日子真是漫长与你重逢之时，我会敞开心扉倾诉所有。</div>
                <div class="container-block-bottom">
                  <div class="container-block-bottom-l">15分钟前</div>
                  <div class="container-block-bottom-r">
                    <span>
                      <i class="mui-icon-extra mui-icon-extra-like content-1"></i>
                      5
                    </span>
                    <span>回复</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="container-block">
              <div class="container-block-l">
                <img src="img/a3.png" alt="">
              </div>
              <div class="container-block-r">
                <div class="container-block-r-info">AllThe</div>
                <div class="container-block-r-text">表紙の裏に移らないよに あけた一枚目のページの裏に透けた文字めくろうとして 指がとまって</div>
                <div class="container-block-bottom">
                  <div class="container-block-bottom-l">30分钟前</div>
                  <div class="container-block-bottom-r">
                    <span>
                      <i class="mui-icon-extra mui-icon-extra-like content-1"></i>
                      5
                    </span>
                    <span>回复</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="container-block">
                <div class="container-block-l">
                  <img src="img/a1.png" alt="">
                </div>
                <div class="container-block-r">
                  <div class="container-block-r-info">Amaza</div>
                  <div class="container-block-r-text">那时候有多好，任雨打湿裙角。忍不住哼起，心爱的旋律。绿油油的树叶，自由地在说笑。燕子忙归巢，风铃在舞蹈。</div>
                  <div class="container-block-bottom">
                    <div class="container-block-bottom-l">10分钟前</div>
                    <div class="container-block-bottom-r">
                      <span>
                        <i class="mui-icon-extra mui-icon-extra-like content-1"></i>
                        5
                      </span>
                      <span>回复</span>
                    </div>
                  </div>
                </div>
            </div>
            <div class="container-block">
              <div class="container-block-l">
                <img src="img/a4.png" alt="">
              </div>
              <div class="container-block-r">
                <div class="container-block-r-info">Drary</div>
                <div class="container-block-r-text">无论历经怎样的艰难坎坷，总有你相伴陪我度过。</div>
                <div class="container-block-bottom">
                  <div class="container-block-bottom-l">1小时前</div>
                  <div class="container-block-bottom-r">
                    <span>
                      <i class="mui-icon-extra mui-icon-extra-like content-1"></i>
                      5
                    </span>
                    <span>回复</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="content3" class="content-1" :class="tab3">
            <div class="container-block">
              <div class="container-block-l">
                <img src="img/a2.png" alt="">
              </div>
              <div class="container-block-r">
                <div class="container-block-r-info">一如既往</div>
                <div class="container-block-r-text">没有老友你的陪伴，日子真是漫长与你重逢之时，我会敞开心扉倾诉所有。</div>
                <div class="container-block-bottom">
                  <div class="container-block-bottom-l">15分钟前</div>
                  <div class="container-block-bottom-r">
                    <span>
                      <i class="mui-icon-extra mui-icon-extra-like content-1"></i>
                      5
                    </span>
                    <span>回复</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="container-block">
              <div class="container-block-l">
                <img src="img/a3.png" alt="">
              </div>
              <div class="container-block-r">
                <div class="container-block-r-info">AllThe</div>
                <div class="container-block-r-text">表紙の裏に移らないよに あけた一枚目のページの裏に透けた文字めくろうとして 指がとまって</div>
                <div class="container-block-bottom">
                  <div class="container-block-bottom-l">30分钟前</div>
                  <div class="container-block-bottom-r">
                    <span>
                      <i class="mui-icon-extra mui-icon-extra-like content-1"></i>
                      5
                    </span>
                    <span>回复</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="container-block">
              <div class="container-block-l">
                <img src="img/a4.png" alt="">
              </div>
              <div class="container-block-r">
                <div class="container-block-r-info">Drary</div>
                <div class="container-block-r-text">无论历经怎样的艰难坎坷，总有你相伴陪我度过。</div>
                <div class="container-block-bottom">
                  <div class="container-block-bottom-l">1小时前</div>
                  <div class="container-block-bottom-r">
                    <span>
                      <i class="mui-icon-extra mui-icon-extra-like content-1"></i>
                      5
                    </span>
                    <span>回复</span>
                  </div>
                </div>
              </div>
            </div>
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
        tabs:{tabActive:true},
        tabs2:{tabActive2:false},
        tabs3:{tabActive3:false},
        tab:{contentActive1:true},
        tab2:{contentActive2:false,tran:true},
        tab3:{contentActive3:false,tran2:true},
        s1:{
          
          
        }
      }
    },
    methods:{
      onshow(){
        this.tabs.tabActive = true
        this.tabs2.tabActive2 = false
        this.tabs3.tabActive3 = false
        this.tab.contentActive1 = true
        this.tab2.tran = true
        this.tab2.contentActive2 = false
        this.tab3.tran2 = true
        this.tab3.contentActive3 = false
      },
      onshow2(){
        this.tabs.tabActive = false
        this.tabs2.tabActive2 = true
        this.tabs3.tabActive3 = false
        this.tab.contentActive1 = false
        this.tab2.tran = false
        this.tab2.contentActive2 = true
        this.tab3.tran2 = true
        this.tab3.contentActive3 = false
      },
      onshow3(){
        this.tabs.tabActive = false
        this.tabs2.tabActive2 = false
        this.tabs3.tabActive3 = true
        this.tab.contentActive1 = false
        this.tab2.tran = false
        this.tab2.contentActive2 = false
        this.tab3.tran2 = false
        this.tab3.contentActive3 = true
      },
    }
  }
</script>
<style>
.news-content{
  max-width: 100%;
  padding-top: 10px;
}
.news-content-list{
  border-radius: 5px;
  background: #fff;
  max-width: 100%;
  margin: 0 5px;
  padding: 18px;
  padding-top: 20px;
  margin-bottom: 30px;
  position: relative;
  box-shadow: 0 1px 3px rgba(100,100,100,1);
}
.content-list-title{
  position: relative;
  font-weight: bold;
  color: #222;
  font-size: 16px;
  width: 100%;
  border-bottom: 1px solid #f1f1f1;
  padding-bottom: 15px;
  margin-bottom: 5px;
  text-indent: 1em;
}
#tab{
  padding: 0 10px;
  background: none;
  border-radius: 20px;
  width: 130px;
  height: 30px;
  border: 1px solid #f1f1f1;
  position: absolute;
  display: inline-block;
  right: 18px;
  top: 16px;
  display:flex;
}
.t-tab{
  float: right;
}
#tab li{
  padding-top: 3px;
  text-align: center;
}
#tab li a{
  padding: 0 5px;
  background: none;
  color: #cacaca;
  height: 16px;
  line-height: 16px;
  font-size: 12px;
  border-right: 1px solid #f1f1f1;
}
#tab li:last-child a{
  border:none;
}
#tab li .tabActive{
  color: #979797;
}
#tab li .tabActive2{
  color: #979797;
}
#tab li .tabActive3{
  color: #979797;
}
.container-block-l{
  width: 50px;
  height: 50px;
  float: left;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
}
.container-block{
  width: 100%;
  padding: 15px 0;
  border-bottom: 1px solid #f1f1f1;
  overflow: hidden;
}
.container-block-r{
  position: relative;
  margin-left: 65px;
}
.container-block-r-info{
  color: #222;
  font-size: 18px;
}
.container-block-r-text{
  color: #222;
  font-size: 14px;
}
.container-block-bottom{
  font-size: 14px;
  color: #757575;
  padding-top: 5px;
}
.container-block-bottom-l{
  position: relative;
  float: left;
}
.container-block-bottom-r{
  position: relative;
  text-align: right;
}
.container-block-bottom-r .content-1{
  font-size: 16px;
}
.container-block-bottom-r span{
  display: inline-block;
  padding-right: 8px;
  padding-left: 3px;
}
.container-ab{
  touch-action: pan-y;
  user-select: none;
  -webkit-user-drag: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  position: relative;
  overflow: hidden;
  border-top: none;
  z-index: 8;
  -webkit-transition: height .3s;
  transition: height .3s;
}
.content-1{
  padding:0;
  position: absolute;
  top: 0;
  z-index: 99;
  float: left;
  width: 100%;
  visibility: hidden;
  -webkit-transition: -webkit-transform .3s;
  transition: transform .3s;
  -webkit-transform: translateX(-100%);
  -ms-transform: translateX(-100%);
  transform: translateX(-100%);
}
.container-ab .contentActive1{
  position: relative;
  z-index: 100;
  visibility: visible;
  -webkit-transform: translateX(0);
  -ms-transform: translateX(0);
  transform: translateX(0);
}
.container-ab .contentActive2{
  position: relative;
  z-index: 100;
  visibility: visible;
  -webkit-transform: translateX(0);
  -ms-transform: translateX(0);
  transform: translateX(0);
}
.container-ab .contentActive3{
  position: relative;
  z-index: 100;
  visibility: visible;
  -webkit-transform: translateX(0);
  -ms-transform: translateX(0);
  transform: translateX(0);
}
.container-ab .tran{
  transform: translateX(100%)
}
.container-ab .tran2{
  transform: translateX(100%)
}
</style>