<template>
<div class="box">
    <div class="top-box">
        <div class="title">三明市商务局外资科</div>
        <div class="dh-box">
        <div class="one"><img class="dh-img" src="../assets/img/dh.svg"><a class="text" href="tel:05988250565" style="text-decoration:none">0598-8250565</a></div>
        <div class="two"><img class="dh-img" src="../assets/img/dh.svg"><a class="text" href="tel:05988241966" style="text-decoration:none">0598-8241966</a></div>
        </div>
    </div>
    <img class="img" src="../assets/img/bslc.png">
</div>
</template>

<script>
  export default {
    name: 'Wstz'
  }
</script>

<style scoped>
* {
    box-sizing: border-box;
}

.top-box {
    width: calc(100vw - .85333rem);
    margin: 0 auto;
    margin-top: .4rem;
    border: .02667rem solid #0d51a6;
    background: linear-gradient(0deg,#e7effd,#fff);
    border-radius: .13333rem;
    padding: .4rem .61333rem;
}    

.title {
    font-size: .48rem;
    color: #0d51a6;
    line-height: 1.06667rem;
    border-bottom: .02667rem dashed #0d51a6;
    text-align: center;
    font-weight: 700;
}

.dh-img {
    width: .48rem;
    height: .48rem;
    margin-right: .05333rem;
}

.img {
    margin: .43333rem .42667rem;
    width: calc(100vw - .85333rem);
}

.dh-box {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}

.text {
    color: #333;
}

.one {
    margin-top: 0.2rem;
    margin-bottom: 0.4rem;
}

.two {
    margin-top: 0.2rem;
    margin-left: 1.6rem;
    margin-bottom: 0.4rem;
}
</style>
