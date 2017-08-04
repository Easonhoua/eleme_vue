<template>
    <div class="gotop">
    
        <span @click="gotop()">
            <i class="iconfont">&#xe615;</i>
        </span>
    
    </div>
</template>
<script>
import $ from 'jquery'
export default {
    data() {
        return {
            scroll:''
        }
    },
    methods: {
        IScroll() {
            this.scroll = $(window).scrollTop()
            console.log(this.scroll)
            if (this.scroll >= 500) {
                $('.gotop').fadeIn();
            } else {
                $('.gotop').fadeOut();
            }
        },
        gotop() {
            $('body,html').animate({ scrollTop: 0 }, 100)
        }
    },
    mounted(){
        window.addEventListener('scroll',this.IScroll)
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import '../../static/hotcss/px2rem';
.gotop {
    position: fixed;
    right: px2rem(16);
    bottom: px2rem(68);
    z-index: 88;
    display: none;
    span {
        display: flex;
        align-items: center;
        justify-content: center;
        width: px2rem(42.5);
        height: px2rem(42.5);
        border-radius: 50%;
        border: px2rem(1) solid #999;
        background-color: #fff;
        text-align: center;
        line-height: px2rem(42.5);

        i {
            font-size: px2rem(20);
            color: #999;
        }
    }
}
</style>
