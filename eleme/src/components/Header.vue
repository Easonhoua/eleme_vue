<template>
  <div class="header">
    <header>
        <i class="iconfont" @click="goback()">&#xe618;</i>
        <h2>{{ title }}</h2>
    </header>

     <!-- <Gotop></Gotop>  -->
  </div>
</template>
<script>
// import Gotop from './goTop'

export default {
  name: 'Home',
  data() {
    return {
        title:this.$store.state.title
    }
  },
   created:function(){
        this.title = this.$store.state.title
    },
  components: {
    // Gotop: Gotop
  },
  methods:{
    goback(){
      window.history.back();
    },
  computed:{
    title:function(){
      return this.$store.state.title
    }
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import '../../static/hotcss/px2rem';

header{
  width: 100%;
  height: px2rem(44);
  background-image: linear-gradient(90deg,#0af,#0085ff);
  position: fixed;
  top: 0;
  left: 0;  
  z-index:100;
  i{
    font-size: px2rem(24);
    color: #fff;
    display: inline-block;
    width: px2rem(44);
    height: px2rem(44);
    text-align: center;
    line-height: px2rem(44);
  
  }
  h2{
    font-size: px2rem(18);
    color: #fff; 
    position: absolute;
    left: 46%;
    top: 0;
    line-height: px2rem(44);
  }
}



</style>
