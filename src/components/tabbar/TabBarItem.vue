<template>
  <div class="tab-bar-item" @click="itemClick">
    <div :style="activeStyle"><div :style="activeSty" class="by"><slot name="item-text"></slot></div></div>
  </div>
</template>

<script>
  export default {
    name: 'TabBarItem',
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'white' 
      },
      activeBackground: {
        type: String,
        default: '#0d51a6' 
      },
      activeba: {
        type: String,
        default: 'rgba(0, 0, 0, 0.4)' 
      },
    },
    data() {
        return {
            //isActive: true
        }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1 
      },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    },
    activeSty() {
      return this.isActive ? {background: this.activeBackground} : {}
    },
    activeb() {
      return this.isActive ? {background: this.activeba} : {}
    },
    },
    methods: {
        itemClick() {
          this.$router.replace(this.path).catch(err => {err})
        }
    }
  }
</script>

<style scoped>
.tab-bar-item {
  height: .77333rem;
  border: .02667rem solid #0d51a6;
  border-radius: .4rem;
  font-size: .34667rem;
  color: #0d51a6;
  line-height: .77333rem;
  display: inline-block;
  text-align: center;
  margin: .4rem .21333rem;
  width: 3.14667rem;
  } 
  .by {
  border-radius: .4rem;
  margin-top: -0.035rem;
  }
</style>