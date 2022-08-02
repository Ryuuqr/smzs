<template>
<div class="box">
    <MainTabBar class="bg"></MainTabBar>
    <div class="top">钢铁</div>
    <div class="box-box">
    <div class="text-box">
        <div class="title-box"><div class="title"><img class="title-img" src="../../../assets/img/zsfx.png">招商反向</div></div>
        <div class="text">重点围绕“产业基础夯实”、“钢材深加工”、“优钢生产”、“特钢研发”四个方向，上游重点发展与钢铁密切相关的废钢回收、耐火材料等产业，中游重点开拓挖掘市场有竞争力的优特钢产品、特钢品种，下游继续延伸机械装备制造、模具加工、汽车零部件等产业链条，探索工贸分离带动一批中小企业发展，打造千亿产业集群。</div>
    </div>
    <div class="text-box">
        <div class="title-box"><div class="title"><img class="title-img" src="../../../assets/img/zdqy.png">重点企业</div></div>
        <div class="text"> 重点培育支持三钢、小蕉实业等规上钢铁企业，依托相关龙头企业，加快实施三钢产能置换高炉技改、小蕉铸造用高炉改造等重点产业项目。 </div>
    </div>
    </div>
    <div class="top">装备制造</div>
    <div class="box-box">
    <div class="text-box">
        <div class="title-box"><div class="title"><img class="title-img" src="../../../assets/img/zsfx.png">招商反向</div></div>
        <div class="text">大力发展智能装备制造业，加快研发生产超精密装备、高端数控机床、汽车关键零部件加工成套设备以及汽车制造智能生产线，对接引进装备制造和装配式建筑产业链条，支持品牌整机制造企业拓展市场、扩规上量，带动形成上下游配套产业链，集聚一批高端零部件细分领域“专精特新”企业，打造绿色高端铸锻产业基地。</div>
    </div>
    <div class="text-box">
        <div class="title-box"><div class="title"><img class="title-img" src="../../../assets/img/zdqy.png">重点企业</div></div>
        <div class="text"> 重点培育海西重汽、中机院海西分院、天华智能、厦工三重、开诚机械、毅君铸造等龙头企业，推进中机院海西分院高端装备产业园项目建设。 </div>
    </div>
    </div>
  </div>

</template>

<script>
import MainTabBar from '../cytx/MainTabBar.vue'

  export default {
    name: 'Dzdcy',
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

.bg {
        background: #fff;
        margin-top: -0.4rem;
}

.box {
    margin-top: .4rem;
    overflow: scroll;
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
    padding: 0 .4rem;
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
