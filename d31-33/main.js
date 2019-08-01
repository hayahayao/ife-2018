document.getElementById('region-select').onchange = function () {
	updateTable(getOption());
};

function getOption () {
	let select = document.getElementById('region-select');
	let option = select.options[select.selectedIndex].innerHTML;
	for (let i = 0; i < sourceData.length; i++) {
		if (sourceData[i].region === option) {
			return sourceData[i];
		}
	}
}

function updateTable (data) {
	let table = document.createElement('table');
	let row = table.createTHead().insertRow(0);
	row.insertCell(0).innerHTML = '商品';
	row.insertCell(1).innerHTML = '地区';
	for (let i = 1; i <= 12; i++) {
		row.insertCell(i + 1).innerHTML = i + '月';
	}
	row = table.insertRow(1);
	row.insertCell(0).innerHTML = data.product;
	row.insertCell(1).innerHTML = data.region;
	for (let i = 0; i < 12; i++) {
		row.insertCell(i + 2).innerHTML = data.sale[i];
	}
	let div = document.getElementById('table-wrapper');
	if (div.hasChildNodes()) {
		div.removeChild(div.firstChild);
	}
	div.appendChild(table);
}
