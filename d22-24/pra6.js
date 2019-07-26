var stack = ["apple", "pear"];
var body = document.getElementsByTagName('body')[0];

function showStack () {
	var cont = document.getElementById('stack-cont');
	cont.innerHTML = '栈内容：' + stack.join('-&gt;');
}
function show (content) {
	var cont = document.getElementById('stack-cont');
	cont.innerHTML = content;
}

body.onclick = function (event) {
	switch (event.target.id) {
		case 'push-btn':
			var input = document.getElementById('stack-input').value;
			stack.unshift(input);
			showStCK();
			break;
		case 'pop-btn':
			stack.shift();
			showStack();
			break;
		case 'font-btn':
			show(stack[stack.length-1]);
			break;
		case 'empty-btn':
			show(stack.length === 0 ? 'is empty' : 'no empty');
			break;
		default:
			break;
	}
};
