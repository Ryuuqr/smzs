<template>
  
<div id="home">
  <div class="top-box"><img class="top-img" src="../assets/img/sp.jpg"></div>
  <div class="zsdt">
    <div class="zsdt-box"><img class="zsdt-box" src="../assets/img/zsdt.png"></div>
    <div class="zsdt-title">中国金茂控股集团有限公司来明考...</div>
  </div>
  <div class="xtb-box">
    <router-link to='/yxsm'><div><img class="xtb-img" src="../assets/img/sm.png"></div></router-link>
    <div><img class="xtb-img" src="../assets/img/tzys.png"></div>
    <div><img class="xtb-img" src="../assets/img/zczc.png"></div>
    <div><img class="xtb-img" src="../assets/img/zsxm.png"></div>
    <div class="xtb-title">印象三明</div>
    <div class="xtb-title">投资优势</div>
    <div class="xtb-title">政策支持</div>
    <div class="xtb-title">招商项目</div>
    <div><img class="xtb-img" src="../assets/img/tzyd.png"></div>
    <div><img class="xtb-img" src="../assets/img/zdzc.png"></div>
    <div><img class="xtb-img" src="../assets/img/ydzs.png"></div>
    <div><img class="xtb-img" src="../assets/img/wyzx.png"></div>
    <div class="xtb-title">投资引导</div>
    <div class="xtb-title">驻点之窗</div>
    <div class="xtb-title">云端招商</div>
    <div class="xtb-title">我要咨询</div>
  </div>
  <div>
    <swiper>
      <swiper-item><img class="lbt-img" src="../assets/img/lbt1.png"></swiper-item>
      <swiper-item><img class="lbt-img" src="../assets/img/lbt2.png"></swiper-item>
      <swiper-item><img class="lbt-img" src="../assets/img/lbt3.png"></swiper-item>
    </swiper>
  </div>
  <div class="vr-top-title">VR看园</div>
  <div class="vr-box">
    <div class="container">
      <a href="https://f56m934t1tv.720yun.com/t/63vkbb19g1e?scene_id=97889170" target="_blank"><img class="vr-img" src="../assets/img/smjj.png"></a>
        <div class="vr-img-title-top">三明经济</div>
        <div class="vr-img-title">开发区</div>
        <div><img class="zxj-img" src="../assets/img/zxj.png"></div>
    </div>
    <div class="container">
      <a href="https://f56m934t1tv.720yun.com/t/0cvkbbiqzd7?scene_id=97584120" target="_blank"><img class="vr-img" src="../assets/img/smst.png"></a>
        <div class="vr-img-title-top">三明生态</div>
        <div class="vr-img-title">工贸区</div>
        <div><img class="zxj-img" src="../assets/img/zxj.png"></div>
    </div>
    <div class="container">
      <a href="https://f56m934t1tv.720yun.com/t/d7vkbm1951h?scene_id=95627700" target="_blank"><img class="vr-img" src="../assets/img/syjj.png"></a>
        <div class="vr-img-title-top">三元经济</div>
        <div class="vr-img-title">开发区</div>
        <div><img class="zxj-img" src="../assets/img/zxj.png"></div>
    </div>
    <div class="container">
      <a href="https://f56m934t1tv.720yun.com/t/33vkbbiqgp9?scene_id=97584472" target="_blank"><img class="vr-img" src="../assets/img/smgxjs.png"></a>
        <div class="vr-img-title-top">三明高新技术</div>
        <div class="vr-img-title">产业开发区</div>
        <div><img class="zxj-img" src="../assets/img/zxj.png"></div>
    </div>
  </div>
  <div class="zdcy-top-title">主导产业</div>
  <div class="zdcy-box">
    <div class="container">
      <img class="zdcy-img" src="../assets/img/cytx.png">
      <div class="zdcy-img-title">433产业体系</div>
    </div>
    <div class="container">
      <img class="zdcy-img" src="../assets/img/cybj.png">
      <div class="zdcy-img-title">产业布局</div>
    </div>
    <div class="container">
      <img class="zdcy-img" src="../assets/img/zdcy.png">
      <div class="zdcy-img-title">各县重点产业</div>
    </div>
  </div>
  <div class="qt-top-title">其他</div>
  <div class="qt-box">
    <div class="container">
      <img class="qt-img" src="../assets/img/wstz.png">
        <div class="qt-img-title-top">外商投资</div>
        <div class="qt-img-title">办事流程</div>
    </div>
    <div class="container">
      <img class="qt-img" src="../assets/img/mpsc.png">
        <div class="qt-img-title-top">名片生成</div>
        <div class="qt-img-title">快速生成名片</div>
    </div>
  </div>
</div>
</template>

<script>
  import {Swiper, SwiperItem} from '../components/swiper'

  export default {
    name: 'Home',
    components: {
      Swiper,
      SwiperItem,
    },
    methods:{
    gotolink(){
        //点击跳转至上次页面
        //this.$router.go(-1)
        //指定跳转地址
        this.$router.replace('/yxsm')
    }
}
  }
  
</script>

<style scoped>
#home {
  position: fixed;
  min-height: 100vh;
  position: relative;
  background-color: #f6f7fa;
  }

  * {
    box-sizing: border-box;
}

.top-box {
  margin-top: 29px;
  top: 0;
  left: 0;
  color: #fff;
  text-align: center;
  line-height: 4.74667rem;
  font-size: 1.06667rem;
}  


.top-img { 
  width: 9.17333rem;
    height: 4.74667rem;
    border-radius: .13333rem;
}

.zsdt {
  width: 9.14667rem;
  height: 1.36rem;
  padding: 0 .34667rem;
  background: #fff;
  box-shadow: 0 0.02667rem 0.16rem 0 hsla(0,0%,60%,.1);
  border-radius: .13333rem;
  margin: -135px auto;
}

.zsdt-box {
  height: .4rem;
  width: 1.78667rem;
  line-height: 1.36rem;
}

.zsdt-title {
  margin-left: 2.1rem;
  line-height: 0.44rem;
  color: #454957;
  font-size: .4rem;
}

.xtb-box {
  margin: 0 auto;
  width: 9.14667rem;
  height: 9;
  background: #fff;
  margin-top: 155px;
  border-radius: .13333rem;
  padding: .34667rem .13333rem;
  -webkit-flex-wrap: wrap;
  -webkit-justify-content: space-between;
  display: flex;
}

.xtb-img {
  width: 1.49333rem;
  height: 1.49333rem;
  text-align: center;
  margin: .26667rem .26667rem;
}

.xtb-title {
  font-size: .34667rem;
  font-weight: 500;
  color: #101a33;
  line-height: .61333rem;
  text-align: center;
  margin: .26667rem .26667rem;
  margin-top: -0.2rem;
}

.lbt-img {
  width: 9.14667rem;
  height: 1.97333rem;
  border-radius: .13333rem;
  margin-top: 0.3rem;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
}

.container {
  position: relative;
}

.vr-top-title {
  font-size: .42667rem;
  font-weight: 700;
  color: #333;
  line-height: .96rem;
  margin-top: 0.1rem;
  margin-left: 0.4rem;
}

.vr-box {
  width: 9.2rem;
  -webkit-flex-wrap: wrap;
  -webkit-justify-content: space-between;
  display: flex;
  margin-top: 0.01rem;
  margin-left: 0.4rem;
}

.vr-img {
  width: 4.45333rem;
  height: 2.48rem;
  margin-top: 0.1rem;
}

.vr-img-title-top {
  position: absolute;
  top: 0.3rem;
  left: 0.4rem;
  font-size: .34667rem;
  font-weight: 500;
  color: #333;
}

.vr-img-title {
  position: absolute;
  top: 0.75rem;
  left: 0.4rem;
  font-size: .24rem;
  font-weight: 500;
  color: #666;
}

.zxj-img {
  position: absolute;
  top: 1.6rem;
  left: 0.3rem;
  width: .74667rem;
  height: .74667rem;
}

.zdcy-top-title {
  font-size: .42667rem;
  font-weight: 700;
  color: #333;
  margin-top: 0.35rem;
  margin-left: 0.4rem;
}

.zdcy-box {
  margin-top: 0.3rem;
  display: flex;
  overflow-y: auto;
  padding: 0 .34667rem;
}

.zdcy-img {
  width: 3.94667rem;
  height: 2.61333rem;
  margin: 0 .08rem .4rem 0;
}

.zdcy-img-title {
  position: absolute;
  top: 13%;
  width: 3.94667rem;
  text-align: center;
  color: #fff;
  text-shadow: -0.02667rem 0.02667rem 0.02667rem #3579c3, 0.02667rem 0.02667rem 0.02667rem #3579c3, 0.02667rem -0.02667rem 0.02667rem #3579c3, -0.02667rem -0.02667rem 0.02667rem #3579c3;
  font-size: .34667rem;
}

.qt-top-title {
  margin-top: 0.1rem;
  font-size: .42667rem;
  font-weight: 700;
  color: #333;
  padding-left: .4rem;
}

.qt-box {
  display: flex;
  margin-top: 0.2rem;
  padding: 0 .4rem .8rem .42667rem;
  -webkit-flex-wrap: wrap;
  -webkit-justify-content: space-between;
  
}

.qt-img {
  width: 44.53333vw;
  height: 28.53333vw;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
}

.qt-img-title-top {
  position: absolute;
  top: 0.3rem;
  left: 0.3rem;
  font-size: .42667rem;
  font-weight: 700;
  color: #fff;
}

.qt-img-title {
  position: absolute;
  top: 0.9rem;
  left: 0.3rem;
  font-size: .34667rem;
  color: #fff;
}

</style>