<template>
<div class="box">
    <TwoMianTabBar/>
    <div class="cyqk-box">
        <div class="title-box">
        <div class="bottom-title"></div>
        <div class="title">产业情况</div>
        </div>
        <div class="text">在钢铁产业方面，这是三明的传统优势产业。年产钢能力达到1200多万吨，已经形成“粗钢生产——钢材粗加工——钢材深加工——合金材料应用”的产业链。在装备制造方面，形成汽车及零部件、工程机械、橡塑机械等9个特色产业以及埔岭汽车园、泉三高端装备产业园、机科总院海西高端装备产业园。</div>
    </div>
    <div class="cyqk-box">
        <div class="title-box">
        <div class="bottom-title"></div>
        <div class="title">重点企业</div>
        </div>
        <div class="text"> 1、福建省三钢（集团）有限责任公司
            <div>2、福建三钢小蕉实业发展有限公司 </div>
            <div>3、福建省明光新型材料有限公司 </div>
            <div>4、中国重汽集团福建海西汽车有限公司 </div>
            <div>5、福建天华智能装备有限公司 </div>
            <div>6、厦工（三明）重型机器有限公司 </div>
            <div>7、福建省开诚机械有限公司 </div>
            <div> 
                8、三明市毅君机械铸造有限公司 </div>
        </div>
    </div>
</div>
</template>


<script>
import TwoMianTabBar from '../cybj/TwoMainTabBar.vue'

  export default {
    name: 'Gtyzb',
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
