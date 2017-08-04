<template>
    <div class="xiaDan">
       <Headers></Headers>
       <div class="content">
           <div class="address"><i class="iconfont">&#xe6f0;</i><span>请添加一个收获地址</span><em class="iconfont">&#xe649;</em></div>
       <div class="send-time">
            <h3>送达时间</h3>
            <div class="right">
                <p>尽快送达 | 预计17:00</p>
                <p><em class="iconfont">&#xe649;</em><span>蜂鸟专送</span></p>
            </div>   
        </div> 
        <ul class="pay-type">
            <li><span>支付方式</span><span>在线支付<em class="iconfont">&#xe649;</em></span></li>
            <li><span>红包</span><span>选择地址后使用红包<em class="iconfont">&#xe649;</em></span></li>
        </ul>
        <dl>
            <dt><img :src='shopImg' />{{shopName}}</dt>
            <dd class="food-list">
                <p><span>兰州拉面</span><span>x2</span><span>￥180</span></p>
                <p><span>兰州拉面</span><span>x2</span><span>￥180</span></p>
                <p><span>兰州拉面</span><span>x2</span><span>￥180</span></p>
            </dd>
            <dd>
                <p><span>餐盒</span><span>￥9</span></p>
                <p><span>配送费</span><span>￥5</span></p>
            </dd>
            <dd><span><em>减</em>在线支付立减优惠</span><span>-￥9</span></dd>
            <dd><span>订单￥22.3</span><span>优惠￥2.3</span><span>待支付￥226.3</span></dd>
        </dl>
        <div class="other">
            <p><span>订单备注</span><span>口味、偏好等<em class="iconfont">&#xe649;</em></span></p>
            <p><span>发票抬头</span><span>不需要开发票<em class="iconfont">&#xe649;</em></span></p>
        </div>
       </div>
        <footer>
            <span>待支付￥192.5<small> | 优惠￥14</small></span>
            <router-link to='/' class="btn">确认下单</router-link>
        </footer>
    </div>
</template>

<script>
import Headers from './Header'
import axios from 'axios'
import $ from 'jquery'
export default {
    name: 'menu',
    data() {
        return {
           title:this.title.state.title,
           
        }
    },
    created:function(){
        this.$store.commit("CHANGTITLE",'确认订单');
        // list=this.$store.state.shopMsg;
        // console.log(list)
        this.shopName = this.$store.state.shopName;
        this.shopImg=this.$store.state.shopImg
    },
    components: {
        Headers
    },
    methods: {
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import '../../static/hotcss/px2rem';
html,
body,
#app {
    height: 100%;
}

.xiaDan {
    height: 100%;
    .content{
        margin-top: px2rem(44);
        .address{
        height:px2rem(149/2);
        border-bottom:px2rem(1) dashed #000;
        margin-bottom: px2rem(10);
        font-size:px2rem(18);
        display: flex;
        align-items:center;
        justify-content: space-between;
        background-color: #fff;
        i:nth-of-type(1){
            color:#3190e8;
            font-size:px2rem(20);
            float:left;
            margin-left: px2rem(15);
        }
        span{
            color:#333;
            font-size:px2rem(16);
            float:left;
            margin-left: px2rem(-140);
        }
        em{
            color:#aaa;
            font-size:px2rem(20);
            float:right;
            margin-right: px2rem(15);
        }
    }
    .send-time{
        border-left:px2rem(10/2) solid #3190e8;
        padding: px2rem(10) px2rem(15);
        border-top:px2rem(1) solid #eee;
        border-bottom:px2rem(1) solid #eee;
        margin-bottom: px2rem(10);
        background-color: #fff;
        // display: flex;
        display: -webkit-box;
        align-items: center;
        justify-content:space-between;
        h3{
            font-size:px2rem(16);
            height:100%;
        }
        .right{
            width:px2rem(244);
            p:first-child{
                margin-bottom: px2rem(8);
                padding-bottom: px2rem(8);
                border-bottom: px2rem(1) solid #ddd;
                height:px2rem(30);
                line-height: 1;
                color:#3190e8;
                font-size:px2rem(16);
                text-align: right;
            }
            p:last-child{
                text-align: right;                
                height:px2rem(33/2);
                overflow: hidden;
                span{
                    background:#3190e8;
                    margin-right: px2rem(5);
                    font-size:px2rem(10);
                    color:#fff;
                    float:right;
                    padding: px2rem(2) px2rem(5);
                    border-radius:px2rem(5);
                }
                em{
                    color: #b7b7b7;
                    float:right;
                    font-size:px2rem(12)                   
                }
            }
        }
    }
    .pay-type{
        padding-left:px2rem(29/2);
        border-bottom: px2rem(1) solid #d8d8d8;
        margin-bottom: px2rem(10);
        background-color: #fff;
        li{
            height:px2rem(40);
            padding-top:px2rem(9);
            padding-bottom:px2rem(21/2);
            padding-right:px2rem(13);
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size:px2rem(16);
            em{
                font-size:px2rem(14);
                color:#b7b7b7;
            }
            &:first-child{
                border-bottom:px2rem(1) solid #eee;
                color:#333;
                span:last-child{
                    color:#999;
                }
            }
            &:last-child{
                color:#bbb;
            }
        }
    }
    dl{  
        border-top: px2rem(1) solid #d8d8d8;
        border-bottom: px2rem(1) solid #d8d8d8;
        margin-bottom: px2rem(10);
        background-color: #fff;
        dt{
            display: flex;
            align-items: center;
            height:px2rem(85/2);
            font-size:px2rem(20);
            height:px2rem(85/2);
            padding-left:px2rem(15);           
            padding-right:px2rem(15);      
            img{
                width: px2rem(38/2);
                height:px2rem(38/2);
                background-color: pink;
                margin-right: px2rem(5);
                float:left;
            }
        }
        dd{
            border-top:px2rem(1) solid #eee;
            padding:px2rem(10) px2rem(15);
            &.food-list{
                p{
                    height:px2rem(63/2);
                    line-height: px2rem(63/2);
                    span:nth-of-type(1){
                        width:70%;
                        text-align: left;
                        float:left;
                        font-size:px2rem(14);
                        color: #333;
                    }
                    span:nth-of-type(2){
                        width:10%;
                        text-align: right;
                        float:left;
                        font-size:px2rem(12);
                         color: #999;
                    }
                    span:nth-of-type(3){
                        width:20%;
                        text-align: right;
                        font-size:px2rem(13);                        
                        float:left;
                        color: #333;
                    }
                }
            }
            &:nth-of-type(2){
                p{
                    height:px2rem(63/2);
                    line-height: px2rem(63/2);
                    span:nth-of-type(1){
                        width:70%;
                        text-align: left;
                        float:left;
                        font-size:px2rem(14);
                        color: #333;
                    }
                    span:nth-of-type(2){
                        width:30%;
                        text-align: right;
                        float:right;
                        font-size:px2rem(12);
                         color: #333;
                    }
                }
            }
            &:nth-of-type(3){
                    height:px2rem(30);
                    line-height: px2rem(30);
                    box-sizing: content-box;
                    span:nth-of-type(1){
                        width:70%;
                        text-align: left;
                        float:left;
                        font-size:px2rem(14);
                        color: #333;
                        em{
                            background-color: rgb(240, 115, 115);
                            font-size:px2rem(10);
                            color:#fff;
                            padding:px2rem(2);
                        }
                    }
                    span:nth-of-type(2){
                        width:30%;
                        text-align: right;
                        float:right;
                        font-size:px2rem(12);
                         color: #ff4a07;
                    }
            }
            &:nth-of-type(4){
                    height:px2rem(31);
                    line-height: px2rem(31);
                    box-sizing: content-box;
                    span:nth-of-type(1){
                        width:25%;
                        text-align: left;
                        float:left;
                        font-size:px2rem(14);
                        color: #333;
                    }
                    span:nth-of-type(2){
                        width:25%;
                        text-align: left;
                        float:left;
                        font-size:px2rem(12);
                         color: #333;
                    }
                    span:nth-of-type(3){
                        width:40%;
                        text-align: right;
                        float:right;
                        font-size:px2rem(12);
                         color: #333;
                    }
            }
        }
    }
    .other{
        border-top: px2rem(1) solid #d8d8d8;
        margin-bottom: px2rem(50);
        background-color: #fff;
        padding:px2rem(10) px2rem(15);
        p{
            height:px2rem(31);
            line-height: px2rem(31);
            box-sizing: content-box;
            &:first-child{
                border-bottom: px2rem(1) solid #d8d8d8;
            }            
            span:nth-of-type(1){
                width:50%;
                text-align: left;
                float:left;
                font-size:px2rem(16);
                color: #333;
            }
            span:nth-of-type(2){
                width:50%;
                text-align: right;
                float:right;
                font-size:px2rem(12);
                color: #999;
                em{
                    font-size:px2rem(14);
                
                }
            }
        }
    }
    }
    footer{
        height: px2rem(44);
        background:#3c3c3c;
        position: fixed;
        bottom:0;
        color: #fff;
        width:100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        span{
            margin-left: px2rem(10);
            line-height: 1;
            font-size:px2rem(18);
            small{
                line-height: 1;
                font-size:px2rem(12);
                color:#999;
            }
        }
        
        .btn{
            background-color: #2395ff;
            width:px2rem(190/2);
            padding-left:px2rem(5);
            padding-right:px2rem(5);
            height:100%;
            text-decoration:none;
            color: #fff;
            font-size:px2rem(18);
            line-height: px2rem(44);
            text-align: center;
        }

    }
}

</style>
