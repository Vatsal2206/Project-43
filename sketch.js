var hr,mn,sc;
var scAngle,mnAngle,hrAngle;




function setup() {
  createCanvas(700,700);

  angleMode(DEGREES)
}

function draw() {
  background(0);  

  translate(350,250)
  rotate(-90)

  hr = hour() ;
  mn = minute();
  sc = second();

  scAngle = map(sc,0,60,0,360)
  mnAngle = map(mn,0,60,0,360)
  hrAngle = map(hr % 12,0,12,0,360)

 
  noFill();

  

  console.log(hr)
  console.log(mn)
  console.log(sc)

  push();

  rotate(scAngle)
  stroke("white")
  strokeWeight(5)
  line(0,0,90,0)

  pop();

  push();

  rotate(mnAngle)
  stroke("blue")
  strokeWeight(5)
  line(0,0,75,0)

  pop();

  push();

  rotate(hrAngle)
  stroke("cyan")
  strokeWeight(5)
  line(0,0,50,0)

  pop();

  strokeWeight(5)
  stroke("white")
  arc(0,0,300,300,0,scAngle)

  stroke("blue")
  arc(0,0,280,280,0,mnAngle)

  stroke("cyan")
  arc(0,0,260,260,0,hrAngle)

  fill("cyan")
  text(hour % 12 + " : ",100,300)

  




  drawSprites();
}