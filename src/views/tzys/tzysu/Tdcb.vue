<template>
<div class="box">
    <TzysuMainTabBar/>
    <div class="title">三明市各县（市、区）投资要素清单</div>
    <div class="img-box">
        <img class="img" src="../../../assets/img/1.724b8052.png">
        <img class="img" src="../../../assets/img/2.81cd3933.png">
        <img class="img" src="../../../assets/img/3.f68a5c66.png">
        <img class="img" src="../../../assets/img/4.181364fb.png">
        <img class="img" src="../../../assets/img/5.b0606081.png">
        <img class="img" src="../../../assets/img/6.c303b2ed.png">
        <img class="img" src="../../../assets/img/7.cbd369c7.png">
        <img class="img" src="../../../assets/img/8.d1cbe626.png">
        <img class="img" src="../../../assets/img/9.6678b6bd.png">
        <img class="img" src="../../../assets/img/10.447fdd69.png">
        <img class="img" src="../../../assets/img/11.c3975d5e.png">
    </div>
</div>
</template>

<script>
import TzysuMainTabBar from '../tzysu/TzysuMainTabBar.vue'

  export default {
    name: 'Tdcb',
    components: {
        TzysuMainTabBar
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

.box {
    padding: .4rem;
}    

.title {
    font-size: .4rem;
    font-weight: 700;
    color: #0d51a6;
    line-height: .64rem;
    margin-bottom: .24rem;
}

.img {
    width: 9.14667rem;
}
</style>