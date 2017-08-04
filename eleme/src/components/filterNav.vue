<template>
<div>
    <div class="navbar">
        <ul>
            <li :key=index v-for="(item,index) in liData" @click="isactive = index,tabtoggle('sec'+(index+1)),show = !show">
                <p>
                    <span>{{ item.title }}</span>
                    <i class="iconfont" v-html='item.icon'></i>
                </p>
            </li>
        </ul>
        <component :is='currentview' v-if='show'></component>
    </div>
    <div class='filter-modal' v-if='show'></div>
</div>
</template>

<script>
import Fenlei from './fenlei'
import Paixu from './paixu'
import Shaixuan from './shaixuan'



export default {
    data() {
        return {
            currentview: null,
            isactive: 0,
            show: false,
            liData: [
                { title: '分类', icon: '&#xe611' },  //&#xe603
                { title: '排序', icon: '&#xe611' },
                { title: '筛选', icon: '&#xe611' }
            ],
            title:this.$store.state.title
        }
    },
    components: {
        sec1: Fenlei,
        sec2: Paixu,
        sec3: Shaixuan
    },
    methods: {
        tabtoggle(tab) {
            this.currentview = tab
        }
    }

}
</script>

<style scoped lang='scss'>
@import '../../static/hotcss/px2rem';

.navbar {
    width: 100%;
    height: px2rem(40);
    background: #FFF;
    position: fixed;
    left: 0;
    top: px2rem(44);
    z-index: 100;
    ul {
        height: px2rem(39);
        display: flex;
        border-bottom: px2rem(1) solid #ddd;
        li {
            flex: 1; // border: px2rem(1) solid #ccc;
            p {
                text-align: center;
                color: #666;
                font-size: px2rem(14);
                line-height: px2rem(39);

                i {
                    font-size: px2rem(16);
                }
            }
        }
    }
}
.filter-modal {
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(0, 0, 0, .2);
    }
</style>
