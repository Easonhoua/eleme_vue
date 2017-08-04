<template>
  <div class="reg">
    <div class="regmain">
      <div class="photo"></div>
      <div class="checksec">
      <a :key=index v-for="(item,index) in changes" :class="{active:isactive == index}" @click="isactive = index,tabtoggle('login'+(index+1))" >{{ item }}</a>


        <!-- <a href="javascript:;" @click="tabtoggle('Mima')" class="active">密码登陆</a> -->
        <!-- <a href="javascript:;" @click="tabtoggle('Duanxin')">短信登陆</a> -->
      </div>
      <div class="loginmain">
        <component :is='currentview'></component>
      </div>
      <div class="about">关于我们</div>
    </div>
  </div>
</template>
<script>

import Duanxin from './duanxinlog.vue';
import Mima from './mimalog.vue';


export default {
  data() {
    return {
      currentview: Mima,
      changes: ['密码登陆','短信登陆'],
      isactive: 0,
    }
  },
  components: {
    login1: Mima,
    login2: Duanxin
  },
  methods: {
    tabtoggle: function (tab) {
      this.currentview = tab;
      console.log(this.currentview)
    }
    
  }
}
</script>

<style lang='scss' scoped>
@import '../../static/hotcss/px2rem';
.reg {
  width: 100%;
  height: 100%;
  background: #fff;
  .regmain {
    width: 100%;
    height: 100%;
    padding: 0 px2rem(30);
    padding-top: px2rem(30);

    .photo {
      width: 100%;
      height: px2rem(80);
      background: url('../assets/img/`JQT[8_9EK}2(EK6[}OX4JP.png') no-repeat 50% 0;
    }
    .checksec {
      padding-left: 24%;

      a {
        font-size: px2rem(14);
        padding-bottom: px2rem(4);
        cursor: pointer;
        color: #000;
        text-decoration: none;
        margin-right: px2rem(40);
      }
      .active {
        color: #2395ff;
        border-bottom: px2rem(2) solid #2395ff;
      }
    }
    .loginmain {
      width: 100%;
      height: 100%;
    }
    .about {
      margin-top: px2rem(30);
      width: 100%;
      height: px2rem(245);
      text-align: center;
      color: #999;
      font-size: px2rem(10);
    }
  }
}
</style>

