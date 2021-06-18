var n1,n2;
var num1,num2;
var B1,B2,B3,B4;


function setup() {
  createCanvas(400, 400);
  num1=createInput();
 num1.position(10,60);
 
 num2=createInput();
 num2.position(200,60);

 B1=createButton("+");
 B1.position(10,200);
 B1.mousePressed(add);

 B2=createButton("-");
 B2.position(100,200);
 B2.mousePressed(sub);

 B3=createButton("*");
    
 B3.position(200,200);
 B3.mousePressed(multiply);

 B4=createButton("/");
 B4.position(300,200);
 B4.mousePressed(div);
}

function draw() {
  background(220);

text("Number 1",70,50);
text("Number 2",270,50);

n1=parseInt(num1.value());
n2=parseInt(num2.value());
}

function add(){
  console.log(n1+n2);
}

function sub(){
  console.log(n1-n2);
}

function multiply(){
  console.log(n1*n2);
}

function div(){
  console.log(n1/n2);
}







