<template>
    <div class="box">
        <TwoMianTabBar/>
        <div class="cyqk-box">
            <div class="title-box">
            <div class="bottom-title"></div>
            <div class="title">产业情况</div>
            </div>
            <div class="text">强化数字经济发展政策支撑，设立三明市数字经济产业投资基金；用好京闽科技协作、三明中关村科技园平台优势，打造创新型高新技术产业园区；鼓励三明学院、机科院海西分院等高校、科研院所与数字信息头部企业合作，培育一批大数据、区块链、物联网等信息化领域本土人才。</div>
        </div>
        <div class="cyqk-box">
            <div class="title-box">
            <div class="bottom-title"></div>
            <div class="title">重点企业</div>
            </div>
            <div class="text"> 1、三明新基建产业发展有限公司  
                <div>  
                    2、三明市信息产业发展有限公司  </div>
                <div> 
                    3、福建省金瑞高科有限公司 </div>
                <div> 
                    4、福建省瑞奥麦特轻金属有限公司 </div>
            </div>
        </div>
    </div>
    </template>
    
    <script>
      import TwoMianTabBar from '../cybj/TwoMainTabBar.vue'

export default {
  name: 'Szxx',
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