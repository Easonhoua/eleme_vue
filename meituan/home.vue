<template>
  <div class="home">
    <header>
      <a href='#'>
        <img src='../assets/img/bannertop.jpg' />        
        <span></span>
        <span></span>
      </a>
    </header>
    <main>
      <a><img src='https://p1.meituan.net/jungle/bd3ea637aeaa2fb6120b6938b5e468a13442.png.webp'></img><span>美食</span></a>
      <a><img src='http://p0.meituan.net/jungle/6b93ee96be3df7cf2bb6e661280b047d3975.png.webp'></img><span>超市</span></a>
      <a><img src='http://p0.meituan.net/jungle/f33ed552c52b4466b6308a2c14dbc62d4882.png.webp'></img><span>鲜果购</span></a>
      <a><img src='http://p0.meituan.net/jungle/45816fffb346c194d58e961fde7c0fad4901.png.webp'></img><span>甜品饮品</span></a>
      <a><img src='http://p1.meituan.net/jungle/1543bbcb048218424e2420a6934e17b24236.png.webp'></img><span>正餐优选</span></a>
      <a><img src='http://p0.meituan.net/jungle/f51c34aea31bf3685be15dedde2632bc5391.png.webp'></img><span>美团专送</span></a>
      <a><img src='http://p1.meituan.net/jungle/151e31e319d2a04636092cebcdc9e1964639.png.webp'></img><span>能量西餐</span></a>
      <a><img src='http://p1.meituan.net/jungle/a64dabee2a8c21626dc46c3002467d5f4254.png.webp'></img><span>精选小吃</span></a>
    </main>

    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../components/footer'
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Footer: Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
  @import '../../static/hotcss/px2rem';
  .home{
    flex:1;
   header{
      a{
        display:block;
        height:px2rem(145);
        img{
          width: 100%;
          height: 100%;
          display: block;
        }
        // background-size:px2rem(750/2) px2rem(340/2)
      }
   }
   main{
      display: flex;
      // height:px2rem(186);
      flex-flow: wrap;
      background-color:#fff;
      margin-bottom: px2rem(30);
      a{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        width: 25%;
        margin-top: px2rem(14);
        img{
          width: px2rem(41);
          height: px2rem(41);
          display: block;
          margin-bottom: px2rem(12);
        }
        span{
          color: #2f2f2f;
          font-size:px2rem(12)
        }
      }
   }
  }
</style>
