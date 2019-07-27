document.getElementById('email-input').onkeyup = function () {
	addToContent();
	displayContent();
}

document.getElementById('email-sug-wrapper').onclick = function (event) {
	if (event.target.tagName.toLowerCase() === 'li') {
		document.getElementById('email-input').value = event.target.innerHTML;
		undisplay();
	}
}

function getInput () {
	return document.getElementById('email-input').value.trim();
}

function generateContent () {
	var input = getInput();
	var pos = input.indexOf('@');
	var prefix = '',
		suffix = '';
	if (pos > -1) {
		prefix = input.slice(0, pos);
		suffix = (input.length > pos + 1) ? input.slice(pos + 1, input.length) : '';
	} else {
		prefix = input;
		suffix = input;
	}
	var postfixList = ['163.com', 'gmail.com', '126.com', 'qq.com', '263.net'];
	var content = [];
	for (var i = 0; i < postfixList.length; i++) {
		if (postfixList[i].indexOf(suffix) === 0) {
			var li = document.createElement('li');
			li.innerHTML = prefix + '@' + postfixList[i];
			content.push(li);
		}
	}
	if (content.length === 0) {
		for (var i = 0; i < postfixList.length; i++) {
			var li = document.createElement('li');
			li.innerHTML = prefix + '@' + postfixList[i];
			content.push(li);
		}
	}
	return content;
}

function addToContent () {
	var content = generateContent();
	var ul = document.getElementById('email-sug-wrapper');
	while (ul.hasChildNodes()) {
		ul.removeChild(ul.firstChild);
	}
	for (var i = 0; i < content.length; i++) {
		ul.appendChild(content[i]);
	}
}

function displayContent () {
	if (getInput() === '') {
		undisplay();
	} else {
		display();
	}
}

function display () {
	document.getElementById('email-sug-wrapper').style.display = 'list-item';
}

function undisplay () {
	document.getElementById('email-sug-wrapper').style.display = 'none';
}
