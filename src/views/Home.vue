<template>
  
<div id="home">
  <div class="top-box"><video class="sp" ref="movie" src="../assets/sp/top.mp4"     poster="../assets/img/spimg.jpg" style=" height: 4.74667rem; object-fit: fill"></video>
  <i v-show="isplay" class="el-icon-video-play" @click="handlePlay"><svg t="1659422006822" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3607" width="48" height="48"><path d="M909.892465 331.781731c-21.798121-51.476314-52.909055-97.631021-92.514092-137.236058-39.605037-39.605037-85.862083-70.818309-137.236058-92.514092-53.21607-22.514491-109.809314-33.976414-168.142315-33.976414S397.176094 79.414751 343.857685 102.031581c-51.476314 21.798121-97.631021 52.909055-137.236058 92.514092s-70.818309 85.862083-92.514092 137.236058c-22.514491 53.21607-33.976414 109.809314-33.976414 168.142315s11.461923 114.823906 33.976414 168.142315c21.798121 51.476314 52.909055 97.631021 92.514092 137.236058 39.605037 39.605037 85.862083 70.818309 137.236058 92.514092 53.21607 22.514491 109.809314 33.976414 168.142315 33.976414s114.823906-11.461923 168.142315-33.976414c51.476314-21.798121 97.631021-52.909055 137.236058-92.514092 39.605037-39.605037 70.818309-85.862083 92.514092-137.236058 22.514491-53.21607 33.976414-109.809314 33.976414-168.142315S932.509294 385.10014 909.892465 331.781731zM512 886.763942c-213.273636 0-386.839896-173.56626-386.839896-386.839896s173.56626-386.839896 386.839896-386.839896 386.839896 173.56626 386.839896 386.839896S725.273636 886.763942 512 886.763942zM641.355986 496.239856 458.681591 367.804917c-8.391765-5.8333-19.649011 0.102339-19.649011 10.336198l0 256.869878c0 10.23386 11.257246 16.169498 19.649011 10.336198l182.776734-128.434939C648.622027 511.897661 648.519688 501.254447 641.355986 496.239856z" p-id="3608" fill="#ffffff"></path></svg></i>
  <i v-show="!isplay" class="el-icon-video-pause" @click="handlePause"><svg t="1659422346608" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6048" width="48" height="48"><path d="M909.892465 331.781731c-21.798121-51.476314-52.909055-97.631021-92.514092-137.236058-39.605037-39.605037-85.862083-70.818309-137.236058-92.514092-53.21607-22.514491-109.809314-33.976414-168.142315-33.976414S397.176094 79.414751 343.857685 102.031581c-51.476314 21.798121-97.631021 52.909055-137.236058 92.514092s-70.818309 85.862083-92.514092 137.236058c-22.514491 53.21607-33.976414 109.809314-33.976414 168.142315s11.461923 114.823906 33.976414 168.142315c21.798121 51.476314 52.909055 97.631021 92.514092 137.236058 39.605037 39.605037 85.862083 70.818309 137.236058 92.514092 53.21607 22.514491 109.809314 33.976414 168.142315 33.976414s114.823906-11.461923 168.142315-33.976414c51.476314-21.798121 97.631021-52.909055 137.236058-92.514092 39.605037-39.605037 70.818309-85.862083 92.514092-137.236058 22.514491-53.21607 33.976414-109.809314 33.976414-168.142315S932.509294 385.10014 909.892465 331.781731zM512 886.763942c-213.273636 0-386.839896-173.56626-386.839896-386.839896s173.56626-386.839896 386.839896-386.839896 386.839896 173.56626 386.839896 386.839896S725.273636 886.763942 512 886.763942z" p-id="6049" fill="#ffffff"></path><path d="M440.055966 369.442335c-12.485309 0-22.514491 10.029182-22.514491 22.514491l0 248.68279c0 12.485309 10.029182 22.514491 22.514491 22.514491s22.514491-10.029182 22.514491-22.514491L462.570458 391.956826C462.570458 379.471517 452.541275 369.442335 440.055966 369.442335z" p-id="6050" fill="#ffffff"></path><path d="M570.025984 369.442335c-12.485309 0-22.514491 10.029182-22.514491 22.514491l0 248.68279c0 12.485309 10.029182 22.514491 22.514491 22.514491s22.514491-10.029182 22.514491-22.514491L592.540476 391.956826C592.540476 379.471517 582.511293 369.442335 570.025984 369.442335z" p-id="6051" fill="#ffffff"></path></svg></i>
  </div>
  <div class="zsdt">
    <router-link to='/zsdt' style="text-decoration:none">
    <div class="zsdt-box"><img class="zsdt-box" src="../assets/img/zsdt.png"></div></router-link>
    <div class="zsdt-title"><Marquee/></div>
  </div>
  <div class="xtb-box">
    <router-link to='/yxsm'><div><img class="xtb-img" src="../assets/img/sm.png"></div></router-link>
    <router-link to='/tzys'><div><img class="xtb-img" src="../assets/img/tzys.png"></div></router-link>
    <div><img class="xtb-img" src="../assets/img/zczc.png"></div>
    <div><img class="xtb-img" src="../assets/img/zsxm.png"></div>
    <router-link to='/yxsm' style="text-decoration:none"><div class="xtb-title">印象三明</div></router-link>
    <router-link to='/tzys' style="text-decoration:none"><div class="xtb-title">投资优势</div></router-link>
    <div class="xtb-title">政策支持</div>
    <div class="xtb-title">招商项目</div>
    <div><img class="xtb-img" src="../assets/img/tzyd.png"></div>
    <router-link to='/zdzc'><div><img class="xtb-img" src="../assets/img/zdzc.png"></div></router-link>
    <router-link to='/ydzs'><div><img class="xtb-img" src="../assets/img/ydzs.png"></div></router-link>
    <router-link to='/wyzx'><div><img class="xtb-img" src="../assets/img/wyzx.png"></div></router-link>
    <div class="xtb-title">投资引导</div>
    <router-link to='/zdzc' style="text-decoration:none"><div class="xtb-title">驻点之窗</div></router-link>
    <router-link to='/ydzs' style="text-decoration:none"><div class="xtb-title">云端招商</div></router-link>
    <router-link to='/wyzx' style="text-decoration:none"><div class="xtb-title">我要咨询</div></router-link>
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
    <a href="https://f56m934t1tv.720yun.com/t/63vkbb19g1e?scene_id=97889170" target="_blank">
    <div class="container">
      <img class="vr-img" src="../assets/img/smjj.png">
        <div class="vr-img-title-top">三明经济</div>
        <div class="vr-img-title">开发区</div>
        <div><img class="zxj-img" src="../assets/img/zxj.png"></div>
    </div>
  </a>
  <a href="https://f56m934t1tv.720yun.com/t/0cvkbbiqzd7?scene_id=97584120" target="_blank">
    <div class="container">
      <img class="vr-img" src="../assets/img/smst.png">
        <div class="vr-img-title-top">三明生态</div>
        <div class="vr-img-title">工贸区</div>
        <div><img class="zxj-img" src="../assets/img/zxj.png"></div>
    </div>
  </a>
    <a href="https://f56m934t1tv.720yun.com/t/d7vkbm1951h?scene_id=95627700" target="_blank">
    <div class="container">
      <img class="vr-img" src="../assets/img/syjj.png">
        <div class="vr-img-title-top">三元经济</div>
        <div class="vr-img-title">开发区</div>
        <div><img class="zxj-img" src="../assets/img/zxj.png"></div>
    </div>
  </a>
    <a href="https://f56m934t1tv.720yun.com/t/33vkbbiqgp9?scene_id=97584472" target="_blank">
    <div class="container">
      <img class="vr-img" src="../assets/img/smgxjs.png">
        <div class="vr-img-title-top">三明高新技术</div>
        <div class="vr-img-title">产业开发区</div>
        <div><img class="zxj-img" src="../assets/img/zxj.png"></div>
    </div>
  </a>
  </div>
  <div class="zdcy-top-title">主导产业</div>
  <div class="zdcy-box">
    <router-link to='/dzdcy' style="text-decoration:none">
    <div class="container">
      <img class="zdcy-img" src="../assets/img/cytx.png">
      <div class="zdcy-img-title">433产业体系</div>
    </div>
  </router-link>
    <router-link to='/gtyzb' style="text-decoration:none">
    <div class="container">
      <img class="zdcy-img" src="../assets/img/cybj.png">
      <div class="zdcy-img-title">产业布局</div>
    </div>
  </router-link>
    <router-link to='/gxzdcy' style="text-decoration:none">
    <div class="container">
      <img class="zdcy-img" src="../assets/img/zdcy.png">
      <div class="zdcy-img-title">各县重点产业</div>
    </div>
  </router-link>
  </div>
  <div class="qt-top-title">其他</div>
  <div class="qt-box">
    <router-link to='/wstz' style="text-decoration:none">
    <div class="container">
      <img class="qt-img" src="../assets/img/wstz.png">
        <div class="qt-img-title-top">外商投资</div>
        <div class="qt-img-title">办事流程</div>
    </div>
  </router-link>
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
  import Marquee from '../components/marquee/Marquee.vue'

  export default {
    name: 'Home',
    components: {
      Swiper,
      SwiperItem,
      Marquee
    },
    data() {
      return {
        loading: false,
        isplay: true,
      };
    },
    mounted() {
      this.$refs.movie.addEventListener("play", this.handlePlay)
      this.$refs.movie.addEventListener("pause", this.handlePause)
    },
    methods: {
  
      handlePlay() {
        this.$refs.movie.play();
        this.isplay = false;
      },
      handlePause() {
        this.$refs.movie.pause();
        this.isplay = true;
      },
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

video {
    object-fit: contain;

}

i {
  position: absolute;
  left: 50%;
  top: 9%;
  transform: translate(-50%, -50%);
  font-size: 58px;
  color: rgb(255, 255, 255);
  cursor: pointer;
  opacity: 0.85;
}

.el-icon-video-pause {
  opacity: 0;
  transition: all 0.4s;
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

.sp {
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
  overflow: hidden;
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