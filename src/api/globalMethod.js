export default {
	install(Vue, options) {
		Vue.prototype.fmoney = function(s, n) {
			var p = /[0-9]/;
			var b = p.test(s);
			if(b) {
				n = n > 0 && n <= 20 ? n : 2;
				s = parseFloat((s + '').replace(/[^\d\.-]/g, '')).toFixed(n) + '';
				var l = s.split('.')[0].split('').reverse();
				var r = s.split('.')[1];
				var t = '';
				var i = 0;
				for(var j = 0; j < l.length; j++) {
					t += l[j] + ((i + 1) % 3 === 0 && (i + 1) !== l.length ? ',' : '');
				}
				s = t.split('').reverse().join('') + '.' + r;
				return s;
			} else {
				return 0.00;
			}
		};
		Vue.prototype.digitUppercase = function(n) {
			var fraction = ['角', '分'];
			var digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
			var unit = [
				['元', '万', '亿'],
				['', '拾', '佰', '仟']
			];
			var head = n < 0 ? '欠' : '';
			n = Math.abs(n);
			var s = '';
			for(var i = 0; i < fraction.length; i++) {
				s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
			};
			s = s || '整';
			n = Math.floor(n);
			for(var z = 0; z < unit[0].length && n > 0; z++) {
				var p = '';
				for(var j = 0; j < unit[1].length && n > 0; j++) {
					p = digit[n % 10] + unit[1][j] + p;
					n = Math.floor(n / 10);
				}
				s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][z] + s;
			}
			return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');
		};
		Vue.prototype.dayTime = function(datetime) {
			if(datetime != null) {
				var date = new Date(datetime);
				var y = date.getFullYear();
				var m = date.getMonth() + 1;
				m = m < 10 ? ('0' + m) : m;
				var d = date.getDate();
				d = d < 10 ? ('0' + d) : d;
				var h = date.getHours();
				h = h < 10 ? ('0' + h) : h;
				var minute = date.getMinutes();
				minute = minute < 10 ? ('0' + minute) : minute;
				var second = date.getSeconds();
				second = second < 10 ? ('0' + second) : second;
				return y + '-' + m + '-' + d;
			}
		};
		Vue.prototype.getDayTime = function() {
		  	let date = new Date()
		  	let times = date.getTime()
		  	let hour = date.getHours()
		  	let minute = date.getMinutes()
		  	let second = date.getSeconds()
		  	let dayTime = times - hour * 3600 * 1000 - minute * 60 * 1000 - second * 1000
		  	return dayTime;
		};
		Vue.prototype.dayyTime = function(datetime) {
			if(datetime != null) {
				var date = new Date(datetime);
				var y = date.getFullYear();
				var m = date.getMonth() + 1;
				m = m < 10 ? (m) : m;
				var d = date.getDate();
				d = d < 10 ? (d) : d;
				var h = date.getHours();
				h = h < 10 ? ('0' + h) : h;
				var minute = date.getMinutes();
				minute = minute < 10 ? ('0' + minute) : minute;
				var second = date.getSeconds();
				second = second < 10 ? ('0' + second) : second;
				return m + '/' + d;
			}
		};
		Vue.prototype.dayTime2 = function(datetime) {
			if(datetime != null) {
				var date = new Date(datetime);
				var y = date.getFullYear();
				var m = date.getMonth() + 1;
				m = m < 10 ? ('0' + m) : m;
				var d = date.getDate();
				d = d < 10 ? ('0' + d) : d;
				var h = date.getHours();
				h = h < 10 ? ('0' + h) : h;
				var minute = date.getMinutes();
				minute = minute < 10 ? ('0' + minute) : minute;
				var second = date.getSeconds();
				second = second < 10 ? ('0' + second) : second;
				return y + '/' + m + '/' + d;
			}
		};
		Vue.prototype.hourTime = function(datetime) {
			if(datetime != null) {
				var date = new Date(datetime);
				var y = date.getFullYear();
				var mon = date.getMonth() + 1;
				var d = date.getDate();
				var h = date.getHours();
				var min = date.getMinutes();
				var s = date.getSeconds();
				mon = mon < 10 ? ('0' + mon) : mon;
				d = d < 10 ? ('0' + d) : d;
				h = h < 10 ? ('0' + h) : h;
				min = min < 10 ? ('0' + min) : min;
				s = s < 10 ? ('0' + s) : s;
				return y + '-' + mon + '-' + d + '_' + h + min + s;
			};
		};
		Vue.prototype.isNum = function(num) {
			var patrn = /^([0-9]+|[0-9]{1,3}(,[0-9]{3})*)(.[0-9]{1,2})?$/;
			if(!patrn.test(num)) {
				return true;
			} else {
				return false;
			}

		};
		Vue.prototype.delcommafy = function(num) {
			//去除千分位中的‘，’
			num = num.toString();
			num = num.replace(/,/gi, '');
			if(parseInt(num) == num) {
				if(num.indexOf('.') > 0)
					num = num.substring(0, num.indexOf('.'));
			}
			return num;
		};
		Vue.prototype.badstr = function(str) {
				var badstr = /'|exec|execute|insert|select|delete|update|count|drop|\*|chr|mid|master|truncate|char|declare|sitename|net|user|xp_cmdshell|like'|exec|execute|insert|create|drop|table|from|grant|use|group_concat|column_name|information_schema.columns|table_schema|union|where|select|delete|update|order|by|count|chr|mid|master|truncate|char|declare|--|like/;
				if(badstr.test(str)) {
					return true;
				} else {
					return false;
				}
			},
			Vue.prototype.validationNumber = function(e, num) {
				var regu = /^[0-9]+\.?[0-9]*$/;
				if(e != "") {
					if(!regu.test(e)) {
						this.$message({
							showClose: true,
							message: '请输入正确的数字！',
							type: 'error'
						});
						e = e.substring(0, e.length - 1);
					} else {
						if(num == 0) {
							if(e.indexOf('.') > -1) {
								e = e.substring(0, e.length - 1);
							}
						}
						if(e.indexOf('.') > -1) {
							if(e.split('.')[1].length > num) {
								this.$message({
									showClose: true,
									message: '请保留两位小数！',
									type: 'error'
								});
								e = e.substring(0, e.length - 1);
							}
						}
					}
				} else {
					this.$message({
						showClose: true,
						message: '金额不能为空！',
						type: 'error'
					});
				}
			},
			Vue.prototype.numat = function(number) {
				//金额千分位+保留2位小数不足补0
				number = (number + '').replace(/[^0-9+-Ee.]/g, '');
				var n = !isFinite(+number) ? 0 : +number,
					prec = !isFinite(+'2') ? 0 : Math.abs('2'),
					sep = (typeof ',' === 'undefined') ? ',' : ',',
					dec = (typeof '.' === 'undefined') ? '.' : '.',
					s = '',
					toFixedFix = function(n, prec) {
						var k = Math.pow(10, prec);
						return '' + Math.ceil(n * k) / k;
					};
				s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
				var re = /(-?\d+)(\d{3})/;
				while(re.test(s[0])) {
					s[0] = s[0].replace(re, "$1" + sep + "$2");
				}
				if((s[1] || '').length < prec) {
					s[1] = s[1] || '';
					s[1] += new Array(prec - s[1].length + 1).join('0');
				}
				return s.join(dec);
			},
			Vue.prototype.getNowDate = function() {
				var today = new Date();
				var year = String(today.getFullYear());
				var month = String(today.getMonth(today)+1);
				if (month.length === 1) {
					month = "0" + month
				}
				var yearMonth = year + month
				
				return yearMonth;
			},
			
			Vue.prototype.invoType = function(value) {
				if(!value) return '';
				//电子发票
				let electronicInvoice = /^0[0-9]{9}11$/;
				let electronicInvoice2 = '144031539110,131001570151,133011501118,111001571071'

				//通行费发票
				let tollInvoice = /^0[0-9]{9}12$/;

				//普通发票
				let generalInvoice1 = /^0[0-9]{9}0[4|5]$/;
				let generalInvoice2 = /^[0-9]{7}[3|6][0-9]{2}$/;

				//卷式发票
				let rollInvoice = /^0[0-9]{9}0[6|7]$/;

				//机动车发票
				let vehicleInvoice = /^[1-9][0-9]{6}[2][0-9]{4}$/

				//增值税专用发票
				let specialInvoice = /^[0-9]{7}[1|5][0-9]{2}$/;

				//货物运输发票
				let freightInvoice = /^[0-9]{7}[2|7][0-9]{2}$/;

				//二手车发票
				let usedCarInvoice = /^0[0-9]{9}17$/;
				if(electronicInvoice.test(value)) {
					value = '10';
				} else if(specialInvoice.test(value)) {
					value = '01';
				} else if(generalInvoice1.test(value)) {
					value = '04';
				} else if(generalInvoice2.test(value)) {
					value = '04';
				} else if(tollInvoice.test(value)) {
					value = '14';
				} else if(rollInvoice.test(value)) {
					value = '11';
				} else if(vehicleInvoice.test(value)) {
					value = '03';
				} else if(freightInvoice.test(value)) {
					value = '02';
				} else if(usedCarInvoice.test(value)){
					value = '15';
				} else {
					value = '10';
				}
				console.log(value)
				return value;
			}

	}
};