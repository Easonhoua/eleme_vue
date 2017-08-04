<template>
 <div class='all-food'>
    <div class='header'>
      <a href='#'><</a>
      <h1>美食</h1>
    </div>
     <div class='filter'>
       <div class='f-left'>美食</div>
       <div class='f-middle'>综合排序</div>
       <div class='f-right'>筛选</div>
     </div>
   <div class='list' id='list'>             <!--重点：v-for循环必须要用key绑定index！-->
                                            <!--6.用v-for循环list数组，获取到它数组里的每一个值item-->
                                            <!--7.在需要变更数据的地方用{{item.xxxxxx}}来把json数据渲染到页面-->
       <div class='small-list' :key = index v-for="(item,index) in list" >
       <div class='img'><img :src='item.pic_url'></div>
       <div class='content'>
         <div class='shop-top'><p>{{item.name}}</p></div>
         <div class='shop-mid'>
           <div class='shop-start'>
             <i class='iconfont'>&#xe70e;</i>
             <i class='iconfont'>&#xe70e;</i>
             <i class='iconfont'>&#xe70e;</i>
             <i class='iconfont'>&#xe70e;</i>
             <i class='iconfont'>&#xe70e;</i>
           </div>
           <div class='shop-num'>月售{{item.month_sale_num}}</div>
           <span class='journey'>
            {{item.distance}}
           </span>
           <span class='line'>|</span>
           <span class='shop-time'>
             {{item.avg_delivery_time}}min
           </span>
         </div>
         <div class='shop-foot'>
           <span class='foot-pay'>
             {{item.min_price_tip}}
             <em></em>
           </span>
           <span class='foot-pay'>
             <span class=line>|</span>
             {{item.shipping_fee_tip}}
             <em></em>
           </span>
         </div>
       </div>
     </div>
   </div>

 </div>
</template>
<script>
  import axios from 'axios';
//  在vue里用axios拿数据，第一步引入axiox
  export default {
    data () {
      return {
//        2.设置要拿的数据list默认为空
        list: []
      }
    },
//    3.用生命周期请求ajax
    created () {
//      4.获取到polist.json数据，用回调函数拿到数据
      axios.get('/api/polist').then((res) => {
        this.list = res.data.data;
//        5.在浏览器中打印出数据，调到上面写v-for循环的地方
        console.log(res.data)
      })
    }
}
</script>
<style scoped lang='scss'>
  @import '../../static/hotcss/px2rem';
 .all-food{
   background-color: #f4f4f4;
   min-height:100%;
   .header{
     background: #fff;
     border-bottom: px2rem(1) solid #f8f8f8;
     border-top: px2rem(1) solid #f8f8f8;
     text-align: center;
     position: relative;
     a{
       position: absolute;
       top: 0;
       left: 0;
       height: px2rem(42);
       line-height: px2rem(42);
       padding: 0 px2rem(30) 0 px2rem(8);
       text-decoration: none;
       outline: none;
     }
     h1{
       overflow: hidden;
       white-space: nowrap;
       text-overflow: ellipsis;
       margin: 0 px2rem(65);
       text-align: center;
       line-height: px2rem(44);
       font-size:px2rem(17);
       color: #333;
     }
   }
   .filter{
     width: 100%;
     background: #fff;
     height: px2rem(39);
     border: px2rem(1) solid #e4e4e4;
     position: relative;
     .f-left{
       border-right: px2rem(1) solid #dddddd;
       text-align: center;
       display: inline-block;
       box-sizing: border-box;
       width: 33%;
       float: left;
       height: px2rem(17);
       line-height:px2rem(17);
       margin-top: px2rem(11);
       padding: 0 px2rem(10);
       overflow: hidden;
       white-space: nowrap;
       text-overflow: ellipsis;
       font-size: px2rem(13);
       color: #2f2f2f;
     }
     .f-middle{
       border-right: px2rem(1) solid #dddddd;
       text-align: center;
       display: inline-block;
       box-sizing: border-box;
       width: 33%;
       float: left;
       height: px2rem(17);
       line-height:px2rem(17);
       margin-top: px2rem(11);
       padding: 0 px2rem(10);
       overflow: hidden;
       white-space: nowrap;
       text-overflow: ellipsis;
       font-size: px2rem(13);
       color: #2f2f2f;
     }
     .f-right{
       text-align: center;
       display: inline-block;
       box-sizing: border-box;
       width: 33%;
       float: left;
       height: px2rem(17);
       line-height:px2rem(17);
       margin-top: px2rem(11);
       padding: 0 px2rem(10);
       overflow: hidden;
       white-space: nowrap;
       text-overflow: ellipsis;
       font-size: px2rem(13);
       color: #2f2f2f;
     }
   }
   .list{
     background-color:#fff;
     width: px2rem(100%);
     height: px2rem(1000);
     .small-list{
       position: relative;
       margin-left:0.522rem;
       padding: 0.8rem 0 0.666rem;
       background: #fff;
       height:px2rem(84);
       border-bottom: px2rem(1) solid #e4e4e4;
       img{
         width: px2rem(73);
         height:px2rem(55);
         text-align: center;
         position: absolute;
         overflow: hidden;
         border: px2rem(1) solid #E4E4E4;
       }
       .content{
         margin-left:4rem;
         position: relative;
         overflow: hidden;
         .shop-top{
           font-size: px2rem(13);
           color: #333;
           overflow: hidden;
           text-overflow: ellipsis;
           white-space: nowrap;
           font-weight: 500;
           margin-right: px2rem(15);
         }
         .shop-mid{
           height: px2rem(20);
           font-size: px2rem(20);
           .shop-start {
             font-size: px2rem(11);
             display: inline;
             float: left;
             width: px2rem(76);
             height: px2rem(13);
             margin: px2rem(5) 0 0 0;
             .iconfont{
               color:#ffd161;
               font-size: px2rem(9);
             }
           }
           .shop-num{
             float: left;
             margin-top: px2rem(5);
             font-size:0.55rem;
             color: #656565;
           }
           .journey{
             float: right;
             margin-right: px2rem(15);
             font-size:  0.55rem;
             padding-top: 0.222rem;
             color: #656565;
             text-align: right;
           }
           .line{
             float: right;
             margin: 0.4rem px2rem(5) 0;
             width: 0;
             height: 0.25rem;
             font-size: 0;
             border-right: px2rem(1) solid #ccc;
           }
           .shop-time{
             float: right;
             font-size:0.55rem;
             margin-top: 0.222rem;
             color: #656565;
             text-align: right;
           }
         }
         .shop-foot{
           margin-top: px2rem(3);
           clear: both;
           color: #656565;
           font-size:0.55rem;
           .foot-pay{
             margin-right: px2rem(2);
             .line{
               margin-right: px2rem(5);
               color: #dcdcdc;
             }
           }

         }
       }
     }
   }
 }
</style>
