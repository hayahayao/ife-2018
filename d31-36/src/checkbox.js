import { updateTableList } from './table.js';
import { drawBar } from './bar.js';

export function generateCheckbox (wrapper, type, arr) {
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
		updateTableList();
		drawBar();
	}
}
