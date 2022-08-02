<template>
<div class="yxsm-box">
  <router-link to='/smgk'>
    <div class="container">
    <img class="yxsm-img" src="../../assets/img/smgk.png">
      <div class="yxsm-title-bk">
        <div class="yxsm-img-title">三明概况</div>
    </div>
  </div>
</router-link>
<router-link to='/csztgh'>
  <div class="container">
  <img class="yxsm-img" src="../../assets/img/csztgh.jpeg">
    <div class="yxsm-title-bk">
      <div class="yxsm-img-title">城市总体规划</div>
  </div>
  </div>
</router-link>
<router-link to='/xyqk'>
  <div class="container">
  <img class="yxsm-img" src="../../assets/img/xyqk.jpeg">
    <div class="yxsm-title-bk">
      <div class="yxsm-img-title">县域情况</div>
    </div>
  </div>
</router-link>
<router-link to='/yqqg'>
  <div class="container">
    <img class="yxsm-img" src="../../assets/img/yqqk.jpeg">
    <div class="yxsm-title-bk">
      <div class="yxsm-img-title">园区情况</div>
  </div>
  </div>
</router-link>
</div>
</template>

<script>
  export default {
    name: 'Yxsm',
  }
</script>

<style scoped>

* {
  box-sizing: border-box;
}

div {
    display: block;
}

.container {
  position: relative;
}

.yxsm-box {
  padding: 0.4rem 0;
  background: #f6f7fa;
  line-height: 0.3rem;
  margin-top: -0.4rem;
}

.yxsm-img {
  
  margin-top: 0.4rem;
  width: 100%;
  height: 4.13333rem;
  border-radius: .16rem;
}

.yxsm-img-title {
  position: absolute;
  top: 5%;
  right: 1.9%;
  width: 96%;
  text-align: center;
  background: hsla(0,0%,100%,.82);
  text-align: center;
  font-size: .58667rem;
  font-weight: 700;
  color: #0d51a6;
  height: 91%;
  line-height: 200%;
}

.yxsm-title-bk {
  position: absolute;
    left: calc(50% - 2.02667rem);
    top: calc(50% - .72rem);
    width: 4.05333rem;
    height: 1.5rem;
    border: .05333rem solid #fff;
}
</style>