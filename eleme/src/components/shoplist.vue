<template>
    <div id="main">
        <div class="mainge"></div>
        <div class='maintitle'>
            <h2>推荐商家</h2>
        </div>
        <div class="mainlist">
            <ul v-infinite-scroll='loadMore' infinite-scroll-disabled="loading" infinite-scroll-distance="10">
                <li :key='index' v-for='(item,index) in list'>
                    <router-link :to="'/menu?id='+item.id" >
                        <span>
                            <img :src='item.image_path' />
                        </span>
                        <span class="pinpai">
                            <p>品牌</p>
                        </span>
                        <h4>{{item.name}}</h4>
                        <span class="seltnum">{{item.rating}}月售{{item.recent_order_num}}单</span>
                        <span class="song">￥{{item.float_minimum_order_amount}}起送 /</span>
                        <span class="songfei">配送费{{item.float_delivery_fee}}</span>
                        <span class="distance">{{item.distance}}m/29分钟</span>
                        <section class="listbottom">
                            <span :key='num' v-for="(val,num) in item.activities">
                                <em>{{val.icon_name}}</em>{{val.description}}</span>
                        </section>
                    </router-link>
                </li>
                <!-- <li>
                            <router-link to='/menu'>
                                <span>
                                    <img src="../assets/img/img_01.jpg">
                                </span>
                                <span class="pinpai">
                                    <p>品牌</p>
                                </span>
                                <h4>尊宝比萨</h4>
                                <span class="seltnum">月售1123单</span>
                                <span class="song">￥0起送 /</span>
                                <span class="songfei">配送费￥9/人</span>
                                <span class="selffei">49元/人</span>
                                <span class="distance">944m/29分钟</span>
                                <section class="listbottom">
                                    <span class="newvip">新用户下单立减17元</span>
                                    <span class="jianjia">满50减20</span>
                                </section>
                            </router-link>
                        </li> -->
            </ul>
        </div>
    </div>
</template>

<script>
// import error from './error'
import axios from 'axios'
export default {
    name: 'shoplist',
    data() {
        return {
            list: [],
            page:1
        }
    },
    methods: {
        loadMore() {
            this.loading = true;
            var that = this;
            setTimeout(function () {
                axios.get('http://localhost:3000/loadMore', {
                    params: {
                        // latitude: that.$store.state.position.lat,
                        // longitude: that.$store.state.position.lng,
                        offset: (that.page + 1) * 20,
                        limit: 20
                    }
                }).then(function (res) {
                    var arr = res.data
                    for (var i = 0; i < arr.length; i++) {
                        if (arr[i].image_path.substr(arr[i].image_path.length - 3, 3) === 'png') {
                            arr[i].image_path = '//fuss10.elemecdn.com/' + arr[i].image_path + '.png?imageMogr/format/webp/thumbnail/!120x120r/gravity/Center/crop/120x120/'
                        } else {
                            arr[i].image_path = '//fuss10.elemecdn.com/' + arr[i].image_path + '.jpeg?imageMogr/format/webp/thumbnail/!120x120r/gravity/Center/crop/120x120/'
                        }
                        arr[i].distance = arr[i].distance >= 1000 ? (arr[i].distance / 1000).toFixed(2) + 'km' : arr[i].distance + 'm'
                    }
                    if (arr.length > 0) {
                        that.list = that.list.concat(arr);
                        that.page++
                    }
                }).catch(function (err) {
                    console.log(err)
                })
                this.loading = false;
            }, 300);
        }
    },
    created: function () {     //获取菜单数据
        var that = this;
        axios.get("http://localhost:3000/getShopList").then(function (res) {
            var data = res.data;
            // console.log(data);
            if (data) {
                // console.log('列表数据获取成功');
                // that.$store.state.commit('GETHOMELIST',data);
                data.map(function (item, index) {
                    if (item.image_path.indexOf('png') != -1) {  //当后缀为png时
                        return (data[index].image_path = 'https://fuss10.elemecdn.com/' + item.image_path + '.png?imageMogr/format/webp/thumbnail/!120x120r/gravity/Center/crop/120x120/')
                    } else {                        //当后缀为png时
                        return (data[index].image_path = 'https://fuss10.elemecdn.com/' + item.image_path + '.jpeg?imageMogr/format/webp/thumbnail/!120x120r/gravity/Center/crop/120x120/')
                    }
                    // data[index].id = 'geohash=ws105rz9smwm&id='+item.id
                    //fuss10.elemecdn.com/d/bd/54b783772aa838936abc7638c9f25png.png?imageMogr/format/webp/thumbnail/!120x120r/gravity/Center/crop/120x120/
                })

                // data.map(function(num,val){
                //     return data[index].id = 'geohash=ws105rz9smwm&id='+item.id;
                // })
                that.list = data;
                // console.log(that.list);
            } else {
                console.log("列表数据获取失败");
            }
        }).catch(function (err) {
            // that.$router.push(error)
        })
    },
    computed: {
        // list:function(){
        // return this.$store.state.list
        // }

    }

}
</script>

<style scoped lang='scss'>
@import '../../static/hotcss/px2rem';
#main {
    width: 100%;
    height: 100%;
    background: #fff; // position:relative;
    margin-bottom: px2rem(50);
}

#main .mainge {
    width: 100%;
    height: px2rem(12);
    background-color: #f5f5f5;
}

#main .maintitle {
    width: 100%;
    height: px2rem(35);
    border-bottom: px2rem(1) solid #f7f7f7;
}

#main .maintitle h2 {
    line-height: px2rem(35);
    font-size: px2rem(16);
    text-indent: px2rem(16);
}

.mainlist {
    width: 100%;
    height: 100%;
}

.mainlist ul {
    background-color: #fff;
}
.mainlist ul{
    background-color: #fff; 
}
.mainlist ul img{
	width:px2rem(60);
	height: px2rem(60);
}

.mainlist ul li {
    width: 100%; // height: px2rem(137);
    padding: px2rem(16) 0 0 px2rem(12);
    box-sizing: border-box;
    position: relative;
    border-bottom: px2rem(1) solid #f7f7f7;
}

#main .maintitle h2 {
    line-height: px2rem(35);
    font-size: px2rem(16);
    text-indent: px2rem(16);
}

.mainlist {
    width: 100%;
    height: 100%;
}

.mainlist ul img {
    width: px2rem(60);
    height: px2rem(60);
}

.mainlist ul li {
    width: 100%; // height: px2rem(137);
    padding: px2rem(15) px2rem(10);
    box-sizing: border-box;
    position: relative;
    border-bottom: px2rem(1) solid #f7f7f7;
}

.mainlist ul li a {
    display: block;
    width: 100%; // height: 100%;
    text-decoration: none;
    color: #52250a;
}

.mainlist ul li .pinpai {
    width: px2rem(27);
    height: px2rem(15);
    display: inline-block;
    background-color: #ffd930;
    color: #52250a;
    text-align: center;
    line-height: px2rem(18);
    border-radius: px2rem(3);
    position: absolute;
    top: px2rem(16);
    left: px2rem(80);
    line-height: px2rem(15)
}

.mainlist ul li .pinpai p {
    font-size: px2rem(10);
}

.mainlist ul li h4 {
    width: px2rem(180);
    display: inline-block;
    position: absolute;
    top: px2rem(12);
    left: px2rem(110);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: px2rem(16);
}

.mainlist ul li .seltnum {
    display: inline-block;
    position: absolute;
    top: px2rem(38);
    left: px2rem(150);
    font-size: px2rem(12);
    color: #666666;
}

.mainlist ul li .song,
.songfei,
.selffei {
    font-size: px2rem(12);
    color: #666666;
}

.mainlist ul li .distance {
    display: inline-block;
    position: absolute;
    right: px2rem(4);
    top: px2rem(40);
    font-size: px2rem(12);
    color: #2395ff;
}

.listbottom {
    width: 100%; // height: px2rem(42);
    overflow: hidden; // position: relative;
    padding-left: px2rem(70);
    box-sizing: border-box;
    span {
        font-size: px2rem(10);
        height: px2rem(12);
        display: block;
        margin-bottom: px2rem(2);
        overflow: hidden;
        text-overflow: hidden; // position: absolute;
        // bottom: px2rem(20);
        // left: px2rem(80);
        em {
            background-color: rgb(240, 115, 115);
            margin-right: px2rem(4);
            color: #fff;
        }
    }
}
</style>
