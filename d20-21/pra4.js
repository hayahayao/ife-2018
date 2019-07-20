btn = document.getElementById('fade-btn');
obj = document.getElementById('fade-obj');
obj.style.background = 'rgba(0,0,0,1)';
btn.onclick = function () {
	if (btn.innerHTML === '淡出') {
		btn.disabled = true;
		var a = 1;
		var flag = setInterval(function () {
			a -= 0.01;
			obj.style.background = 'rgba(0,0,0,' + a + ')';
			if (a < 0) {
				clearInterval(flag);
				btn.disabled = false;
				btn.innerHTML = '淡入';
			}
		}, 10);
	} else if (btn.innerHTML === '淡入') {
		btn.disabled = true;
		a = 0;
		flag = setInterval(function () {
			a += 0.01;
			obj.style.background = 'rgba(0,0,0,' + a + ')';
			if (a > 1) {
				clearInterval(flag);
				btn.disabled = false;
				btn.innerHTML = '淡出';
			}
		}, 10);
	}
}
