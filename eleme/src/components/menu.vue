<template>
    <div class="menu">
        <header>
            <img :src='menuHeaderList.image_bg' alt='背景图片无法显示' class="bg" />
            <!--背景图 -->
            <!-- 头部返回 -->
            <i class="iconfont back" @click="goback()">&#xe618;</i>
            <!-- 头部 商家详情介绍 -->
            <a class='link'>
                <div class="menu-shop">
                    <img :src='menuHeaderList.image_path' alt='图片显示异常' class="shopImg">
                    <dl>
                        <dt class="shopName">{{menuHeaderList.name}}</dt>
                        <dd>商家配送
                            <em>/</em>{{menuHeaderList.order_lead_time}}分钟送达
                            <em>/</em>
                            {{menuHeaderList.piecewise_agent_fee.description}}
                            <i class="iconfont">&#xe649;</i>
                        </dd>
                        <dd>{{menuHeaderList.promotion_info}}</dd>
                    </dl>
                </div>
                <ul>
                    <li>
                        <p :key="index" v-for='(item,index) in menuHeaderList.activities'>
                            <em>{{item.icon_name}}</em>{{item.tips}}</p>
                    </li>
                    <li>{{menuHeaderList.activities.length}}个活动</li>
                </ul>
            </a>
        </header>
        <ul class="tab">
            <li class="active" @click="tabToggle('one')" ref='tabOne'>
                商品
                <i></i>
            </li>
            <li @click="tabToggle('two')" ref='tabTwo'>评价
                <i></i>
            </li>
        </ul>
        <div class="content">
            <template v-if='isShow' keep-alive>
                <div class="thing">
                    <div class="list">
                        <!--左边选项菜单 -->
                        <ul class="list_left">
                            <li :key='index' :class='{curr:currSlect==index}' v-for='(item,index) in menuList' @click='guide(index)'>{{item.name}}
                                <span>1</span>
                            </li>
                            <!-- <li class="curr">特价套餐</li>
                                                                <li>比萨</li>
                                                                <li>特价套餐</li>
                                                                <li>比萨</li>
                                                                <li>特价套餐</li>
                                                                <li>比萨</li>
                                                                <li>特价套餐</li>
                                                                <li>比萨</li>
                                                                <li>特价套餐</li>
                                                                <li>比萨</li>
                                                                <li>特价套餐</li>
                                                                <li>比萨</li>
                                                                <li>特价套餐</li>
                                                                <li>比萨</li>
                                                                <li>特价套餐</li>
                                                                <li>比萨</li> -->
                        </ul>
                        <!--右边选项菜单详情 -->
                        <div class="list_right">
                            <div class="box" ref='scollBox'>
                                <ul :key='num' v-for='(val,num) in menuList' class='ulNode'>
                                    <div class="title">
                                        <em>{{val.name}}</em>{{val.description}}
                                        <i>...</i>
                                    </div>
                                    <li :key='oNum' v-for='(oVal,oNum) in val.foods'>
                                        <!-- <img :src="oVal.image_path" alt="图片显示异常"> -->
                                        <img src='https://fuss10.elemecdn.com/5/07/22a1e4da06a4f7ac454a6b6ecf949jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' alt="图片显示异常"/>
    
                                        <!-- <img :src='oVal.image_path' alt="图片显示异常"> -->
                                        <dl>
                                            <dt>{{oVal.name}}</dt>
                                            <dd class="jieshao">
                                                {{oVal.description}}
                                            </dd>
                                            <dd class="num">
                                                <span>月销{{oVal.month_sales}}份</span>
                                                <span>好评率{{oVal.satisfy_rate}}%</span>
                                            </dd>
                                            <dd class="price">
                                                <span>￥
                                                    <em>{{oVal.specfoods[0].price}}</em>
                                                </span>
                                                <div class="add">
                                                    <i class="iconfont jian" @click='jianFn'>&#xe715;</i>
                                                    <span class="currNum" ref='listNum'>0</span>
                                                    <i class="iconfont jia" @click='jiaFn'>&#xe604;</i>
                                                </div>
                                            </dd>
                                        </dl>
                                    </li>
                                </ul>
                            </div>
                            <!-- <div class="title">
                                                                    <em>热销</em>大家喜欢吃，才叫真好吃
                                                                    <i>...</i>
                                                                </div>
                                                                <li>
                                                                    <img src="" alt="图片显示异常">
                                                                    <dl>
                                                                        <dt>超级</dt>
                                                                        <dd class="jieshao">
                                                                            22222222
                                                                        </dd>
                                                                        <dd class="num">
                                                                            <span>月销100份</span>
                                                                            <span>好评率100%</span>
                                                                        </dd>
                                                                        <dd class="price">
                                                                            <span>￥
                                                                                <em>58</em>
                                                                            </span>
                                                                            <span class="iconfont add">&#xe620;</span>
                                                                        </dd>
                                                                    </dl>
                                                                </li> -->
                        </div>
                    </div>
                    <!--购物车 -->
                    <div class="car_footer">
                        <div class="car_icon">
                            <p class="iconfont">&#xe600;</p>
                            <span class="car_num">0</span>
                        </div>
                        <div class="curr_price ">
                            <h3>¥0</h3>
                            <p>配送费￥6</p>
                        </div>
                        <a class="btn" @click='payFn'>去结算</a>
                    </div>
                </div>
            </template>
            <template v-else keep-alive>
                <div class="pingjia">
                    <div class="pingjiaTop">
                        <div class="left">
                            <h2>{{scoreList.overall_score}}</h2>
                            <p>综合评价</p>
                            <p>高于周边商家{{scoreList.compare_rating}}%</p>
                        </div>
                        <ul class="right">
                            <li>
                                <p>服务态度</p>
                                <em>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                </em>
                                <span>{{scoreList.service_score}}</span>
                            </li>
                            <li>
                                <p>菜品评价</p>
                                <em>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                </em>
                                <span>{{scoreList.food_score}}</span>
                            </li>
                            <li>
                                <p>送达时间</p>
                                <span>{{scoreList.deliver_time}}分钟</span>
                            </li>
                        </ul>
                    </div>
                    <div class="pingjia-section">
                        <ul class="pingjia-score">
                            <li class="active" :key='index' v-for='(item,index) in ratingList'>{{item.name}}({{item.count}})</li>
                            <!-- <li>不满意(131)</li>
                                            <li>全部(1331)</li>
                                            <li>满意(131)</li>
                                            <li class="disable">不满意(1331)</li> -->
                        </ul>
                        <ul class="pingjia-content">
                            <li :key='index' v-for='(item,index) in pingjiaList'>
                                <img src='../assets/img/icon.jpeg' class="user-ico" />
                                <div class="text">
                                    <div class="left">
                                        <h4>{{item.username}}</h4>
                                        <p>
                                            <i></i>
                                            <i></i>
                                            <i></i>
                                            <i></i>
                                            <i></i>
                                            <span>{{item.time_spent_desc}}</span>
                                        </p>
                                        <img src='' />
                                        <p class="txt">
                                            <span :key='num' v-for='(val,num) in item.item_ratings'>{{val.food_name}}</span>
                                        </p>
                                    </div>
                                    <p class="right">{{item.rated_at}}</p>
                                </div>
                            </li>
                            <!-- <li>
                                                <img src='../assets/img/icon.jpeg' class="user-ico" />
                                                <div class="text">
                                                    <div class="left">
                                                        <h4>匿名用户</h4>
                                                        <p>
                                                            <i></i>
                                                            <i></i>
                                                            <i></i>
                                                            <i></i>
                                                            <i></i>
                                                            <span>30分钟送达</span>
                                                        </p>
                                                        <img src='' />
                                                        <p class="txt">
                                                            <span>奥尔良</span>
                                                            <span>饿了么</span>
                                                        </p>
                                                    </div>
                                                    <p class="right">2017-06-20</p>
                                                </div>
                                            </li> -->
                        </ul>
                    </div>
    
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'
export default {
    name: 'menu',
    data() {
        return {
            isShow: true,             //点击tab栏控制切换
            menuHeaderList: [],
            menuList: [],
            scoreList: [],
            ratingList: [],
            pingjiaList: [],
            currSlect: 0,
            heightArr: []
        }
    },
    created: function () {
        var that = this;
        //获取url地址传过来的ID值
        var url = window.location.href;
        var urlStr = url.split('=');
        var id = urlStr[1];
        console.log(id)
        // https://mainsite-restapi.ele.me/bgs/weather/current?latitude=22.58741&longitude=113.98036

        // 获取菜单栏数据--头部·
        axios.get("http://localhost:3000/getMenuData?id=" + id).then(function (res) {
            // console.log(res);
            if (res.status == 200 && res.statusText == 'OK') {
                var data = res.data;
                // console.log(data);

                // 店铺头部图片
                if (data.image_path.indexOf('png') != -1) {  //当后缀为png时
                    data.image_bg = 'https://fuss10.elemecdn.com/' + data.image_path + '.png?imageMogr/format/webp/thumbnail/!40p/blur/50x40/';
                    data.image_path = 'https://fuss10.elemecdn.com/' + data.image_path + '.png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/';
                } else {
                    data.image_bg = 'https://fuss10.elemecdn.com/' + data.image_path + '.jpeg?imageMogr/format/webp/thumbnail/!40p/blur/50x40/';
                    data.image_path = 'https://fuss10.elemecdn.com/' + data.image_path + '.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/';
                }
                that.menuHeaderList = data;
                // console.log(data);
            } else {
                // that.msg = data.showapi.res.code;
                alert("xxxxxxxxxxxxxxxxxxxxxxxxx")
            }
        }).catch(function (err) {
            alert("网络出问题啦！！！！");
        })

        // 获取菜单栏数据--列表
        axios.get("http://localhost:3000/getMenuList?id=" + id).then(function (res) {
            // console.log(res);
            if (res.status == 200 && res.statusText == 'OK') {
                var data = res.data;
                // for(var i = 0;i<data.length;i++){
                // var imageArr=data[i].foods;
                //     for(var j = 0;j<imageArr.length;j++){
                //         if (imageArr[j].image_path.indexOf('png') != -1) {  //当后缀为png时
                //             imageArr[j].image_path = 'https://fuss10.elemecdn.com/' + imageArr[j].image_path + '.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/';
                //         } else {                        //当后缀为png时
                //             imageArr[j].image_path = 'https://fuss10.elemecdn.com/' + imageArr[j].image_path + '.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/';
                //         }
                //     }  
                // }
                that.menuList = data;
                console.log(data)

            } else {
                that.msg = "sssssss";
            }
        }).catch(function (err) {
            that.msg = "网络出问题啦！！！！"
        })
        //============================评价列表=============================
        // 获取评价列表头部星数
        axios.get("http://localhost:3000/getScore?id=" + id).then(function (res) {
            // console.log(res);
            if (res.status == 200 && res.statusText == 'OK') {
                var data = res.data
                data.compare_rating = parseInt(data.compare_rating * 1000) / 10;
                data.food_score = parseInt(data.food_score * 10) / 10;
                data.overall_score = parseInt(data.overall_score * 10) / 10;
                data.service_score = parseInt(data.service_score * 10) / 10;

                that.scoreList = data;

            } else {
                that.msg = "sssssss";
            }
        }).catch(function (err) {
            that.msg = "网络出问题啦！！！！"
        })
        // 获取评价列表--满意等级
        axios.get("http://localhost:3000/getRating?id=" + id).then(function (res) {
            // console.log(res);
            if (res.status == 200 && res.statusText == 'OK') {
                // console.log(res.data);
                that.ratingList = res.data;

            } else {
                that.msg = "sssssss";
            }
        }).catch(function (err) {
            that.msg = "网络出问题啦！！！！"
        })
        // 获取评价列表--用户评价列表
        axios.get("http://localhost:3000/getPingJiaList?id=" + id).then(function (res) {
            // console.log(res);
            if (res.status == 200 && res.statusText == 'OK') {
                // console.log(res.data);
                that.pingjiaList = res.data;

            } else {
                that.msg = "sssssss";
            }
        }).catch(function (err) {
            that.msg = "网络出问题啦！！！！"
        })
    },
    methods: {
        tabToggle: function (num) {
            if (num == 'one') {
                this.isShow = true;
                this.$refs.tabOne.setAttribute('class', 'active');
                this.$refs.tabTwo.setAttribute('class', '');
            } else {
                this.isShow = false;
                this.$refs.tabTwo.setAttribute('class', 'active');
                this.$refs.tabOne.setAttribute('class', '');
            }
        },
        goback(){
            window.history.back();
        },   
    
        guide(index) {          //楼层导航
            // console.log(index);
            var that = this;
            this.currSlect = index;
            var scrollBox = this.$refs.scollBox;

            console.log(scrollBox)
            var topNum = -this.heightArr[index];
            this.heightArr[index-1]
            $(scrollBox).stop(true,true).animate({ top: topNum }, 300 )
        },
        jianFn(e) {
            var carNum = $('.car_num').html();         //获取购物车图标右上角的选中数
            var jian = $(e.target);             //获取点击的节点
            var currNum = (jian.next().html());        //拿到当前的选中次数
            currNum = currNum - 1;
            carNum = carNum - 1;
            if (currNum >= 0) {
                jian.next().html(currNum);       //修改值
                $('.car_num').html(carNum);
            }

        },
        jiaFn(e) {
            var carNum = Number($('.car_num').html());         //获取购物车图标右上角的选中数
            var jia = $(e.target);              //获取点击的节点
            var currNum = Number(jia.prev().html());        //拿到当前的次数
            currNum += 1;
            carNum += 1;
            console.log(jia.parent().parent().parent().parent().parent().find('.title em')[0].innerHTML);
            jia.prev().html(currNum);       //修改值
            $('.car_num').html(carNum);

        },
        payFn() {    //结算按钮设置
            var carNum = Number($('.car_num').html());         //获取购物车图标右上角的选中数
            // if (carNum > 0) {
            //     this.$router.push('/XiaDan');
            // }
            var shopName=$('.shopName').html();
            var shopImg = $('.shopImg').attr('src');
            // console.log(shopName);
            // console.log(shopImg);
            this.$store.commit('SHOPNAME',shopName)
            this.$store.commit('SHOPIMG',shopImg);
            this.$router.push('XiaDan')

        },


    },
    mounted: function () {
        // 获取楼层导航右侧内容各个ul的高度
        var ulNodeAll = document.querySelectorAll('.ulNode');
        console.log(ulNodeAll);
        var heightArr = $('.ulNode');
    
        var that = this;
        var scroll = 0;                 //滚动监听
        var length = that.heightArr.length;

        setTimeout(function () {
            var ulNodeAll = document.querySelectorAll('.ulNode');
            console.log(ulNodeAll[5]);
            var newArr = [];
            for (var i = 0; i < ulNodeAll.length; i++) {
                newArr.push(ulNodeAll[i].offsetTop)
            }

            that.heightArr = newArr;
            //    console.log(newArr);
            console.log($('.box'))
            $('.box').scroll(function () {
                console.log(1233333333333333333333333333333333333)
                // var faNode = $('.box');
                // scroll = faNode.scrollTop();
                // console.log(1111111111111);

                // for (var i = 0; i < length; i++) {
                //     // console.log(targetArr.eq(i).position().top);
                //     if (scroll <= that.heightArr[i] + 260) {
                //         that.currSlect = i;
                //         break;
                //     }
                // }
              
            })
        }, 1000)

        



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

.menu {
    height: 100%;
    display: flex;
    flex-direction: column;
}

header {

    width: 100%;
    height: px2rem(263/2);
    padding-left: px2rem(10);
    padding-right: px2rem(10);
    box-sizing: border-box;
    position: relative;
    z-index: 2;
    .bg {
        background: skyblue;
        width: 100%;
        height: px2rem(263/2);
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        text-align: center; // line-height: px2rem(263/2)
    }
    .back {
        display: block;
        width: px2rem(25);
        height: px2rem(55/2);
        line-height: px2rem(55/2);
        padding: px2rem(8/2) 0;
        font-size: px2rem(28);
        color: #fff;
    }
    .link {
        display: block;
        text-decoration: none;
        .menu-shop {
            height: px2rem(132/2);
            display: flex;
            img.shopImg{
                width: px2rem(132/2);
                height: px2rem(132/2);
                margin-right: px2rem(20/2);
                font-size: px2rem(18);
                background-color: pink;
            }
            dl {
                color: #fff;
                flex: 1;
                overflow: hidden;
                dt.shopName{
                    height: px2rem(42/2);
                    line-height: px2rem(42/2);
                    font-size: px2rem(20);
                    text-overflow: ellipsis;
                    overflow: hidden;  
                }
                dd:nth-of-type(1) {
                    font-size: px2rem(12);
                    height: px2rem(50/2);
                    line-height: px2rem(50/2);
                    em {
                        margin-left: px2rem(4);
                        margin-right: px2rem(4);
                    }
                    i {
                        float: right;
                        font-size: px2rem(18);
                        line-height: px2rem(50/2);
                    }
                }
                dd:nth-of-type(2) {
                    font-size: px2rem(12);
                    height: px2rem(40/2);
                    line-height: px2rem(40/2);
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    width: 100%;
                }
            }
        }
        ul {
            height: px2rem(30);
            line-height: px2rem(30);
            color: #fff;
            font-size: px2rem(12);
            li:first-child {
                float: left;
                width: px2rem(608/2);
                overflow: hidden;
                height: px2rem(30);
                em {
                    background: rgb(240, 115, 115);
                    margin-right: px2rem(5);
                }
            }
            li:last-child {
                float: right;
            }
        }
    }
}

.tab {
    width: 100%;
    height: px2rem(91/2);
    background: #fff;
    border-bottom: px2rem(1) solid #ddd;
    li {
        width: 50%;
        height: px2rem(91/2);
        float: left;
        position: relative;
        line-height: px2rem(91/2);
        display: block;
        height: 100%;
        color: #666;
        text-align: center;
        font-size: px2rem(13);
        text-decoration: none;
        i {
            display: none;
            position: absolute;
            bottom: px2rem(7);
            left: 50%;
            margin-left: px2rem(-28/2);
            width: px2rem(56/2);
            height: px2rem(3/2);
            background-color: #3190e8;
        }
        &.active {
            color: #3190e8;
        }
        &.active i {
            display: block;
        }
    }
}

.content {
    background-color: #fff;
    flex: 1;
    overflow: hidden;
    width: 100%;
    .thing {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        .list {
            width: 100%;
            display: flex;
            flex: 1;
            .list_left {
                width: px2rem(170/2);
                overflow: scroll;
                background-color: #f8f8f8;
                li {
                    height: px2rem(102/2);
                    color: #666;
                    text-align: left;
                    line-height: px2rem(102/2);
                    font-size: px2rem(13);
                    padding-left: px2rem(15/2);
                    padding-right: px2rem(15/2);
                    border-bottom: 1px solid #ededed;
                    border-left: px2rem(3) solid transparent;
                    position: relative;
                    &.curr {
                        border-left: px2rem(3) solid #3190e8;
                        font-weight: bold;
                    }
                    span {
                        position: absolute;
                        right: 0;
                        top: 0;
                        background-color: #ff461d;
                        padding-left: px2rem(4);
                        padding-right: px2rem(4);
                        font-size: px2rem(12);
                        display: inline-block;
                        height: px2rem(12);
                        line-height: 1;
                        color: #fff;
                        border-radius: px2rem(5); 
                        display: none;
                    }
                }
            }
            .list_right {
                flex: 1;
                overflow: scroll;
                position: relative;
                .box {
                    position: absolute;
                    width: 100%;
                    .title {
                        background-color: #f1f1f1;
                        color: #999;
                        height: px2rem(33);
                        padding-left: px2rem(10);
                        padding-top: px2rem(7.5);
                        padding-bottom: px2rem(7.5);
                        padding-right: px2rem(10);
                        font-size: px2rem(12);
                        font-weight: bold;
                        em {
                            font-size: px2rem(14);
                            color: #666;
                            margin-right: px2rem(5);
                        }
                        i {
                            float: right;
                            font-size: px2rem(25/2);
                        }
                    }
                    li {
                        padding-top: px2rem(15);
                        padding-bottom: px2rem(15);
                        padding-left: px2rem(10);
                        padding-right: px2rem(10);
                        background-color: #fff;
                        display: flex;
                        border-bottom: px2rem(1/2) solid #ddd;
                        overflow: hidden;
                        img {
                            width: px2rem(104/2);
                            height: px2rem(104/2);
                            margin-right: px2rem(21.6/2);
                            display: block;
                            font-size: px2rem(14);
                        }
                        dl {
                            flex: 1;
                            overflow: hidden;
                            dt {
                                font-size: px2rem(33/2);
                                line-height: px2rem(33/2);
                                color: #666;
                                font-weight: bold;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                            }
                            dd.jieshao {
                                margin-top: px2rem(5);
                                margin-bottom: px2rem(5);
                                color: #999;
                                line-height: px2rem(14);
                                font-size: px2rem(12);
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: normal;
                            }
                            dd.num {
                                font-size: px2rem(12);
                                color: #666;
                                margin-top: px2rem(13/2);
                                margin-bottom: px2rem(13/2);
                                span {
                                    margin-right: px2rem(5);
                                }
                            }
                            dd.price {
                                overflow: hidden;
                                span:first-child {
                                    color: #ff802c;
                                    height: px2rem(20);
                                    line-height: px2rem(20);
                                    float: left;
                                    font-size: px2rem(12);

                                    em {
                                        font-size: px2rem(18);
                                        font-weight: 700;
                                    }
                                }
                                .add {
                                    font-size: px2rem(20);
                                    height: 100%;
                                    line-height: 1;
                                    float: right;
                                    color: #3190e8;
                                    i {
                                        width: px2rem(20);
                                        height: px2rem(20);
                                        float: left;
                                        &.jian {
                                            color: #fff;
                                            font-size: px2rem(20);
                                            background-color: green;
                                            border-radius: 50%;
                                        }
                                        &.jia {
                                            font-size: px2rem(20);
                                            background-color: #3190e8;
                                            color: #fff;
                                            border-radius: 50%;
                                        }
                                    }
                                    span {
                                        float: left;
                                        font-size: px2rem(14);
                                        padding-left: px2rem(8);
                                        padding-right: px2rem(8);
                                        line-height: 1;
                                        width: px2rem(20);
                                        text-align: center;
                                        margin-top: px2rem(2);
                                        color: #666;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        .car_footer {
            width: 100%;
            height: px2rem(96/2);
            background-color: #3d3d3f;
            position: relative;
            .car_icon {
                width: px2rem(100/2);
                height: px2rem(100/2);
                position: absolute;
                top: px2rem(-9);
                left: px2rem(15);
                border-radius: 50%;
                border: px2rem(5) solid #535356;
                box-shadow: 0 0 px2rem(5) rgba(0, 0, 0, 0.1);
                background-color: #3d3d3f; // #3190e8
                p {
                    text-align: center;
                    line-height: px2rem(50);
                    font-size: px2rem(22);
                    color: #535356;
                }
                .car_num {
                    background: #ff461d;
                    padding: px2rem(2) px2rem(5);
                    position: absolute;
                    right: 0;
                    top: px2rem(-5);
                    font-size: px2rem(10);
                    border-radius: px2rem(5);
                    display: inline;
                    color: #fff;
                }
            }
            .curr_price {
                padding-left: px2rem(160/2);
                float: left;
                color: #fff;
                display: flex;
                flex-direction: column;
                justify-content: center;
                height: 100%;
                h3 {
                    height: px2rem(18);
                    font-size: px2rem(18);
                    margin-top: px2rem(5);
                    font-weight: normal;
                }
                p {
                    font-size: px2rem(10);
                    float: left;
                }
            }
            .btn {
                float: right;
                width: px2rem(210/2);
                height: 100%;
                background-color: #535356; //#4cd964
                text-align: center;
                line-height: px2rem(96/2);
                color: #fff;
                font-size: px2rem(16);
                display: block;
                text-decoration: none;
            }
        }
    }
    .pingjia {
        overflow: auto;
        height: 100%;
        background-color: #eee;
        .pingjiaTop {
            height: px2rem(100);
            padding: px2rem(15);
            margin-bottom: px2rem(10);
            box-sizing: border-box;
            background-color: #fff;
            .left {
                float: left;
                padding-right: px2rem(15);
                border-right: px2rem(1) solid #ddd;
                text-align: center;
                line-height: 1.5;
                width: px2rem(178/2);
                text-align: center;
                h2 {
                    height: px2rem(30);
                    line-height: 1;
                    color: #f60;
                    font-size: px2rem(30);
                    font-weight: bold;
                }
                p:nth-of-type(1) {
                    height: px2rem(20);
                    line-height: 1;
                    font-size: px2rem(14);
                    color: #666;
                }
                p:nth-of-type(2) {
                    height: px2rem(15);
                    font-size: px2rem(9);
                    line-height: 1;
                    color: #999;
                    white-space: nowrap;
                }
            }
            .right {
                float: left;
                width: px2rem(200);
                padding-left: px2rem(30);
                box-sizing: border-box;
                padding-top: px2rem(5);
                li {
                    line-height: 1;
                    height: px2rem(27/2);
                    margin-bottom: px2rem(10);
                    font-size: px2rem(14);
                    overflow: hidden;
                    &:nth-child(1),
                    &:nth-child(2) {
                        p {
                            float: left;
                            display: inline;
                        }
                        em {
                            padding-left: px2rem(10);
                            width: px2rem(110/2);
                            overflow: hidden;
                            float: left;
                            i {
                                background: url('../assets/img/newstars.png') no-repeat;
                                width: px2rem(10);
                                height: px2rem(10);
                                float: left;
                            }
                        }
                        span {
                            float: left;
                            color: #f60;
                            padding-left: px2rem(10);
                        }
                    }
                    &:last-child {
                        p {
                            float: left;
                            display: inline;
                        }
                        span {
                            float: left;
                            padding-left: px2rem(10);
                            font-size: px2rem(12);
                            color: #999;
                        }
                    }
                }
            }
        }
        .pingjia-section {
            background-color: #fff;
            padding-left: px2rem(12);
            padding-right: px2rem(12);
            .pingjia-score {
                padding-top: px2rem(10);
                padding-bottom: px2rem(10);
                overflow: hidden;
                li {
                    padding: px2rem(15/2);
                    background-color: #ebf5ff;
                    margin-top: px2rem(2.5);
                    margin-bottom: px2rem(2.5);
                    margin-left: px2rem(5);
                    margin-right: px2rem(5);
                    display: inline-block;
                    font-size: px2rem(14);
                    float: left;
                    border-radius: px2rem(5);
                    color: #6d7885;
                    &.active {
                        background-color: #3190e8;
                        color: #fff;
                    }
                    &.disable {
                        background-color: #f5f5f5;
                        color: #aaa;
                    }
                }
            }
            .pingjia-content {
                li {
                    padding-top: px2rem(15);
                    padding-bottom: px2rem(15);
                    border-top: px2rem(1) solid #ddd;
                    display: flex;
                    .user-ico {
                        width: px2rem(30);
                        height: px2rem(30);
                        margin-right: px2rem(15);
                    }
                    .text {
                        flex: 1;
                        position: relative;
                        .left {
                            float: left;
                            h4 {
                                height: px2rem(31/2);
                                line-height: px2rem(31/2);
                                font-size: px2rem(14);
                                font-weight: bold;
                                margin-bottom: px2rem(5);
                            }
                            p:nth-of-type(1) {
                                overflow: hidden;
                                margin-bottom: px2rem(5);
                                color: #999;
                                font-size: px2rem(12);
                                line-height: px2rem(15);
                                i {
                                    background: url('../assets/img/newstars.png') no-repeat;
                                    width: px2rem(10);
                                    height: px2rem(10);
                                    float: left;
                                }
                            }
                            p.txt {
                                margin-bottom: px2rem(5);
                                color: #eee;
                                font-size: px2rem(12);
                                span {
                                    padding: px2rem(4) px2rem(10);
                                    margin: px2rem(3.5);
                                    color: #999;
                                    border: 1px solid #ddd;
                                    display: inline-block;
                                    border-radius: .08rem;
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                }
                            }
                        }
                        .right {
                            // float:right;
                            color: #999;
                            position: absolute;
                            font-size: px2rem(12);
                            right: 0;
                            top: 0;
                        }
                    }
                }
            }
        }
    }
}

.xiaoshi {
    display: none;
}
</style>
