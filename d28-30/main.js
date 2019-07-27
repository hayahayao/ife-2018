document.getElementById('email-input').onkeyup = function () {
	addToContent();
	displayContent();
}

function getInput () {
	return document.getElementById('email-input').value.trim();
}

function generateContent () {
	var input = getInput();
	var postfixList = ['163.com', 'gmail.com', '126.com', 'qq.com', '263.net'];
	var content = [];
	for (var i = 0; i < postfixList.length; i++) {
		var li = document.createElement('li');
		li.innerHTML = input + '.' + postfixList[i];
		content.push(li);
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
