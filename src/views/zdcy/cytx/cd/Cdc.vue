<template>
    <div class="box">
        <MainTabBar class="bg"></MainTabBar>
        <div class="sj"></div>
        <Main class="cd"></Main>
        <div class="box-box">
        <div class="text-box">
            <div class="title-box"><div class="title"><img class="title-img" src="../../../../assets/img/zsfx.png">招商方向</div></div>
            <div class="text">严格执行耕地保护政策，促进粮食生产全程机械化，加大高标准农田建设力度，推广河龙贡米等优质粮食品种，提升粮食防灾减灾能力、应急供应能力，确保粮食安全；壮大粮食生产新型经营主体和服务主体，培育产业链中、上游企业，补齐种子精加工、仓储物流等关键环节，促进粮食产业高质量发展。</div>
        </div>
        <div class="top">生态养殖</div>
        <div class="text-box">
            <div class="title-box"><div class="title"><img class="title-img" src="../../../../assets/img/zsfx.png">招商方向</div></div>
            <div class="text">重点围绕“产业生态化，生态产业化”发展方向，突出智能养殖技术运用，发展特色畜禽产业、小吃配套产品种养殖产业，补齐家禽屠宰加工、乳制品深加工等产业链关键环节和发展短板。</div>
        </div>
        <div class="top">精致园艺</div>
        <div class="text-box">
            <div class="title-box"><div class="title"><img class="title-img" src="../../../../assets/img/zsfx.png">招商方向</div></div>
            <div class="text">引进和培育农产品精深加工、流通销售企业，补齐加</div>
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
        margin-bottom: 0.5rem;
    }
    </style>