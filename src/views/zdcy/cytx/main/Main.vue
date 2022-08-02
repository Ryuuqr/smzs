<template>
    <tab>
        <tab-item path="/cd">
        <div slot="item-text" class="text"> 钢铁与装备制造 </div>
        </tab-item>
        <tab-item path="/cda">
        <div slot="item-text" class="text"> 新材料 </div>
        </tab-item>
        <tab-item path="/cdb">
        <div slot="item-text" class="text"> 文旅康养 </div>
        </tab-item> 
        <tab-item path="/cdc">
          <div slot="item-text" class="text"> 现代特色农业 </div>
          </tab-item> 
      </tab>
</template>

<script>
  import Tab from '../main/tabbar/Tab.vue'
  import TabItem from '../main/tabbar/TabItem.vue'
    
  export default {
    name: 'Main',
    components: {
        Tab,
        TabItem,
    }
  }
</script>

<style scoped>
* {
    box-sizing: border-box;
}

.text {
  display: inline-block;
  font-size: .34667rem;
  padding: .13333rem .21333rem;
}

div {
    display: block;
}

</style>