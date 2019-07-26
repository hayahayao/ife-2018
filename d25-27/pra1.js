function Go() {
    console.log("Go");
}

function GoSteps(n) {
	if (arguments.length === 0) {
		steps = 1;
	} else if (n === true) {
		steps = 1;
	} else if (isNaN(steps = parseInt(n)) || steps < 0) {
		steps = 0;
	}

    while (steps--) {
    	Go();
    }
    console.log('---');
}

GoSteps(10); // Go 10次
GoSteps(1); // Go 1次
GoSteps(); // Go 1次，认为缺少参数时，默认参数为1
GoSteps(0);  // 0次
GoSteps(-1);  // 0次
GoSteps(1.4);  // Go 1次
GoSteps(1.6);  // Go 1次
GoSteps(-1);  // 0次
GoSteps(true);  // Go 1次
GoSteps(false);  // 0次
GoSteps("Test");  // 0次
GoSteps(NaN);  // 0次
GoSteps(null);  // 0次
