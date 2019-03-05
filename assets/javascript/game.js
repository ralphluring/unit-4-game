let score = 0;
let losses = 0;
let wins = 0; 
let randomNum = 0;


$(".crystal").on("click",function(){ 
    if(score < randomNum){
        updateScore();
    }else if(score === randomNum){   
        wins++;
        $(".win-num").text(wins);
        alert("you won");
        reset();
    }else{
        losses++;
        $(".loss-num").text(losses);
        alert("you lost");
        reset();
    }
});

function updateScore(){
    score += Math.floor((Math.random() * 12) + 1);
    $(".score").text(score);     
}

function reset(){
    randomNum = Math.floor((Math.random() * 120) + 19);
    $(".num").text(randomNum);
    score = 0;
    $(".score").text(score);
   
}

reset();








