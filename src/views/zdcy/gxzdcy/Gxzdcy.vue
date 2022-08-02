<template>
<div class="box">
    <div class="img-box">
        <router-link to='/gxzdcysyq' style="text-decoration:none" class="text"><img class="img" src="../../../assets/img/zdcysyq.png"><div class="name">三元区</div></router-link>
        <router-link to='/gxzdcyyas' style="text-decoration:none" class="text"><img class="img" src="../../../assets/img/zdcyyas.png"><div class="name">永安市</div></router-link>
        <router-link to='/gxzdcysxq' style="text-decoration:none" class="text"><img class="img" src="../../../assets/img/zdcysxq.png"><div class="name">沙县区</div></router-link>
        <router-link to='/gxzdcymxx' style="text-decoration:none" class="text"><img class="img" src="../../../assets/img/zdcymxx.png"><div class="name">明溪县</div></router-link>
    </div>
    <div class="img-box">
        <router-link to='/gxzdcyqlx' style="text-decoration:none" class="text"><img class="img" src="../../../assets/img/zdcyqlx.png"><div class="name">清流县</div></router-link>
        <router-link to='/gxzdcyjnx' style="text-decoration:none" class="text"><img class="img" src="../../../assets/img/zdcyjnx.png"><div class="name">建宁县</div></router-link>
        <router-link to='/gxzdcynhx' style="text-decoration:none" class="text"><img class="img" src="../../../assets/img/zdcynhx.png"><div class="name">宁化县</div></router-link>
        <router-link to='/gxzdcytnx' style="text-decoration:none" class="text"><img class="img" src="../../../assets/img/zdcytnx.png"><div class="name">泰宁县</div></router-link>
    </div>
    <div class="img-box">
        <router-link to='/gxzdcyjlx' style="text-decoration:none" class="text"><img class="img" src="../../../assets/img/zdcyjlx.png"><div class="name">将乐县</div></router-link>
        <router-link to='/gxzdcyyxx' style="text-decoration:none" class="text"><img class="img" src="../../../assets/img/zdcyyxx.png"><div class="name">尤溪县</div></router-link>
        <router-link to='/gxzdcydtx' style="text-decoration:none" class="text"><img class="img" src="../../../assets/img/zdcydtx.png"><div class="name">大田县</div></router-link>
        <div class="text"><img class="img" src="../../../assets/img/baise.jpg"></div>
    </div>
</div>
</template>

<script>
  export default {
    name: 'Gxzdcy',
  }
</script>

<style scoped>
div {
    display: block;
}

* {
    box-sizing: border-box;
}

.box {
    padding: .42667rem;
}

.img-box {
    column-count: 2;
}

.img {
    width: inherit;
    border-radius: .21333rem;
}

.text {
    position: relative;
    width: calc(50vw - .54666rem);
    margin-bottom: .26667rem;
}

.name {
    position: absolute;
    width: 2.66667rem;
    height: .77333rem;
    background: #fff;
    border-radius: .08rem;
    line-height: .77333rem;
    text-align: center;
    bottom: .45333rem;
    left: calc(50% - 1.33334rem);
    font-size: .42667rem;
    font-weight: 500;
    color: #010e42;
}

</style>
