// onclick textchange
function textChange(){
  document.getElementById('text').innerHTML="Hello there";
}

function displayDate(){
	document.getElementById('demo').innerHTML=Date();
}

// doubleclick textchange
function dblTextChange(){
	document.getElementById('paragraph').innerHTML="Hello world";
}

// onClick caseChange
function changeCase(){
	var x = document.getElementById('name');
	x.value = x.value.toUpperCase();
}

// onMouseOver 
function mOver(){
	document.getElementById('m-over').innerHTML ="You are successfully done. Thanks" 
}

// onMouseOut
function mOut(){
	document.getElementById('m-out').innerHTML = "Thanks";
}

// onMouseDown
function mDown(){
	document.getElementById('m-down').innerHTML = "Thanks";
}