<template>
	<div class="select-user">
		<title class="select-title">~昵称~</title>
		<section class="select-box">
			<input v-model="nickname" class="user-input" type="text" placeholder="输入昵称">
			<span class="user-warn">1-8个中文，字母，数字组成</span>
		</section>
		<span @click="touchNext" class="sex-next">下一步</span>
	</div>
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
	.user-input {
		line-height: 100px;
		height: 100px;
		width: 800px;
		font-size: 60px;
		border: 8px solid #f8b551;
		background-color: #5ca247;
		margin: 20px;
		padding: 10px 30px;
		overflow: hidden;
		text-align: center;
	}
	.user-warn {
		display: block;
		font-size: 36px;
		color: #a79b8e;
	}
	.disenabled {
		opacity: 0.3
	}
	.sex-next {
		position: absolute;
		top: 100px;
		right: 100px;
		font-size: 48px;
		border-bottom: 2px solid #fff;
	}
</style>

<script>
	export default {
		data(){
			return {
				nickname: ''
			}
		},
		activated() {
			this.$store.state.hasNav = false
		},
		methods: {
			touchSexBoy() {
				let _class = 'disenabled'
				let _cls = this.$refs.boy.classList
				if(_cls.contains(_class)) {
					_cls.remove(_class)
				}
				_cls = this.$refs.girl.classList
				if(!_cls.contains(_class)) {
					_cls.add(_class)
				}
			},
			touchSexGirl() {
				let _class = 'disenabled'
				let _cls = this.$refs.girl.classList
				if(_cls.contains(_class)) {
					_cls.remove(_class)
				}
				_cls = this.$refs.boy.classList
				if(!_cls.contains(_class)) {
					_cls.add(_class)
				}
			},
			touchNext() {
				this.log(this.nickname)
				this.$store.dispatch('user/nickname', this.nickname)
				this.$router.push('selectEnter')
			}
		}
	}
</script>

