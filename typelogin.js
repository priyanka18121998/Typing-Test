let o={
	'priyanka':'kumari',
	'pooja':'kumari'
}
function run(){
	let user=document.getElementById('user').value;
	let pass=document.getElementById('pass').value;
	let i;
	let l=Object.keys(o).length;

	for(i=0;i<l;i++)
	{
		if(Object.keys(o)[i]==user && Object.values(o)[i]==pass){
			locate();
			return;
		}}
		let h6=document.createElement('h6');
		h6.innerHTML="The username or password is incorrect";
		h6.setAttribute('style','color:red');
		document.getElementById('body').appendChild(h6);
	
}
function locate(){
	window.location="typingtest.html";
}


//now the js part of the typing test

let box={
	a:"Proofreader applicants are tested primarily on their spelling, speed, and skill in finding errors in the sample text. Toward that end, they may be given a list of ten or twenty classically difficult words and a proofreading test, both tightly timed. The proofreading test will often have a maximum number of errors per quantity of text and a minimum amount of time to find them. The goal of this approach is to identify those with the best skill set.",
	b:"A transcription service is a business which converts speech (either live or recorded) into a written or electronic text document. Transcription services are often provided for business, legal, or medical purposes. The most common type of transcription is from a spoken-language source into text such as a computer file suitable for printing as a document such as a report. Common examples are the proceedings of a court hearing such as a criminal trial (by a court reporter) or a physician's recorded voice notes (medical transcription).",
	c:"A virtual assistant (typically abbreviated to VA) is generally self-employed and provides professional administrative, technical, or creative assistance to clients remotely from a home office."
};
let rand=Math.floor(Math.random()*3);
if(rand==0){
	rand=box.a;
}
if(rand==1){
	rand=box.b;
}
if(rand==2){
	rand=box.c;
}
let j;
let r=rand.split(' ');
let g=document.getElementById('given-text');
		let strong=document.createElement('strong');
		strong.innerHTML=(r[0]+' ');
		console.log(strong);
		g.appendChild(strong);
		
		for(j=1;j<r.length;j++){
			let text=document.createTextNode(r[j]+' ');
			g.appendChild(text);
			console.log(g);
		}
		let co=1;
		space();
function space(){		

document.getElementById('real-text').addEventListener('keyup',event =>{
	if(event.code=='Space'){
		if(co>=r.length)
			return;
		g.innerHTML= "";  // innerHTML is not appended but new one is placed.

		
		for(j=0;j<co;j++){
			let text=document.createTextNode(r[j]+' ');
			g.appendChild(text);
		}
		let strong=document.createElement('strong');
		strong.innerHTML=(r[co]+' ');
		g.appendChild(strong);
		co++;
		for(j=co;j<r.length;j++){
			let text=document.createTextNode(r[j]+' ');
			g.appendChild(text);
		}

	}
});
}
function types(){
	let i;
	let count=0;
	let min=0;
	let max=0;
	let val=document.getElementById('real-text').value;
	val=val.split(' ');
	rand=rand.split(' ');
	if(val.length<=rand.length)
	{
		min=val.length;
		max=rand.length;
	}
	else{
		min=rand.length;
		max=val.length;
	}
	
	for(i=0;i<min;i++)
	{
		if(val[i]!=rand[i]){
			count++;
		}
	}
	console.log(count);
	console.log(min);
	console.log(max);
	let diff=max-min;
	let error=((diff+count)/max)*100.0;
	let text=document.createTextNode("Performance percentage is : " + (100-error)+"%.");
	let h6=document.getElementById('h6');
	h6.appendChild(text);	
	h6.setAttribute('style','border:1px solid black');

}
