<template>
	<div>
		<div class="box">
			<div class="dynamic">
				<h1>
					<!--<span class="spanGradual">市</span>
					<span class="spanGradual">场</span>
					<span class="spanGradual">动</span>-->
					<p>市场动态</p>
				</h1>
				<div class="priceUrea">
					<div class="title">
						<div>
							<p>全国{{priceUreaTitle}}市场成交价统计</p>
						</div>
						<div></div>
					</div>
					<div class="time">

						<group>
							<calendar title=" " @on-change="priceUreaChange" v-model="listQuery.startDate"></calendar>
						</group>
						<p class='zp'>至</p>
						<p>{{listQuery.endDate}}</p>
						<popup-radio @on-hide="priceUreaChange2" style="margin-left: 0.2rem;" title=" " :options="types" v-model="listQuery.type"></popup-radio>
						<div style="clear: both;"></div>
					</div>
					<div class="chart">
						<p style="position: absolute;z-index: 99; top: 0.28rem;" @click="setPriceUreaChart" v-if="priceUreaCheck == '1'">
							<x-icon style="fill: #fff;" type="ios-close-outline" size="30"></x-icon>
						</p>
						<div id="priceUreaChart" :style="{width: '100%', height: '5.66rem'}"></div>
						<div class="priceUreaChartLagend" v-if="priceUreaCheck == '0'">
							<div class="priceUreaChartLagend_item" v-for="(item,index) in priceUreaChartName" @click="check(item,index)">
								<span v-bind:style="priceUreaChartStyle[index]"></span>&nbsp;
								<span>{{priceUreaChartData[index]}}元/吨</span>&emsp;
								<span>{{priceUreaChartName[index]}}</span>
							</div>
						</div>
						<div class="priceUreaChartLagend" v-else>
							<div class="priceUreaChartLagend_item" v-for="(item,index) in priceUreaChartName2">
								<span v-bind:style="priceUreaChartStyle2[index]"></span>&nbsp;
								<span>{{priceUreaChartData2[index]}}元/吨</span>&emsp;
								<span>{{priceUreaChartName2[index]}}</span>
							</div>
						</div>
					</div>
				</div>
				<div class="quantityUrea">
					<div class="title">
						<div>
							<p>全国{{quantityUreaTitle}}各区域成交量统计</p>
						</div>
						<div></div>
					</div>
					<div class="time">
						<group>
							<calendar title=" " @on-change="quantityUreaChange" v-model="listQuery3.startDate"></calendar>
						</group>
						<p class='zp'>至</p>
						<p>{{listQuery.endDate}}</p>
						<popup-radio @on-hide="quantityUreaChange2" style="margin-left: 0.2rem;" title=" " :options="types" v-model="listQuery3.type"></popup-radio>
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
							<p style="clear: both;"></p>
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
						<group>
							<calendar title=" " @on-change="allPriceChange" v-model="listQuery4.startDate"></calendar>
						</group>
						<div class="region">
							<popup-picker style="margin-left: 0.15rem;" title=" " @on-change="allPriceChange2" :data="list3" :columns="2" v-model="region" show-name></popup-picker>
						</div>
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
					<p style="float: left;">工厂</p>
					<div style="float: left;">
						<button-tab v-model='factoryindex1'>
							<button-tab-item>成交价</button-tab-item>
							<button-tab-item>成交量</button-tab-item>
						</button-tab>
					</div>
					<p style="clear: both;"></p>
				</h1>

				<swiper v-model="factoryindex1" height="9rem" :show-dots="false">
					<swiper-item :key="0">
						<div>
							<div class="priceUrea">
								<div class="title">
									<div>
										<p>工厂{{priceTitle}}成交价统计</p>
									</div>
									<div></div>
								</div>
								<div class="time">
									<group>
										<calendar title=" " @on-change="PriceChange" v-model="listQuery5.startDate"></calendar>
									</group>
									<p class='zp'>至</p>
									<p>{{listQuery.endDate}}</p>
									<popup-radio @on-hide="PriceChange2" style="margin-left: 0.2rem;" title=" " :options="types" v-model="listQuery5.type"></popup-radio>
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
					</swiper-item>

					<swiper-item :key="1">
						<div>
							<div class="priceUrea">
								<div class="title">
									<div>
										<p>工厂{{volumeTitle}}成交量统计</p>
									</div>
									<div></div>
								</div>
								<div class="time">
									<group>
										<calendar title=" " @on-change="volumeChange" v-model="listQuery6.startDate"></calendar>
									</group>
									<p class='zp'>至</p>
									<p>{{listQuery.endDate}}</p>
									<popup-radio @on-hide="volumeChange2" style="margin-left: 0.2rem;" title=" " :options="types" v-model="listQuery6.type"></popup-radio>
									<div style="clear: both;"></div>
								</div>
								<div class="chart">
									<div id="volumeChart" :style="{width: '100%', height: '5.66rem'}"></div>
									<div class="ureaFactoryLagend">
										<div class="ureaFactoryLagend_item" v-for="(item,index) in volumeName">
											<span v-bind:style="volumeStyle[index]"></span>&nbsp;
											<span>{{volumeData[index]}}元/吨</span>&emsp;
											<span>{{volumeName[index]}}</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</swiper-item>
				</swiper>

			</div>
		</div>

	</div>
</template>

<script>
	import { Calendar, Group, PopupRadio, ButtonTab, ButtonTabItem, Swiper, SwiperItem, PopupPicker } from 'vux'
	import { getTypes, getRegion, getBigAreaEverydayPrice, getSunMarketEverydayPrice, getBigAreaTotalVolume, getSunMarketDayPrice, getFactoryEverydayPrice, getFactoryEverydayNum } from '@/api/address';
	export default {
		components: {
			PopupPicker,
			Calendar,
			Group,
			PopupRadio,
			ButtonTab,
			ButtonTabItem,
			Swiper,
			SwiperItem
		},
		data() {
			return {
				list3: [{
					name: '东北工贸大区',
					value: '东北工贸大区',
					parent: 0
				}, {
					name: '西北工贸大区',
					value: '西北工贸大区',
					parent: 0
				}, {
					name: '1区',
					value: '1区',
					parent: '东北工贸大区'
				}, {
					name: '2区',
					value: '2区',
					parent: '东北工贸大区'
				}, {
					name: '1区',
					value: '1区',
					parent: '西北工贸大区'
				}, {
					name: '2区',
					value: '2区',
					parent: '西北工贸大区'
				}],
				index: 0,
				demo1: 'TODAY',
				readonly: false,
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
				priceUreaChartName2: [],
				priceUreaChartData2: [],
				priceUreaChartStyle2: [
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
				volumeName: [],
				volumeData: [],
				volumeStyle: [
					"background:linear-gradient(#1cae95, #7dc16f)",
					"background:linear-gradient(#469fff, #00caa4)",
					"background:linear-gradient(#ffff00, #ffae00)",
					"background:linear-gradient(#d541b2, #9060f0)"
				],
				types: [],
				places: '',
				PriceUreaTypes: '',
				priceUreaDate: [],
				priceUreaCheck: '0',
				priceUreaTitle: '尿素',
				listQuery: {
					startDate: '',
					endDate: '',
					type: '尿素 小颗粒',
				},
				listQuery2: {
					startDate: '',
					endDate: '',
					type: '尿素 小颗粒',
					bigArea: '',
				},
				quantityUreaTitle: '尿素',
				listQuery3: {
					startDate: '',
					endDate: '',
					type: '尿素 小颗粒',
				},
				region: ["东北工贸大区", "2区"],
				listQuery4: {
					startDate: '',
					bigArea: '',
					sunMarket: '',
				},
				factoryindex1: 0,
				priceTitle: '尿素',
				priceDate: [],
				listQuery5: {
					startDate: '',
					endDate: '',
					type: '尿素 小颗粒',
				},
				volumeTitle: '尿素',
				volumeDate: [],
				listQuery6: {
					startDate: '',
					endDate: '',
					type: '尿素 小颗粒',
				},
			}
		},
		mounted() {
			this.getType();
			this.getRegions();
			this.priceUreaStart();
			this.quantityUreaStart();
			this.PriceStart();
			this.volumeStart();
			this.allPriceStart();
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
					console.log(JSON.stringify(this.places))
				})
			},
			priceUreaStart() {
				this.listQuery.startDate = this.dayTime(new Date(this.dayTime(new Date())) - 518400000);
				this.listQuery.endDate = this.dayTime(new Date());
				this.listQuery2.startDate = this.listQuery.startDate;
				this.listQuery2.endDate = this.listQuery.endDate;
			},
			priceUreaChange2() {
				this.priceUreaTitle = this.listQuery.type.slice(0, 2)
				if(this.priceUreaCheck == '0') {
					this.setPriceUreaChart();
				} else {
					this.check();
				}
			},
			priceUreaChange(val) {
				this.priceUreaDate = [];
				var endDate = new Date(val).getTime() + 518400000
				var endDate2 = new Date(val).getTime()
				this.listQuery.endDate = this.dayTime(endDate);
				this.priceUreaDate.push(this.dayyTime(endDate2))
				for(var i = 0; i < 6; i++) {
					this.priceUreaDate.push(this.dayyTime(endDate2 += 86400000))
				}
				console.log(this.priceUreaDate)
				this.listQuery.startDate = val;
				this.listQuery.endDate = this.dayTime(endDate);
				this.listQuery2.startDate = val;
				this.listQuery2.endDate = this.dayTime(endDate);
				if(this.priceUreaCheck == '0') {
					this.setPriceUreaChart();
				} else {
					this.check();
				}

			},
			setPriceUreaChart() {
				const _this = this;
				this.priceUreaChartName = [];
				this.priceUreaCheck = '0';
				let myChart = this.$echarts.init(document.getElementById('priceUreaChart'), {
					renderer: 'svg'
				})
				myChart.clear();
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
						data: this.priceUreaDate,
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
					console.log(this.priceUreaChartName)
					myChart.setOption({
						series: data,
					})
				})

			},
			check(item, index) {
				const _this = this;
				this.priceUreaChartName2 = [];
				this.priceUreaCheck = '1';
				//				this.$refs.priceUreaCheck.style.display = 'none';
				//				this.$refs.priceUreaCheck2.style.display = 'block';
				let myChart = this.$echarts.init(document.getElementById('priceUreaChart'), {
					renderer: 'svg'
				})
				myChart.clear();
				myChart.setOption({
					tooltip: {
						trigger: 'axis',
						confine: true,
						alwaysShowContent: true,
						formatter: function(params) {
							_this.priceUreaChartData2 = [];
							for(var i = 0; i < params.length; i++) {
								_this.priceUreaChartData2.push(params[i].data)
							}
						}
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: this.priceUreaDate,
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
				})
				console.log(item)
				if(item != undefined) {
					this.listQuery2.bigArea = item;
					localStorage.setItem('priceUreaItemName', item);
				} else {
					this.priceUreaItemName = localStorage.getItem('priceUreaItemName');
					this.listQuery2.bigArea = this.priceUreaItemName;

				}
				this.listQuery2.type = this.listQuery.type;
				getSunMarketEverydayPrice(this.listQuery2).then(res => {
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
						this.priceUreaChartName2.push(res.data.data[i].areaName)
						this.priceUreaChartData2.push(res.data.data[i].dealPriceData[6])
						data.push({
							name: this.priceUreaChartName2[i],
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

			quantityUreaStart() {
				this.listQuery3.startDate = this.dayTime(new Date(this.dayTime(new Date())) - 518400000);
				this.listQuery3.endDate = this.dayTime(new Date());
			},
			quantityUreaChange(val) {
				var endDate = new Date(val).getTime() + 518400000
				this.listQuery3.startDate = val;
				this.listQuery3.endDate = this.dayTime(endDate);
				this.setTurnoverUrea();
			},
			quantityUreaChange2() {
				this.quantityUreaTitle = this.listQuery.type.slice(0, 2)
				this.setTurnoverUrea();
			},
			setTurnoverUrea() {
				let myChart = this.$echarts.init(document.getElementById('turnoverUrea'), {
					renderer: 'svg'
				})
				// 绘制图表
				myChart.clear();
				myChart.setOption({
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
				getBigAreaTotalVolume(this.listQuery3).then(res => {
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
			PriceStart() {
				this.listQuery5.startDate = this.dayTime(new Date(this.dayTime(new Date())) - 518400000);
				this.listQuery5.endDate = this.dayTime(new Date());
			},
			PriceChange(val) {
				this.priceDate = [];
				var endDate = new Date(val).getTime() + 518400000
				var endDate2 = new Date(val).getTime()
				this.listQuery5.endDate = this.dayTime(endDate);
				this.priceDate.push(this.dayyTime(endDate2))
				for(var i = 0; i < 6; i++) {
					this.priceDate.push(this.dayyTime(endDate2 += 86400000))
				}
				this.listQuery5.startDate = val;
				this.listQuery5.endDate = this.dayTime(endDate);
				this.setUreaFactory();

			},
			PriceChange2() {
				this.priceTitle = this.listQuery5.type.slice(0, 2)
				this.setUreaFactory()
			},
			setUreaFactory() {
				const _this = this;
				let myChart = this.$echarts.init(document.getElementById('ureaFactory'), {
					renderer: 'svg'
				})
				// 绘制图表
				myChart.clear();
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
						data: this.priceDate,
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
				getFactoryEverydayPrice(this.listQuery5).then(res => {
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
			volumeStart() {
				this.listQuery6.startDate = this.dayTime(new Date(this.dayTime(new Date())) - 518400000);
				this.listQuery6.endDate = this.dayTime(new Date());
			},
			volumeChange(val) {
				this.volumeDate = [];
				var endDate = new Date(val).getTime() + 518400000
				var endDate2 = new Date(val).getTime()
				this.listQuery6.endDate = this.dayTime(endDate);
				this.volumeDate.push(this.dayyTime(endDate2))
				for(var i = 0; i < 6; i++) {
					this.volumeDate.push(this.dayyTime(endDate2 += 86400000))
				}
				this.listQuery6.startDate = val;
				this.listQuery6.endDate = this.dayTime(endDate);
				this.setvolumeChart();

			},
			volumeChange2() {
				this.volumeTitle = this.listQuery6.type.slice(0, 2)
				this.setvolumeChart()
			},
			setvolumeChart() {
				const _this = this;
				let myChart = this.$echarts.init(document.getElementById('volumeChart'), {
					renderer: 'svg'
				})
				// 绘制图表
				myChart.clear();
				myChart.setOption({
					tooltip: {
						trigger: 'axis',
						confine: true,
						alwaysShowContent: true,
						formatter: function(params) {
							_this.volumeData = [];
							for(var i = 0; i < params.length; i++) {
								_this.volumeData.push(params[i].data)
							}
						}
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: this.priceDate,
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
				this.volumeName = [];
				this.volumeData = [];
				getFactoryEverydayNum(this.listQuery6).then(res => {
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
						this.volumeName.push(res.data.data[i].factoryName)
						this.volumeData.push(res.data.data[i].factoryData[6])
						data.push({
							name: this.volumeName[i],
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
			allPriceStart() {
				this.listQuery4.startDate = "2019-01-21";
				this.listQuery4.bigArea = this.region[0]
				this.listQuery4.sunMarket = this.region[1]
			},
			allPriceChange(val) {
				this.listQuery4.startDate = val;
				this.setDrawLine();
			},
			allPriceChange2(val) {
				this.listQuery4.bigArea = val[0];
				this.listQuery4.sunMarket = val[1];
				this.setDrawLine();
			},
			setDrawLine() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById('allPriceChart'), {
					renderer: 'svg'
				})
				// 绘制图表
				this.allPriceChartName = [];
				this.allPriceChartData = [];
				getSunMarketDayPrice(this.listQuery4).then(res => {
					console.log(res.data.data)
					let data = [];
					let style = [];
					for(var i = 0; i < res.data.data.length; i++) {
						this.allPriceChartName.push(res.data.data[i].productName)
						this.allPriceChartData.push(res.data.data[i].dealPrice)
					}
					console.log()
					myChart.clear();
					myChart.setOption({
						tooltip: {
							trigger: 'item',
							//							formatter: '{b}：{c}元/吨',
							alwaysShowContent: true,
						},
						xAxis: {
							data: this.allPriceChartName,
							type: 'category',

							axisTick: {
								show: true
							},
							axisLabel: {
								color: '#7C839F',
								fontSize: '0.2rem',
								interval: 0,
								formatter: function(value) {
									var ret = ""; //拼接加\n返回的类目项  
									var maxLength = 3; //每项显示文字个数  
									var valLength = value.length; //X轴类目项的文字个数  
									var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数  
									if(rowN > 1){
										for(var i = 0; i < rowN; i++) {
											var temp = ""; //每次截取的字符串  
											var start = i * maxLength; //开始截取的位置  
											var end = start + maxLength; //结束截取的位置  
											//这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧  
											temp = value.substring(start, end) + "\n";
											ret += temp; //凭借最终的字符串  
										}
										return ret;
									} else {
										return value;
									}
								}
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
							barWidth: 10,
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
										}, {
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
							data: this.allPriceChartData,
							barMaxWidth: 15,
						}]
					})
				})
			},

		}
	}
</script>
<style type="text/css">
	.vux-button-group {
		width: 3rem;
		padding-top: 0.22rem;
		padding-left: 0.22rem;
	}
	
	.vux-button-group>a.vux-button-group-current {
		background: #2E3A66 !important;
	}
	
	.vux-button-group>a.vux-button-tab-item-first:after {
		color: #2E3A66 !important;
		border: 1px solid #2E3A66 !important;
	}
	
	.vux-button-group>a.vux-button-tab-item-last:after {
		color: #2E3A66 !important;
		border: 1px solid #2E3A66 !important;
	}
	
	.vux-no-group-title,
	.weui-cells {
		margin-top: 0 !important;
	}
	
	.weui-cell {
		padding: 0 !important;
	}
	
	.vux-cell-bd {
		display: none;
	}
	
	.weui-cell_access .weui-cell__ft:after,
	.weui-cells:after {
		border-color: #2E3A66 !important;
	}
	
	.region {
		margin-left: 0.15rem;
	}
	
	.region .weui-cell_access {
		width: 3rem !important;
		margin-left: 0.15rem;
	}
	
	.region .vux-popup-picker-value {
		width: 3rem !important
	}
	
	.vux-popup-picker-select {
		text-align: center !important;
	}
	
	.region .weui-cell__ft {
		display: none;
	}
	
	.weui-check__label {
		padding: 0.1rem !important;
	}
	
	.weui-cell__bd p {
		margin-left: 0.24rem;
	}
	
	.weui-check__label .weui-cell__ft {
		background: #fff !important;
	}
	
	.vux-calendar:before,
	.weui-cells:before,
	.weui-cell:before {
		border-color: #2A3356 !important;
	}
	
	.weui-cell_access .weui-cell__ft {
		padding-right: 0 !important;
	}
	
	.weui-cell__ft,
	.weui-cells,
	.vux-tap-active {
		color: white !important;
		height: 0.5rem;
		width: 1.6rem;
		border-radius: 0.25rem;
		background: #2E3A66 !important;
		float: left;
		font-size: 0.24rem;
		text-align: center !important;
		line-height: 0.5rem;
	}
	
	.vux-cell-value {
		color: white !important;
	}
	
	.vux-cell-primary {
		flex: none;
	}
</style>
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
				p {
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
						padding-right: 0.25rem;
						height: 0.53rem;
						background: rgba(86, 105, 254, 0.5);
						border-radius: 5px;
						position: absolute;
						z-index: 15;
						color: white;
						font-weight: 500;
						p {
							font-size: 0.32rem;
							line-height: 0.45rem;
						}
					}
					div:nth-of-type(2) {
						width: 4rem;
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
					width: 100%;
					margin-top: 0.3rem;
					height: 8.66rem;
					background: #2e3a66;
					padding: 0 0.28rem;
					position: relative;
				}
				.chart2 {
					display: none;
					width: 100%;
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
	
	.allPrice .title div:nth-of-type(2) {
		width: 4.35rem !important;
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