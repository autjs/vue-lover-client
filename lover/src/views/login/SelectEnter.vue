<template>
	<transition name="slide-right">
		<div class="select-user">
<!--			<title class="select-title">温馨小提示</title>-->
			<section class="select-title">
				<span class="user-cnt">白茶清欢无别事</span>
				<span class="user-cnt">我在等风</span>
				<span class="user-cnt">也等你</span>
			</section>
			<section class="select-open">
				<button class="select-btn" @click="openServe">开启服务</button>
				<span class="user-warn">小贴士：{{nickname}},填写更多资料，更快遇见你的{{sex === 1? '她':'他'}}</span>
			</section>
		</div>
	</transition>
</template>

<style scoped>
	.select-user {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		position: relative;
	}
	.select-title {
		font-size: 60px;
		margin: 60px 0;
		margin-top: -100px;
	}
	.select-box {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.select-open {
		position: absolute;
		bottom: 200px;
	}
	.user-warn {
		display: block;
		font-size: 36px;
		color: #a79b8e;
		margin: 40px;
	}
	.user-cnt {
		display: block;
		font-size: 60px;
		color: #e1eabd;
		margin-bottom: 60px;
	}
	.select-btn {
		color: #fff;
		background-color: #3e3a3b;
		font-size: 48px;
		border-radius: 10px;
		/*margin: 40px;*/
		padding: 20px;
		width: 400px;
		border: 5px solid #96b598;
		margin-top: 200px;
	}

</style>

<script>
	import tool from '@ziki/uuid'
	export default {
		data(){
			return {
				sex: this.$store.state.user.sex,
				nickname: this.$store.state.user.nickname
			}
		},
		activated() {
			this.$store.state.hasNav = false
		},
		methods: {
			openServe() {
				let id = tool.Len11()
				this.$store.dispatch('user/id', id)
				this.cn.c2s.register({
					id: id,
					sex: this.sex,
					nickname: this.nickname
				})
			}
		}
	}
</script>

