<template>
  <div class='login'>
    <input type='text' placeholder="手机号/邮箱/用户名" class="username" ref='users' />
    <br/>
    <input type='password' placeholder="密码" class="password" ref='pwd' />
    <button @click="confirmation()">登陆</button>
    <div ref="tips" class="tips"></div>
  </div>
</template>

<script>

import Vue from 'vue'
import axios from 'axios'

export default {
  name: 'mima',
  methods: {

    confirmation() {
      let that = this;
      let password = that.$refs.pwd.value;
      let username = that.$refs.users.value;
      let tip = that.$refs.tips;
      that.$store.commit("CHAGEUSER", username);      
      if (/(^\s+)|(\s+)$/.test(username)) {
        tip.innerHTML = "手机号或邮箱不能为空"
      } else if (!(/^1[34578]\d{9}$/.test(username))) {
        tip.innerHTML = "请输入正确的手机号";
      } else if (password.length < 6) {
        tip.innerHTML = "密码长度不小于6位";
      }
      else {
        axios.get("http://localhost:3000/mine", {
          params: {
            user: username,
            pass: password
          }
        }).then(function (res) {
          for (var i = 0; i < res.data.length; i++) {
            if (res.data[i].msg == 1 && res.data[i].code == "数据保存成功") {	//账号新注册时
              tip.innerHTML = res.data[i].code;
              that.$router.push('mine');
            }
            else if (res.data[i].msg == 1 && res.data[i].code == "登录用户名及密码正确") {		//账号存在时,判断密码是否正确
              tip.innerHTML = res.data[i].code;
              that.$router.push('mine');
            } else {
              tip.innerHTML = res.data[i].code;
            }
          }
        })
      }
    }
  }
}
</script>

<style lang='scss' scoped>
@import '../../static/hotcss/px2rem';
.login {
  // display: none;
  input {
    width: px2rem(300);
    height: px2rem(48);
    padding-left: px2rem(10);
    margin-top: px2rem(20);
    border: px2rem(1) solid #ddd;
    border-radius: px2rem(4);
    font-size: px2rem(14);
    color: #333;
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
  .tips {
    width: 100%;
    height: 100%;
    font-size: px2rem(12);
    color: #4e4e4e;
    border-radius: px2rem(12);
    text-align: center;
  }
}
</style>
