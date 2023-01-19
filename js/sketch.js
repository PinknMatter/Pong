/**
Pong
Noah Kornberg
1/17/2023


Resources used:
https://www.youtube.com/watch?v=-MUOweQ6wac&t=103s&ab_channel=KazukiUmeda
https://www.youtube.com/watch?v=JV5XBmaQdIA&t=355s&ab_channel=Mr.Erdreich

*/

"use strict";
//Set all valuables 
let p1y = 400;
let speed = 4;
let p2y = 400;
let circleX = 700;
let circleY = 40;
let score = 0;
let speedBallx = 6;
let speedBally = 6;
let counter = 0;
let p1s = 0;
let p2s = 0;




/**
Description of preload
*/
function preload() {

}


/**
Sets up the canvas and background
*/
function setup() {
    createCanvas(1000, 800);
    background(50, 50, 50);



}


/**
manages all functions, background is drawed first then the paddle controls then the ball physics and then the scores
*/
function draw() {

    backgroundC();

    controls();
    ball();
    scores();








}
// Draws the background as well as the scores on the canvas
function backgroundC() {
    background(50, 50, 50);

    stroke(100, 100, 100);
    strokeWeight(2);
    line(500, 0, 500, 800);
    noStroke();
    textSize(80);
    text(p1s, 400, 90);
    text(p2s, 550, 90);


}
// ball function and physics
function ball() {
    //Draws the ball
    circle(circleX, circleY, 20);
    //if the ball reachs the top or bottom of the canvas switch its direction. eg. switched it from travelling positively on the Y axis to negatively 
    if (circleY >= 800) {
        speedBally = -6
    } else if (circleY <= 21) {
        speedBally = 6;
    }

    //Set the ball so it constantly moves by the speed on the x or y axis
    circleX += speedBallx;
    circleY += speedBally;


    // Collision physics, If the ball x position is inbetween the range of the paddles on the x axis and the balls y position is in the range of the paddles y axis 
    // then switch the ball speed on the y axis to negative eg, the ball bounces off the paddle
    if (circleX > (880 - 15) && circleX < (880 + 5) && circleY > p2y - 10 && circleY < p2y + 120) {

        speedBallx = -6;

    }
    // same thing but positive eg. the other paddle
    if (circleX > (100 - 5) && circleX < (100 + 20) && circleY > p1y - 10 && circleY < p1y + 120) {

        speedBallx = +6;

    }





}
// score function
function scores() {
    // if the ball goes out of bounds on the right side then player 1s score goes up by one and the ball resets

    ;

    if (circleX >= 950 && circleX <= 955) {
        p1s++;
        let gradient = drawingContext.createLinearGradient(
            100, 1300, -200, 900);

        gradient.addColorStop(1, color(50, 50, 50));
        gradient.addColorStop(0, color(50, 50, 200));
        drawingContext.fillStyle = gradient;
        rect(500, 0, 1000, 800);
        fill(255)
        circleX = 500;
        circleY = 100;
    }

    //Same thing with the left side attempted to add some kinda of visual queue that a player has scored
    if (circleX <= 5 && circleX >= 1) {
        p2s++;
        let gradient = drawingContext.createLinearGradient(
            600, 1000, 100, 1200);

        gradient.addColorStop(0, color(50, 50, 50));
        gradient.addColorStop(1, color(200, 50, 50));
        drawingContext.fillStyle = gradient;
        rect(0, 0, 500, 1000);
        fill(255);
        circleX = 500;
        circleY = 100;

    }
}

//paddle control function
function controls() {
    //draws the paddles 
    rect(100, p1y, 20, 120);
    rect(880, p2y, 20, 120);

    //changes the position of the paddles on the y axis on button press, checks to see if the button press matches the value needed
    if (keyCode === 87) {
        if (p1y >= 0) {
            p1y -= speed;
        }
    }

    if (keyCode === 83) {
        if (p1y <= 680) {
            p1y += speed;
        }

    }

    if (keyCode === UP_ARROW) {
        if (p2y >= 0) {
            p2y -= speed;
        }
    }

    if (keyCode === DOWN_ARROW) {
        if (p2y <= 680) {
            p2y += speed;
        }

    }

}

