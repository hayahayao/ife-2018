var ra = document.getElementById('radio-a');
var rb = document.getElementById('radio-b');
var na = document.getElementById('num-a');
var nb = document.getElementById('num-b');
var btns = document.getElementsByTagName('div')[1];
var res = document.getElementById('result');

function checked () {
	if (ra.checked) {
		return 1;
	} else if (rb.checked) {
		return 2;
	} else {
		return 0;
	}
}

btns.onclick = function (event) {
	var target = event.target;
	switch (target.innerHTML) {
		case '判断当前选中的输入框输入内容是否为数字':
			switch (checked()) {
				case 1:
					res.innerHTML = !isNaN(na.value);
					break;
				case 2:
					res.innerHTML = !isNaN(nb.value);
					break;
				default:
					res.innerHTML = '';
					break;
			}
			break;
		case '把 A 四舍五入为 B 个小数位数的数字':
			res.innerHTML = Number(na.value).toFixed(Number(nb.value));
			break;
		case '当前选中数字的绝对值':
			switch (checked()) {
				case 1:
					res.innerHTML = Number(na.value)>=0 ? Number(na.value) : (0-Number(na.value));
					break;
				case 2:
					res.innerHTML = Number(nb.value)>=0 ? Number(nb.value) : (0-Number(nb.value));
					break;
				default:
					res.innerHTML = '';
					break;
			}
			break;
		case '对当前选中的数字进行上舍入':
			switch (checked()) {
				case 1:
					res.innerHTML = Math.ceil(Number(na.value));
					break;
				case 2:
					res.innerHTML = Math.ceil(Number(nb.value));
					break;
				default:
					res.innerHTML = '';
					break;
			}
			break;
		case '对当前选中的数字进行下舍入':
			switch (checked()) {
				case 1:
					res.innerHTML = Math.floor(Number(na.value));
					break;
				case 2:
					res.innerHTML = Math.floor(Number(nb.value));
					break;
				default:
					res.innerHTML = '';
					break;
			}
			break;
		case '把当前选中的数字四舍五入为最接近的整数':
			switch (checked()) {
				case 1:
					res.innerHTML = Math.round(Number(na.value));
					break;
				case 2:
					res.innerHTML = Math.round(Number(nb.value));
					break;
				default:
					res.innerHTML = '';
					break;
			}
			break;
		case '返回 A 和 B 中的最高值':
			res.innerHTML = Math.max(Number(na.value), Number(nb.value));
			break;
		case '返回 A 和 B 中的最低值':
			res.innerHTML = Math.min(Number(na.value), Number(nb.value));
			break;
		default:
			res.innerHTML = '';
			break;
	}
}