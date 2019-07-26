window.onload = function () {
	var i;
	setSelect('year', 2000, 2032);
	setSelect('month', 1, 12);
	setSelect('day', 1, 31);
	setSelect('hour', 0, 23);
	setSelect('minute', 0, 59);
	setSelect('second', 0, 59);

	document.getElementById('year-select').addEventListener('change', updateDay);
	document.getElementById('month-select').addEventListener('change', updateDay);

	calResult();
	setInterval(calResult, 1000);
	document.getElementById('select').onchange = calResult;
};

function getTime (select) {
	var obj = document.getElementById(select+'-select');
	return parseInt(obj.options[obj.selectedIndex].value);
}

function setSelect (select, begin, end) {
	var obj = document.getElementById(select + '-select');
	obj.options.length = 0;
	for (i = begin; i <= end; i++) {
		obj.options.add(new Option(i.toString(), i));
	}
}

function updateDay () {
	var year = getTime('year');
	var month = getTime('month');

	switch (month) {
		case 1:
		case 3:
		case 5:
		case 7:
		case 8:
		case 10:
		case 12:
			setSelect('day', 1, 31);
			break;
		case 4:
		case 6:
		case 9:
		case 11:
			setSelect('day', 1, 30);
			break;
		case 2:
			if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
				setSelect('day', 1, 29);
			} else {
				setSelect('day', 1, 28);
			}
			break;
		default:
			break;
	}
}

function calResult () {
	var curDate = new Date();
	var optDate = new Date(getTime('year'), getTime('month'), getTime('day'), getTime('hour'), getTime('minute'), getTime('second'));

	var diff = curDate.valueOf() - optDate.valueOf();

	var dayDiff = Math.floor(diff / (24 * 3600 * 1000));
    var leave1 = diff % (24 * 3600 * 1000);
    var hourDiff = Math.floor(leave1 / (3600 * 1000));
    var leave2 = leave1 % (3600 * 1000);
    var minuteDiff = Math.floor(leave2 / (60 * 1000));
    var leave3 = leave2 % (60 * 1000);
    var secondDiff = Math.round(leave3 / 1000);

    document.getElementById('result').innerHTML = '现在距离 ' + wrapTime(optDate) + (dayDiff > 0 ? '已经过去 ' : '还有 ')
    												+ Math.abs(dayDiff) + '天' + Math.abs(hourDiff) + '小时' + Math.abs(minuteDiff) + '分' + Math.abs(secondDiff) + '秒';
}

function fillZero (time) {
	if (time < 10) {
		time = '0' + time;
	} else {
		time = time.toString();
	}
	return time;
}
function getYear(date) {
	return date.getFullYear();
}
function getMonth(date) {
	return fillZero(date.getMonth() + 1);
}
function getDate(date) {
	return fillZero(date.getDate());
}
function getDay(date) {
	return date.getDay();
}
function getHours(date) {
	return fillZero(date.getHours());
}
function getMinutes(date) {
	return fillZero(date.getMinutes());
}
function getSeconds(date) {
	return fillZero(date.getSeconds());
}
function wrapDay(days, date) {
	return days[getDay(date)];
}
function wrapTime(date) {
	var days = ['日','一','二','三','四','五','六'];
	return getYear(date) + '年' + getMonth(date) + '月' + getDate(date) + '日 星期' 
				+ wrapDay(days, date) + ' ' + getHours(date) + ':' + getMinutes(date) + ':' + getSeconds(date);
}
