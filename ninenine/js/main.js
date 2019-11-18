'use strict';
window.onload=function(){
	const table=document.getElementById("table");
	for(let i=0;i<=9;i++){
		let tr=document.createElement("tr");
		for(let j=0;j<=9;j++){
			let td=document.createElement("td");
			if(i==0 && j==0){
				td.textContent="×";
				td.classList.add('cul');
			}else if(i==0){
				td.textContent=j;
				td.classList.add('cul');
			}else if(j==0){
				td.textContent=i;
				td.classList.add('cul');
			}else{
				td.textContent=i*j;
			}
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
}
