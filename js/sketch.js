/*
----- Coding Tutorial by Patt Vira ----- 
Name: Slime Molds (Physarum)
Video Tutorial: https://youtu.be/VyXxSNcgDtg

References: 
1. Algorithm by Jeff Jones: https://uwe-repository.worktribe.com/output/980579/characteristics-of-pattern-formation-and-evolution-in-approximations-of-physarum-transport-networks

Connect with Patt: @pattvira
https://www.pattvira.com/
----------------------------------------
*/

let molds = []; let num = 4000;
let d; 

function setup() {
  createCanvas(windowWidth, windowHeight);

  // AGGIUNGI QUESTO BLOCCO ↓↓↓↓↓↓↓↓↓↓↓
  let c = document.querySelector('canvas');
  c.style.position = 'fixed';
  c.style.top = 0;
  c.style.left = 0;
  c.style.width = '100vw';
  c.style.height = '100vh';
  c.style.zIndex = '-1';
  // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

  angleMode(DEGREES);
  d = pixelDensity();
  
  for (let i=0; i<num; i++) {
    molds[i] = new Mold();
  } 
}
function draw() {
  background(0, 5)
  loadPixels();

  for (let i=0; i<num; i++) {
    if (key == "s") {
      molds[i].stop = true;
      updatePixels();
      noLoop();
    } else {
      molds[i].stop = false;
    }
    molds[i].update();
    molds[i].display();
  }
}

// METTI QUESTA FUNZIONE FUORI (alla fine, non dentro draw)
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
