<template>
	<div class="date-time-item">
		<div class="date-time-input" @click="show">{{data}}</div>
		<date-time ref="dateTime" type="date" @confirm="select"></date-time>
	</div>
</template>

<script>
	import DateTime from 'vue-date-time-m'
	export default {
		data() {
			return {
				data: ''
			}
		},
		components: {
			DateTime
		},
		methods: {
			//  展示日期组件
			show() {
				this.$refs.dateTime.show()
			},
			// 日期组件回调
			select(val) {
				this.data = val
			}
		}
	}
</script>
<style type="text/css">
	.date-time-input{
		width: 1rem;
		height: 1rem;
		background: red;
	}
</style>