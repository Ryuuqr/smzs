<template>
<div class="box">
    <div class="ysp-box">
        <div class="title">云视频</div>
        <div class="text"> 通过视频连线形式与项目相关人员进行在线交流洽谈合作，推动项目签约落地。如需使用云视频功能请先与我们联系获取会议地址与会议号。 </div>
        <div class="bottom">0598-8234096</div>
    </div>
    <div class="yqy-box">
        <div class="title">云签约</div>
        <div class="text"> 云签约提供便捷电子签署服务，推动签约手续网上办、线上办，助力招商引资工作建立可信、有效、安全、可查、可验的数字化基础。如需使用云视频功能，请先与我们联系。 </div>
        <div class="bottom">0598-8234096</div>
    </div>
</div>
</template>

<script>
  export default {
    name: 'Ydzs'
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
    padding: .4rem 0 4.8rem 0;
    height: 100vh;
    background: #f6f7fa;
}

.ysp-box {
    background-image: url(../assets/img/ysp.png);
    margin: .18667rem .42667rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    width: calc(100vw - .85333rem);
    height: calc(62.68222vw - .53489rem);
    padding: 1.41333rem .32rem 0 .32rem;
    position: relative;
    border-radius: .21333rem;
}

.yqy-box {
    background-image: url(../assets/img/yqy.png);
    margin: .18667rem .42667rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    width: calc(100vw - .85333rem);
    height: calc(62.68222vw - .53489rem);
    padding: 1.41333rem .32rem 0 .32rem;
    position: relative;
    border-radius: .21333rem;
}

.title {
    font-size: .42667rem;
    font-weight: 700;
    color: #fff;
    line-height: 1.01333rem;
    text-align: center;
}

.text {
    font-size: .4rem;
    color: #fff;
    line-height: .53333rem;
}

.bottom {
    position: absolute;
    bottom: .74667rem;
    font-size: .42667rem;
    font-weight: 700;
    color: #fff;
    line-height: 1;
    text-align: center;
    width: calc(100% - .64rem);
}
</style>
