new p5();
let R = random(255);
let G = random(255);
let B = random(255);


function setup() {
  var width = $(window).width();
  var height = $(window).height();
  createCanvas(width, height);
}

function draw() {
  frameRate(120);
  if (mouseIsPressed) {
    if (mouseButton === LEFT) {
      strokeWeight(0);

      R =  R+random(-20,20);
      G = G+random(-20,20);
      B = B+random(-20,20);
      R = (R>255 ? 255: R);
      G = (G>255 ? 255: G);
      B = (B>255 ? 255: B);
      R = (R<0 ? 0: R);
      G = (G<0 ? 0: G);
      B = (B<0 ? 0: B);
      //console.log(R,G,B);
      fill(R,G,B);
      //square(mouseX-40, mouseY-40, 80);
      ellipse(mouseX, mouseY, 15);
    } if (mouseButton === RIGHT) {
      R=G=B=random(255);
      strokeWeight(0);
      fill(255,255,255);
      //square(mouseX-40, mouseY-40, 80);
      ellipse(mouseX, mouseY, 15);
      //clear();
    }
  } else {
  }

}
