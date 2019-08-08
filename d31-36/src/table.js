import { getData } from './data.js';
import { Bar } from './bar.js';
import { Line } from './line.js';

export function updateTableList () {
	let datalist = getData();
	let wrapper = document.getElementById('table-wrapper');
	if (datalist.length > 0) {
		while (wrapper.hasChildNodes()) {
			wrapper.removeChild(wrapper.firstChild);
		}
		for (let i = 0; i < datalist.length; i++) {
			wrapper.appendChild(generateTable(datalist[i]));
		}
	}

	wrapper.onmouseover = function (event) {
		if (event.target.tagName.toLowerCase() === 'table') {
			let row = event.target.rows[1];
			let data = [];
			for (var i = 2; i < row.cells.length; i++) {
				data.push(parseInt(row.cells[i].innerHTML));
			}
			let bar = new Bar();
			let line = new Line();
			bar.setData(data);
			line.setData(data);
			bar.draw();
			line.draw();
		}
	};	
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
