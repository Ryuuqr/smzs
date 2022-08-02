<template>
    <div id="tab">
      <slot></slot>
      </div>
</template>

<script>
  export default {
    name: 'Tab'
  }
</script>

<style scoped>
#tab-bar {
  display: flex;
  }
</style>