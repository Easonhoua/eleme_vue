<template id='thing'>
    <div class="thing">
        <div class="list">
            <!--左边选项菜单 -->
            <ul class="list_left">
                <li :key='index' v-for='(item,index) in menuList'>{{item.name}}</li>
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
                <ul :key='num' v-for='(val,num) in menuList'>
                    <div class="title">
                        <em>{{val.name}}</em>{{val.description}}
                        <i>...</i>
                    </div>
                    <li :key='oNum' v-for='(oVal,oNum) in val.foods'>
                        <img src='https://fuss10.elemecdn.com/c/bc/b4e50c2de33bde575c8d82e1da527jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' alt="图片显示异常">
                        <!-- <img src=({{oVal.image_path}}.indexOf('png')==-1)  ?  ({{oVal.image_path}}+".jpeg")  :  ({{oVal.image_path}}+".png") alt="图片显示异常">  -->
    
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
                                <span class="iconfont add">&#xe620;</span>
                            </dd>
                        </dl>
                    </li>
                </ul>
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
            </div>
            <div class="curr_price ">
                <h3>¥0</h3>
                <p>配送费￥6</p>
            </div>
            <span>去结算</span>
        </div>
    </div>
</template>
<template >
    <div class="pingjia" id='pingjia'>
        <p>哈哈，我是评价页</p>
    </div>
</template>
<template>
    <div class="menu">
        <header>
            <img :src='menuHeaderList.image_bg' alt='背景图片无法显示' class="bg" />
            <!--背景图 -->
            <!-- 头部返回 -->
            <i class="iconfont back">&#xe618;</i>
            <!-- 头部 商家详情介绍 -->
            <router-link class='link' to='/'>
                <div class="menu-shop">
                    <img :src='menuHeaderList.image_path' alt='图片显示异常'>
                    <dl>
                        <dt>{{menuHeaderList.name}}</dt>
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
            </router-link>
        </header>
        <ul class="tab">
            <li class="active">
                <router-link to='menu/thing'>商品
                    <i></i>
                </router-link>
            </li>
            <li>
                <router-link to='menu/pingjia'>评价
                    <i></i>
                </router-link>
            </li>
        </ul>
        <div class="content">
            <component :is='currView'></component>
        </div>
    </div>
</template>
 
<script>
import axios from 'axios';
export default {
    name: 'menu',
    components: {
        'thing':{
            template:'#thing'
        },
        'pingjia':{
            template:'#pingjia'
        }
    },
    data() {
        return {
            currView:'thing',
            menuHeaderList: [],
            menuList: []
        }
    },
    created: function () {     //获取菜单数据
        var that = this;
        var id = that.$route.params.id;

        // 获取菜单栏数据--头部·
        axios.get("http://localhost:3000/getMenuData?id=" + id).then(function (res) {
            // console.log(res);
            if (res.status == 200 && res.statusText == 'OK') {
                var data = res.data;
                console.log(data);

                // 店铺头部图片
                if (data.image_path.indexOf('png') != -1) {  //当后缀为png时
                    data.image_bg = 'https://fuss10.elemecdn.com/' + data.image_path + '.png?imageMogr/format/webp/thumbnail/!40p/blur/50x40/';
                    data.image_path = 'https://fuss10.elemecdn.com/' + data.image_path + '.png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/';
                } else {
                    data.image_bg = 'https://fuss10.elemecdn.com/' + data.image_path + '.jpeg?imageMogr/format/webp/thumbnail/!40p/blur/50x40/';
                    data.image_path = 'https://fuss10.elemecdn.com/' + data.image_path + '.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/';
                }
                that.menuHeaderList = data;
                console.log(data);
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
                // console.log(res.data);
                that.menuList = res.data;

            } else {
                that.msg = "sssssss";
            }
        }).catch(function (err) {
            that.msg = "网络出问题啦！！！！"
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import '../../static/hotcss/px2rem';
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
            img {
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
                dt {
                    height: px2rem(42/2);
                    line-height: px2rem(42/2);
                    font-size: px2rem(20);
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
        a {
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
                    &.curr {
                        border-left: px2rem(3) solid #3190e8;
                        font-weight: bold;
                    }
                }
            }
            .list_right {
                flex: 1;
                overflow: scroll;
                position: relative;
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
                        background-color: pink;
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
                            span:last-child {
                                font-size: px2rem(20);
                                float: right;
                                color: #3190e8;
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
                background-color: #3d3d3f;
                p {
                    text-align: center;
                    line-height: px2rem(50);
                    font-size: px2rem(22);
                    color: #535356;
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
            span {
                float: right;
                width: px2rem(210/2);
                height: 100%;
                background-color: #535356;
                text-align: center;
                line-height: px2rem(96/2);
                color: #fff;
                font-size: px2rem(16);
            }
        }
    }
    .pingjia {
        display: none;
        p {
            font-size: px2rem(50);
            color: #678;
            margin: px2rem(100) auto;
        }
    }
}
</style>
