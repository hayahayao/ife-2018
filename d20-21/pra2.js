var school = document.getElementById('school');
var company = document.getElementById('company');
var sselect = document.getElementById('school-select');
var cselect = document.getElementById('company-select');
school.addEventListener('focus', function () {
	sselect.style.display = 'block';
	cselect.style.display = 'none';
}, false);
company.addEventListener('focus', function () {
	sselect.style.display = 'none';
	cselect.style.display = 'block';
}, false);
