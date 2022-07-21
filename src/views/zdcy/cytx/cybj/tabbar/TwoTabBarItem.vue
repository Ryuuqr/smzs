<template>
  <div class="two-tab-bar-item" @click="itemClick">
    <div :style="activeStyle"><div :style="activeb" class="by"><div :style="activeSty" class="by"><slot name="item-text"></slot></div></div></div>
  </div>
</template>

<script>
  export default {
    name: 'TwoTabBarItem',
    props: {
      path: String,
      activeColor: {
        type: String,
        default: '#0d51a6' 
      },
      activeBackground: {
        type: String,
        default: '.67333rem' 
      },
      activeba: {
        type: String,
        default: '.02667rem solid #0d51a6' 
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
      return this.isActive ? {height: this.activeBackground} : {}
    },
    activeb() {
      return this.isActive ? {border: this.activeba} : {}
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
  } 
  .by {
  border-radius: .08rem;
  margin-top: -0.035rem;
  line-height: 0.5rem;
  width: 2.66667rem;
  }
</style>