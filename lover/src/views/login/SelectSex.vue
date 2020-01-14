<template>
	<div class="select-sex">
		<title class="select-title">选择性别</title>
		<section class="select-box">
			<div class="sex-item">
				<img @click="touchSexBoy" class="sex-item-p" src="@/assets/sex_b.png">
				<img ref="boy" src="@/assets/sex_s.png">
			</div>
			<div class="sex-item">
				<img @click="touchSexGirl" class="sex-item-p" src="@/assets/sex_g.png">
				<img ref="girl" class="disenabled" src="@/assets/sex_s.png">
			</div>
		</section>
		<span @click="touchNext" class="sex-next">下一步</span>
	</div>
</template>

<style scoped>
	.select-sex {
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
		align-items: center;
	}
	.sex-item {
		display: inline;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.sex-item-p {
		width: 320px;
		height: 320px;
		margin-bottom: 60px;
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
		data() {
			return {
				sex: 1
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
				this.sex = 1
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
				this.sex = 2
			},
			touchNext() {
				this.$store.dispatch('user/sex', this.sex)
				this.$router.push('selectUser')
			}
		}
	}
</script>

