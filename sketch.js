var town_img, town1_img, town2_img;
var d = new Date ();
var town;
var henchman_img, henchman, henchman2, henchman_img2, henchmanGroup;
var next;
var x=0;
var hero, hero_img;
var power, power_img;

function preload(){
  town_img= loadImage("town.jpg");
  town1_img= loadImage("town1.jpg");
  town2_img= loadImage("town2.jpg");
  henchman_img= loadImage("henchman 1.png");
  henchman_img2= loadImage("henchman 2.png");
  next_img=loadImage("next.jpg");
  hero_img=loadImage("hero.png");
power_img=loadImage("power.png");
}

function setup() {
  createCanvas(1250,700);
  town=createSprite(625,350,1300,700);
  town.addImage("town_img",town_img)
  town.scale=1.2;
  town.addImage("town2",town2_img);

  hero=createSprite(140,535,30,30);
  hero.addImage("hero",hero_img);
  hero.scale=0.40;
  hero.visible=false;
  

  henchman1=createSprite(140,600,50,50);
  henchman1.addImage("henchman_img",henchman_img);
  henchman1.scale=0.15;
  
  henchman2=createSprite(580,600,50,50);
  henchman2.addImage("henchman_img",henchman_img);
  henchman2.scale=0.15;

  henchman3=createSprite(1100,600,50,50);
  henchman3.addImage("henchman_img",henchman_img);
  henchman3.scale=0.15;

  henchman4=createSprite(850,520,50,50);
  henchman4.addImage("henchman_img",henchman_img);
  henchman4.scale=0.15;
  
  henchman5=createSprite(880,140,50,50);
  henchman5.addImage("henchman_img",henchman_img);
  henchman5.scale=0.15;

  henchmanGroup= new Group;

//next=createSprite(1150,80,20,10);
//next.addImage("next_img",next_img)
//next.scale=0.4;


}

function draw() {
  background(0,0,0);  
  
  if (x===1){
    hero.visible=true; 
    spawnObstacles();
  }
  
  
 

  
  
  
  drawSprites();
}

function mouseDragged(){
  x=1
town.changeImage("town2",town2_img);
town.scale=2.5;
console.log("hello");
henchman1.visible=false;
henchman2.visible=false;
henchman3.visible=false;
henchman4.visible=false;
henchman5.visible=false;
} 

function keyPressed(){
  if(keyCode===32 && x===1){
    power=createSprite(140,540,20,20);
    power.addImage("power",power_img)
    power.velocityX=6;
  power.scale=0.15;
  power.lifetime=100;
  }
}

function spawnObstacles(){
  if(frameCount % 80 === 0){
    henchman2=createSprite(1300,545,30,30);
    henchman2.addImage("henchman2",henchman_img2);
    henchman2.scale=0.15;
    henchman2.velocityX=-5;
    henchman2.lifetime=100;
    henchmanGroup.add(henchman2)
  }
}