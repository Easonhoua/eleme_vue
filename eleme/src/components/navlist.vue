<template>
	<div class="nav">
		<mt-swipe :auto="0">
			<mt-swipe-item>
				<ul class="navlist1">
					<li :key='index' v-for='(item,index) in list1' @click='changeTitle(item.name)'>
						<router-link to='/filterlist'>
							<img :src=" item.image_hash ">
							<span>{{ item.name }}</span>
						</router-link>
					</li>
				</ul>
			</mt-swipe-item>
			<mt-swipe-item>
				<ul class="navlist2">
					<li :key='index' v-for='(item,index) in list2'>
						<router-link to='/filterlist'>
							<img :src=" item.image_hash ">
							<span>{{ item.name }}</span>
						</router-link>
					</li>
				</ul>
	
			</mt-swipe-item>
		</mt-swipe>
	</div>
</template>
<script>
import axios from 'axios'

export default {
	name: 'hello',
	data() {
		return {
			list1: [],
			list2: []
			// title:this.$store.state.title
		}
	},
	methods: {
		changeTitle(data) {
			console.log(data)
			this.$store.commit('CHANGTITLE', data)
		}

	},
	created: function () {
		let that = this;
		axios.get('http://localhost:3000/getNav').then(function (res) {
			console.log(res)
			var data1 = res.data
			// console.log(data[0].entries)
			var data2 = data1[0].entries
			console.log(data2)
			if (data2) {
				data2.map(function (item, index) {
					// console.log(item.entries)
					// console.log(typeof item)
					if (item.image_hash.indexOf('png') != -1) {  //当后缀为png时
						return data2[index].image_hash = 'https://fuss10.elemecdn.com/' + item.image_hash + '.png?imageMogr/format/webp/thumbnail/!120x120r/gravity/Center/crop/120x120/';
					} else {
						return data2[index].image_hash = 'https://fuss10.elemecdn.com/' + item.image_hash + '.jpeg?imageMogr/format/webp/thumbnail/!120x120r/gravity/Center/crop/120x120/';
					}
				})
				that.list1 = data2.slice(0, 8)
				that.list2 = data2.slice(8)
			} else {
				console.log('数据连接错误！')
			}
		})

	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import '../../static/hotcss/px2rem';
@import '../assets/css/navlist';

.nav {
	width: 100%;
	height: px2rem(177);
	background: #fff;
	z-index: 1000;
	.navlist1,.navlist2 {
		width: 100%;
		height: px2rem(177);
		display: flex;
		flex-wrap: wrap;
		li {
			width: 25%;
			display: flex;
			font-size: px2rem(12);
			align-items: center;
			justify-content: center;
			a {
				display: flex;
				flex-direction: column;
				color: #999;
				text-align: center;
				text-decoration: none;
				span {
					margin-top: px2rem(6);
					font-size: px2rem(12)
				}
				img {
					width: px2rem(45);
					height: px2rem(45);
				}
			}
		}
	}
}
</style>