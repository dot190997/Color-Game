var box=document.getElementsByClassName("square");
var newc=document.getElementById("new");
var easy=document.getElementById("easy");
var hard=document.getElementById("hard");
var head=document.getElementById("head");

var r=0, g=0, b=0, rf=0, gf=0, bf=0, l=box.length;
var mess=document.getElementById("message");

function check()
{
	if(mess.textContent!="Correct!")
	{
		var str2="rgb("+rf+", "+gf+", "+bf+")";
		if(this.style.background===str2)
		{
			mess.textContent="Correct!";
			for(var i=0; i<l; i++)
			{
				box[i].style.background=str2;
			}
			head.style.background=str2;
			newc.textContent="Play Again?";
		}
		else
		{
			mess.textContent="Try Again";
			mess.style.color="black";
			this.style.background="#232323";
		}
	}
}

function newcolors()
{
	newc.textContent="New Colors";
	mess.textContent="";
	head.style.background="rgb(130, 130, 250)";
	var j=parseInt((Math.random()*100)%l);
	for(var i=0; i<l; i++)
	{
		r=parseInt((Math.random()*1000)%256);
		g=parseInt((Math.random()*1000)%256);
		b=parseInt((Math.random()*1000)%256);
		var str="rgb("+r+","+g+","+b+")";
		box[i].style.background=str;
		if(i==j)
		{
			rf=r;
			gf=g;
			bf=b;
		}
	}
	var rgb=document.querySelector("#rgb");
	rgb.textContent="RGB("+rf+","+gf+","+bf+")";
}

newcolors();

for(var i=0; i<l; i++)
{
	box[i].addEventListener("click", check);
}

function easymode(){
	l=box.length/2;
	for(var i=l; i<box.length; i++)
	{
		box[i].style.background="#232323";
	}
	newcolors();
}

function hardmode(){
	l=box.length;
	newcolors();
}

newc.addEventListener("click", newcolors);
easy.addEventListener("click", easymode);
hard.addEventListener("click", hardmode);
newc.addEventListener("mouseover", function(){
	newc.classList.add("active");
});
newc.addEventListener("mouseout", function(){
	newc.classList.remove("active");
});
easy.addEventListener("mouseover", function(){
	easy.classList.add("active");
});
easy.addEventListener("mouseout", function(){
	easy.classList.remove("active");
});
hard.addEventListener("mouseover", function(){
	hard.classList.add("active");
});
hard.addEventListener("mouseout", function(){
	hard.classList.remove("active");
});