let userScore = 0;
let aiScore = 0;
let user_span = document.getElementById("userscore");
let ai_span = document.getElementById("aiscore");
let scoreboard_div = document.querySelector(".score-board");
let result = document.querySelector(".result > h2");
let rock = document.getElementById("r");
let paper = document.getElementById("p");
let scissor = document.getElementById("s");
let arock = document.getElementById("air");
let apaper = document.getElementById("aip");
let ascissor = document.getElementById("ais");
let ac= document.getElementById("aichoice");
let uc= document.getElementById("userchoice")
function win(){
	userScore++;
	user_span.innerHTML = userScore;
	result.innerHTML="You win!🔥";
}
function lose(){
	aiScore++;
	ai_span.innerHTML = aiScore;
	result.innerHTML="You Lose😢";
}
function draw(){
	result.innerHTML="Its a draw ⚔";
}

function getcomputerchoice(){
	const choices = ['r','p','s'];
	const rndno = Math.floor(Math.random()*3);
	return choices[rndno];
}
function ltt(letter){
	if(letter=="r")
		return "Rock";
	else if(letter=="p")
		return "Paper";
	else
		return "Scissor";
}
function compop(com,usr){
	ac.innerHTML=ltt(com);
	uc.innerHTML=ltt(usr);
	if(com=="r")
		{arock.style.transform = "translate(200px,0px)";
		setTimeout(function (){arock.style.transform = "translate(0px,0px)";},100);}
	else if(com=="p")
		{apaper.style.transform = "translate(200px,0px)";
		setTimeout(function (){apaper.style.transform = "translate(0px,0px)";},100);}
	else if(com=="s")
		{ascissor.style.transform = "translate(300px,0px)";
		setTimeout(function (){ascissor.style.transform = "translate(0px,0px)";},100);}
	}
function game(userchoice){
	const compchoice=getcomputerchoice();
	compop(compchoice,userchoice);
	switch(userchoice+compchoice){
		case "rs":
		case "sp":
		case "pr":
			win();break;
		case "sr":
		case "ps":
		case "rp":
			lose();break;
		default:
			draw();
			break;
	}
	
}
function main(){
rock.addEventListener('click',function(){
	game("r");
})
paper.addEventListener('click',function(){
	game("p");
})
scissor.addEventListener('click',function(){
	game("s");
})
}

main();
