<template>
<div class="xyqk-box">
  <router-link to='/syq' style="text-decoration:none">
  <div class="xyqk-box-box">
    <div><img class="xyqk-img" src="../../../assets/img/syq.png"></div>
    <div class="xyqk-title">三元区</div>  
  </div>
</router-link>
<router-link to='/sxq' style="text-decoration:none">
  <div class="xyqk-box-box">
    <div><img class="xyqk-img" src="../../../assets/img/sxq.png"></div>
    <div class="xyqk-title">沙县区</div>
</div>
</router-link>
<router-link to='/yas' style="text-decoration:none">
  <div class="xyqk-box-box">
    <div><img class="xyqk-img" src="../../../assets/img/yas.png"></div>
    <div class="xyqk-title">永安市</div>
</div>
</router-link>
<router-link to='/mxx' style="text-decoration:none">
  <div class="xyqk-box-box">
    <div><img class="xyqk-img" src="../../../assets/img/mxx.png"></div>
    <div class="xyqk-title">明溪县</div>
</div>
</router-link>
<router-link to='/qlx' style="text-decoration:none">
  <div class="xyqk-box-box">
    <div><img class="xyqk-img" src="../../../assets/img/qlx.png"></div>
    <div class="xyqk-title">清流县</div>
</div>
</router-link>
<router-link to='/nhx' style="text-decoration:none">
  <div class="xyqk-box-box">
    <div><img class="xyqk-img" src="../../../assets/img/nhx.png"></div>
    <div class="xyqk-title">宁化县</div>
</div>
</router-link>
<router-link to='/jnx' style="text-decoration:none">
  <div class="xyqk-box-box">
    <div><img class="xyqk-img" src="../../../assets/img/jnx.png"></div>
    <div class="xyqk-title">建宁县</div>
</div>
</router-link>
<router-link to='/tnx' style="text-decoration:none">
  <div class="xyqk-box-box">
    <div><img class="xyqk-img" src="../../../assets/img/tnx.png"></div>
    <div class="xyqk-title">泰宁县</div>
</div>
</router-link>
<router-link to='/jlx' style="text-decoration:none">
  <div class="xyqk-box-box">
    <div><img class="xyqk-img" src="../../../assets/img/jlx.png"></div>
    <div class="xyqk-title">将乐县</div>
</div>
</router-link>
<router-link to='/yxx' style="text-decoration:none">
  <div class="xyqk-box-box">
    <div><img class="xyqk-img" src="../../../assets/img/yxx.png"></div>
    <div class="xyqk-title">尤溪县</div>
</div>
</router-link>
<router-link to='/dtx' style="text-decoration:none">
  <div class="xyqk-box-box">
    <div><img class="xyqk-img" src="../../../assets/img/dtx.png"></div>
    <div class="xyqk-title">大田县</div>
</div>
</router-link>
</div>
</template>

<script>
  export default {
    name: 'Xyqk'
  }
</script>

<style scoped>
* {
    box-sizing: border-box;
}

.xyqk-box {
    padding: .42667rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    flex-wrap: wrap;
}

.xyqk-box-box {
    width: calc(50vw - .49334rem);
    padding: 0;
    box-shadow: 0 0.05333rem 0.08rem 0 rgba(130,153,187,.2);
    border-radius: .13333rem;
    margin: .21333rem 0;
}

.xyqk-img {
    width: 100%;
}

.xyqk-title {
    height: 1.14667rem;
    width: 100%;
    background-image: url(../../../assets/img/imgname.png);
    background-size: 3.73333rem;
    background-repeat: no-repeat;
    background-position: 50%;
    font-size: .42667rem;
    font-weight: 500;
    color: #010e42;
    line-height: 1.12rem;
    text-align: center;
}
</style>