var pic = document.getElementById('pic');
var pos = 0;
setInterval(function () {
	console.log(pos);
	if (pos === 7680) {
		pos = 0;
	}
	pos += 480;
	pic.style.backgroundPosition = '0px -' + pos + 'px';
}, 100);
