<template>
  <div class="loginName">
    <ul class="text">
      <li class="text-name">
        <div class="iconren"><i class='iconfont'>&#xe608;</i></div>
        <input type="text" v-model='val' ref='myid' placeholder="美团账户(手机/邮箱/用户名)">
        <div v-if=' this.val == "" '></div>
        <div v-else class="reset" @click='empty'>X</div>
      </li>
      <li class="text-password">
        <div class="iconsuo"><i class='iconfont'>&#xe604;</i></div>
        <input type="password" v-model='vall' ref='mypass' placeholder="请输入密码">
        <div v-if=' this.vall == "" '></div>
        <div v-else class='reset' @click='sEmpty'>X</div>
      </li>
    </ul>
    <div class='attion' ref='tips' @click='tipsNone'> ! 请填写此字段。</div>
    <div class="btn">
                                                                <!--绑定btnDisable属性（在下面的computed中），
                                                                     这种写在computed属性中的属性，如果要写在标签中，
                                                                     就要用v-bind绑定属性。
                                                                 -->
        <button type="submit" v-bind:class="{'my-btn':isAble}" ref='bbtn' v-bind:disabled="btnDisable" @click='bbtn()'>登录
                            <!--
                             用v-bind动态绑定class类名和属性，
                             可以判断是true还是false
                            -->
        </button>
    </div>
    <div class="forget">
      <a href="#">忘记密码</a>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'id',
    data () {
      return {
        val: '',
        vall: '',
        isAble: true
      }
    },
    methods: {
      tipsNone () {
//        这个方法是：点击提示块儿，提示块儿就会隐藏
        this.$refs.tips.style.display = 'none'
      },
      empty () {
        this.$refs.myid.value = ''
        this.val = ''
      },
      sEmpty () {
        this.$refs.mypass.value = ''
        this.vall = ''
      },
      bbtn () {
//        正则表达式判断：是否显示出提示块儿
        let that = this
        let myid = this.$refs.myid.value
        let mypass = this.$refs.mypass.value
        let regpass = /^[A-Za-z]+[0-9]+[A-Za-z0-9]*|[0-9]+[A-Za-z]+[A-Za-z0-9]*$/g
        let name = /^1\d{10}$/
        let email = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
        let tips = this.$refs.tips
//        取反的正则表达式，如果条件正确变成→→→→如果条件不正确
        if (!(name.test(myid) || email.test(myid) || regpass.test(mypass))) {
          tips.style.display = 'block'
        } else {
          axios.get('http://localhost:3000/users/mypage', {
            params: {
              user: myid,
              pass: mypass
            }
          }).then(function (res) {
            console.log(res)
            for (var i = 0; i < res.data.length; i++) {
              if (res.data[i].msg === 1 && res.data[i].code === '保存成功') {
                tips.style.display = 'none'
                that.$router.push('mypage')
              } else if (res.data[i].msg === 1 && res.data[i].code === '登录用户名及密码正确') {
                tips.style.display = 'none'
                that.$router.push('mypage')
              } else {
                tips.style.display = 'block'
              }
            }
          })
        }
      }
    },
    computed: {
//      控制和判断登录按钮是否可以点击，当账号和密码框为空时，封印登录按钮
      btnDisable: function () {
        if (this.val === '' && this.vall === '') {
          this.isAble = true
          return true
        } else {
          this.isAble = false
          return false
        }
      }
    }
  }
</script>

<style scoped lang='scss'>
  @import '../../static/hotcss/px2rem';

  .loginName {
    width: 100%;
    height: px2rem(200);
    .text {
      width: 100%;
      height: px2rem(98.5);
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
        .reset {
          display: inline;
          line-height: px2rem(60/2);
        }
      }
      .text-password {
        width: px2rem(100%);
        overflow: hidden;
        height: px2rem(99/2);
        padding: px2rem(15) 0 px2rem(15) 0;
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
        .reset {
          display: inline;
          line-height: px2rem(60/2);
        }
      }
    }
    .btn {
      padding-left: px2rem(10);
      button {
        width: px2rem(270);
        height: px2rem(84/2);
        background-color: #fdc900;
        color: rgba(107, 69, 10, 4);
        font-size: px2rem(20);
        border: none;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        border-radius: px2rem(2);
        margin: px2rem(15);
      }
      .my-btn {
        color: #c39504;
      }
    }
    .forget {
      float: right;
      margin-right: px2rem(25);
      font-size: px2rem(12);
      a {
        color: #6b450a;
        text-decoration: none;
        outline: 0;
      }
    }
    .attion {
      display: none;
      width: px2rem(120);
      font-size: px2rem(15);
      height: px2rem(60);
      background-color: white;
      text-align: center;
      line-height: px2rem(60);
      position: fixed;
      top: px2rem(180);
      right: px2rem(20);
      border: px2rem(0.5) solid black;
      box-shadow: 5px 5px 5px;
    }
  }
</style>
