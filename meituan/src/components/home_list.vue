<template>
    <div class="home-list">
        <div class='title'>附近商家</div>
        <ul>
            <li :key='index' v-for='(item,index) in list'>
                <div class='show_left'>
                    <img :src='item.pic_url'></img>
                </div>
                <div class="show_right">
                    <h3>{{ item.name }}</h3>
                    <p class='detail'>
                        <span class='pingjia'>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                        </span>
                        <span class="num">月售{{ item.month_sale_num }}</span>
                        <span class="dis">{{ item.distance }}</span>
                        <span class="time">{{ item.avg_delivery_time }}min</span>
                    </p>
                    <p class='price'>{{ item.min_price_tip }}
                        <i>|</i>{{ item.shipping_fee_tip }}
                        <span>美团专送</span>
                    </p>
                    <p class="fan">
                        <span>返</span>实际支付300元返回30元商店用户券</p>
                </div>
            </li>
        </ul>
        <!-- <Gotop></Gotop> -->
    </div>
</template>

<script>
import axios from 'axios'
// import Gotop from './goTop'

export default {
  name: 'home_list',
  data() {
    return {
      list: []
    }
  },
  created() {
    axios.get('/api/polist').then((res) => {
      this.list = res.data.data;
      console.log(res.data)
    })
  },
  components: {
    //   Gotop: Gotop
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import '../../static/hotcss/px2rem';
.home-list {
    background-color: #fff;
    margin-top: px2rem(8.5);
    overflow: hidden;
    .title {
        margin-top: px2rem(12);
        height: px2rem(19);
        line-height: px2rem(19);
        text-align: center;
        font-size: px2rem(14);
        position: relative;
        font-weight: bold;
        &:before,
        &:after {
            content: "";
            display: block;
            width: px2rem(25);
            height: px2rem(1);
            background: #999;
            position: absolute;
            left: 50%;
            top: 50%;
        }
        &:before {
            margin-left: px2rem(-60);
        }
        &:after {
            margin-left: px2rem(35)
        }
    }
    ul {
        overflow: hidden;
        padding-left: px2rem(8.533);
        li {
            padding-top: px2rem(12.8);
            padding-bottom: px2rem(10.667);
            overflow: hidden;
            display: flex;
            border-bottom: px2rem(1) solid #e4e4e4;
            .show_left {
                width: px2rem(71);
                height: px2rem(53);
                border: 1px solid #E4E4E4;
                overflow: hidden;
                margin-right: px2rem(5);
                img {
                    display: block;
                    width: 100%;
                }
            }
            .show_right {
                flex: 1;
                overflow: hidden;
                h3 {
                    height: px2rem(18);
                    line-height: px2rem(18);
                    font-weight: 500;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                    color: #333;
                    font-size: px2rem(14);
                    margin-right: px2rem(15);
                }
                .detail {
                    overflow: hidden;
                    font-size: px2rem(11);
                    color: #656565;
                    height: px2rem(23);
                    .pingjia {
                        i {
                            margin-top: px2rem(5);
                            width: px2rem(10);
                            height: px2rem(10);
                            margin-right: px2rem(4);
                            float: left;
                            background: url('../assets/img/newstars.png') left center;
                            ;
                        }
                    }
                    .num {
                        float: left;
                        margin-top: px2rem(5);
                    }
                    .dis,
                    .time {
                        margin-top: px2rem(3);
                        float: right;
                    }
                    .dis {
                        margin-right: px2rem(15);
                        margin-left: px2rem(5);
                    }
                }
                .price {
                    color: #656565;
                    font-size: px2rem(12);
                    height: px2rem(16);
                    overflow: hidden;
                    margin-top: px2rem(3);
                    .start-free {
                        margin-right: px2rem(2);
                    }
                    i {
                        margin: 0 px2rem(5);
                        color: #dcdcdc;
                    }
                }
                .fan {
                    font-size: px2rem(12);
                    color: #898989;
                    width: px2rem(145);
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    height: px2rem(17);
                    margin-top: px2rem(3);
                    span {
                        margin-top: px2rem(3);
                        background: #fa5758;
                        width: px2rem(11.5);
                        height: px2rem(12);
                        margin-right: px2rem(5.5);
                        float: left;
                        font-size: px2rem(8);
                        text-align: center;
                        color: #fff;
                    }
                }
            }
        }
    }
}
</style>
