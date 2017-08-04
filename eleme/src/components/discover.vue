<template>
<div>
  <Headers></Headers>
  <div class="discover">
    <section class="discovermain">
      <div class="secl">
        <h2>积分商城</h2>
        <p>0元好物在这里！</p>
        <img src="https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/" />
      </div>
      <div class="secr">
        <div class="secrt">
          <h2>美味爆料</h2>
          <p>无啤酒不夏天</p>
          <img src="https://fuss10.elemecdn.com/e/ff/3b9c4a4dfda1df548dc9274f6a7c1jpeg.jpeg?imageMogr/format/webp/" />
        </div>
        <div class='secrb'>
          <h2>推荐有奖</h2>
          <p>5元现金拿不停</p>
          <img src="https://fuss10.elemecdn.com/6/76/8d42eef97ff4c1c2b671085358541jpeg.jpeg?imageMogr/format/webp/" />
        </div>
      </div>
      <a href="#" class="tupian">
        <img src='https://fuss10.elemecdn.com/b/6d/656006edcd86033a1b32b23ddea37jpeg.jpeg?imageMogr/format/webp/' />
      </a>
    </section>
    <section class="mstj">
      <h2>美食推荐</h2>
      <p>你的口味，我都懂得
        </p>
          <div class="mainti">
            <ul>
              <li>
                <img src="https://fuss10.elemecdn.com/e/c3/af359945a94fa9ec816cd4a5c1a45jpeg.jpeg?imageMogr/format/webp/" />
                <p>探险家炒饭套餐</p>
                <span>￥28</span>
              </li>
              <li>
                <img src="https://fuss10.elemecdn.com/b/c4/d00faa20745c49cc9273d7e9c9e02jpeg.jpeg?imageMogr/format/webp/" />
                <p>野山椒牛肉</p>
                <span>￥28</span>
              </li>
              <li>
                <img src="https://fuss10.elemecdn.com/3/87/c5d7dbe4acf805c7c220092301b4ejpeg.jpeg?imageMogr/format/webp/" />
                <p>老北京鸡肉卷</p>
                <span>￥28</span> 
              </li>
            </ul>
            <a class="more1" href='https://h5.ele.me/ulike/#request_id=d7a3857c-fe54-4675-a118-5f31bf743c9c'> 查看更多> </a>
          </div>
    </section>
    <section class="xshl">
      <h2>现实好礼</h2>
      <p>小积分换豪礼 
        </p>
          <div class="mainhl">
            <ul>
              <li>
                <img src="https://fuss10.elemecdn.com/0/53/47a80976e90c99f40b745cde5246fjpeg.jpeg?imageMogr/format/webp/" />
                <p>iPhone 7 32G</p>
                <span>400积分</span>
              </li>
              <li>
                <img src="https://fuss10.elemecdn.com/a/a2/206f0d7fa5af4b349b641fa35e730jpeg.jpeg?imageMogr/format/webp/" />
                <p>7元饿了么红包</p>
                <span>400积分</span>
              </li>
              <li>
                <img src="https://fuss10.elemecdn.com/2/cb/0409d2097e04488659bf50a5e49d7jpeg.jpeg?imageMogr/format/webp/" />
                <p>非卖公仔转转乐</p>
                <span>400积分</span> 
              </li>
            </ul>
            <a href="#" class="more2"> 查看更多> </a>
          </div>
    </section>
    <Footers></Footers>
  </div>
  </div>
</template>

<script>
import Footers from './FooterBar'
import Headers from './Header'

export default {
  name: 'Home',
  data() {
    return {
      title:this.title.state.title
    }
  },
  components: {
    Footers: Footers,
    Headers: Headers
  },
   created:function(){
        this.$store.commit("CHANGTITLE",'发现');
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import '../../static/hotcss/px2rem';
.discover {
  width: 100%;
  height: 100%;
  background: #eee;
  margin: px2rem(44) 0 px2rem(60) 0;
  .discovermain {
    width: 100%;
    height: 100%;
    background: #fff;
    .secl {
      width: 50%;
      height: px2rem(173);
      padding: px2rem(16);
      display: inline-block;
      float: left;
      border-right: 1px solid #ccc;
      h2 {
        color: rgb(255, 151, 0);
        line-height: 1.2;
        font-size: px2rem(20);
        font-weight: normal;
        margin-bottom: px2rem(6);
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      p {
        line-height: 1.2;
        font-size: px2rem(12);
        color: #999;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      img {
        width: px2rem(75);
        height: px2rem(75);
        margin: px2rem(10) px2rem(10) px2rem(10) px2rem(30)
      }
    }
    .secr {
      width: 50%;
      float: right;
      height: px2rem(173);
      .secrt {
        width: 100%;
        height: 50%;
        padding: px2rem(16) px2rem(10) px2rem(8) px2rem(16);
        border-bottom: 1px solid #ccc;
        position: relative;
        h2 {
          color: rgb(245, 120, 93);
          line-height: 1.2;
          font-size: px2rem(18);
          margin-bottom: px2rem(6);
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-weight: 400;
        }
        p {
          font-size: px2rem(12);
          color: #999;
        }
        img {
          width: px2rem(45);
          height: px2rem(45);
          position: absolute;
          right: px2rem(10);
          top: px2rem(15);
        }
      }
      .secrb {
        width: 100%;
        height: 50%;
        padding: px2rem(16) px2rem(10) px2rem(8) px2rem(16);
        position: relative;
        h2 {
          color: rgb(27, 169, 225);
          line-height: 1.2;
          font-size: px2rem(18);
          margin-bottom: px2rem(6);
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-weight: 400;
        }
        p {
          font-size: px2rem(12);
          color: #999;
        }
        img {
          width: px2rem(45);
          height: px2rem(45);
          display: block;
          position: absolute;
          right: px2rem(10);
          top: px2rem(15);
        }
      }
    }
    .tupian img {
      display: block;
      width: 100%;
      height: px2rem(97);
      padding-top: px2rem(10);
      background-color: #eee;
      padding-bottom: px2rem(10);
    }
  }
  .mstj {
    background: #fff;
    width: 100%;
    height: 100%;
    text-align: center;
    // padding: 0 px2rem(10) 0 px2rem(10);
    h2 {
      color: #333;
      font-size: px2rem(20);
      font-weight: 600;
      padding-top: px2rem(15);
    }
    p {
      font-size: px2rem(10);
      color: #999;
      text-align: center;
      padding-bottom: px2rem(10);
    }
    .mainti {
      padding-bottom: px2rem(6);  
      ul {
        display: flex;
        justify-content: space-around;
        li {
          flex: 1;
          img {
            width: px2rem(111);
            height: px2rem(110);
          }
          p {
            font-size: px2rem(12);
            text-overflow: ellipsis;
            overflow: hidden;
            padding: 0;
            color: #333;
          }
          span{
            font-size: px2rem(10);
            color: #ff5339;
          }
        }
      }
      .more1{
        color: #999;
        font-size: px2rem(12); 
        display: block; 
        line-height: px2rem(40);
        text-decoration: none; 
      }
    }
  }



  .xshl {
    background: #fff;
    width: 100%;
    height: 100%;
    text-align: center;
    margin:  px2rem(10) 0 px2rem(18) 0;
    h2 {
      color: #333;
      font-size: px2rem(20);
      font-weight: 600;
      padding-top: px2rem(15);
    }
    p {
      font-size: px2rem(10);
      color: #999;
      text-align: center;
      padding-bottom: px2rem(10);
    }
    .mainhl {
      ul {
        display: flex;
        justify-content: space-around;
        li {
          flex: 1;
          img {
            width: px2rem(111);
            height: px2rem(110);
          }
          p {
            font-size: px2rem(12);
            text-overflow: ellipsis;
            overflow: hidden;
            padding: 0;
            color: #333;
          }
          span{
            font-size: px2rem(10);
            color: #ff5339;
          }
        }
      }
      .more2{
        color: #999;
        font-size: px2rem(12); 
         line-height: px2rem(40);
         text-decoration: none; 
         display: block;
      }
    }
  }
}
</style>