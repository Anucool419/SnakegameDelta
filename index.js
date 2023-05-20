//game constants and variables
let inputDir={x:0,y:0};
let speed=15;
let score=0;
let lastPainttime=0;
let SnakeArr=[{x:13,y:15}];
food={x:6,y:6};



function setTimeout((180000) => {
    console.log('Hello Timeout!')
 }, 3000);

function isCollide(snake) {
    // If you bump into yourself 
    for (let i = 1; i < snakeArr.length; i++) {
        if(snake[i].x === snake[0].x && snake[i].y === snake[0].y){
            return true;
        }
    }
    // If you bump into the wall
    if(snake[0].x >= 20 || snake[0].x <=0 || snake[0].y >= 20 || snake[0].y <=0){
        return true;
    }
        
    return false;
}
function gameEngine(){
    if(isCollide(snakeArr)){
        
        
        inputDir =  {x: 0, y: 0}; 
        alert("Game Over. Press any key to play again!");
        snakeArr = [{x: 13, y: 15}];
        score = 0; 
    }
 
    // If you have eaten the food, increment the score and regenerate the food
    if(snakeArr[0].y === food.y && snakeArr[0].x ===food.x){
        
        score += 10;
        if(score>hiscoreval){
            hiscoreval = score;
            localStorage.setItem("hiscore", JSON.stringify(hiscoreval));
            hiscoreBox.innerHTML = "HiScore: " + hiscoreval;
}