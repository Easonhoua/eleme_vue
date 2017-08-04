<template>
  <div class="login">
    <div class="content">
      <header class="header">
        <div class="back" @click='myBack'><</div>
        <h1 class="h1">登录</h1>
        <p class="p">立即注册</p>
      </header>
      <div class="loginBody">
        <ul class="tab">
          <li :class="{'mytab':oneShow==true}"><a @click='addtab("phone")'>手机验证登录</a></li>
          <li :class="{'mytab':oneShow==false}"><a @click='addtab2("myid")'>美团账号登录</a></li>
        </ul>
        </div>
      <div>
        <component :is='currentview'></component>
      </div>
    </div>
    <div class="footer">
      <span>说明:注册/登录说明您已同意</span>
      <a href="#">《美团用户协议》</a>
    </div>
  </div>
</template>

<script>
  import phone from './meituanphone.vue';
  import myid from './meituanid.vue'
  export default {
    name: 'login',
    data () {
      return {
        currentview: 'phone',
        oneShow: true
      }
    },
    components: {
      phone: phone,
      myid: myid
    },
    methods: {
//      控制登录的tab选项跳转到手机验证码登录组件还是直接账号登录组件
      addtab (tab) {
        this.currentview = tab;
        this.oneShow = true;
      },
      addtab2 (tab) {
        this.currentview = tab;
        this.oneShow = false;
      },
      myBack () {
        window.history.back()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
  @import '../../static/hotcss/px2rem';
  .login{
    font-size: px2rem(13);
    -webkit-tap-highlight-color: transparent;
    height: 100%;
    min-width: px2rem(320);
    overflow: hidden;
    .content{
      font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
      line-height: 1;
      color: #333;
      .header{
        width: 100%;
        height: px2rem(52);
        border-bottom: px2rem(1) solid #ccc;
        background-color: #fff;
        color: #444;
        .back{
          height: 100%;
          width:px2rem(52);
          display: block;
          float: left;
          overflow: hidden;
          text-align: center;
          line-height: px2rem(52);
          font-size: px2rem(30);
        }
        .h1{
          display: block;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          float: left;
          font-size: px2rem(20);
          font-weight: normal;
          width: px2rem(130);
          height:100%;
          text-align: center;
          line-height: px2rem(52);
          margin-left: px2rem(30);
        }
        .p{
          display: block;
          float: right;
          font-size: px2rem(13);
          height: 100%;
          width: px2rem(80);
          line-height: px2rem(52);
          margin-right: px2rem(15);
          text-align: center;
        }
      }
      .loginBody{
        width:100%;
        height: px2rem(82/2);
        .tab{
          width: 100%;
          height:px2rem(41);
          overflow: hidden;
          font-size: inherit;
          position: relative;
          color: #656565;
          border: 0;
          background-color: #f9f9f9;
          padding: 0;
          li{
            font-size: px2rem(13);
            display: block;
            text-align: center;
            width:50%;
            height: 100%;
            line-height: px2rem(41);
            float: left;
            background-color: #f9f9f9;
            border-bottom:px2rem(1) solid #DDD8CE ;
            &:first-child{
              border-right: px2rem(1) solid #DDD8CE ;
            }
            a{
              display: block;
              width:px2rem(160.5);
              height: 100%;
              color: black;
              text-decoration: none;
            }
          }
          .mytab{
            border: none;
            background: white;
            box-sizing: border-box;
          }
        }
      }
    }
    .footer{
      font-size: px2rem(12);
      text-align: center;
      position: fixed;
      bottom: px2rem(40);
      left:px2rem(30);
      span{
        color: #898989;
      }
      a{
        color: #6b450a;
      }
    }
  }

 </style>
