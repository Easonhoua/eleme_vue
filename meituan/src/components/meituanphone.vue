<template>
  <div class="loginPhone">
    <ul class="text">
      <li class="text-name">
        <div class="iconren"><i class='iconfont'>&#xe666;</i></div>
        <input type="text" placeholder="请输入手机号">
      <li class="text-password">
        <div class="iconsuo"><i class='iconfont'>&#xe605;</i></div>
        <input type="password" placeholder="请输入短信验证码">
      </li>
      <li class="tishi">
        未注册过的手机将自动注册为美团账户
      </li>
    </ul>
    <div class="btn">
      <button type="submit" class="my-btn">登录</button>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style  scoped lang='scss'>
  @import '../../static/hotcss/px2rem';
  .loginPhone {
    width: 100%;
    height: px2rem(200);
    .text {
      width: 100%;
      height: px2rem(150);
      font-size: px2rem(13);
      box-sizing: border-box;
      padding-right: px2rem(20);
      padding-left: px2rem(20);
      background-color: white;
      .text-name {
        width: px2rem(100%);
        overflow: hidden;
        border-bottom: px2rem(0.5) solid #DDD8CE;
        height: px2rem(99/2);
        padding: px2rem(15) 0 px2rem(15) 0;
        .iconren i{
          display: inline;
          width: px2rem(20);
          height: px2rem(30);
          float: left;
          overflow: hidden;
          text-align: center;
          line-height: px2rem(30);
          font-size: px2rem(17);
        }
        input {
          border: none;
          display: block;
          width: px2rem(400/2);
          height: px2rem(60/2);
          font-size: px2rem(13);
          float: left;
          margin-left: px2rem(8);
          overflow: hidden;
          outline: none;
        }
      }
      .text-password {
        width: px2rem(100%);
        overflow: hidden;
        height: px2rem(99/2);
        padding: px2rem(15) 0 px2rem(15) 0;
        border-bottom: px2rem(0.5) solid #DDD8CE;
        .iconsuo i{
          display: inline;
          width: px2rem(20);
          height: px2rem(30);
          float: left;
          overflow: hidden;
          text-align: center;
          line-height: px2rem(30);
          font-size: px2rem(17);
        }
        input {
          border: none;
          display: block;
          width: px2rem(400/2);
          height: px2rem(60/2);
          font-size: px2rem(13);
          float: left;
          margin-left: px2rem(8);
          overflow: hidden;
          outline: none;
        }
      }
      .tishi{
        width: px2rem(100%);
        height: px2rem(99/2);
        font-size: px2rem(12);
        line-height: px2rem(99/2);
        float: left;
        color: #898989;
      }
    }
    .btn{
      padding-left: px2rem(10);
      .my-btn{
        width: px2rem(270);
        height: px2rem(84/2);
        background-color:#fdc900;
        color:#c39504;
        font-size: px2rem(20);
        border: none;
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        border-radius:px2rem(2);
        margin:px2rem(15) ;
      }
    }
  }
</style>
