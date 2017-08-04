<template>
    <div class="footer">
        <ul class="footer-cont">
              <!-- <li> 
                        <router-link to='/' class="activecolor">
                            <i class="iconfont">&#xe6c8;</i>
                            <span>外卖</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to='/discover'>
                            <i class="iconfont">&#xe601;</i>
                            <span>发现</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to='/orders'>
                            <i class="iconfont">&#xe613;</i>
                            <span>订单</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to='/mine'>
                            <i class="iconfont">&#xe603;</i>
                            <span>我的</span>
                        </router-link>
                    </li>
        
            </ul>   -->
     
             <li 
             :key=index v-for="(item,index) in liData" 
             :class='{ activecolor:isactive==index }' 
             @click='toggle(index)'>
                <router-link :to="item.label">
                     <i class="iconfont" v-html='item.icon'></i> 
                    <span>{{ item.name }}</span>
                </router-link>
            </li>
     </ul> 
    </div>
</template>

<script>

export default {
    name: 'footer',
    data() {
        return {
            // isactive: 0,
            liData: [
                { name: "首页", label: "/", icon: '&#xe6c8;' },
                { name: "发现", label: "/discover", icon: "&#xe601;" },
                { name: "订单", label: "/orders", icon: "&#xe613;" },
                { name: "我的", label: "/mine", icon: "&#xe603;" }
            ],
        }
    },
    computed:{
        isactive:function(){
          return this.$store.state.isactive;
        }
    },
    methods:{
        toggle (index) {
            this.$store.commit('TOGGLE',index)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import '../../static/hotcss/px2rem';
.footer {
    width: 100%;
    height: px2rem(50);
    background-color: #fff;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 10000;
    .footer-cont {
        width: 100%;
        height: px2rem(50);
        z-index: 10000;
        display: flex;
        align-items: center;
        li {
            flex: 1;
            a {
                text-align: center;
                display: flex;
                flex-direction: column;
                text-decoration: none;
                color: #666;
                font-size: px2rem(10);
                i {
                    font-size: px2rem(20);
                }
            }
            &.activecolor a i{
                color: #0089dc;
            
            }
            &.activecolor a span{
                color: #0089dc;
            
            }
            
        }
        
    }
}
</style>
