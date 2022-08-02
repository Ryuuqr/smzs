<template>
    <tzysu-tab-bar class="wz">
        <tzysu-tab-bar-item path="/tdcb">
        <div slot="item-text">土地成本</div></div>
        </tzysu-tab-bar-item>
        <tzysu-tab-bar-item path="/ydjg">
        <div slot="item-text">用电价格</div>
        </tzysu-tab-bar-item>
        <tzysu-tab-bar-item path="/trq">
        <div slot="item-text">天然气</div>
        </tzysu-tab-bar-item> 
        <tzysu-tab-bar-item path="/ysjg">
        <div slot="item-text">用水价格</div>
        </tzysu-tab-bar-item> 
        <tzysu-tab-bar-item path="/rgcb">
          <div slot="item-text">人工成本</div>
          </tzysu-tab-bar-item> 
      </tzysu-tab-bar>
</template>

<script>
  import TzysuTabBar from '../tzysu/tzysutabbar/TzysuTabBar.vue'
  import TzysuTabBarItem from '../tzysu/tzysutabbar/TzysuTabBarItem.vue'
    
  export default {
    name: 'TzysuMainTabBar',
    components: {
        TzysuTabBar,
        TzysuTabBarItem,
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

.wz {
    margin-top: -0.4rem;
    margin-left: -0.45rem;
    margin-bottom: 0.3rem;
    overflow-y: auto;
}

.wz::-webkit-scrollbar{
    display: none;
}
</style>