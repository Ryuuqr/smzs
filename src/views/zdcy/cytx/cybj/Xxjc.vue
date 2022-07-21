<template>
    <div class="box">
        <div class="router">
        </div>
        <div class="cyqk-box">
            <div class="title-box">
            <div class="bottom-title"></div>
            <div class="title">产业情况</div>
            </div>
            <div class="text">（1）水泥：拓展商品混凝土、水泥预制件一体化、装配式建筑产业，引进高铁相硅酸盐水泥制备技术及添加剂研发技术，填补海工水泥等特种水泥产品空白，推动水泥产品多元化、高端化发展。
                （2）墙体材料：发展外墙整体保温装饰材料、建筑节能保温隔热材料以及新型防水材料，抢占高端墙材料市场。
                （3）石材：在加大整治整合的基础上，策划实施一批树脂基人造石材、异形石材等领域相关项目。</div>
        </div>
        <div class="cyqk-box">
            <div class="title-box">
            <div class="bottom-title"></div>
            <div class="title">重点企业</div>
            </div>
            <div class="text">   1、福建金牛水泥（集团）有限公司  
                <div>  
                    2、福建三明南方水泥有限公司 </div>
                <div>  
                    3、大田红狮水泥有限公司 </div>
                <div> 
                    4、福建建福水泥有限公司 </div>
                <div> 
                    5、福建省谋成水泥发展有限公司 </div>
                <div> 
                    6、福建省永安万年水泥有限公司 </div>
            </div>
        </div>
    </div>
    </template>
    
    <script>
      export default {
        name: 'Xxjc'
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