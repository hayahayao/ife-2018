import { sourceData } from './ife31data.js';

export function getData () {
	let checkboxs = document.getElementsByTagName('input');
	let regions = [];
	let products = [];
	for (let i = 0; i < checkboxs.length; i++) {
		if (checkboxs[i].name === 'region' && checkboxs[i].checked && checkboxs[i].getAttribute('checkbox-type') === 'sub') {
			regions.push(checkboxs[i].value);
		}
		if (checkboxs[i].name === 'product' && checkboxs[i].checked && checkboxs[i].getAttribute('checkbox-type') === 'sub') {
			products.push(checkboxs[i].value);
		}
	}
	let res = [];
	for (let i = 0; i < sourceData.length; i++) {
		if (regions.includes(sourceData[i].region) && products.includes(sourceData[i].product)) {
			res.push(sourceData[i]);
		}
	}
	return res;
}
