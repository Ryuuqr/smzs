<template>
    <div class="friendLinks" ref="showbox">
      <span class="tip"></span>
      <div class="linkContent" ref="box" id="wrapper">
        <p id="demo1">
          <div class="gd-text"><router-link to='/zsdta' style="text-decoration:none"> 筑巢引凤育新机，招商引资开新局！将乐县全力推进“大招商招好商”攻坚战役 </router-link></div>
          <div class="gd-text"><router-link to='/zsdtb' style="text-decoration:none"> 全市“大招商招好商”攻坚战役现场观摩交流（三元）暨二季度工作推进会召开 </router-link></div>
          <div class="gd-text"><router-link to='/zsdtc' style="text-decoration:none"> 我市举办2022年第二期招商工作业务培训班 </router-link></div>
          <div class="gd-text"><router-link to='/zsdtd' style="text-decoration:none"> 总投资10亿元！市区首个“工业地产”项目落户小蕉工业园 </router-link></div>
          <div class="gd-text"><router-link to='/zsdte' style="text-decoration:none"> 精心筑巢引凤来 奋楫扬帆勇争先—— 三元区开展“大招商招好商”攻坚战役工作侧记 </router-link></div>
          <div class="gd-text"><router-link to='/zsdtf' style="text-decoration:none"> 市领导带队拜访杭州娃哈哈集团 </router-link></div>
          <div class="gd-text"><router-link to='/zsdtg' style="text-decoration:none"> 签约14个项目，总投资129.5亿元！我市举办“三明——粤港澳片区”重点产业线上招商推介会 </router-link></div>
          <div class="gd-text"><router-link to='/zsdth' style="text-decoration:none"> 中国金茂控股集团有限公司来明考察调研 </router-link></div>
          <div class="gd-text"><router-link to='/zsdtai' style="text-decoration:none"> 三明市领导会见中铁建发展集团考察团一行 </router-link></div>
          <div class="gd-text"><router-link to='/zsdtaj' style="text-decoration:none"> 全市招商项目“云签约”活动举行 </router-link></div>
          <div class="gd-text"><router-link to='/zsdtak' style="text-decoration:none"> 三明市委市政府召开专题会 研究全市招商引资“重中之重”项目 </router-link></div>
          <div class="gd-text"><router-link to='/zsdtal' style="text-decoration:none"> 台资企业银企对接会 助力台企高质量发展 </router-link></div>
          <div class="gd-text"><router-link to='/zsdtam' style="text-decoration:none"> 大招商招好商 | 市政协领导率专班赴渝开展招商活动 </router-link></div>
          <div class="gd-text"><router-link to='/zsdtan' style="text-decoration:none"> 筑巢引凤育新机，招商引资开新局！将乐县全力推进“大招商招好商”攻坚战役 </router-link></div>
        </p>
        <p id="demo2">
        </p>
        </p>
      </div>
    </div>
</template>

<script>
    
    export default {
      name: "Marquee",
      methods: {
        play () {

var speed = 100;

var wrapper = document.getElementById('wrapper');

var demo1 = document.getElementById('demo1');

var demo2 = document.getElementById('demo2');

demo2.innerHTML=demo1.innerHTML  

console.log(demo2.innerHTML)

function Marquee(){  

    if(demo2.offsetHeight-wrapper.scrollTop<=0)  

        wrapper.scrollTop-=demo1.offsetHeight;     

    else{  

        wrapper.scrollTop+=1 

    }  

}  

var MyMar=setInterval(Marquee,speed)  

wrapper.onmouseover=function() {clearInterval(MyMar)}  

wrapper.onmouseout=function() {MyMar=setInterval(Marquee,speed)} 

}, 
      } ,
      mounted(){
        this.play();
      }
    }
     </script> 
    
<style>
a {
-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
-webkit-user-select: none;
-moz-user-focus: none;
-moz-user-select: none;
color: #454957;
}


    .linkContent {
      width: 90%;
      height: 10px;
      animation: move 30s infinite 2s running;
      animation-fill-mode: forwards;
      margin-top: -64px;
    }
    @keyframes move {
      0% {
        transform: translateY(1px);
      }
      7.69230769% {
        transform: translateY(-99px);
      }
      15.3846154% {
        transform: translateY(-199px);
      }
      23.0769231% {
        transform: translateY(-299px);
      }
      30.7692308% {
        transform: translateY(-399px);
      }
      38.4615385% {
        transform: translateY(-499px);
      }
      46.1538462% {
        transform: translateY(-599px);
      }
      53.8461538% {
        transform: translateY(-699px);
      }
      61.5384615% {
        transform: translateY(-799px);
      }
      69.2307692% {
        transform: translateY(-899px);
      }
      76.9230769% {
        transform: translateY(-999px);
      }
      84.6153846% {
        transform: translateY(-1099px);
      }
      92.3076923% {
        transform: translateY(-1199px);
      }
      100% {
        transform: translateY(-1299px);
      }
    }
    .gd-text {
    width: 6.4rem;
    font-size: .4rem;
    color: #454957;
    line-height: 1.33333rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    }
    </style>