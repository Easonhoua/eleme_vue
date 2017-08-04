<template>
    <div>
        <Headers></Headers>
        <FilterNav></FilterNav>
        <div class="filterlist">
            <ul>
                <li :key='index' v-for='(item,index) in list'>
                    <router-link :to="'/menu?id='+item.id">
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
            </ul>
        </div>
          <Gotop></Gotop>  
    </div>
</template>

<script>
import Gotop from './goTop'
import Headers from './Header'
import axios from 'axios'
import FilterNav from './filterNav'


export default {
    data() {
        return {
            list: [],
            title:this.$store.state.title
        }
    },
    components: {
        Headers: Headers,
        FilterNav:FilterNav,
        Gotop:Gotop
    },
    created: function () {
        let that = this;
        this.title = this.$store.state.title
        axios.get('http://localhost:3000/getNavlist').then(function (res) {
            //   console.log('33333')
            var data = res.data
            console.log(data)
            data.map(function (item,index) {
                if (item.image_path.indexOf('png') != -1) {  //当后缀为png时
                   return data[index].image_path = 'https://fuss10.elemecdn.com/' + item.image_path + '.png?imageMogr/format/webp/thumbnail/!120x120r/gravity/Center/crop/120x120/';
                } else {
                   return data[index].image_path = 'https://fuss10.elemecdn.com/' + item.image_path + '.jpeg?imageMogr/format/webp/thumbnail/!120x120r/gravity/Center/crop/120x120/';
                }
            })

            that.list = data
        })
    }
}

</script>
<style scoped lang='scss'>
@import '../../static/hotcss/px2rem';
.filterlist {
    width: 100%;
    height: 100%;
    padding-top: px2rem(84);
    background-color: #fff;
}

.filterlist ul img {
    width: px2rem(60);
    height: px2rem(60);
}

.filterlist ul li {
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

.filterlist {
    width: 100%;
    height: 100%;
}

.filterlist ul img {
    width: px2rem(60);
    height: px2rem(60);
}

.filterlist ul li {
    width: 100%; // height: px2rem(137);
    padding: px2rem(15) px2rem(10);
    box-sizing: border-box;
    position: relative;
    border-bottom: px2rem(1) solid #f7f7f7;
}

.filterlist ul li a {
    display: block;
    width: 100%; // height: 100%;
    text-decoration: none;
    color: #52250a;
}

.filterlist ul li .pinpai {
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

.filterlist ul li .pinpai p {
    font-size: px2rem(10);
}

.filterlist ul li h4 {
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

.filterlist ul li .seltnum {
    display: inline-block;
    position: absolute;
    top: px2rem(38);
    left: px2rem(150);
    font-size: px2rem(12);
    color: #666666;
}

.filterlist ul li .song,
.songfei,
.selffei {
    font-size: px2rem(12);
    color: #666666;
}

.filterlist ul li .distance {
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
