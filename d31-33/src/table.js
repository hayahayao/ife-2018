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

export function updateTableList (datalist) {
	let div = document.getElementById('table-wrapper');
	while (div.hasChildNodes()) {
		div.removeChild(div.firstChild);
	}
	for (let i = 0; i < datalist.length; i++) {
		div.appendChild(generateTable(datalist[i]));
	}
}

function generateTable (data) {
	let table = document.createElement('table');
	let row = table.createTHead().insertRow(0);
	row.insertCell(0).innerHTML = '商品';
	row.insertCell(1).innerHTML = '地区';
	for (let i = 1; i <= 12; i++) {
		row.insertCell(i + 1).innerHTML = i + '月';
	}
	row = table.appendChild(document.createElement('tbody')).insertRow(0);
	row.insertCell(0).innerHTML = data.product;
	row.insertCell(1).innerHTML = data.region;
	for (let i = 0; i < 12; i++) {
		row.insertCell(i + 2).innerHTML = data.sale[i];
	}
	return table;
}
