var btn = document.getElementById('submit-btn');
var text = document.getElementById('name');
btn.onclick = function () {
	console.log(text.value);
};
text.onkeyup = function (event) {
	if (event.keyCode === 13) {
		console.log(text.value);
	} else if (event.keyCode === 27) {
		text.value = '';
	}
};
