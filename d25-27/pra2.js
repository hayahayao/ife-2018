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
function wrapTime1(date) {
	var days = ['日','一','二','三','四','五','六'];
	return getYear(date) + '年' + getMonth(date) + '月' + getDate(date) + '日 星期' 
				+ wrapDay(days, date) + ' ' + getHours(date) + ':' + getMinutes(date) + ':' + getSeconds(date);
}
function wrapTime2(date) {
	var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	return getYear(date) + '-' + getMonth(date) + '-' + getDate(date) + ' ' 
				+ wrapDay(days, date) + ' ' 
				+ (parseInt(getHours(date)) > 12 ? fillZero(parseInt(getHours(date))-12) : parseInt(getHours(date)))
				+ ':' + getMinutes(date) + ':' + getSeconds(date) + ' '
				+ (parseInt(getHours(date)) > 12 ? 'PM' : 'AM');
}
var p1 = document.getElementsByTagName('p')[0];
var p2 = document.getElementsByTagName('p')[1];
setInterval(function () {
	var date = new Date();
	p1.innerHTML = wrapTime1(date);
	p2.innerHTML = wrapTime2(date);
}, 1000);
