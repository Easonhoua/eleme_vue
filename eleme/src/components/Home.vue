<template>
<div>
  <div class="home">
    <section class="head">
      <div class="head-t">
        <div class="head-tl">
          <i class="iconfont">&#xe6f0;</i>
          <span>{{currAddress}}</span>
          <i class="iconfont">&#xe611;</i>
        </div>
        <div class="head-tr">
          <span class="dunum">{{currTianqi.temperature}}°</span>
          <span class="tqword">{{currTianqi.description}}</span>
          <img :src='currTianqi.image_hash' />
        </div>
      </div>
      <a class="head-c" @click="searchshop()">
        <input type='text' class="search" placeholder="搜索商家、商品">
      </a>
      <div class="head-b">
        <p>
          <a :key='index' v-for='(item,index) in hotSearchList'>{{item.search_word}}</a>
        </p>
      </div>
    </section>
    <Gotop></Gotop>
    <Navlist></Navlist>
    <Shoplist></Shoplist>
    <Footers></Footers>
    
  </div>
  <div id="search" style='display: none;'>
      <a herf="#" class="goback" @click="goback()">
        <i class="iconfont">&#xe618;</i>
      </a>
      <input type="text" id="txt" placeholder="请输入商品名称" />
    </div>
  </div>
</template>

<script>
import Footers from './FooterBar'
import Navlist from './navlist'
import Shoplist from './shoplist'
import axios from 'axios'
import Gotop from './goTop'
import $ from 'jquery'

export default {
  name: 'Home',
  data() {
    return {
      currAddress: '获取位置中',     //当前地理位置
      currTianqi: [],              //当前天气
      hotSearchList: []            //热门搜索
    }
  },
  methods: {
    searchshop() {
      history.pushState(true,null,null);
      $('.home').hide();
      $('#search').show();
    },
    goback(){

      window.history.back();
      
    }
  },

  // beforeceated: function () {
    
  // },

  created: function () {
 
 window.onpopstate = function () {
      if (history.state) {
        $('.home').hide();
       $('#search').show();

      } else {
        $('.home').show();
       $('#search').hide();
      }
    }



    var that = this;
    // var id = that.$route.params.id;

    //获取头部当前位置
    axios.get("http://localhost:3000/getAddress").then(function (res) {
      if (res.status == 200 && res.statusText == 'OK') {
        var data = res.data;
        that.currAddress = data.name;
      } else {
        that.currAddress = '刷新重试';
      }
    }).catch(function (err) {
      that.currAddress = "服务器饿晕了";
    })

    //获取头部天气
    axios.get("http://localhost:3000/getTianQi").then(function (res) {
      if (res.status == 200 && res.statusText == 'OK') {
        var data = res.data;
        if (data.image_hash.indexOf('png') != -1) {  //当后缀为png时
          data.image_hash = 'https://fuss10.elemecdn.com/' + data.image_hash + '.png?imageMogr/format/webp/thumbnail/!69x69r/gravity/Center/crop/69x69/';
        } else {                        //当后缀为jpeg时
          data.image_hash = 'https://fuss10.elemecdn.com/' + data.image_hash + '.jpeg?imageMogr/format/webp/thumbnail/!69x69r/gravity/Center/crop/69x69/';
        }
        // console.log(data);
        that.currTianqi = data;
        // console.log(data);
      } else {
        // that.msg = data.showapi.res.code;
        alert("xxxxxxxxxxxxxxxxxxxxxxxxx")
      }
    }).catch(function (err) {
      alert("网络出问题啦1111111！！！！");
    })

    //获取头部热门搜索列表
    axios.get("http://localhost:3000/getHotSearch").then(function (res) {
      if (res.status == 200 && res.statusText == 'OK') {
        var data = res.data;
        // console.log(data)
        that.hotSearchList = data;
        // console.log(data);
      } else {
        // that.msg = data.showapi.res.code;
        alert("xxxxxxxxxxxxxxxxxxxxxxxxx")
      }
    }).catch(function (err) {
      alert("网络出问题啦1111111！！！！");
    })
  },
  components: {
    Footers: Footers,
    Navlist: Navlist,
    Shoplist: Shoplist,
    Gotop: Gotop
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import '../../static/hotcss/px2rem';
.home {
  width: 100%;
  height: 100%;
  .head {
    width: 100%;
    height: px2rem(120);
    padding: px2rem(10) px2rem(10);
    background-color: #0af;
    box-sizing: border-box;
    .head-t {
      display: flex;
      justify-content: space-between;
      .head-tl {
        height: px2rem(25);
        line-height: px2rem(25);
        i {
          font-size: px2rem(16);
          color: #fff;
        }
        span {
          color: #fff;
          width: px2rem(333/2);
          display: inline-block;
          overflow: hidden;
          text-overflow: ellipsis;
          height: px2rem(25);
          white-space: nowrap;
          font-size: px2rem(20);
          position: relative;
          top: px2rem(5);
        }
      }
      .head-tr {
        position: relative;
        width: 20%;
        .dunum {
          // position: absolute;
          padding-right: px2rem(35);
          text-align: right;
          display: block;
          font-size: px2rem(12);
          color: #fff;
        }
        .tqword {
          padding-right: px2rem(35);
          display: block;
          text-align: right;
          font-size: px2rem(12);
          color: #fff;
        }
        img {
          position: absolute;
          right: 0;
          top: 0;
          width: px2rem(28);
          height: px2rem(28);
          color: #fff;
        }
      }
    }
    .head-c {
      display: block;
      width: 100%;
      height: px2rem(36);
      margin-bottom: px2rem(8);
      .search {
        width: px2rem(347);
        height: px2rem(36);
        margin: px2rem(10) 0;
        border-radius: px2rem(18);
        text-align: center;
        font-size: px2rem(14);
        color: #fff;
        outline: none;
      }
    }
    .head-b {
      width: 100%;
      height: px2rem(14);
      p {
        width: 100%;
        overflow: auto;
        a {
          font-size: px2rem(12);
          color: #fff;
          line-height: px2rem(18);
          padding: 0 px2rem(4);
        }
      }
    }
  }
}

#search{
  width: 100%;
  height: px2rem(667);
  background: #fff;
position: relative;
}

#search input{
  margin-left: px2rem(40);
	width:82.5vw;
	height: 9.25vw;
	border: none;
	border-radius: 10vw;
	outline: none;
	background: #f8f8f8;
	color: #999;
	text-indent: 5vw;
}
#search i{
	color: #999;
	font-size: 8vw;
  position: absolute;
  top: px2rem(6);
  left: px2rem(6);
}
</style>
