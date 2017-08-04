<template>
  <div class="dingdan">
    <header class='header'>
      <div class='back' @click='webback'><</div>
      <h1>订单确认</h1>
    </header>
    <div id='main'>
      <div class='main-c'>
        <div class='add-time'>
          <div class='my-add'>
            <div class='ico'><i class='iconfont'>&#xe6c1;</i></div>
            <p class='end-add'>福田区深圳市民中心C区</p>
            <p class='msg'>
              <span class='first-name'>范</span>
              <span class='call'>先生</span>
              <span class='phone-num'>17688993102</span>
              <span></span>
            </p>
          </div>
          <div class='my-time'>
            <div class='zhong'><i class='iconfont'>&#xe60e;</i></div>
            <div class='user-time'>
              立即送出
              <em>(大约13:55送达)</em>
            </div>
          </div>
        </div>
        <div class='food'>
          <div class='food-title'>
            <div class='food-add'><span>西贝筱面村(深圳中心城区还有哪儿我也不知道)</span></div>
            <div class='logo'>美团专送</div>
          </div>
          <div class='food-list'>
            <div class='food-item'>
              <div class='food-img'>图</div>
              <div class='food-price'><p class='food-price-num'>￥14.5</p></div>
              <div class='food-name'>
                <span>食物的名字</span>
                <p>x25</p>
              </div>
            </div>
          </div>
          <ul class='all-cost'>
            <li class='food-box'>
              <span class='box-name'>餐盒费</span>
              <span class='box-price'>￥2</span>
            </li>
            <li class='food-box'>
              <span class='box-name'>配送费</span>
              <span class='box-price'>￥5</span>
            </li>
          </ul>
          <div class='cut-line'>
            <div class='cut'>
            </div>
          </div>
          <div class='shop-shell'>
            <div class='shop'>
              <p>商家代金券</p>
             <div class='shop-right'>
               <span>暂无可用</span>
               <div>></div>
             </div>
            </div>
          </div>
          <div class='cut-line'>
            <div class='cut'>
            </div>
          </div>
          <ul class='mypay'>
            <li class='pay'>
              <span class='font-big'>
                实付
                <em>￥50.00</em>
              </span>
              <span class='font-small'>
                共计￥50.00
              </span>
            </li>
          </ul>
        </div>
        <div class='pay-what'>
          <ul class='choose-pay'>
            <span>支付方式</span>
            <span>在线支付</span>
          </ul>
          <div class='beizhu'>
            <label>备注:</label>
            <input type="text" placeholder='请填写备注'>
          </div>
        </div>
      </div>
    </div>
    <div class='footer'>
      <button type='submit' class='sub-btn'>提交订单</button>
      <div class='money'>
        <span>待支付</span>
        <em class='money-num'>￥50.00</em>
      </div>
      <div class='footer-left'>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'dingdan',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {},
    methods: {
      webback () {
        window.history.back()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
  @import '../../static/hotcss/px2rem';

  .dingdan {
    font-family: Arial, Helvetica, sans-serif;
    width: px2rem(100%);
    height: px2rem(655);
    .header {
      width: 100%;
      height: px2rem(43);
      .back {
        display: inline-block;
        width: px2rem(40);
        height: px2rem(43);
        text-align: center;
        line-height: px2rem(40);
        float: left;
        font-size: px2rem(26);
      }
      h1 {
        color: #333;
        font-weight: normal;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin: 0 px2rem(65);
        text-align: center;
        line-height: px2rem(44);
        font-size: px2rem(17);
      }
    }
    #main {
      width: px2rem(100%);
      height: px2rem(600);
      display: block;
      .main-c {
        width: px2rem(100%);
        height: px2rem(600);
        margin: 0 px2rem(10);
        .add-time {
          margin-top: px2rem(12);
          background-color: #ffffff;
          width: px2rem(100%);
          height: px2rem(130);
          .my-add {
            width: px2rem(100%);
            height: px2rem(78);
            padding: px2rem(15) px2rem(20) px2rem(15) px2rem(40);
            line-height: px2rem(24);
            position: relative;
            .ico i{
              position: absolute;
              left: px2rem(10);
              top: px2rem(15);
              width: px2rem(20);
              height: px2rem(20);
              font-size: px2rem(20);
            }
            .end-add {
              color: #333;
              font-size: px2rem(16);
              font-weight: bold;
            }
            .msg {
              color: #666;
              font-size: px2rem(15);
              .first-name {
                margin-right: px2rem(10);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                float: left;
                max-width: 6em;
              }
              .call {
                margin-right: px2rem(30);
              }
              .call:after {
                content: '';
                position: absolute;
                right: px2rem(13);
                top: 50%;
                width: px2rem(8);
                height: px2rem(8);
                margin-top: px2rem(-5);
                border: px2rem(1) solid #adadad;
                border-width: px2rem(1) px2rem(1) 0 0;
                transform: rotate(45deg);
              }
            }
          }
          .my-time {
            padding: px2rem(15) px2rem(20) px2rem(15) px2rem(40);
            border-top: px2rem(1) solid #f0f0f0;
            position: relative;
            display: block;
            .zhong i{
              position: absolute;
              left: px2rem(10);
              top: px2rem(15);
              width: px2rem(20);
              height: px2rem(20);
              font-size: px2rem(20);
            }
            .user-time {
              color: #333;
              font-weight: bold;
              font-size: px2rem(15);
              em {
                margin-left: px2rem(5);
                color: #348BED;
                font-size: px2rem(14);
                font-style: normal;
                font-weight: normal;
              }
            }
          }
          .my-time:after {
            content: '';
            position: absolute;
            right: px2rem(13);
            top: 50%;
            width: px2rem(8);
            height: px2rem(8);
            margin-top: px2rem(-5);
            border: px2rem(1) solid #adadad;
            border-width: px2rem(1) px2rem(1) 0 0;
            transform: rotate(45deg);
          }
        }
      }
      .food {
        border-top: px2rem(1) solid #f0f0f0;
        margin-top: px2rem(10);
        background: #fff;
        font-size: px2rem(14);
        .food-title {
          position: relative;
          height: px2rem(50);
          line-height: px2rem(50);
          padding: 0 px2rem(15);
          color: #898989;
          font-size: px2rem(14);
          overflow: hidden;
          .food-add {
            box-sizing: border-box;
            float: left;
            max-width: 100%;
            padding-right: px2rem(75);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .logo {
            background: #FFD161;
            position: absolute;
            right: px2rem(15);
            height: px2rem(15);
            line-height: px2rem(15);
            margin-top: px2rem(17);
            padding: 0 px2rem(5);
            color: #333;
            font-size: px2rem(10);
            box-sizing: border-box;
            text-align: center;
            border-radius: px2rem(5);
          }
        }
        .food-list {
          .food-item {
            padding: 10px;
            background: #F8F8F8;
            overflow: hidden;
            .food-img {
              float: left;
              width: px2rem(55);
              height: px2rem(55);
              overflow: hidden;
              text-align: center;
              line-height: px2rem(55);
            }
            .food-price {
              float: right;
              width: px2rem(45);
              text-align: right;
              .food-price-num {
                line-height: px2rem(20);
                font-size: px2rem(14);
                color: #333;
              }
            }
            .food-name {
              margin: 0 px2rem(55) 0 px2rem(65);
              span {
                line-height: px2rem(20);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                font-size: px2rem(14);
              }
              p {
                line-height: px2rem(18);
                color: #999;
                font-size: px2rem(12);
              }
            }
          }
        }
        .all-cost {
          margin-left: px2rem(15);
          .food-box li:first-child {
            padding-top: px2rem(9);
          }
          .food-box li:last-child {
            padding-bottom: px2rem(9);
          }
          .food-box {
            margin-top: 0;
            border-top: 0;
            margin-left: 0;
            padding: px2rem(8) 0;
            position: relative;
            .box-price {
              position: absolute;
              top: px2rem(8);
              right: px2rem(15);
              font-size: px2rem(12);
            }
            .box-name {
              overflow: hidden;
              display: block;
              line-height: 1.15em;
              white-space: nowrap;
              text-overflow: ellipsis;
              width: 50%;
            }
          }
        }
        .cut-line {
          position: relative;
          height: px2rem(6);
          padding-top: px2rem(6);
          .cut {
            margin: 0 px2rem(10);
            height: 0;
            font-size: 0;
            border-top: px2rem(1) dotted #ddd;
          }
        }
        .cut-line:before {
          left: px2rem(-6);
          content: '';
          position: absolute;
          top: 0;
          width: px2rem(12);
          height: px2rem(12);
          border-radius: 50%;
          background: #f4f4f4;
        }
        .cut:after {
          right: px2rem(-6);
          content: '';
          position: absolute;
          top: 0;
          width: px2rem(12);
          height: px2rem(12);
          border-radius: 50%;
          background: #f4f4f4;
        }
        .shop-shell {
          margin-left: px2rem(15);
          height: px2rem(37);
          margin-top: px2rem(5);
          .shop {
            padding: px2rem(9) 0 px2rem(9) 0;
            width: px2rem(100%);
            p, div {
              display: inline-block;
            }
            p{
              font-size: px2rem(14);
              color: #2f2f2f;
            }
            span{
              color: #fb4e44;
            }
          }
          .shop-right{
            float: right;
            margin-right: px2rem(20);
          }
        }
        .mypay{
          margin-left: px2rem(15);
          height:px2rem(42);
          .pay{
            padding: px2rem(9) 0 px2rem(9) 0;
            height: px2rem(42);
            .font-big{
              float: right;
              margin: 0 px2rem(15) 0 0;
              line-height: px2rem(24);
              em{
                color: #fe4d3d;
                font-size: px2rem(16);
                font-style: normal;
              }
            }
            .font-small{
              float: right;
              line-height: px2rem(24);
              margin-right: px2rem(10);
              color: #898989;
              font-size: px2rem(12);
            }
          }
        }
      }
      .pay-what{
        border-top:px2rem(1) solid #f0f0f0;
        margin-top: px2rem(10);
        background: #fff;
        font-size: px2rem(14);
        .choose-pay{
          display: flex;
          justify-content: space-between;
          padding: px2rem(9) 0 px2rem(9) 0;
          margin-top: px2rem(-1);
          margin-left: px2rem(15);
          margin-right: px2rem(15);
          font-size: px2rem(14);
          position: relative;
          color: #2f2f2f;
          overflow: hidden;
        }
        .beizhu{
          background-color: #fff;
          margin: 0 px2rem(15);
          line-height: px2rem(50);
          font-size: px2rem(14);
          position: relative;
          border-top: px2rem(1) solid #efefef;
          height: px2rem(55);
          label{
            top: 0;
            left: 0;
            position: absolute;
            font-size: px2rem(14);
          }
          input{
            outline: none;
            border:none;
            border: 0;
            padding: 0;
            width: 70%;
            margin-left: 30%;
            font-size: px2rem(14);
            text-align: right;
          }
        }
      }
    }
  }

  .footer {
    width: px2rem(320);
    height: px2rem(51);
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #ffffff;
    border-top: px2rem(1) solid #e0e0e0;
    .sub-btn {
      float: right;
      width: px2rem(110);
      height: px2rem(50);
      font-size: px2rem(16);
      color: #333;
      background: #FFD161;
      border-radius: 0;
      padding: px2rem(3);
      border: none;
      outline: none;
      cursor: pointer;
    }
    .money {
      float: right;
      margin-right: px2rem(10);
      height: px2rem(51);
      line-height: px2rem(51);
      color: #2f2f2f;
      span {
        font-size: px2rem(14);
      }
      .money-num {
        color: #fb4e44;
        font-size: px2rem(21);
        font-style: normal;
        vertical-align: middle;
      }
      .footer-left {
        display: block;
        margin-left: px2rem(15);
        height: px2rem(51);
        line-height: px2rem(51);
        color: #2f2f2f;
        font-size: px2rem(14);
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: px2rem(70);
      }
    }
  }


</style>
