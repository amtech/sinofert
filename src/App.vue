<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>
	export default {
		name: 'App'
	}
</script>

<style lang="less">
	@import '~vux/src/styles/reset.less';
	*{
		margin: 0;
		padding: 0;
		font-size: 0.16rem;
		font-family: "微软雅黑";
		box-sizing: border-box;
	}
</style>