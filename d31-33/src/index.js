import _ from 'lodash';
import { generateCheckbox } from './checkbox.js';

window.onload = function () {
	generateCheckbox(document.getElementById('region-radio-wrapper'), 'region', ['华东', '华北', '华南']);
	generateCheckbox(document.getElementById('product-radio-wrapper'), 'product', ['手机', '笔记本', '智能音箱']);
}
