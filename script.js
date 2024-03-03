//your JS code here. If required.
const p = document.getElementById("status");
const button = document.getElementById("enterBtn");
button.addEventListener("click",()=>{
	p.innerText="";
	const newEle = document.createElement("h1");
	newEle.innerText="Entered Metaverse";
	p.appendChild(newEle);
})