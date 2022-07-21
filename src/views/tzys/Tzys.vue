<template>
<div class="tzys-box">
  <div class="zcys-title-top">政策优势</div>
  <div class="zcys-box">
    <div class="container">
        <img class="zcys-img" src="../../assets/img/zcys1.png">
          <div class="zcys-title"> 国务院关于新时代支持革命老区振兴发展的意见 </div>
    </div>
    <div class="container">
        <img class="zcys-img" src="../../assets/img/zcys2.png">
          <div class="zcys-title"> 国务院关于同意建设赣州、闽西革命老区 高质量发展示范区的批复 </div>
    </div>
    <div class="container">
        <img class="zcys-img" src="../../assets/img/zcys3.png">
          <div class="zcys-title"> 国家发展改革委关于闽西革命老区高质量发展示范区建设方案 </div>
    </div>  
    <div class="container">
        <img class="zcys-img" src="../../assets/img/zcys4.png">
          <div class="zcys-title"> 国家发展改革委关于革命老区重点城市对口合作工作方案 </div>
    </div>  
        <img class="zcys-img-bottom" src="../../assets/img/zcys5.png"> 
  </div>
  <div class="rwys-title-top">人文优势</div>
  <div class="rwys-box">
    <div class="rwys-bk">
      <img class="rwys-img" src="../../assets/img/kjwh.png">
      <br/>客家文化
    </div>
    <div class="rwys-bk">
      <img class="rwys-img" src="../../assets/img/zzwh.png">
      <br/>朱子文化
    </div>
    <div class="rwys-bk">
      <img class="rwys-img" src="../../assets/img/sxxxwh.png">
      <br/>沙县小吃文化
    </div>
  </div>
  <div class="rwys-title-top">区位优势</div>
  <div class="qwys-box">
    <img class="qwys-img" src="../../assets/img/qwys.png">
    <div class="qwys-title"> 三明市地处闽西和闽西北，东依福州，西毗江西省，南邻泉州市、北傍南平市，是东南沿海与中西部地区的重要连接带，是海西纵深推进东出西进和南联北... </div>
    <div class="qwys-ckgd">查看更多</div> 
  </div>
</div>
</template>

<script>
  export default {
    name: 'Tzys'
  }
</script>

<style scoped>

* {
    box-sizing: border-box;
}

.container {
  position: relative;
}

.tzys-box {
    margin-top: 0.7rem;
}   

.zcys-title-top {
    font-size: .4rem;
    font-weight: 700;
    color: #333;
    margin-left: 0.39rem;
    margin-bottom: 0.4rem;
}

.zcys-img {
    height: 3.22667rem;
    width: calc(100vw - .8rem);
    text-align: center;
    margin-top: 0.1rem;
    margin-left: 0.37rem;
}

.zcys-img-bottom {
    width: calc(100vw - .8rem);
    text-align: center;
    margin-top: 0.1rem;
    margin-left: 0.37rem;
}

.zcys-title {
    text-align: center;
    padding: 0 .50667rem;
    font-size: 0.43rem;
    font-weight: 550;
    color: #fff;
    position: absolute;
    top: 35%;
}

.rwys-title-top {
    font-size: .4rem;
    font-weight: 700;
    color: #333;
    line-height: 1.33333rem;
    margin-left: 0.37rem;
}

.rwys-box {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    margin-left: 0.37rem;
    margin-right: 0.37rem;
}

.rwys-img {
    width: 1.22667rem;
    height: 1.22667rem;
}

.rwys-bk {
    width: 2.90667rem;
    height: 2.96rem;
    background: #fff;
    box-shadow: 0 0.02667rem 0.10667rem 0 hsla(0,0%,60%,.3);
    border-radius: .08rem;
    font-size: .34667rem;
    font-weight: 500;
    color: #333;
    line-height: .61333rem;
    text-align: center;
    padding: .45333rem 0;
}

.qwys-box {
    width: 100%;
    background: #fff;
    box-shadow: 0 0.02667rem 0.10667rem 0 hsla(0,0%,60%,.3);
    border-radius: .08rem;
}

.qwys-img {
    width: calc(100vw - .8rem);
    margin-left: 0.37rem;
}

.qwys-title {
    font-size: .42667rem;
    font-weight: 400;
    color: #333;
    line-height: .72rem;
    padding: .37333rem .26667rem;
}

.qwys-ckgd {
    width: 2.4rem;
    height: .85333rem;
    border: .02667rem solid #0d51a6;
    border-radius: .42667rem;
    text-align: center;
    font-size: .34667rem;
    color: #0d51a6;
    line-height: .85333rem;
    margin: 0 0 0 .26667rem;
}
</style>