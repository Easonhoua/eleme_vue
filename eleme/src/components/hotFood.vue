<template>
    <div class='hotfood'>
        <div class='headers'>
            <ul class='headerlist'>
                <li>专属推荐</li>
                <li>风味小吃</li>
                <li>风味美食</li>
                <li>膳食平衡</li>
                <li>休闲甜品</li>
                <li>狂野食肉</li>
            </ul>
        </div>
        <div class="hotfoodmain">
            <section>
                <div class="mainhead">
                    <h3>参田谷韩国料理(科技园店)</h3>
                    <span>¥20起送 / 配送费¥5</span>
                </div>
                <ul>
                    <li>
                        <img src='#' />
                        <section>
                            <h4>韩式炸酱面</h4>
                            <span class="price">
                                <i>￥</i>25
                            </span>
                            <span class="gosee">去看看</span>
                        </section>
                    </li>
                </ul>
            </section>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
@import '../../static/hotcss/px2rem';

.hotfood {
    width: 100%;
    height: 100%;
    padding-top:px2rem(49);
    .headers {
        background: #fff;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 111;
        .headerlist {
            width:100%;
            overflow-x: scroll;
            overflow-y: hidden;
            white-space: nowrap;
            height: px2rem(49);
            line-height: px2rem(49);
            li{
                width:px2rem(78);
                height: px2rem(25);
                float: left;
            }
        }
    }
}
</style>
