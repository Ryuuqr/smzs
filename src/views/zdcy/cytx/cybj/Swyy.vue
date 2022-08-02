<template>
    <div class="box">
        <TwoMianTabBar/>
        <div class="cyqk-box">
            <div class="title-box">
            <div class="bottom-title"></div>
            <div class="title">产业情况</div>
            </div>
            <div class="text">用好用足我市药用植物资源、特色药品优势，支持企业开发生产高端生物医药产品，打造天然药物提取、特色中成药等产业类群；争取痛血康胶囊、蕲蛇酶注射液等全国独家药品进入国家医保目录，打造国内具有特色的抗肿瘤系列产品生产基地；开发食用药膳等特色产品，抓紧抢占中药材深加工市场。</div>
        </div>
        <div class="cyqk-box">
            <div class="title-box">
            <div class="bottom-title"></div>
            <div class="title">重点企业</div>
            </div>
            <div class="text"> 1、福建汇天生物药业有限公司   
                <div> 
                    2、福建南方制药股份有限公司 </div>
                <div> 
                    3、福建海西联合药业有限公司 </div>
                <div> 
                    4、福建博诺安科医药科技有限公司 </div>
                <div>  
                    5、福建紫杉园生物有限公司 </div>
                <div>  
                    6、三明旻和医药科技有限公司 </div>
                <div> 
                    7、福建瑞博奥科技有限公司 </div>
                <div> 
                    8、福建福瑞明德药业有限公司 </div>
            </div>
        </div>
    </div>
    </template>
    
    <script>
      import TwoMianTabBar from '../cybj/TwoMainTabBar.vue'

export default {
  name: 'Swyy',
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