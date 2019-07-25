var ra = document.getElementById('radio-a');
var rb = document.getElementById('radio-b');
var sa = document.getElementById('str-a');
var sb = document.getElementById('str-b');
var na = document.getElementById('num-a');
var nb = document.getElementById('num-b');
var btns = document.getElementsByTagName('div')[1];
var res = document.getElementById('result');

function getChecked () {
	if (ra.checked) {
		return sa;
	} if (rb.checked) {
		return sb;
	}
	return null;
}
function setRes (html) {
	res.innerHTML = html;
}

btns.onclick = function (event) {
	switch (event.target.innerHTML) {
		case '获取当前选中输入的内容长度':
			setRes(getChecked().value.length);
			break;
		case '当前选中输入中的第3个字符':
			setRes(getChecked().value[2]);
			break;
		case '把两个输入框的文字连接在一起输出（concat）':
			setRes(sa.value + sb.value);
			break;
		case '输入B中的内容，在输入A的内容中第一次出现的位置（indexOf）':
			setRes(sa.value.indexOf(sb.value));
			break;
		case '输入A中的内容，在输入B的内容中最后一次出现的位置（lastIndexOf）':
			setRes(sb.value.lastIndexOf(sa.value));
			break;
		case '使用slice获取选中输入框内容的部分内容，参数为num-a及num-b':
			setRes(getChecked().value.slice(na.value, nb.value));
			break;
		case '当前选中输入框的行数':
			setRes(getChecked().rows);
			break;
		case '使用substr获取选中输入框内容的子字符串，参数为num-a及num-b':
			setRes(getChecked().value.substr(na.value, nb.value));
			break;
		case '把所选输入框中的内容全部转为大写':
			setRes(getChecked().value.toUpperCase());
			break;
		case '把所选输入框中的内容全部转为小写':
			setRes(getChecked().value.toLowerCase());
			break;
		case '把所选输入框中内容的半角空格全部去除':
			setRes(getChecked().value.replace(/ /g, ''));
			break;
		case '把所选输入框中内容的a全部替换成另外一个输入框中的内容':
			setRes(getChecked().value.replace(/a/g, getChecked() === sa ? sb.value : sa.value));
			break;
		default:
			setRes('');
			break;
	}
};