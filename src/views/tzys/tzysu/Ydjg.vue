<template>
    <div class="box">
        <TzysuMainTabBar/>
        <div class="title">三明市各县（市、区）投资要素清单</div>
        <div class="img-box">
            <img class="img" src="../../../assets/img/ydjg.png">
        </div>
    </div>
    </template>
    
    <script>
      import TzysuMainTabBar from '../tzysu/TzysuMainTabBar.vue'

export default {
  name: 'Ydjg',
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