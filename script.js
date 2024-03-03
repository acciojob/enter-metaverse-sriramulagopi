//your JS code here. If required.
const p = document.querySelector("p");
const button = document.querySelector("button");
button.addEventListener("click",()=>{
	p.innerText="";
	const newEle = document.createElement("h1");
	newEle.innerText="Entered Metaverse";
	p.appendChild(newEle);
})