<template>
  <div class="home">
    <Headers></Headers>
    <section class="ordermain">
      <img src='//fuss10.elemecdn.com/f/18/9fb04779371b5b162b41032baf5f3gif.gif' />
      <h3>登录后查看外卖订单</h3>
      <!-- 调到登陆注册页面 -->
      <router-link to='/reg'>立即登录</router-link>
    </section>
    <Footers></Footers>
  </div>
</template>

<script>
import Footers from './FooterBar'
import Headers from './Header'



export default {
  name: 'Home',
   data() {
        return {
           title:this.$store.state.title 
        }
    },
    created:function(){
        this.$store.commit("CHANGTITLE",'订单');
    },
  components: {
    Footers: Footers,
    Headers: Headers
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import '../../static/hotcss/px2rem';

.home {
  height: 100%;
  .ordermain {
    text-align: center;
    img {
      margin-top: px2rem(150)
    }
    h3 {
      margin: .333333rem 0 .266667rem;
      color: #6a6a6a;
      font-weight: 400;
      font-size: px2rem(16);
    }
    a {
      display: block;
      height: px2rem(40);
      width: px2rem(120);
      border: none;
      border-radius: .053333rem;
      background-color: #56d176;
      color: #fff;
      text-align: center;
      line-height: px2rem(40);
      font-size: px2rem(14);
      font-family: inherit;
      outline: none; 
      text-decoration: none; 
      margin: 0 auto;
    }
  }
}
</style>
