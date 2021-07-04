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
































//<div class="player1"><div class="tenor-gif-embed" data-postid="9517363" data-share-method="host" data-width="100%" data-aspect-ratio="1.0"><a href="https://tenor.com/view/rock-paper-scissors-gif-9517363">Ca Chi Pum GIF</a> from <a href="https://tenor.com/search/rockpaperscissors-gifs">Rockpaperscissors GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script></div>