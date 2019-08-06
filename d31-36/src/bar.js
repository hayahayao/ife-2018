import { getData } from './data.js';

export function drawBar () {
	let datalist = getData();
	if (datalist.length > 0) {
		let svgs = document.getElementsByTagName('svg');
		if (svgs.length > 0) {
			for (let i = 0; i < svgs.length; i++) {
				svgs[i].remove();
			}
		}
		for (let j = 0; j < datalist.length; j++) {
			let data = datalist[j].sale;
			let graph = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
			const width = 700,
				  height = 300,
				  padding = 25,
				  axisWidth = width - padding * 2,
				  axisHeight = height - padding * 2,
				  barGap = 12,
				  barWidth = (axisWidth - barGap * 13) / 12,
				  barColor = '#CCCCFF',
				  axisColor = '#9900CC';

			graph.setAttribute('width', width);
			graph.setAttribute('height', height);

			let max = Math.max(...data);
			let rate = axisHeight / max;
			
			graph.appendChild(drawText(padding, padding, datalist[j].region + ' ' + datalist[j].product));

			graph.appendChild(drawLine(padding, padding + axisHeight, padding + axisWidth, padding + axisHeight, axisColor));
			graph.appendChild(drawLine(padding, padding, padding, padding + axisHeight, axisColor));

			for (let i = 0; i < data.length; i++) {
				graph.appendChild(drawRect(padding + barGap * (i + 1) + barWidth * i, padding + axisHeight - data[i] * rate, barWidth, data[i] * rate, barColor));
			}
			document.getElementsByTagName('body')[0].appendChild(graph);
		}
	}
}

function drawLine (x1, y1, x2, y2, color) {
	let line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
	line.setAttribute('x1', x1);
	line.setAttribute('y1', y1);
	line.setAttribute('x2', x2);
	line.setAttribute('y2', y2);
	line.setAttribute('stroke', color);
	return line;
}

function drawRect (x, y, width, height, fill) {
	let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
	rect.setAttribute('x', x);
	rect.setAttribute('y', y);
	rect.setAttribute('width', width);
	rect.setAttribute('height', height);
	rect.setAttribute('fill', fill);
	return rect;
}

function drawText (x, y, content) {
	let text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
	text.setAttribute('x', x);
	text.setAttribute('y', y);
	text.setAttribute('stroke', '#9900CC');
	text.innerHTML = content;
	return text;
}