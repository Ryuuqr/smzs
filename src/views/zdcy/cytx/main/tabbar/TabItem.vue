<template>
  <div class="tab-item" @click="itemClick">
<div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: 'TabItem',
    props: {
      path: String,
      activeColor: {
        type: String,
        default: '#0d51a6' 
      },
      activeBackground: {
        type: String,
        default: '#0d51a6' 
      },
      activeba: {
        type: String,
        default: '700' 
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
      return this.isActive ? {weight: this.activeba} : {}
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
  .tab-item {
    display: inline-block;
  }
  .by {
    font-weight: 700;
  }
</style>