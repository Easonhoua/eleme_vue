<template>
    <div class="paixu">
        <div class="fenlei">
            <ul>
                <li>
                    <i class="iconfont" style="color:blue">&#xe621;</i>
                    <span>智能排序</span>
                </li>
                <li>
                    <i class="iconfont" style="color:skyblue">&#xe61a;</i>
                    <span>距离最近</span>
                </li>
                <li>
                    <i class="iconfont" style="color:red">&#xe61b;</i>
                    <span>销量最高</span>
    
                </li>
                <li>
                    <i class="iconfont" style="color:orange">&#xe625;</i>
                    <span>起送价最低</span>
                </li>
                <li>
                    <i class="iconfont" style="color:skyblue">&#xe663;</i>
                    <span>配送速度最快</span>
                </li>
                <li>
                    <i class="iconfont" style="color:yellow">&#xe653;</i>
                    <span>评分最高</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang='scss'>
@import '../../static/hotcss/px2rem';

.paixu {
    width: 100%;
    height: px2rem(297);
    background: #fff;
    position: absolute;
    left: 0;
    top: px2rem(40);

    ul {
        li {
            width: 100%;
            height: px2rem(50);
            padding-left: px2rem(18);
            border-bottom: px2rem(1) solid #ddd; 
            i {

                font-size: px2rem(16);
                margin-right: .266667rem; // vertical-align: middle;
            }
            span {
                line-height: px2rem(50);
                font-size: px2rem(12);
                color: #666;
            }
        //     &::after {
        //     width: 100%;
        //     position: absolute;
        //     content: "";
        //     bottom: 0;
        //     left: px2rem(80 );
        //     right: 0;
        //     height: px2rem(1);
        //     background-color: #ddd;
        // }
        }
        
    }
}
</style>