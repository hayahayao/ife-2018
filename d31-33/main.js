window.onload = function () {
	generateCheckbox(document.getElementById('region-radio-wrapper'), 'region', ['华东', '华北', '华南']);
	generateCheckbox(document.getElementById('product-radio-wrapper'), 'product', ['手机', '笔记本', '智能音箱']);
}

// 生成一组checkbox
function generateCheckbox (wrapper, type, arr) {
	let checkbox = '<input type="checkbox" name="' + type + '" value="all" checkbox-type="all">全选';
	for (let i = 0; i < arr.length; i++) {
		checkbox += '<input type="checkbox" name="' + type + '" value="' + arr[i] + '" checkbox-type="sub">' + arr[i];
	}
	wrapper.innerHTML = checkbox;

	wrapper.onclick = function (event) {
		if (event.target.type === 'checkbox') {
			if (event.target.getAttribute('checkbox-type') === 'all') {
				for (let i = 0; i < wrapper.children.length; i++) {
					wrapper.children[i].checked = true;
				}
			} else if (event.target.getAttribute('checkbox-type') === 'sub') {
				if (!event.target.checked) { 
					let cnt = 0;
					for (let i = 0; i < wrapper.children.length; i++) {
						if (wrapper.children[i].checked) {
							cnt++;
						}
					}
					if (cnt === 0) { // 不允许一个都不勾选，所以当用户想取消唯一一个被勾选的子选项时，无交互反应，不允许取消勾选
						event.target.checked = true;
					} else if (cnt === wrapper.children.length - 1) { // 如果当前是全选状态，取消任何一个子选项，则全选CheckBox也要置为未勾选状态
						wrapper.children[0].checked = false;
					}
				} else { // 点击最后一个未被选中的单个选项后，全选CheckBox也要置为被勾选状态
					let cnt = 0;
					for (let i = 0; i < wrapper.children.length; i++) {
						if (wrapper.children[i].checked && wrapper.children[i].getAttribute('checkbox-type') === 'sub') {
							cnt++;
						}
					}
					if (cnt === wrapper.children.length - 1) {
						wrapper.children[0].checked = true;
					}
				}
			}
		}
		updateTableList(getData());
	}
}

function getData () {
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
