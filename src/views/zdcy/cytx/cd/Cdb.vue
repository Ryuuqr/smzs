<template>
    <div class="box">
        <MainTabBar class="bg"></MainTabBar>
        <div class="sj"></div>
        <Main class="cd"></Main>
        <div class="box-box">
        <div class="text-box">
            <div class="title-box"><div class="title"><img class="title-img" src="../../../../assets/img/zsfx.png">招商方向</div></div>
            <div class="text">用好泰宁世界自然遗产、世界地质公园、尤溪联合梯田等世界级和国家级文化旅游资源，发挥“沙县小吃”品牌优势，融入沪明文旅合作、闽西南旅游协作、大武夷旅游联盟等平台，培育森林康养、特色民宿、主题乐园、影视文化、研学培训、运动休闲等新兴业态，做好龙头培育、产品创新、业态营销等工作，拓展“引客入明”旅游文化产业链，持续打响“中国绿都、最氧三明”品牌。</div>
        </div>
        <div class="text-box">
            <div class="title-box"><div class="title"><img class="title-img" src="../../../../assets/img/zdqy.png">重点企业</div></div>
            <div class="text"> 扶持三明文旅、泰宁旅游集团、三钢文旅、沙县小吃文旅集团等龙头企业，对接国内30强旅游集团，支持各类投资基金、国有企业参与重大旅游项目开发，加快实施常口“两山理论”实践基地、福建（泰宁）影视基地、尤溪闽湖-蓬莱山康养休闲、沙县小吃卡通主题亲子乐园等项目。 </div>
        </div>
        </div>
        </div>
    
    </template>
    
    <script>
    import MainTabBar from '../../cytx/MainTabBar.vue'
    import Main from '../../cytx/main/main.vue'
    
      export default {
        name: 'cdb',
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
        margin-bottom: 2.2rem;
    }
    </style>