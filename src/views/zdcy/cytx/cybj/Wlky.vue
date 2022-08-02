<template>
    <div class="box">
        <TwoMianTabBar/>
        <div class="cyqk-box">
            <div class="title-box">
            <div class="bottom-title"></div>
            <div class="title">产业情况</div>
            </div>
            <div class="text">拥有泰宁世界地质公园、“中国丹霞”世界自然遗产和尤溪联合梯田农业文化遗产3个世界级品牌和近200个国家级旅游资源品牌，建成全国森林旅游示范县2个、森林养生国家重点建设基地1个，是全国森林康养基地建设试点市、国家级医养结合试点城市。</div>
        </div>
        <div class="cyqk-box">
            <div class="title-box">
            <div class="bottom-title"></div>
            <div class="title">重点企业</div>
            </div>
            <div class="text">  1、三明市文化旅游建设发展集团有限公司 
                <div> 
                    2、福建泰宁旅游集团投资有限公司 </div>
            </div>
        </div>
    </div>
    </template>
    
    <script>
      import TwoMianTabBar from '../cybj/TwoMainTabBar.vue'

export default {
  name: 'Wlky',
  components: {
          TwoMianTabBar
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
    
    .text {
        font-size: .42667rem;
        color: #101a33;
        line-height: .77333rem;
        margin: .48rem 0;
    }
    </style>