<template>
  <div class='shaixuan'>
    <div class='shaixuant'>
      <p class='peisong'>配送方式</p>
      <p class='shangjia'>商家属性（可多选）</p>
      <span>品牌商家</span>
      <span>新店</span>
      <span>开发票</span>
      <span>在线支付</span>
    </div>
    <div class='shaixuanb'>
      <a class="qk">清空</a>
      <a class='sure'>确定</a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang='scss'>
@import '../../static/hotcss/px2rem';
.shaixuan {
  width: 100%;
  height: px2rem(175.5);
  background: #fff;
  position: absolute;
  left: 0;
  top: px2rem(40);
  .shaixuant {
    width: 100%;
    padding: 0 .4rem;
    height: px2rem(121);
    border-bottom: px2rem(1) solid #ccc;
    .peisong {
      margin: .266667rem 0;
      overflow: hidden;
      margin-bottom: .2rem;
      color: #666;
      font-size: px2rem(12);
    }
    .shangjia {
      margin: .266667rem 0;
      overflow: hidden;
      margin-bottom: .2rem;
      color: #666;
      font-size: px2rem(12);
    }
    span {
      display: inline-block;
      margin: 0;
      float: left;
      width: 28%;
      margin-right: 2%;
      border: 1px solid #ddd; // padding: .173333rem 0;
      height: px2rem(35);
      line-height: px2rem(35);
      margin-bottom: .2rem;
      border-radius: .066667rem;
      box-sizing: border-box;
      color: #666;
      font-size: px2rem(12);
      text-align: center;
    }
  }
  .shaixuanb {
    width: 100%;
    background: #fafafa;
    height: px2rem(55);
    // line-height: px2rem(50);
    a {
      display: block;
      width: 20%;
      float: left;
      font-size: px2rem(16);
      line-height: px2rem(41.5);
      border-radius: px2rem(4);
      text-decoration: none;
      text-align: center;
    }
    .qk {
      background-color: #fff;
      border: 1px solid #ddd;
      margin-right: .266667rem;
      color: #333;
    }
    .sure{
      background-color: #56d176;
      border: 1px solid #56d176;
      margin-right: .266667rem;
      color: #fff;
    }
  }
}
</style>