var nowSelectTipIndex = 0;

document.getElementById('email-input').onkeyup = function (event) {
	if (event.keyCode !== 38 && event.keyCode !== 40 && event.keyCode !== 13) {
		resetSelect();
	} else {
		if (event.keyCode === 38) { // up
			if (nowSelectTipIndex === 0) {
				nowSelectTipIndex = document.getElementById('email-sug-wrapper').getElementsByTagName('li').length - 1;
			} else {
				nowSelectTipIndex -= 1;
			}
		}
		if (event.keyCode === 40) { // down
			if (nowSelectTipIndex === document.getElementById('email-sug-wrapper').getElementsByTagName('li').length - 1) {
				nowSelectTipIndex = 0;
			} else {
				nowSelectTipIndex += 1;
			}
		}
		if (event.keyCode === 13) { // enter
			document.getElementById('email-input').value = decode(document.getElementById('email-sug-wrapper').getElementsByTagName('li')[nowSelectTipIndex].innerHTML);
			undisplay();
		}
	}
	addToContent();
	displayContent();
}

document.getElementById('email-sug-wrapper').onclick = function (event) {
	if (event.target.tagName.toLowerCase() === 'li') {
		document.getElementById('email-input').value = decode(event.target.innerHTML);
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
			li.innerHTML = encode(prefix + '@' + postfixList[i]);
			content.push(li);
		}
	}
	if (content.length === 0) {
		for (var i = 0; i < postfixList.length; i++) {
			var li = document.createElement('li');
			li.innerHTML = encode(prefix + '@' + postfixList[i]);
			content.push(li);
		}
	}
	content[nowSelectTipIndex].className = 'selected';
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

function encode (text) {
	var s = '';
	if(text.length == 0) return '';
	s = text.replace(/&/g,'&amp;');
	s = s.replace(/</g,'&lt;');
	s = s.replace(/>/g,'&gt;');
	s = s.replace(/ /g,'&nbsp;');
	s = s.replace(/\'/g,'&#39;');
	s = s.replace(/\"/g,'&quot;');
	return s;
}

function decode (html) {
	var s = '';
	if(html.length == 0) return '';
	s = html.replace(/&amp;/g,'&');
	s = s.replace(/&lt;/g,'<');
	s = s.replace(/&gt;/g,'>');
	s = s.replace(/&nbsp;/g,' ');
	s = s.replace(/&#39;/g,'\'');
	s = s.replace(/&quot;/g,'\"');
	return s;
}

function resetSelect () {
	nowSelectTipIndex = 0;
}
