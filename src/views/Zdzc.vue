<template>
<div class="box">
<div class="zdzc-top-title">招商专班人员名单及联系方式</div>
<div class="blue-box">
    <div class="blue-img">
        <div class="link"></div>
        <div class="zdzc-img-title"> 京津冀<br> 招商工作组 </div>
    </div>
    <div class="blue-title">
        <div class="title">
            <div>詹明昭 （组长） </div>
            <div class="jgtop">联系方式:13605962873</div>
        </div>
        <div class="title">
            <div> 张志斌 （副组长） </div>
            <div class="jg">联系方式:13859446727</div>
        </div>
        <div class="title">
            <div> 刘云佩 （副组长） </div>
            <div class="jg">联系方式:18806009811</div>
        </div>
        <div class="bottom">地址：北京市西城区茶马连道19号茶马大厦1402室</div>
    </div>
</div>
<div class="blue-box">
    <div class="red-img">
        <div class="link"></div>
        <div class="zdzc-img-title"> 长三角<br> 招商工作组 </div>
    </div>
    <div class="blue-title">
        <div class="title">
            <div>林承海 （组长） </div>
            <div class="jgtop">联系方式:13950929009</div>
        </div>
        <div class="title">
            <div> 陈孝海 （副组长） </div>
            <div class="jg">联系方式:13645063032</div>
        </div>
        <div class="title">
            <div> <span style="letter-spacing: 5px;margin-right: -10px;">何 凌 </span> （副组长） </div>
            <div class="jg">联系方式:15080585588</div>
        </div>
        <div class="bottom">地址：上海市普陀区谈家渡路140弄6号楼201室</div>
    </div>
</div>
<div class="blue-box">
    <div class="yellow-img">
        <div class="link"></div>
        <div class="zdzc-img-title"> 闽东南<br> 招商工作组 </div>
    </div>
    <div class="blue-title">
        <div class="title">
            <div> 苏奕泰  （组长） </div>
            <div class="jgtop">联系方式:18859801000</div>
        </div>
        <div class="title">
            <div> 张肇瑞 （副组长） </div>
            <div class="jg">联系方式:13859126013</div>
        </div>
        <div class="title">
            <div> 罗联久 （副组长） </div>
            <div class="jg">联系方式:13666976806</div>
        </div>
        <div class="bottom">地址：厦门市东浦路68号翡翠城5B栋203室</div>
    </div>
</div>
<div class="blue-box">
    <div class="blue-img">
        <div class="link"></div>
        <div class="zdzc-img-title"> 成渝汉<br> 招商工作组 </div>
    </div>
    <div class="blue-title">
        <div class="title">
            <div>邱宇辉 （组长） </div>
            <div class="jgtop">联系方式:13385988918</div>
        </div>
        <div class="title">
            <div> 毛延龙 （副组长） </div>
            <div class="jg">联系方式:13559099510</div>
        </div>
        <div class="title">
            <div> 詹仕炜 （副组长） </div>
            <div class="jg">联系方式:18859882276</div>
        </div>
        <div class="bottom">地址：重庆市九龙坡区金科西城大院7栋2204室</div>
    </div>
</div>
<div class="blue-box">
    <div class="red-img">
        <div class="link"></div>
        <div class="zdzc-img-title"> 粤港澳<br> 招商工作组 </div>
    </div>
    <div class="blue-title">
        <div class="title">
            <div> 陈映哲 （组长） </div>
            <div class="jgtop">联系方式:13850877366</div>
        </div>
        <div class="title">
            <div><span style="letter-spacing: 4px;margin-right: -3px;">王 明</span> （副组长） </div>
            <div class="jg">联系方式:13860595049</div>
        </div>
        <div class="title">
            <div> 张声海 （副组长） </div>
            <div class="jg">联系方式:18259808899</div>
        </div>
        <div class="bottom">地址：深圳市福田区恒运豪庭2栋23AF</div>
    </div>
</div>
</div>
</template>

<script>
  export default {
    name: 'Zdzc'
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
    overflow: scroll;
    padding: 0 .4rem 2.66667rem .4rem;
    background: #f0f1f5;
}

.zdzc-top-title {
    font-size: .42667rem;
    font-weight: 700;
    color: #0d51a6;
    line-height: .8rem;
    text-align: center;
}

.blue-box {
    width: 100%;
    margin-top: .4rem;
    background: #f8fbfe;
    border-radius: .08rem .08rem 0 0;
}

.blue-img {
    background-image: url(../assets/img/blue.png);
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    padding: .45333rem;
}

.red-img {
    background-image: url(../assets/img/red.png);
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    padding: .45333rem;
}

.yellow-img {
    background-image: url(../assets/img/yellow.png);
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    padding: .45333rem;
}

.zdzc-img-title {
    font-size: .42667rem;
    font-weight: 700;
    color: #333;
    line-height: .61333rem;
}

.title {
    font-size: .4rem;
    color: #333;
    line-height: .72rem;
    display: flex;
}

.blue-title {
    padding: .32rem .42667rem;
}

.link {
    width: .45333rem;
    height: .08rem;
    border-radius: 0 .05333rem 0 .05333rem;
    margin-bottom: .26667rem;
    background: #0d51a6;
}

.jgtop {
    margin-left: 0.7rem;
}

.jg {
    margin-left: 0.3rem;
}

.bottom {
    font-size: .4rem;
    font-weight: 700;
    color: #333;
    line-height: .53333rem;
    margin-top: .18667rem;
}
</style>
