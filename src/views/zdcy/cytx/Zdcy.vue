<template>
    <div class="box">
        <MainTabBar/>
        <div class="top">水泥</div>
        <div class="box-box">
        <div class="text-box">
            <div class="title-box"><div class="title"><img class="title-img" src="../../../assets/img/zsfx.png">招商反向</div></div>
            <div class="text">拓展商品混凝土、水泥预制件一体化、装配式建筑产业，引进高铁相硅酸盐水泥制备技术及添加剂研发技术，填补海工水泥等特种水泥产品空白，推动水泥产品多元化、高端化发展。</div>
        </div>
        </div>
        <div class="top">墙体材料</div>
        <div class="box-box">
        <div class="text-box">
            <div class="title-box"><div class="title"><img class="title-img" src="../../../assets/img/zsfx.png">招商反向</div></div>
            <div class="text">发展外墙整体保温装饰材料、建筑节能保温隔热材料以及新型防水材料，抢占高端墙材料市场。</div>
        </div>
        </div>
        <div class="top">石材</div>
    <div class="box-box">
    <div class="text-box">
        <div class="title-box"><div class="title"><img class="title-img" src="../../../assets/img/zsfx.png">招商反向</div></div>
        <div class="text">在加大整治整合的基础上，策划实施一批树脂基人造石材、异形石材等领域相关项目。</div>
    </div>
    <div class="text-box">
        <div class="title-box"><div class="title"><img class="title-img" src="../../../assets/img/zdqy.png">重点企业</div></div>
        <div class="text">  以金牛水泥、南方水泥、红狮水泥等企业为龙头，加快推进尤溪绿色新型建材产业园和华润水泥永安绿色高新建材产业园等项目。 </div>
    </div>
    </div>
        
        </div>
</template>

<script>
  import MainTabBar from '../cytx/MainTabBar.vue'

  export default {
    name: 'Zdcy',
    components: {
      MainTabBar,
    },
  }
</script>

<style scoped>
* {
    box-sizing: border-box;
}

div {
    display: block;
}

.box {
    margin-top: .4rem;
    height: calc(100vh - 2.05333rem);
    overflow: scroll;
    padding: 0 .4rem;
}

.top {
    height: 1.2rem;
    background-image: url(../../../assets/img/Dzdcytop.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50%;
    line-height: 1.2rem;
    text-align: center;
    font-size: .48rem;
    font-weight: 700;
    color: #0d51a6;
    margin: .4rem 0;
}

.text-box {
    font-size: .4rem;
    color: #101a33;
    line-height: .74667rem;
    margin-bottom: -0.4rem;
}

.title-box {
    font-weight: 700;
    color: #0d51a6;
    line-height: .74667rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}

.title {
    font-size: .42667rem;
    font-weight: 700;
    color: #0d51a6;
    line-height: .74667rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}

.text {
    font-size: .4rem;
    color: #101a33;
    line-height: .74667rem;
    margin-bottom: .4rem;
}

.title-img {
    height: .53333rem;
    width: .53333rem;
    margin: 0 .13333rem 0 0;
}

.box-box {
    margin-bottom: 0.8rem;
}   
</style>
