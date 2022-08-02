<template>
    <div id="tab-bar">
      <slot></slot>
      </div>
</template>

<script>
  export default {
    name: 'TzysuTabBar'
  }
</script>

<style scoped>
#tab-bar {
  display: flex;
  }
</style>