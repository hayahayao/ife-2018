import { getData } from './data.js';
	
export function Line () {};

// TODO: 高清屏下canvas模糊

Line.prototype.draw = function () {
	let datalist = getData();
	if (datalist.length > 0) {
		// for (let j = 0; j < datalist.length; j++) {
			let data = datalist[0].sale;
			let offCanvas = document.createElement('canvas');
			let graph = offCanvas.getContext('2d');
			const width = 700 * 2,
				  height = 300 * 2,
				  padding = 25 * 2,
				  innerPadding = 12 * 2,
				  axisWidth = width - padding * 2,
				  axisHeight = height - padding * 2,
				  pointGap = (axisWidth - innerPadding * 2) / 11,
				  lineColor = '#CCCCFF',
				  textColor = '#9900CC',
				  pointColor = '#9900CC',
				  axisColor = '#9900CC';

			offCanvas.setAttribute('width', width);
			offCanvas.setAttribute('height', height);

			let max = Math.max(...data);
			let rate = axisHeight / max;
			
			// this.drawText(graph, padding, padding, datalist[j].region + ' ' + datalist[j].product, textColor);

			this.drawLine(graph, padding, padding + axisHeight, padding + axisWidth, padding + axisHeight, axisColor);
			this.drawLine(graph, padding, padding, padding, padding + axisHeight, axisColor);

			for (let i = 0; i < data.length; i++) {
				this.drawCircle(graph, padding + innerPadding + pointGap * i, padding + axisHeight - data[i] * rate, 5, pointColor);
				if (i > 0) {
					this.drawLine(graph, padding + innerPadding + pointGap * (i - 1), padding + axisHeight - data[i - 1] * rate, padding + innerPadding + pointGap * i, padding + axisHeight - data[i] * rate, lineColor);
				}
			}

			let canvas = document.getElementById('line-graph');
			let ctx = canvas.getContext('2d');
			canvas.setAttribute('width', width/2);
			canvas.setAttribute('height', height/2);
			ctx.drawImage(offCanvas, 0, 0, width, height, 0, 0, width/2, height/2);
		// 	document.getElementsByTagName('body')[0].appendChild(canvas);
		// // }
	}
};

Line.prototype.drawText = function (graph, x, y, content, color) {
	graph.fillStyle = color;
	graph.fillText(content, x, y);
};

Line.prototype.drawLine = function (graph, x1, y1, x2, y2, color) {
	graph.moveTo(x1, y1);
	graph.lineTo(x2, y2);
	graph.strokeStyle = color;
	graph.stroke();
};

Line.prototype.drawCircle = function (graph, x, y, r, color) {
	graph.beginPath();
	graph.arc(x, y, r, 0, 2*Math.PI);
	graph.fillStyle = color;
	graph.fill();
};
