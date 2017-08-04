<template>
  <ul class="footer">
    <li><router-link to='/' :class="currNum==1?'footer-active':''" @click='isHigLight(1)'><i class="iconfont">&#xe602;</i><span>首页</span></router-link></li>
    <li><router-link to='/dingdan' :class="currNum==2?'footer-active':''"  @click='isHigLight(2)'><i class="iconfont">&#xe637;</i><span>订单</span></router-link></li>
    <li><router-link to='/Login' :class="currNum==3?'footer-active':''" @click='isHigLight(3)'><i class="iconfont">&#xe9ab;</i><span>我的</span></router-link></li>
  </ul>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    isHigLight: function (val) {
      this.$store.commit('ISHIGHTLIGHT', val)
    }
  },
  computed: {
    currNum: function () {
      console.log(this.$store.state.isHighLight)
      return this.$store.state.isHighLight
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
  @import '../../static/hotcss/px2rem';
  .footer{
      position: fixed;
      bottom: 0;
      width: 100%;
      height:px2rem(49);
      border-top:px2rem(1) solid #b6b6b6;
      background-color:rgba(246,246,246,0.95);
      z-index:99;
      display: flex;
      li{
        flex: 1;
        height:100%;
        a{
          width:100%;
          height:100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size:px2rem(12);
          text-decoration: none;
          color:#999;
          i{
            font-size:px2rem(25);
          }
          &.footer-active{
              color:#333;
              i{
                  color:#fed06a;
              }
          }
        }
      }
  }
</style>
