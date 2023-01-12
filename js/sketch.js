/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let p1x = 400;
let speed = 4;
let p2x = 0;
let circleX = 50;
let circleY = 50;
let score = 0;


/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
    createCanvas(1000, 800);
    background(50, 50, 50);



}


/**
Description of draw()
*/
function draw() {
background(50, 50, 50);  
controls();
ball();



}

function ball(){
    circle(circleX, circleY, 20);

    while(score <= 3){
        if(circleX <= 120){
            circleX++;
        }
    }
}

function controls(){
    rect(100, p1x, 20, 120);
    rect(880, p2x, 20, 120);
    if (keyCode === 87){
        if(p1x >= 0){
        p1x -= speed;
        }
    }

    if(keyCode === 83){
        if(p1x <= 680){
         p1x += speed;   
        }
        
    }

    if (keyCode === UP_ARROW){
        if(p2x >= 0){
        p2x -= speed;
        }
    }

    if(keyCode === DOWN_ARROW){
        if(p2x <= 680){
         p2x += speed;   
        }
        
    }

}

