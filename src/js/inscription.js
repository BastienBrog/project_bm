if (document.getElementById('inscription')){
	document.querySelector('#suivantone').addEventListener('click', function changeone(){
	document.querySelector('.step_1').style.display = "none";
	document.querySelector('.step_2').style.display = "block";
});
document.querySelector('#suivanttwo').addEventListener('click', function changetwo(){
	document.querySelector('.step_2').style.display = "none";
	document.querySelector('.step_3').style.display = "block";
});
document.querySelector('#suivantthree').addEventListener('click', function changethree(){
	document.querySelector('.step_3').style.display = "none";
	document.querySelector('.finish').style.display = "block";
});

document.querySelector('#retourone').addEventListener('click', function retourone(){
	document.querySelector('.step_2').style.display = "none";
	document.querySelector('.step_1').style.display = "block";
});
document.querySelector('#retourtwo').addEventListener('click', function retourtwo(){
	document.querySelector('.step_3').style.display = "none";
	document.querySelector('.step_2').style.display = "block";
});
}
