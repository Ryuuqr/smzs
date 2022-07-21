<template>
    <div class="box">
        <div class="top">数字信息产业</div>
        <div class="box-box">
        <div class="text-box">
            <div class="title-box"><div class="title"><img class="title-img" src="../../../assets/img/zsfx.png">招商反向</div></div>
            <div class="text">强化数字经济发展政策支撑，设立三明市数字经济产业投资基金；用好京闽科技协作、三明中关村科技园平台优势，打造创新型高新技术产业园区；鼓励三明学院、机科院海西分院等高校、科研院所与数字信息头部企业合作，培育一批大数据、区块链、物联网等信息化领域本土人才。</div>
        </div>
        <div class="text-box">
            <div class="title-box"><div class="title"><img class="title-img" src="../../../assets/img/zdqy.png">重点企业</div></div>
            <div class="text"> 培育壮大三明新基建、信息产业公司、金瑞高科、瑞奥麦特等龙头企业以及中关村“一区三园”等平台，加快实施中国移动三明（沙县）智慧城市数字中心建设、轨道交通智能化高科技产业园等项目。 </div>
        </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Zdpy'
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
