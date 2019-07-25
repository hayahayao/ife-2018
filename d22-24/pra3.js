/*
实现一个字符串头尾去除空格的函数
注意需要去除的空格，包括全角、半角空格
暂时不需要学习和使用正则表达式的方式
*/
function diyTrim(str) {
    var result = "";

    // do something
    if (str.length === 0) {
    	return '';
    }
    var i = 0, j = str.length - 1;
    while (str[i] === ' ' || str[i] === '　') {
    	i++;
    }
    while (str[j] === ' ' || str[j] === '　') {
    	j--;
    }
    result = str.slice(i, j+1);
    return result;
}

// 测试用例
console.log(diyTrim(' a f b    ')); // ->a f b
console.log(diyTrim('    ffdaf    ')); // ->ffdaf
console.log(diyTrim('1    ')); // ->1
console.log(diyTrim('　　f')); // ->f
console.log(diyTrim('  　  a f b 　　 ')); // ->a f b
console.log(diyTrim(' ')); // ->
console.log(diyTrim('　')); // ->
console.log(diyTrim('')); // ->

/*
去掉字符串str中，连续重复的地方
*/
function removeRepetition(str) {
    var result = "";

    // do something
    if (str.length === 0) {
    	return '';
    }
    var i = 0;
    while (i < str.length) {
    	for (var j = i+1; j < str.length; j++) {
    		if (str[j] !== str[i]) {
    			break;
    		}
    	}
    	result += str[i];
    	i = j;
    }

    return result;
}

// 测试用例
console.log(removeRepetition("aaa")); // ->a
console.log(removeRepetition("abbba")); // ->aba
console.log(removeRepetition("aabbaabb")); // ->abab
console.log(removeRepetition("")); // ->
console.log(removeRepetition("abc")); // ->abc
