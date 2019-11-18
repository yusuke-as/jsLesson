window.onload=function(){
	var result=document.getElementById("result");
	var fruits=document.getElementsByClassName("fruits");
	for(var i=0;i<fruits.length;i++){
		fruits[i].addEventListener("change",numberChange);
		fruits[i].addEventListener("keyup",numberChange);
		fruits[i].addEventListener("mouseup",numberChange);
	}
	function numberChange(){
		var sum=0;
		for(var i=0;i<fruits.length;i++){
			sum+=parseInt(fruits[i].getAttribute('data-price'))*fruits[i].value;
		}
		result.textContent=sum+"円です!";
	}
};
