<template>
  <div class="myPage">
    <header>
        <img src=''/>
        <p class="user">你的昵称<i class="iconfont">&#xe6ca;</i></p>
    </header>
    <ul>
      <li>
        <p><i class="iconfont">&#xe6c1;</i>收货地址管理<em class="iconfont">&#xe6ca;</em></p>
        <p><i class="iconfont">&#xe6e1;</i>商家代金券<em class="iconfont">&#xe6ca;</em></p>
      </li>
      <li>
        <p><i class="iconfont">&#xe601;</i>意见反馈<em class="iconfont">&#xe6ca;</em></p>
        <p><i class="iconfont">&#xe62a;</i>常见问题<em class="iconfont">&#xe6ca;</em></p>        
      </li>
    </ul>
    <p class="tel">客服电话：101-097-77</p>
    <p class="server-time">服务时间：9:00-23:00</p>
    <Footers></Footers>
  </div>
</template>

<script>
import Footers from '../components/footer'
export default {
  name: 'myPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Footers
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
  @import '../../static/hotcss/px2rem';
  header{
    height:px2rem(160);
    background:url('../assets/img/user-banner.png') no-repeat center top;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
      width: px2rem(72);
      height: px2rem(72);
      border:px2rem(3) solid rgba(255,255,255,0.4);
      border-radius:50%;
      background:pink;
      display: block;
      margin-top: px2rem(28);
      margin-bottom: px2rem(18);
    }
    .user{
        font-size: px2rem(15);
        color: #333;
        height:px2rem(16);
        line-height: px2rem(16);
        position:relative;
        top:px2rem(-5);
        i{
          margin-left:px2rem(6);
          font-size:px2rem(14);
          position: absolute;
          top:px2rem(2);
        }
    }
  }
  ul{  
    li{
      font-size: px2rem(14);
      display: block;
      color: #333;  
      background:#fff;
      margin-bottom:px2rem(10);
      p{
        height: px2rem(44);
        line-height: px2rem(44);
        margin-left: px2rem(15);
        padding-right: px2rem(9);
        border-bottom: px2rem(1) solid #E4E4E4;
        &:last-child{
          border-bottom:none;
        }
        i{
          font-size:px2rem(18);
          color:#d5d5d5;
          margin-right:px2rem(10)
        }
        em{
          float: right;
          font-size:px2rem(16);
          color:#d5d5d5;
        }
      }
    }
  }
  .tel{
    height:px2rem(45);
    text-align: center;
    line-height: px2rem(45);
    font-size:px2rem(15);
    font-family:'微软雅黑';
    color:#FFB000;
    background-color: #fff;
    margin-bottom: px2rem(8);
  }
  .server-time{
    text-align: center;
    font-size: px2rem(14);
    color: #999;
  }
</style>
