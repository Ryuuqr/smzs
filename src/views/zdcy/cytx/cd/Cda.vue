<template>
    <div class="box">
        <MainTabBar class="bg"></MainTabBar>
        <div class="sj"></div>
        <Main class="cd"></Main>
        <div class="box-box">
        <div class="text-box">
            <div class="title-box"><div class="title"><img class="title-img" src="../../../../assets/img/zsfx.png">招商方向</div></div>
            <div class="text">重点发展新能源高端电子化学品、含氟医药/农药中间体、含氟特种中间体及环保型含氟表面活性剂，适度发展高纯无机氟材料作为氟精细产品配套原料，抓紧补齐产业链关键环节、缺失环节。</div>
        </div>
        <div class="text-box">
            <div class="title-box"><div class="title"><img class="title-img" src="../../../../assets/img/zdqy.png">重点企业</div></div>
            <div class="text"> 扶持海斯福化工、三农新材料、东莹化工等龙头企业，重点推进海斯福高端氟精细化学品（四期）、三农新材料氟精细化学品及六氟丙烯扩产、东莹化工含氟锂盐等项目。 </div>
        </div>
        </div>
        <div class="top">石墨和石墨烯</div>
        <div class="box-box">
        <div class="text-box">
            <div class="title-box"><div class="title"><img class="title-img" src="../../../../assets/img/zsfx.png">招商方向</div></div>
            <div class="text">加强导热膜及热管理、电池材料、传感器、半导体、生物医学等重点领域核心技术攻关，引进行业龙头，调优产品结构，构建采矿—高纯石墨—石墨和石墨烯产品—应用产品等完整产业链。</div>
        </div>
        <div class="text-box">
            <div class="title-box"><div class="title"><img class="title-img" src="../../../../assets/img/zdqy.png">重点企业</div></div>
           
        </div>
        </div>
      </div>
    
    </template>
    
    <script>
    import MainTabBar from '../../cytx/MainTabBar.vue'
    import Main from '../../cytx/main/main.vue'
    
      export default {
        name: 'cda',
        components: {
          MainTabBar,
          Main
        },
      }
    </script>
    
    <style scoped>
    * {
        box-sizing: border-box;
    }
    
    .bg {
        background: #fff;
        margin-top: -0.4rem;
    }

    div {
        display: block;
    }
    
    .sj {
    border-right: .13333rem solid transparent;
    border-top: .13333rem solid transparent;
    border-left: .13333rem solid transparent;
    border-bottom: .13333rem solid #fff;
    position: absolute;
    left: 1.30667rem;
    z-index: 1000;
    top: 1.06667rem;
    margin-top: 0.4rem;
    margin-left: 0.3rem;
    }

    .cd {
    background: #fff;
    width: 100vw;
    padding: .4rem;
    margin-top: 0.15rem;
    }

    .box {
        margin-top: .4rem;
        overflow: scroll;
        background: rgba(0,0,0,.4);
    }
    
    .top {
        height: 1.2rem;
        background-image: url(../../../../assets/img/Dzdcytop.png);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: 50%;
        line-height: 1.2rem;
        text-align: center;
        font-size: .48rem;
        font-weight: 700;
        color: #0d51a6;
        margin: .4rem 0;
        padding: 0 .4rem;
        
    }
    
    .text-box {
        font-size: .4rem;
        color: #101a33;
        line-height: .74667rem;
        margin-bottom: -0.4rem;
        padding: 0 .4rem;
        
    }
    
    .title-box {
        font-weight: 700;
        color: #0d51a6;
        line-height: .74667rem;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
    }
    
    .title {
        font-size: .42667rem;
        font-weight: 700;
        color: #0d51a6;
        line-height: .74667rem;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
    }
    
    .text {
        font-size: .4rem;
        color: #101a33;
        line-height: .74667rem;
        margin-bottom: .4rem;
    }
    
    .title-img {
        height: .53333rem;
        width: .53333rem;
        margin: 0 .13333rem 0 0;
    }
    
    .box-box {
        margin-bottom: 0.5rem;
    }
    </style>