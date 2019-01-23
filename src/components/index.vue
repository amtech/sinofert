<template>
	<div>
		<div class="box">
			<div class="dynamic">
				<h1>
					<!--<span class="spanGradual">市</span>
					<span class="spanGradual">场</span>
					<span class="spanGradual">动</span>-->
					<span>市场动态</span>
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
						<p class='zp'>至</p>
						<p>2019-12-30</p>
						<div style="clear: both;"></div>
					</div>
					<div class="chart">
						<div id="priceUreaChart" :style="{width: '100%', height: '5.66rem'}"></div>
						<div class="priceUreaChartLagend">
							<div class="priceUreaChartLagend_item" v-for="(item,index) in priceUreaChartName">
								<span v-bind:style="priceUreaChartStyle[index]"></span>&nbsp;
								<span>{{priceUreaChartData[index]}}元/吨</span>&emsp;
								<span>{{priceUreaChartName[index]}}</span>
							</div>
						</div>
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
						<p class='zp'>至</p>
						<p>2019-12-30</p>
						<div style="clear: both;"></div>
					</div>
					<div class="chart">
						<div id="turnoverUrea" :style="{width: '100%', height: '5.4rem'}">

						</div>
						<div class="turnoverUreaLagend">
							<div class="turnoverUreaLagend_item" v-for="(item,index) in turnoverUreaData">
								<span v-bind:style="turnoverUreaStyle[index]"></span>&nbsp;
								<span>{{turnoverUreaData[index]}}</span>
								<span>{{turnoverUreaName[index]}}</span>
							</div>

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
						<p style="margin-left: 0.24rem;">东北工贸大区</p>
						<p style="margin-left: 0.24rem;">2区</p>
						<div style="clear: both;"></div>
					</div>
					<div class="chart">
						<div id="allPriceChart" :style="{width: '100%', height: '5.66rem'}">
						</div>
						<div class="allPriceChartLagend" style="margin-top: 0.4rem;">
							<div class="allPriceChartLagend_item" v-for="(item,index) in allPriceChartName">
								<span v-bind:style="allPriceChartStyle[index]"></span>
								<span>{{allPriceChartData[index]}}元/吨</span>&emsp;
								<span>{{allPriceChartName[index]}}</span>
							</div>

						</div>
					</div>

				</div>
			</div>
			<div class="factory">
				<h1>
					<!--<span class="spanGradual">工</span>
					<span class="spanGradual">厂</span>-->
					<span>工厂</span>
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
						<p class='zp'>至</p>
						<p>2019-12-30</p>
						<div style="clear: both;"></div>
					</div>
					<div class="chart">
						<div id="ureaFactory" :style="{width: '100%', height: '5.66rem'}"></div>
						<div class="ureaFactoryLagend">
							<div class="ureaFactoryLagend_item" v-for="(item,index) in ureaFactoryName">
								<span v-bind:style="ureaFactoryStyle[index]"></span>&nbsp;
								<span>{{ureaFactoryData[index]}}元/吨</span>&emsp;
								<span>{{ureaFactoryName[index]}}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import DateTime from 'vue-date-time-m';
	import { getTypes, getRegion, getBigAreaEverydayPrice, getSunMarketEverydayPrice, getBigAreaTotalVolume, getSunMarketDayPrice, getFactoryEverydayPrice, getFactoryEverydayNum } from '@/api/address';
	export default {
		data() {
			return {
				data: '',
				calendarShow: '',
				priceUreaChartName: [],
				priceUreaChartData: [],
				priceUreaChartStyle: [
					"background:linear-gradient(#1cae95, #7dc16f)",
					"background:linear-gradient(#469fff, #00caa4)",
					"background:linear-gradient(#42a1fa, #6089f0)",
					"background:linear-gradient(#469fff, #00caa4)",
					"background:linear-gradient(#c75deb, #da3599)",
					"background:linear-gradient(#8260f0, #d760f0)",
					"background:linear-gradient(#ffff00, #ffae00)",
					"background:linear-gradient(#f0a760, #dd792f)",
				],
				turnoverUreaName: [],
				turnoverUreaData: [],
				turnoverUreaStyle: [
					"background:linear-gradient(#7dc16f, #1cae95)",
					"background:linear-gradient(#00caa4, #469fff)",
					"background:linear-gradient(#42a1fa, #6089f0)",
					"background:linear-gradient(#8260f0, #609af0)",
					"background:linear-gradient(#d760f0, #8260f0)",
					"background:linear-gradient(#dd2f8e, #c660f0)",
					"background:linear-gradient(#c738a9, #fb8373)",
				],
				allPriceChartName: [],
				allPriceChartData: [],
				allPriceChartStyle: [
					"background:linear-gradient(#78c071, #2ab190)",
					"background:linear-gradient(#3ea4f4, #0ec1b7)",
					"background:linear-gradient(#5c8bf2, #469ef9)",
					"background:linear-gradient(#ffbb00, #fff300)",
					"background:linear-gradient(#9260f0, #bd60f0)",
					"background:linear-gradient(#bf5eea, #d73ca9)",
					"background:linear-gradient(#ccc, #fff)",
				],
				ureaFactoryName: [],
				ureaFactoryData: [],
				ureaFactoryStyle: [
					"background:linear-gradient(#1cae95, #7dc16f)",
					"background:linear-gradient(#469fff, #00caa4)",
					"background:linear-gradient(#ffff00, #ffae00)",
					"background:linear-gradient(#d541b2, #9060f0)"
				],
				types: '',
				places: '',
				listQuery: {
					startDate: '2019-01-17',
					endDate: '2019-01-23',
					type: '尿素 小颗粒',
				},
				listQuery2: {
					startDate: '2019-01-21',
					bigArea: '东北工贸大区',
					sunMarket: '2区',
				}
			}
		},
		components: {
			DateTime
		},
		mounted() {
			this.getType();
			this.getRegions();
			this.setPriceUreaChart();
			this.setTurnoverUrea();
			this.setUreaFactory();
			this.setDrawLine();
		},
		methods: {
			getType() {
				getTypes().then(res => {
					this.types = res.data.data;

				})
			},
			getRegions() {
				getRegion().then(res => {
					this.places = res.data.data;

				})
			},
			setPriceUreaChart() {
				const _this = this;
				this.priceUreaChartName = [];

				let myChart = this.$echarts.init(document.getElementById('priceUreaChart'), {
					renderer: 'svg'
				})
				myChart.setOption({
					tooltip: {
						trigger: 'axis',
						confine: true,
						alwaysShowContent: true,
						formatter: function(params) {
							_this.priceUreaChartData = [];
							for(var i = 0; i < params.length; i++) {
								_this.priceUreaChartData.push(params[i].data)
							}
						}
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
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
					series: []
				});
				getBigAreaEverydayPrice(this.listQuery).then(res => {
					console.log(res.data.data)
					let data = [];
					let style = [{
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

					}, {
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
					}, {
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
					}, {
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
					}, {
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
					}, {
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
					}, {
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
					}, {
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
					}];
					for(var i = 0; i < res.data.data.length; i++) {
						this.priceUreaChartName.push(res.data.data[i].areaName)
						this.priceUreaChartData.push(res.data.data[i].dealPriceData[6])
						data.push({
							name: this.priceUreaChartName[i],
							type: 'line',
							symbol: 'circle',
							showSymbol: false,
							symbolSize: 3,
							data: res.data.data[i].dealPriceData,
							itemStyle: style[i],
						})
					}
					myChart.setOption({
						series: data,
					})
				})

			},
			setTurnoverUrea() {
				let myChart = this.$echarts.init(document.getElementById('turnoverUrea'), {
					renderer: 'svg'
				})
				// 绘制图表
				myChart.setOption({
					title: {
						text: '中化化肥',
						textStyle: {
							color: "#fff",
							fontWeight: 0,
							fontFamily: '微软雅黑',
							fontSize: 20
						}
					},
					tooltip: {
						trigger: 'item',
						formatter: "{a} <br/>{b}: {c} ({d}%)",
						confine: true,
						alwaysShowContent: true,
					},
					legend: {
						show: false,
						orient: 'vertical',
						bottom: 10,
						width: '100%',
						height: 100,
						orient: 'horizontal',
						itemGap: 20,
						selectedMode: false,
						data: this.turnoverUreaName,
						formatter: '{name}',
						textStyle: {
							color: '#d5d8e0',
							fontSize: 12,
						},
					},
					series: [],

				})
				this.turnoverUreaName = [];
				this.turnoverUreaData = [];
				getBigAreaTotalVolume(this.listQuery).then(res => {
					console.log(res.data.data)
					let all = 0;
					let data = [];
					let style = [{
						color: {
							type: 'linear',
							x: 0,
							y: 0,
							x2: 1,
							y2: 1,
							colorStops: [{
								offset: 0,
								color: '#7dc16f' // 0% 处的颜色
							}, {
								offset: 1,
								color: '#1cae95' // 100% 处的颜色
							}],
							globalCoord: false // 缺省为 false
						}
					}, {
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
					}, {
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
					}, {
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
					}, {
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
					}, {
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
					}, {
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
					}]
					for(var i = 0; i < res.data.data.length; i++) {
						this.turnoverUreaName.push(res.data.data[i].regionName)
						this.turnoverUreaData.push(parseFloat(res.data.data[i].transactionNum))
						all += this.turnoverUreaData[i]
						data.push({
							value: this.turnoverUreaData[i],
							name: this.turnoverUreaName[i],
							itemStyle: style[i]
						})
					}
					myChart.setOption({
						graphic: {
							elements: [{
								type: 'text',
								left: 'center',
								top: 'center',
								z: 2,
								zlevel: 100,
								style: {
									text: all,
									x: 100,
									y: 100,
									textAlign: 'center',
									fill: '#fff',
									fontSize: 30
								}
							}, {
								type: 'text',
								top: '60%',
								left: 'center',
								z: 2,
								zlevel: 100,
								style: {
									text: "销售总量",
									x: 100,
									y: 100,
									textAlign: 'center',
									fill: '#fff',
									fontSize: 15
								}
							}]

						},
						series: {
							name: '尿素成交量',
							type: 'pie',
							radius: ['60%', '80%'],
							avoidLabelOverlap: false,
							label: {
								show: false,
								normal: {
									show: false,
									position: 'center'
								},
								emphasis: {
									show: false,
									textStyle: {
										fontSize: '30',
										fontWeight: 'bold',
										color: '#fff'
									}
								}
							},
							itemStyle: {
								normal: {
									borderColor: "#2E3A66",
									borderWidth: 1,
								}
							},
							labelLine: {
								show: false,
							},
							data: data
						}
					})
				})
			},
			setUreaFactory() {
				const _this = this;
				let myChart = this.$echarts.init(document.getElementById('ureaFactory'), {
					renderer: 'svg'
				})
				// 绘制图表
				myChart.setOption({
					tooltip: {
						trigger: 'axis',
						confine: true,
						alwaysShowContent: true,
						formatter: function(params) {
							_this.ureaFactoryData = [];
							for(var i = 0; i < params.length; i++) {
								_this.ureaFactoryData.push(params[i].data)
							}
						}
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
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
					series: []
				});
				this.ureaFactoryName = [];
				this.ureaFactoryData = [];
				getFactoryEverydayPrice(this.listQuery).then(res => {
					console.log(res.data.data)
					let data = [];
					let style = [{
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

					}, {
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
					}, {
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
					}, {
						normal: {
							color: {
								type: 'linear',
								x: 0.5,
								y: 0.5,
								r: 0.5,
								colorStops: [{
									offset: 0,
									color: '#d541b2' // 0% 处的颜色
								}, {
									offset: 1,
									color: '#9060f0' // 100% 处的颜色
								}],
								globalCoord: false // 缺省为 false
							}
						}
					}];
					for(var i = 0; i < res.data.data.length; i++) {
						this.ureaFactoryName.push(res.data.data[i].factoryName)
						this.ureaFactoryData.push(res.data.data[i].factoryData[6])
						data.push({
							name: this.ureaFactoryName[i],
							type: 'line',
							symbol: 'circle',
							showSymbol: false,
							symbolSize: 3,
							data: res.data.data[i].factoryData,
							itemStyle: style[i],
						})
					}
					myChart.setOption({
						series: data,
					})
				})
			},
			setDrawLine() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById('allPriceChart'), {
					renderer: 'svg'
				})
				
				// 绘制图表
				this.allPriceChartName = [];
				this.allPriceChartData = [];
				getSunMarketDayPrice(this.listQuery2).then(res => {
					console.log(res.data.data)
					let data = [];
					let style = [];
					for(var i = 0; i < res.data.data.length; i++) {
						this.allPriceChartName.push(res.data.data[i].productName)
						this.allPriceChartData.push(res.data.data[i].dealPrice)
					}
					myChart.setOption({
						tooltip: {
							trigger: 'item',
//							formatter: '{b}：{c}元/吨',
							alwaysShowContent: true,
						},
						grid: {
							left: '6%',
							right: '1%',
							bottom: '0%',
							containLabel: true
						},
						xAxis: {
							data:this.allPriceChartName,
							type: 'category',

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
							name: '成交价格',
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
										},{
											type: 'linear',
											x: 0.5,
											y: 0.5,
											r: 0.5,
											colorStops: [{
												offset: 0,
												color: '#ccc' // 0% 处的颜色
											}, {
												offset: 1,
												color: '#fff' // 100% 处的颜色
											}],
											globalCoord: false // 缺省为 false
										}];
										return colorList[params.dataIndex]
									},
								}
							},
							data:this.allPriceChartData,
							barMaxWidth: 15,
						}]
					})
				})
			},

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
				span {
					font-size: 0.6rem;
					font-weight: 500;
					color: white;
				}
				.spanGradual {
					font-size: 0.6rem;
					font-weight: 500;
					background: linear-gradient(left, #fff, rgba(255, 255, 255, 0.6));
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
					.zp {
						height: 0.5rem;
						width: 0.5rem;
						background: #2A3356;
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
					height: 8.66rem;
					background: #2e3a66;
					padding: 0 0.28rem;
				}
			}
		}
	}
	
	.quantityUrea .title div {
		width: 5.24rem !important;
	}
	
	.quantityUrea .chart {
		height: 8rem !important;
	}
	
	.allPrice .chart {
		height: 8.8rem !important;
	}
	
	.factory .chart {
		height: 7.1rem !important;
	}
	
	.allPrice .title div {
		width: 4.269rem !important;
	}
	
	.factory .title div {
		width: 3.38rem !important;
	}
	
	.allPriceChartLagend_item,
	.turnoverUreaLagend_item,
	.ureaFactoryLagend_item,
	.priceUreaChartLagend_item {
		float: left;
		width: 50%;
		text-align: center;
		height: 0.58rem;
		span:nth-of-type(1) {
			/*background: red;*/
			display: inline-block;
			width: 0.2rem;
			height: 0.2rem;
			border-radius: 0.1rem;
			line-height: 0.58rem;
		}
		span:nth-of-type(2) {
			font-size: 0.28rem;
			line-height: 0.58rem;
			color: #FFFFFF;
		}
		span:nth-of-type(3) {
			line-height: 0.58rem;
			font-size: 0.20rem;
			color: #878ea7;
		}
	}
</style>