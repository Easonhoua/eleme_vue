<template>
    <div class='fenlei'>
        <ul class="li1">
            <li :key=index1 v-for="(item1,index1) in liData1">{{ item1 }}</li>
        </ul>
        <ul class="li2">
            <li :key=index2 v-for="(item2,index2) in liData2">{{ item2 }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            liData1: ['全部商家', '美食', '快餐便当', '特色菜系', '异国料理', '小吃夜宵', '甜品饮品', '果蔬生鲜', '鲜花蛋糕', '商店超市', '医药健康', '早餐', '午餐', '下午茶', '晚餐', '夜宵'],
            liData2: ['全部', '简餐', '盖浇饭', '米粉面馆', '麻辣烫', '饺子馄饨', '汉堡', '包子粥店', '香锅砂锅', '烧腊饭', '黄焖鸡米饭', '煲仔饭', '生煎锅贴', '咖喱饭'],
        }
    }
}
</script>

<style scoped lang='scss'>
@import '../../static/hotcss/px2rem';
.fenlei {
    width: 100%;
    height: px2rem(395);
    background: #fff;
    position: absolute;
    left: 0;
    top: px2rem(40);
    z-index:10;
    .li1{
        width: 38%;
        height: px2rem(395);
        float: left;
        position: absolute;
        left:0;
        bottom: 0;
        overflow: auto;
        li{
            width: 100%;
            height: px2rem(45);
            font-size: px2rem(12);
            color: #666;
            text-indent: px2rem(10);
            background: #fafafa;
        }
    }
    .li2{
        width: 62%;
        height: px2rem(395);
        float: left;
        position: absolute;
        right: 0;
        bottom: 0;
         overflow: auto;
        li{
            width: 100%;
            height: px2rem(46);
            font-size: px2rem(12);
            color: #666;
            text-indent: px2rem(10);
        }
    }
}
</style>
