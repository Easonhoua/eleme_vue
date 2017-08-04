<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped lang='scss'>
@import './static/hotcss/px2rem';
#app{
  height:100%;
  /* display: flex; */
}
</style>
