var queue = ["apple", "pear"];
var body = document.getElementsByTagName('body')[0];

function showQueue () {
	var cont = document.getElementById('queue-cont');
	cont.innerHTML = '队列内容：' + queue.join('-&gt;');
}
function show (content) {
	var cont = document.getElementById('queue-cont');
	cont.innerHTML = content;
}

body.onclick = function (event) {
	switch (event.target.id) {
		case 'in-btn':
			var input = document.getElementById('queue-input').value;
			console.log(input);
			queue.unshift(input);
			showQueue();
			break;
		case 'out-btn':
			queue.pop();
			showQueue();
			break;
		case 'font-btn':
			show(queue[queue.length-1]);
			break;
		case 'empty-btn':
			show(queue.length === 0 ? 'is empty' : 'no empty');
			break;
		default:
			break;
	}
};
