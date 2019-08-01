window.onload = function () {
	updateTableList(getDataList());
	document.getElementById('region-select').onchange = function () {
		updateTableList(getDataList());
	};
	document.getElementById('product-select').onchange = function () {
		updateTableList(getDataList());
	};
};

function getDataList () {
	let select1 = document.getElementById('region-select');
	let option1 = select1.options[select1.selectedIndex].innerHTML;
	let select2 = document.getElementById('product-select');
	let option2 = select2.options[select2.selectedIndex].innerHTML;
	let res = [];
	for (let i = 0; i < sourceData.length; i++) {
		if (sourceData[i].region === option1 && sourceData[i].product === option2) {
			res.push(sourceData[i]);
		}
	}
	return res;
}

function updateTableList (datalist) {
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
