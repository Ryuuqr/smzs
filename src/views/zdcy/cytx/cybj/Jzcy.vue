<template>
    <div class="box">
        <div class="router">
        </div>
        <div class="cyqk-box">
            <div class="title-box">
            <div class="bottom-title"></div>
            <div class="title">产业情况</div>
            </div>
            <div class="text">加大辖区内龙头企业扶持力度，支持企业积极创建省、市优质工程奖，推动市内企业与大型央企围绕产业链建立稳定的配套协作关系，鼓励建筑业优质企业带动设计、咨询、施工、监理等关联企业共同拓展市场，实现我市建筑业品牌化、规模化、专业化、高端化发展。</div>
        </div>
        <div class="cyqk-box">
            <div class="title-box">
            <div class="bottom-title"></div>
            <div class="title">重点企业</div>
            </div>
            <div class="text"> 1、福建一建集团有限公司   
                <div> 
                    2、福建金鼎建筑发展有限公司 </div>                
            </div>
        </div>
    </div>
    </template>
    
    <script>
      export default {
        name: 'Jzcy'
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