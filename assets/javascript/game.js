let score = 0;
let losses = 0;
let wins = 0; 
let randomNum = 0;

$(".crystal").on("click",function(){ 
    score += parseInt($(this).attr("value"));
    $(".score").text(score); 
    if(score === randomNum){
        wins++;
        score = 0;
        initialize();
    }else if(score > randomNum){
        losses++;
        score = 0;
        initialize();
    }
});


// get new crystal numbers - new random number - fire render 
function initialize(){
    // sets to number betwee 19-120
    randomNum = Math.floor((Math.random() * 120) + 19);
    // sets each crystal to a unique random value 1-12
    $("#crystal1").attr("value",randomCrystalNum());
    $("#crystal2").attr("value",randomCrystalNum());
    $("#crystal3").attr("value",randomCrystalNum());
    $("#crystal4").attr("value",randomCrystalNum());
    render();        
}

// update random number wins and loses 
function render(){
    $(".num").text(randomNum);
    $(".win-num").text(wins);
    $(".loss-num").text(losses); 
    $(".score").text(score);  
}

function randomCrystalNum(){
    return Math.floor((Math.random() * 12) + 1);
}

initialize();









