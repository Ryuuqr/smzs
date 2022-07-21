<template>
    <div class="box">
        <div class="router">
        </div>
        <div class="cyqk-box">
            <div class="title-box">
            <div class="bottom-title"></div>
            <div class="title">产业情况</div>
            </div>
            <div class="text">三明素有“中国绿色生态宝库”、南方“果盘”、“闽茶原生带”、福建“粮袋子”等称号，三明的粮食、水果、蔬菜、食用菌、蛋鸡、烟草、苗木花卉等产量居全省前列，拥有1713种药用植物、36个国家地理标志保护产品和近300种地域特色品类的农林产品。</div>
        </div>
        <div class="cyqk-box">
            <div class="title-box">
            <div class="bottom-title"></div>
            <div class="title">重点企业</div>
            </div>
            <div class="text">  1、福建明一生态营养品有限公司 
                <div> 
                    2、将乐温氏家禽有限公司 </div>
                <div> 
                    3、福建大田大方广茶业有限公司 </div>
                <div> 
                    4、三明河龙贡米米业股份有限公司 </div>
                <div> 
                    5、福建省华达茶业有限公司 </div>
                <div> 
                    6、福建满天鑫农业科技有限公司 </div>
            </div>
        </div>
    </div>
    </template>
    
    <script>
      export default {
        name: 'Gtyzb'
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