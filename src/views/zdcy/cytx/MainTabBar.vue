<template>
    <tab-bar>
        <tab-bar-item path="/dzdcy">
        <div slot="item-text">4大主导产业</div>
        </tab-bar-item>

        <tab-bar-item path="/zdcy">
        <div slot="item-text">3大重点产业</div>
        </tab-bar-item>
        <tab-bar-item path="/zdpy">
        <div slot="item-text">3大重点培育</div>
        </tab-bar-item>      
      </tab-bar>
</template>

<script>
  import TabBar from '../../../components/tabbar/TabBar.vue'
  import TabBarItem from '../../../components/tabbar/TabBarItem.vue'
  import Dzdcy from '../cytx/Dzdcy.vue'
    
  export default {
    name: 'MainTabBar',
    components: {
        TabBar,
        TabBarItem,
        Dzdcy
    }
  }
</script>

<style scoped>
* {
    box-sizing: border-box;
}

div {
    display: block;
}

</style>