import { getData } from './data.js';

export function updateTableList () {
	let datalist = getData();
	if (datalist.length > 0) {
		let div = document.getElementById('table-wrapper');
		while (div.hasChildNodes()) {
			div.removeChild(div.firstChild);
		}
		for (let i = 0; i < datalist.length; i++) {
			div.appendChild(generateTable(datalist[i]));
		}
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
