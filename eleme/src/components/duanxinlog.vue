<template>
        <div class='reg'>
          <input type='text' placeholder="手机号" class="phonenum" />
          <br/>
          <input type='text' placeholder="验证码" calss="identifyingCode" />
          <p>温馨提示：未注册饿了么帐号的手机号，登录时将自动注册，且代表您已同意
            <a href="https://h5.ele.me/service/agreement/">《用户服务协议》</a>
          </p>
          <button>登陆</button>
        </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
@import '../../static/hotcss/px2rem';
      .reg {
        input {
          width: px2rem(300);
          height: px2rem(48);
          padding-left: px2rem(10);
          margin-top: px2rem(20);
          border: px2rem(1) solid #ddd;
          border-radius: px2rem(4);
          font-size: px2rem(14);
          color: #ddd;
          // outline: blue;
        }
        p {
          font-size: px2rem(14);
          color: #999;
          margin-top: px2rem(18);
          line-height: px2rem(20);

          a {
            color: #2395ff;
            text-decoration: none;
          }
        }
        button {
          width: px2rem(300);
          height: px2rem(42);
          padding-left: px2rem(10);
          margin-top: px2rem(20);
          border: px2rem(1) solid #ddd;
          border-radius: px2rem(4);
          font-size: px2rem(16);
          color: #fff;
          background: #00d762;
        }
      }
   
</style>
