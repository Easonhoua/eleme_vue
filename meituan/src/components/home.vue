<template>
  <div class="home">
    <header>
      <a href='#'>
        <img src='../assets/img/bannertop.jpg' />
        <div class="search">
          <span><i class="iconfont">&#xe6c1;</i><strong>大学城创客小镇大学城</strong><em class="iconfont">&#xe6ca;</em></span>
          <span><i class="iconfont">&#xe660;</i><strong>鸡排</strong></span>
        </div>
      </a>
    </header>
    <main>
      <router-link to='/meishi'><img src='https://p1.meituan.net/jungle/bd3ea637aeaa2fb6120b6938b5e468a13442.png.webp'></img><span>美食</span></router-link>
      <router-link to='/meishi'><img src='http://p0.meituan.net/jungle/6b93ee96be3df7cf2bb6e661280b047d3975.png.webp'></img><span>超市</span></router-link>
      <router-link to='/meishi'><img src='http://p0.meituan.net/jungle/f33ed552c52b4466b6308a2c14dbc62d4882.png.webp'></img><span>鲜果购</span></router-link>
      <router-link to='/meishi'><img src='http://p0.meituan.net/jungle/45816fffb346c194d58e961fde7c0fad4901.png.webp'></img><span>甜品饮品</span></router-link>
      <router-link to='/meishi'><img src='http://p1.meituan.net/jungle/1543bbcb048218424e2420a6934e17b24236.png.webp'></img><span>正餐优选</span></router-link>
      <router-link to='/meishi'><img src='http://p0.meituan.net/jungle/f51c34aea31bf3685be15dedde2632bc5391.png.webp'></img><span>美团专送</span></router-link>
      <router-link to='/meishi'><img src='http://p1.meituan.net/jungle/151e31e319d2a04636092cebcdc9e1964639.png.webp'></img><span>能量西餐</span></router-link>
      <router-link to='/meishi'><img src='http://p1.meituan.net/jungle/a64dabee2a8c21626dc46c3002467d5f4254.png.webp'></img><span>精选小吃</span></router-link>
    </main>
     <List></List>
    <Footers></Footers>
  </div>
</template>

<script>
import Footers from './footer'
import List from './home_list'
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Footers: Footers,
    List: List
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
        position: relative;
        img{
          width: 100%;
          height: 100%;
          display: block;
        }
        .search{
          width:100%;
          position: absolute;
          top:0;
          height:px2rem(40);
          span:nth-of-type(1){
            float:left;
            display: inline-block;
            height: px2rem(28);
            margin-top: px2rem(10);
            padding: 0 px2rem(5);
            color: #ffffff;
            font-size: px2rem(15);
            background: rgba(0,0,0,0.3);
            border-radius: px2rem(13);
            margin-left: px2rem(10);
            max-width: 40%;
            margin-right: px2rem(12);
            i{
              font-size:px2rem(20);
              line-height:px2rem(28);
               position: relative;
              top:px2rem(-5);
            }
            strong{
              display: inline-block;
              width: px2rem(88);
              margin:0 auto;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              font-weight: normal;
              line-height: px2rem(28);
            }
            em{
              font-size:px2rem(18);
              position: relative;
              top:px2rem(-5);
            }
          }
          span:nth-of-type(2){
              float:left;
              display: inline-block;
              height: px2rem(28);
              padding-top: px2rem(4);
              box-sizing: border-box;
              border-radius: px2rem(13);
              text-align: center;
              margin-top: px2rem(10);
              margin-right: px2rem(10);
              width: 45%;
              background: #fff;
              i{
                float:left;
                font-size:px2rem(16);
                margin-left:px2rem(5);
                color:#333;
              }
              strong{
                font-weight: normal;
                color:#333;
                font-size:px2rem(14);
                line-height: px2rem(28);
                float:left;
                position: relative;
                top:px2rem(-5);
              }
          }
        }
      }
   }
   main{
      display: flex;
      // height:px2rem(186);
      flex-flow: wrap;
      background-color:#fff;
      padding-bottom: px2rem(30);
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
