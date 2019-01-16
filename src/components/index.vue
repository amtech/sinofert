<template>
	<div>
		<div class="box">
			<div class="dynamic">
				<h1>
					<span class="spanGradual">市</span>
					<span class="spanGradual">场</span>
					<span class="spanGradual">动</span>
					<span>态</span>
				</h1>
				<div class="priceUrea">
					<div class="title">
						<div>
							<p>全国尿素市场成交价统计</p>
						</div>
						<div></div>
					</div>
					<div class="time">
						<p>2018-12-03</p>
						<h3>至</h3>
						<p>2019-12-30</p>
						<div style="clear: both;"></div>
					</div>
					<div class="chart">
						<div id="priceUreaChart" :style="{width: '100%', height: '5.66rem'}"></div>
					</div>
				</div>
				<div class="quantityUrea">
					<div class="title">
						<div>
							<p>全国尿素各区域成交量统计</p>
						</div>
						<div></div>
					</div>
					<div class="time">
						<p>2018-12-03</p>
						<h3>至</h3>
						<p>2019-12-30</p>
						<p style="margin-left: 0.3rem;">我司</p>
						<div style="clear: both;"></div>
					</div>
					<div class="chart">
						<div id="turnoverUrea" :style="{width: '100%', height: '5.66rem'}">

						</div>
					</div>
				</div>
				<div class="allPrice">
					<div class="title">
						<div>
							<p>全国各类产品成交价格统计</p>
						</div>
						<div></div>
					</div>
					<div class="time">
						<p>2018-12-03</p>
						<p style="margin-left: 0.24rem;">华东区</p>
						<p style="margin-left: 0.24rem;">河北区域</p>
						<div style="clear: both;"></div>
					</div>
					<div class="chart">
						<div id="allPriceChart" :style="{width: '100%', height: '5.66rem'}">

						</div>
					</div>
				</div>
			</div>
			<div class="factory">
				<h1>
					<span class="spanGradual">工</span>
					<span class="spanGradual">厂</span>
				</h1>
				<div class="priceUrea">
					<div class="title">
						<div>
							<p>工厂尿素成交价统计</p>
						</div>
						<div></div>
					</div>
					<div class="time">
						<p>2018-12-03</p>
						<h3>至</h3>
						<p>2019-12-30</p>
						<div style="clear: both;"></div>
					</div>
					<div class="chart">

					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		mounted() {
			this.setDrawLine();
			this.setPriceUreaChart();
			this.setTurnoverUrea()
		},
		methods: {
			setDrawLine() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById('allPriceChart'), {
					renderer: 'svg'
				})
				// 绘制图表
				myChart.setOption({
					tooltip: {
						trigger: 'item',
						formatter: '{b}：{c}元/吨'
					},
					grid: {
						left: '6%',
						right: '1%',
						bottom: '0%',
						containLabel: true
					},
					xAxis: {
						type: 'category',
						data: ["钾肥", "尿素", "硫化铵", "氯化铵", "磷肥", "氮肥"],
						axisTick: {
							show: true
						},
						axisLabel: {
							color: '#7C839F',
							fontSize: '0.22rem'
						},
						axisLine: {
							lineStyle: {
								color: '#5d6069',
							}
						},

						axisTick: {
							alignWithLabel: true,
						}
					},
					yAxis: {
						position: 'right',
						nameLocation: 'end',
						nameGap: 20,
						axisTick: {
							show: false
						},
						axisLine: {
							show: false,
						},
						splitLine: {
							lineStyle: {
								// 使用深浅的间隔色
								color: "#5d6069"
							}
						},
						axisLabel: {
							show: true,
							color: '#8289A3',
							fontSize: '0.2rem'
						}

					},
					series: [{
						name: '所在区域',
						type: 'bar',
						barWidth: 20,
						itemStyle: {
							normal: {　　　
								//定义一个list，然后根据所以取得不同的值，这样就实现了，　　　　　　　　　　　
								color: function(params) {
									// build a color map as your need.
									var colorList = [{
										type: 'linear',
										x: 0.5,
										y: 0.5,
										r: 0.5,
										colorStops: [{
											offset: 0,
											color: '#78c071' // 0% 处的颜色
										}, {
											offset: 1,
											color: '#2ab190' // 100% 处的颜色
										}],
										globalCoord: false // 缺省为 false
									}, {
										type: 'linear',
										x: 0.5,
										y: 0.5,
										r: 0.5,
										colorStops: [{
											offset: 0,
											color: '#3ea4f4' // 0% 处的颜色
										}, {
											offset: 1,
											color: '#0ec1b7' // 100% 处的颜色
										}],
										globalCoord: false // 缺省为 false
									}, {
										type: 'linear',
										x: 0.5,
										y: 0.5,
										r: 0.5,
										colorStops: [{
											offset: 0,
											color: '#5c8bf2' // 0% 处的颜色
										}, {
											offset: 1,
											color: '#469ef9' // 100% 处的颜色
										}],
										globalCoord: false // 缺省为 false
									}, {
										type: 'linear',
										x: 0.5,
										y: 0.5,
										r: 0.5,
										colorStops: [{
											offset: 0,
											color: '#ffbb00' // 0% 处的颜色
										}, {
											offset: 1,
											color: '#fff300' // 100% 处的颜色
										}],
										globalCoord: false // 缺省为 false
									}, {
										type: 'linear',
										x: 0.5,
										y: 0.5,
										r: 0.5,
										colorStops: [{
											offset: 0,
											color: '#9260f0' // 0% 处的颜色
										}, {
											offset: 1,
											color: '#bd60f0' // 100% 处的颜色
										}],
										globalCoord: false // 缺省为 false
									}, {
										type: 'linear',
										x: 0.5,
										y: 0.5,
										r: 0.5,
										colorStops: [{
											offset: 0,
											color: '#bf5eea' // 0% 处的颜色
										}, {
											offset: 1,
											color: '#d73ca9' // 100% 处的颜色
										}],
										globalCoord: false // 缺省为 false
									}];
									return colorList[params.dataIndex]
								},
								//以下为是否显示，显示位置和显示格式的设置了
								/*label: {
									show: true,
									position: 'top',
									formatter: '{c}'
								}*/
							}
						},
						data: [1230, 1125, 1235, 1278, 1346, 1122],
						barMaxWidth: '40px',
						/*label: {
							normal: {
								show: true,
								position: 'top',
								formatter: '{c}'
							}
						}*/
					}]

				});
			},
			setPriceUreaChart() {
				let myChart = this.$echarts.init(document.getElementById('priceUreaChart'), {
					renderer: 'svg'
				})
				myChart.setOption({
					title: {
						text: ''
					},
					tooltip: {
						trigger: 'axis',
						confine: true,
					},

					//					legend: {
					//						data: ['西北', '河北', '鲁西', '鲁南', '华东港口','广州港口','河南','西南']
					//					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						//						data: ['12/1','12/2','12/3','12/4','12/5','12/6','12/7','12/8','12/9','12/10','12/11','12/12','12/13','12/14','12/15'],
						data: ['12/1', '12/2', '12/3', '12/4', '12/5', '12/6', '12/7'],
						axisLine: {
							lineStyle: {
								color: '#5d6069'
							}
						},
						axisLabel: {
							interval: 0,
							color: '#7C839F',
							fontSize: '0.22rem'
						},
						axisTick: {
							alignWithLabel: true,
						}
					},
					yAxis: {
						type: 'value',
						position: 'right',
						nameLocation: 'end',
						nameGap: 20,
						axisTick: {
							show: false
						},
						axisLine: {
							show: false,
						},
						splitLine: {
							lineStyle: {
								// 使用深浅的间隔色
								color: "#5d6069"
							}
						},
						axisLabel: {
							show: true,
							color: '#8289A3',
							fontSize: '0.2rem'
						}
					},
					series: [{
							name: '西北',
							type: 'line',
							symbol: 'circle',
							showSymbol: false,
							symbolSize: 3,
							data: [120, 132, 101, 134, 90, 230, 210],
							itemStyle: {
								normal: {
									color: {
										type: 'linear',
										x: 0.5,
										y: 0.5,
										r: 0.5,
										colorStops: [{
											offset: 0,
											color: '#1cae95' // 0% 处的颜色
										}, {
											offset: 1,
											color: '#7dc16f' // 100% 处的颜色
										}],
										globalCoord: false // 缺省为 false
									}
								}

							}
						},
						{
							name: '河北',
							type: 'line',
							symbol: 'circle',
							showSymbol: false,
							symbolSize: 3,
							data: [220, 182, 191, 234, 290, 330, 310],
							itemStyle: {
								normal: {
									color: {
										type: 'linear',
										x: 0.5,
										y: 0.5,
										r: 0.5,
										colorStops: [{
											offset: 0,
											color: '#469fff' // 0% 处的颜色
										}, {
											offset: 1,
											color: '#00caa4' // 100% 处的颜色
										}],
										globalCoord: false // 缺省为 false
									}
								}
							}
						},
						{
							name: '鲁西',
							type: 'line',
							symbol: 'circle',
							showSymbol: false,
							symbolSize: 3,
							data: [150, 232, 201, 154, 190, 330, 410],
							itemStyle: {
								normal: {
									color: {
										type: 'linear',
										x: 0.5,
										y: 0.5,
										r: 0.5,
										colorStops: [{
											offset: 0,
											color: '#42a1fa' // 0% 处的颜色
										}, {
											offset: 1,
											color: '#6089f0' // 100% 处的颜色
										}],
										globalCoord: false // 缺省为 false
									}
								}
							}
						},
						{
							name: '鲁南',
							type: 'line',
							symbol: 'circle',
							symbolSize: 3,
							showSymbol: false,
							data: [320, 332, 301, 334, 390, 330, 320],
							itemStyle: {
								normal: {
									color: {
										type: 'linear',
										x: 0.5,
										y: 0.5,
										r: 0.5,
										colorStops: [{
											offset: 0,
											color: '#469fff' // 0% 处的颜色
										}, {
											offset: 1,
											color: '#00caa4' // 100% 处的颜色
										}],
										globalCoord: false // 缺省为 false
									}
								}
							}
						},
						{
							name: '华东港口',
							type: 'line',
							symbol: 'circle',
							symbolSize: 3,
							showSymbol: false,
							data: [820, 932, 901, 934, 1290, 1330, 1320],
							itemStyle: {
								normal: {
									color: {
										type: 'linear',
										x: 0.5,
										y: 0.5,
										r: 0.5,
										colorStops: [{
											offset: 0,
											color: '#c75deb' // 0% 处的颜色
										}, {
											offset: 1,
											color: '#da3599' // 100% 处的颜色
										}],
										globalCoord: false // 缺省为 false
									}
								}
							}
						},
						{
							name: '广州港口',
							type: 'line',
							symbol: 'circle',
							symbolSize: 3,
							showSymbol: false,
							data: [820, 752, 901, 1023, 1290, 1630, 1320],
							itemStyle: {
								normal: {
									color: {
										type: 'linear',
										x: 0.5,
										y: 0.5,
										r: 0.5,
										colorStops: [{
											offset: 0,
											color: '#8260f0' // 0% 处的颜色
										}, {
											offset: 1,
											color: '#d760f0' // 100% 处的颜色
										}],
										globalCoord: false // 缺省为 false
									}
								}
							}
						},
						{
							name: '河南',
							type: 'line',
							symbol: 'circle',
							symbolSize: 3,
							showSymbol: false,
							data: [1456, 932, 253, 934, 894, 1330, 1053],
							itemStyle: {
								normal: {
									color: {
										type: 'linear',
										x: 0.5,
										y: 0.5,
										r: 0.5,
										colorStops: [{
											offset: 0,
											color: '#ffff00' // 0% 处的颜色
										}, {
											offset: 1,
											color: '#ffae00' // 100% 处的颜色
										}],
										globalCoord: false // 缺省为 false
									}
								}
							}
						},
						{
							name: '西南',
							type: 'line',
							symbol: 'circle',
							symbolSize: 3,
							showSymbol: false,
							data: [123, 1960, 258, 789, 1478, 1330, 1593],
							itemStyle: {
								normal: {
									color: {
										type: 'linear',
										x: 0.5,
										y: 0.5,
										r: 0.5,
										colorStops: [{
											offset: 0,
											color: '#f0a760' // 0% 处的颜色
										}, {
											offset: 1,
											color: '#dd792f' // 100% 处的颜色
										}],
										globalCoord: false // 缺省为 false
									}
								}
							}
						}
					]
				});
			},
			setTurnoverUrea() {
				let myChart = this.$echarts.init(document.getElementById('turnoverUrea'), {
					renderer: 'svg'
				})
				// 绘制图表
				myChart.setOption({
					tooltip: {
						trigger: 'item',
						formatter: "{a} <br/>{b}: {c} ({d}%)",
						confine: true,
					},
					//					legend: {
					//						orient: 'vertical',
					//						data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
					//					},
					series: [{
						name: '尿素成交量',
						type: 'pie',
						radius: ['60%', '80%'],
						avoidLabelOverlap: false,
						label: {
							normal: {
								show: false,
								position: 'center'
							},
							emphasis: {
								show: true,
								textStyle: {
									fontSize: '30',
									fontWeight: 'bold',
									color:'#fff'
								}
							}
						},
						labelLine: {
							show: false,
						},
						data: [{
								value: 1730,
								name: '华东区域',
								itemStyle: {
									color: {
										type: 'linear',
										x: 0,
										y: 0,
										x2: 1,
										y2: 1,
										colorStops: [{
											offset: 0,
											color: '#1cae95' // 0% 处的颜色
										}, {
											offset: 1,
											color: '#7dc16f' // 100% 处的颜色
										}],
										globalCoord: false // 缺省为 false
									}
								}
							},
							{
								value: 1125,
								name: '华北区域',
								itemStyle: {
									color: {
										type: 'linear',
										x: 0,
										y: 0,
										x2: 1,
										y2: 1,
										colorStops: [{
											offset: 0,
											color: '#00caa4' // 0% 处的颜色
										}, {
											offset: 1,
											color: '#469fff' // 100% 处的颜色
										}],
										globalCoord: false // 缺省为 false
									}
								}
							},
							{
								value: 1235,
								name: '鲁西区域',
								itemStyle: {
									color: {
										type: 'linear',
										x: 0,
										y: 0,
										x2: 1,
										y2: 1,
										colorStops: [{
											offset: 0,
											color: '#42a1fa' // 0% 处的颜色
										}, {
											offset: 1,
											color: '#6089f0' // 100% 处的颜色
										}],
										globalCoord: false // 缺省为 false
									}
								}
							},
							{
								value: 1278,
								name: '鲁南区域',
								itemStyle: {
									color: {
										type: 'linear',
										x: 0,
										y: 0,
										x2: 1,
										y2: 1,
										colorStops: [{
											offset: 0,
											color: '#8260f0' // 0% 处的颜色
										}, {
											offset: 1,
											color: '#609af0' // 100% 处的颜色
										}],
										globalCoord: false // 缺省为 false
									}
								}
							},
							{
								value: 1346,
								name: '华东港口',
								itemStyle: {
									color: {
										type: 'linear',
										x: 0,
										y: 0,
										x2: 1,
										y2: 1,
										colorStops: [{
											offset: 0,
											color: '#d760f0' // 0% 处的颜色
										}, {
											offset: 1,
											color: '#8260f0' // 100% 处的颜色
										}],
										globalCoord: false // 缺省为 false
									}
								}
							},
							{
								value: 1322,
								name: '河北区域',
								itemStyle: {
									color: {
										type: 'linear',
										x: 0,
										y: 0,
										x2: 1,
										y2: 1,
										colorStops: [{
											offset: 0,
											color: '#dd2f8e' // 0% 处的颜色
										}, {
											offset: 1,
											color: '#c660f0' // 100% 处的颜色
										}],
										globalCoord: false // 缺省为 false
									}
								}
							},
							{
								value: 1146,
								name: '山东区域',
								itemStyle: {
									color: {
										type: 'linear',
										x: 0,
										y: 0,
										x2: 1,
										y2: 1,
										colorStops: [{
											offset: 0,
											color: '#c738a9' // 0% 处的颜色
										}, {
											offset: 1,
											color: '#fb8373' // 100% 处的颜色
										}],
										globalCoord: false // 缺省为 false
									}
								}
							}
						]
					}]

				})
			}
		}
	}
</script>
<style lang="scss" type="text/css">
	.box {
		width: 100%;
		background: #2A3356;
		padding-bottom: 0.45rem;
		.dynamic,
		.factory {
			h1 {
				padding-top: 0.28rem;
				padding-left: 0.28rem;
				span{
					font-size: 0.6rem;
					font-weight: 500;
					color: white;
				}
				.spanGradual{
					font-size: 0.6rem;
					font-weight: 500;
					background: linear-gradient(left,#fff,rgba(255, 255, 255, 0.4));
					-webkit-background-clip: text;
					color: transparent;
				}
				
			}
			.priceUrea,
			.quantityUrea,
			.allPrice {
				.title {
					padding-top: 0.28rem;
					padding-left: 0.28rem;
					div:nth-of-type(1) {
						box-sizing: border-box;
						padding-top: 0.1rem;
						padding-left: 0.25rem;
						width: 3.95rem;
						height: 0.53rem;
						background: rgba(86, 105, 254, 0.5);
						border-radius: 5px;
						position: absolute;
						z-index: 15;
						color: white;
						font-weight: 500;
						p {
							font-size: 0.32rem;
						}
					}
					div:nth-of-type(2) {
						width: 3.95rem;
						height: 0.53rem;
						background: rgb(141, 73, 206);
						border-radius: 5px;
						transform: translate(0.11rem, 0.09rem);
					}
				}
				.time {
					padding-left: 0.28rem;
					padding-top: 0.4rem;
					p {
						color: white;
						height: 0.5rem;
						width: 1.6rem;
						border-radius: 0.25rem;
						background: #2E3A66;
						float: left;
						font-size: 0.24rem;
						text-align: center;
						line-height: 0.5rem;
					}
					h3 {
						float: left;
						line-height: 0.5rem;
						padding: 0 0.08rem;
						color: #aaadbb;
						font-weight: 0;
					}
				}
				.chart {
					overflow: auto;
					margin-top: 0.3rem;
					height: 8.35rem;
					background: #2e3a66;
					padding: 0 0.28rem;
				}
			}
		}
	}
	
	.quantityUrea .title div {
		width: 5.24rem !important;
	}
	
	.allPrice .title div {
		width: 4.269rem !important;
	}
	
	.factory .title div {
		width: 3.38rem !important;
	}
</style>