function setup() {
  createCanvas(800, 800);
  background("white")
}

function draw() {
  stroke("red")
  fill("yellow");
      
  // console.log(mouseIsPressed)

 if (mouseIsPressed) {
  rect(mouseX,mouseY,23,34);
  }
 
} 