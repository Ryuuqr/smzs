<template>
    <div class="header">
        <h3 class="name">体坛风云人物（中国）</h3>
        <ul class="header_ul">
            <li class="bb"><a href="#">篮球</a>
                <ul class="bb_ul">
                    <li><a href="#"> 新型建材 </a></li>
                    <li><a href="#"> 高端纺织 </a></li>
                    <li><a href="#"> 现代种业 </a></li>
                </ul>
            </li>
            <li class="ft"><a href="#">足球</a>
                <ul class="ft_ul">
                    <li><a href="#">李惠堂</a></li>
                    <li><a href="#">柳海光</a></li>
                    <li><a href="#">古义明</a></li>
                    <li><a href="#">宿茂臻</a></li>
                </ul>
            </li>
            <li class="bmt"><a href="#">羽毛球</a>
                <ul class="bmt_ul">
                    <li><a href="#">林丹</a></li>
                    <li><a href="#">鲍来春</a></li>
                    <li><a href="#">谌龙</a></li>
                    <li><a href="#">石宇奇</a></li>

                </ul>
            </li>
            <li class="pp"><a href="#">乒乓球</a>
                <ul class="pp_ul">
                    <li><a href="#">孔令辉</a></li>
                    <li><a href="#">张怡宁</a></li>
                    <li><a href="#">邓亚萍</a></li>
                    <li><a href="#">马龙</a></li>
                </ul>
            </li>
        </ul>
    </div>
    </template>
    
    <script>
    import MainTabBar from '../../cytx/MainTabBar.vue'
    import Main from '../../cytx/main/main.vue'
    
      export default {
        name: 'cd',
        components: {
          MainTabBar,
          Main
        },
      }
    </script>
    
    <style scoped>
   *{
    margin:  0px;
    padding: 0px;
}
ul{
    list-style: none;/*去掉列表的圆点*/
}
a{
    display: block;          /*将链接的点击区域扩大到整个块*/
    text-decoration: none;   /*取消连接的下划线*/
    color:#000;            /*链接字体为黑色*/
}
body {
    background-color: rgba(0,0,0,.4);         /*页面背景为白色*/
}
/* 导航栏 */
.header {
     width:100%;
     /* 占据一整行 */
    height: 50px;
    /* 高度 */
    background-color: rgb(219,216,207);
    /* 背景色 */
}
/* 一个h3,5个li */
.name,.pp,.ft,.bb,.bmt {
    line-height: 50px;
    /* 与导航栏同高 */
    float: left;
    /* 左浮动 */
    width:120px;
    text-align: center;
    /* 文字居中 */
}
.name {
    width: 300px;
}
/*.header_ul>li {
    background-color: #f1f1f1;
}*/

.bb>a:hover,.ft>a:hover,.bmt>a:hover,.pp>a:hover {
  /*  background-color: #555;*/
    /* 字体变白 */
    /* display: block; */
}

/* 一级菜单点击特效 */
.header_ul li:hover .bb_ul,.header_ul li:hover .ft_ul,.header_ul li:hover .bmt_ul,.header_ul li:hover .pp_ul{
    display: block;
    /* 展示块 */
}
/* 设置二级菜单，实现与“一级菜单点击特效”配合，实现导航栏下拉*/
.bb_ul,.ft_ul,.bmt_ul,.pp_ul{
    position:relative;
    /* 相对位置 */
    top:0px;
    /* 顶格，与顶部0距离 */
    width: 100vw;
    background-color: #f1f1f1;
    display: none;
    padding: .4rem;
    margin-left: -4.2rem;
    /* 隐藏块 */
}

/* 二级菜单鼠标挪动特效 */
.bb_ul>li>a:hover,.ft_ul>li>a:hover,.bmt_ul>li>a:hover,.pp_ul>li>a:hover{
    
    display: block;
}

/* 设置二级菜单高度 */
.bb_ul,.ft_ul,.bmt_ul,.pp_ul{

}

/* 设置二级菜单选项高度 */
.bb_ul>li,.ft_ul>li,.bmt_ul>li,.pp_ul>li{
   
}
    </style>
 