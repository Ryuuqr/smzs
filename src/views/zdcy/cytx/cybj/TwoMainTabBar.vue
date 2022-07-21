<template>
<div class="box">
  <div class="cyqk-box">
  <div class="bottom-title"></div>
  <div class="title">产业布局</div>
    <two-tab-bar class="text">
      <div class="bj">
        <two-tab-bar-item class="bk" path="gtyzb">
        <div class="bk-text" slot="item-text">钢铁与装备制选</div>
        </two-tab-bar-item>
        <two-tab-bar-item class="bk" path="/xcl">
        <div class="bk-text" slot="item-text">新材料</div>
        </two-tab-bar-item>
        <two-tab-bar-item class="bk" path="/wlky">
        <div class="bk-text" slot="item-text">文旅康养</div>
        </two-tab-bar-item>  
        <two-tab-bar-item class="bk" path="/tsxdny">
        <div class="bk-text" slot="item-text">特色现代农业</div>
        </two-tab-bar-item>
        <two-tab-bar-item class="bk" path="/xxjc">
        <div class="bk-text" slot="item-text">新型建材</div>
        </two-tab-bar-item>
        <two-tab-bar-item class="bk" path="/gdfz">
        <div class="bk-text" slot="item-text">高端纺织</div>
        </two-tab-bar-item>         
        <two-tab-bar-item class="bk" path="/xdzy">
        <div class="bk-text" slot="item-text">现代种业</div>
        </two-tab-bar-item> 
        <two-tab-bar-item class="bk" path="/szxx">
        <div class="bk-text" slot="item-text">数字信息</div>
        </two-tab-bar-item> 
        <two-tab-bar-item class="bk" path="/swyy">
        <div class="bk-text" slot="item-text">生物医药</div>
        </two-tab-bar-item> 
        <two-tab-bar-item class="bk" path="/jzcy">
        <div class="bk-text" slot="item-text">建筑产业</div>
        </two-tab-bar-item>
      </div>
      </two-tab-bar>
    </div>
</div>
</template>

<script>
  import TwoTabBar from '../cybj/tabbar/TwoTabBar.vue'
  import TwoTabBarItem from '../cybj/tabbar/TwoTabBarItem.vue'
  import Gtyzb from '../cybj/Gtyzb.vue'
  
  export default {
    name: 'TwoMainTabBar',
    components: {
      TwoTabBar,
      TwoTabBarItem,
      Gtyzb
    }
  }
</script>

<style scoped>
* {
    box-sizing: border-box;
}

div {
    display: block;
}

.cyqk-box {
    margin: .61333rem .42667rem;
    border: .02667rem solid #0d51a6;
    background: -webkit-linear-gradient(bottom,#f1f5fe,#fff);
    background: linear-gradient(0deg,#f1f5fe,#fff);
    border-radius: .13333rem;
    padding: 0 .29333rem;
}

.bottom-title {
    width: 4.16rem;
    height: .98667rem;
    background: #d5e9fe;
    position: relative;
    top: -.02667rem;
}

.title {
    margin-top: -1rem;
    position: relative;
    left: -.32rem;
    top: -.24rem;
    background: linear-gradient(90deg,#4f7df9,hsla(0,0%,100%,0));
    border-radius: .13333rem 0 0 0;
    height: inherit;
    width: 50%;
    padding-left: .45333rem;
    font-size: .42667rem;
    font-weight: 700;
    color: #fff;
    line-height: .98667rem;
}

.bk {
  width: 2.66667rem;
    height: .77333rem;
    background: #f0f3fa;
    border-radius: .08rem;
    text-align: center;
    margin: .16rem 0;
} 

.bj {
  display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: .26667rem 0;
}

.bk-text {
  width: 2.66667rem;
    height: .67333rem;
    background: #f0f3fa;
    border-radius: .08rem;
    font-size: .34667rem;
    line-height: .56333rem;
    text-align: center;
    margin: .16rem 0;
}
</style>