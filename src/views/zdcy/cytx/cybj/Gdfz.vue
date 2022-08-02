<template>
    <div class="box">
        <TwoMianTabBar/>
        <div class="cyqk-box">
            <div class="title-box">
            <div class="bottom-title"></div>
            <div class="title">产业情况</div>
            </div>
            <div class="text">大力发展自主品牌，鼓励辖内龙头参与国际标准、国家标准、行业标准制定；推进“机器换工”，鼓励纺织企业建设5G网络配套设施；发展功能性、着色型、再生型锦纶长丝，开发生产多品种的高模高强维纶，加快研发和生产高端面料，打造全国重要的高端纺织基地。</div>
        </div>
        <div class="cyqk-box">
            <div class="title-box">
            <div class="bottom-title"></div>
            <div class="title">重点企业</div>
            </div>
            <div class="text">    1、福建顺源纺织有限公司  
                <div>  
                    2、福建鑫森合纤科技有限公司 </div>
                <div> 
                    3、永安市宝华林实业发展有限公司 </div>
                <div>  
                    4、福建英汉凯丰纺织染整有限公司 </div>
                <div>  
                    5、福建省永安市金德纺织实业有限公司 </div>
                <div> 
                    6、永安市恒晖布业有限公司 </div>
            </div>
        </div>
    </div>
    </template>
    
    <script>
     import TwoMianTabBar from '../cybj/TwoMainTabBar.vue'

export default {
  name: 'Gdfz',
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