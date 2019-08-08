export function Bar () {};

Bar.prototype.data = [];

Bar.prototype.draw = function () {
	let graph = document.getElementById('bar-graph');
	while (graph.hasChildNodes()) {
		graph.removeChild(graph.firstChild);
	}
	const width = 500,
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

	let max = Math.max(...this.data);
	let rate = axisHeight / max;
	
	// graph.appendChild(this.drawText(padding, padding, datalist[j].region + ' ' + datalist[j].product));

	graph.appendChild(this.drawLine(padding, padding + axisHeight, padding + axisWidth, padding + axisHeight, axisColor));
	graph.appendChild(this.drawLine(padding, padding, padding, padding + axisHeight, axisColor));

	for (let i = 0; i < this.data.length; i++) {
		graph.appendChild(this.drawRect(padding + barGap * (i + 1) + barWidth * i, padding + axisHeight - this.data[i] * rate, barWidth, this.data[i] * rate, barColor));
	}
};

Bar.prototype.drawLine = function (x1, y1, x2, y2, color) {
	let line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
	line.setAttribute('x1', x1);
	line.setAttribute('y1', y1);
	line.setAttribute('x2', x2);
	line.setAttribute('y2', y2);
	line.setAttribute('stroke', color);
	return line;
};

Bar.prototype.drawRect = function (x, y, width, height, fill) {
	let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
	rect.setAttribute('x', x);
	rect.setAttribute('y', y);
	rect.setAttribute('width', width);
	rect.setAttribute('height', height);
	rect.setAttribute('fill', fill);
	return rect;
};

Bar.prototype.drawText = function (x, y, content) {
	let text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
	text.setAttribute('x', x);
	text.setAttribute('y', y);
	text.setAttribute('stroke', '#9900CC');
	text.innerHTML = content;
	return text;
};

Bar.prototype.setData = function (data) {
	this.data = data;
};
