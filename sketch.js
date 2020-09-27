var bhai1,bhai2,bhai3,bhai4,bhai5;
var time = 0;



function preload(){
back = loadImage("background.jpg");
img1 = loadImage("bhai.png");
img2 = loadImage("Aunty.png");
img3 = loadImage("cloud.png");
img4 = loadImage("cloud2.png");
img5 = loadImage("BhDD.png");
img6 = loadImage("cloud3.png");
img7 = loadImage("Da.png");
img8 = loadImage("Bacha.png");
img9 = loadImage("Baa.png");
img10 = loadImage("MU.png");
img11 = loadImage("MM.png");
}

function setup() {
  createCanvas(1360, 630);
  
  bhai1 = createSprite(50,400,20,50);
  bhai1.addImage(img1);
  bhai2 = createSprite(1140,-300,20,50);
  bhai2.addImage(img2);
  bhai3 = createSprite(280,280,20,50);
  bhai3.addImage(img3);
  bhai3.scale = 0.5;
  bhai4 = createSprite(1070,235,20,50);
  bhai4.addImage(img4);
  bhai4.scale = 0.9;
  bhai5 = createSprite(900,820,50,20);
  bhai5.addImage(img5);
  bhai5.scale = 0.7;
  bhai6 = createSprite(680,220,20,50);
  bhai6.addImage(img6);
  bhai6.scale = 0.5;
  bhai7 = createSprite(1000,330,20,50);
  bhai7.addImage(img7);
  bhai8 = createSprite(700,200,20,50);
  bhai8.addImage(img6);
  bhai8.scale = 0.5;
  bhai9 = createSprite(700,200,20,50);
  bhai9.addImage(img8);
  //bhai9.scale = 0.8;
  bhai10 = createSprite(950,150,20,50);
  bhai10.addImage(img3);
  bhai10.scale = 0.5;
  bhai11 = createSprite(1140,-360,20,50);
  bhai11.addImage(img9);
  bhai11.scale = 0.7;
  bhai12 = createSprite(950,200,20,50);
  bhai12.addImage(img6);
  bhai12.scale = 0.5;
  bhai13 = createSprite(550,330,20,50);
  bhai13.addImage(img10);
  bhai13.scale = 1.2;
  bhai14 = createSprite(800,130,20,50)
  bhai14.addImage(img3);
  bhai14.scale = 0.5;
  bhai15 = createSprite(1000,500,20,50);
  bhai15.addImage(img11);
  bhai16 = createSprite(1150,200,20,50);
  bhai16.addImage(img3);
  bhai16.scale = 0.5;

  invisibleGround = createSprite(680,610,1360,10);
  invisibleGround2 = createSprite(680,230,1360,10);
  
  
}

function draw() {
  background(back);
  drawSprites();
  bhai2.visible = false;
  bhai4.visible = false;
  bhai5.visible = false;
  bhai6.visible = false;
  bhai7.visible = false;
  bhai8.visible = false;
  bhai9.visible = false;
  bhai10.visible = false;
  bhai11.visible = false;
  bhai12.visible = false;
  bhai13.visible = false;
  bhai14.visible = false;
  bhai15.visible = false;
  bhai16.visible = false;
  

  
  invisibleGround.visible = false;
  invisibleGround2.visible = false;
  bhai2.collide(invisibleGround);
  bhai5.collide(invisibleGround2);
  bhai11.collide(invisibleGround);
  bhai13.collide(invisibleGround2);

  if(frameCount % 30 == 0 )
  {
    time = time + 1;
  }

  if(time >= 0 && time <= 5)
  {
    textSize(20);
    textFont("Algerian");
    fill("red");
    text("Huh ! Huh! ",200,220);
    text("Nice Day Going",200,240);
    text("Today is my BirthDay",200,260);
   // text("So Beautiful Moonlight !",200,280);
  }
  if(time > 6 && time <= 10)
  {
  textSize(20);
  textFont("Algerian");
  fill("red");
  text("Happy BirthDay Dear",970,235);
  text("Kalker Plan Ta ki?",970,255);
 
  bhai4.visible = true;
  }
  if(time >= 6 && time <= 20)
  {
    bhai2.velocityY = bhai2.velocityY + 0.8;
    bhai2.visible = true;
  }
  if(time >= 10 && time <= 20)
  {
    textSize(20);
    textFont("Algerian");
    fill("red");
    text("Ohh! Thank You!",200,220);
    text("Pore Bolchhi",200,240);
    text("Ok, Bye",970,275);
    bhai4.visible = true;
  }
  if(time >= 21 && time <= 30)
  {
    bhai5.velocityY = bhai5.velocityY - 0.8;
    bhai5.visible = true;
    bhai6.visible = true;
    textSize(20);
    textFont("Algerian");
    fill("red");
    text("Happy BirthDay Debasis!",580,200);
    text("Thank You Maa!",200,220);
    text("Pronam Neben!",200,240);
  }
  
  if(time >= 31 && time <= 40)
  {
    textSize(20);
    textFont("Algerian");
    fill("red");
    text("Babu Bhalo Theko !",600,150);
    text(" Subho Jonmodin",600,200);
    text("Pronam Niyo!",200,200);
    bhai7.visible = true;
    bhai8.visible  = true;
  }
  if(time >= 41 && time <= 50)
  {
    textSize(20);
    textFont("Algerian");
    fill("red");
    text ("Happy BirthDay Mama",850,100);
    text("Thank You Kathu & Pu",200,200);
  bhai9.visible = true;
  bhai10.visible = true;
  }

  if(time >= 51 && time <= 65)
  {
    textSize(20);
    textFont("Algerian");
    fill("red");
  text("Happy BirthDay Bhai!",850,150,);
  text(" Taka ta pathiye diyo",850,200);
  text("Thank you DJ! Ha 😊😊",200,220);
  bhai11.visible = true;
  bhai12.visible = true;
  bhai11.velocityY = bhai11.velocityY + 0.8;
  }
  if(time >= 66 && time <= 75)
  {
    textSize(20);
    textFont("Algerian");
    fill("red");
  text("Happy BirthDay Bhai! ",750,60);
  text(" Kobe aschho?",750,90);
  text("Thank You GD! Khub Taratari",200,220);
  bhai13.velocityY = bhai13.velocityY - 0.8;
  bhai13.visible = true;
  bhai14.visible = true;
  }
  if(time >= 76 && time <= 85)
  {
    textSize(20);
    textFont("Algerian");
    fill("red");
  text("Happy Birthday Bhai! ",1050,200);
  text(" Bhalo Thakis!",1050,220);
  text("Thank you Bordi & Chotdi",200,220);
  bhai15.visible = true;
  bhai16.visible = true;
  }

  if(time >= 86)
  {
  textSize(80);
  textFont("Algerian");
  fill("blue");
  text("🎈🎂HAPPY BIRTHDAY BHAI🎂🎈",30,200);
  bhai3.visible = false;
  }

//  text("Time is" + time,200,200);
}
