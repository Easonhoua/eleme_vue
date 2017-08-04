<template>
<div>
  <Headers></Headers>
  <div class="mine">
    <div class="container">
      <a class="login">
        <router-link to='/reg'>
        <img class="user_icon" />
        <div>
          <h2>{{ user }}</h2>
          <p>
            <i class="iconfont tel">&#xe625;</i>登录后享受更多特权</p>
        </div>
        <i class="iconfont in">&#xe649;</i>
        </router-link>
      </a>
  
      <nav>
        <a href="#">
          <span>
            <em class="iconfont">1</em>个</span>
          <span>优惠</span>
        </a>
        <a href="#">
          <span>
            <em class="iconfont">3</em>分</span>
          <span>积分</span>
        </a>
      </nav>
      <!--内容区域-->
      <main>
        <ul class="list list1">
          <li>
            <a href="#">
              <em class="iconfont">&#xe613;</em>
              <span>我的订单</span>
              <i class="iconfont">&#xe649;</i>
            </a>
          </li>
          <li>
            <a href="#">
              <em class="iconfont">&#xe640;</em>
              <span>积分商城</span>
              <i class="iconfont">&#xe649;</i>
            </a>
          </li>
          
            
            <li>
              <router-link to='/vippart'>
              <em class="iconfont">&#xe628;</em>
              <span>饿了么会员卡</span>
              <i class="iconfont">&#xe649;</i>
              </router-link>
              </li>
            
          
        </ul>
        <ul class="list list2">
          <li>
            <a href="#">
              <em class="iconfont">&#xe690;</em>
              <span>服务中心</span>
              <i class="iconfont">&#xe649;</i>
            </a>
          </li>
          <li>
            <a href="#">
              <em class="iconfont">&#xe640;</em>
              <span>下载饿了么APP</span>
              <i class="iconfont">&#xe649;</i>
            </a>
          </li>
        </ul>
      </main>
    </div>
    <Footers></Footers>
  </div>
  </div>
</template>

<script>
import Footers from './FooterBar'
import Headers from './Header'
export default {
  name: 'Mine',
  ddata() {
        return {
           title:this.title.state.title 
        }
    },
    created:function(){
        this.$store.commit("CHANGTITLE",'我的');
    },
  computed:{
    user:function(){
      return this.$store.state.user
    }
  },
  components: {
    Footers: Footers,
    Headers:Headers
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import '../../static/hotcss/px2rem';
.mine {
  height: 100%;
  header {
    .header_top {
      background-image: linear-gradient(90deg, #0af, #0085ff);
      width: 100%;
      height: px2rem(87.98/2);
      text-align: center;
      position: fixed;
      top: 0;
      z-index: 99;
      background-image: linear-gradient(90deg, #0af, #0085ff);
      .back {
        color: #fff;
        font-size: px2rem(37/2);
        margin-left: px2rem(13/2);
        position: absolute;
        left: px2rem(13/2);
        top: px2rem(20/2)
      }
      span {
        font-size: px2rem(36/2);
        line-height: px2rem(87.98/2);
        color: #fff;
        font-weight: bold;
      }
    }
  }
  .container {
    position: absolute;
    width: 100%;
    top: px2rem(87.98/2);
    bottom: px2rem(100/2);
    background-color: #f5f5f5;
    a.login {
      //display: flex;
      background-image: linear-gradient(90deg, #0af, #0085ff);      
      padding: px2rem(50/2) px2rem(30.6/2);
      height: px2rem(220/2);
      box-sizing: border-box;
      color: #fff;
      display: block;
      overflow: hidden; //align-items:center;
      .user_icon {
        width: px2rem(120/2);
        height: px2rem(120/2);
        background-color: skyblue;
        border-radius: 50%;
        float: left;
        margin-right: px2rem(36/2);
      }
      div {
        float: left;
        h2 {
          height: px2rem(52/2);
          font-size: px2rem(37/2);
          font-weight: normal;
          margin-bottom: px2rem(16/2);
          color: #fff;
        }
        p {
          height: px2rem(33/2);
          font-size: px2rem(24/2);
          color: #fff;
          .tel {
            font-size: px2rem(32/2);
            margin-left: px2rem(-5/2);
          }
        }
      }
      .in {
        font-size: px2rem(30/2);
        float: right;
        line-height: px2rem(101/2);
        color: #fff;
      }
    }
  }
  nav {
    width: 100%;
    height: px2rem(168/2);
    background-color: #fff; // margin-bottom: px2rem(20/2);
    border-bottom: px2rem(1/2) solid #ddd;
    a {
      width: 50%;
      height: 100%;
      float: left;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-sizing: border-box;
      text-decoration: none;
      color: #666;
      span:first-child {
        margin-bottom: px2rem(10/2);
        font-size: px2rem(14);
        margin-top: px2rem(34/2);
        em {
          font-size: px2rem(51/2);
          color: #ff5f3e;
          font-weight: bolder;
        }
      }
      span:last-child {
        font-size: px2rem(13);
        display: inline-block;
      }
    }
    a:first-child {
      border-right: px2rem(1/2) solid #ddd;
    }
    a:last-child {
      span {
        em {
          color: #6ac20b;
        }
      }
    }
  }
  main {
    .list {
      margin-top: px2rem(20/2);
      background-color: #fff;
      li {
        padding-left: px2rem(78/2);
        height: px2rem(84/2);
        line-height: px2rem(84/2);
        a {
          text-decoration: none;
          display: block;
          font-size: px2rem(35/2);
          border-bottom: px2rem(1/2) solid #ddd;
          color: #333;
          position: relative;
          em {
            position: absolute;
            left: px2rem(-47/2);
            font-size: px2rem(33/2);
          }
          i {
            float: right;
            font-size: px2rem(28/2);
            margin-right: px2rem(20/2);
            color: #bbb;
          }
        }
        &:nth-child(1) em {
          color: #4aa5f0;
        }
        &:nth-child(2) em {
          color: #febda9;
        }
        &:nth-child(3) em {
          color: #ffc636;
        }
      }
    }

  }
  }


</style>
