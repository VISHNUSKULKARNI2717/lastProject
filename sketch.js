var i;

function preload(){
  
  saniaimg=loadImage("sania.png")

}
function setup() {
  createCanvas(1000,600);
  

  blockGroup=new Group();
  monsterGroup=new Group();


  
  speed=random(4,6)

  monster1=createSprite(950,20,20,20);
 
  monster2=createSprite(950,60,20,20);
  monster3=createSprite(950,100,20,20);
  monster4=createSprite(950,140,20,20);
  
  monster1.setVelocity(speed,-speed);
  monster2.setVelocity(-speed,speed);
  monster3.setVelocity(-speed,-speed);
  monster4.setVelocity(speed,speed);
  
  sania=createSprite(50,50,20,20);
  sania.addImage(saniaimg)
  sania.shapeColor = 'red';
 
  billu=createSprite(950,550,20,20);
  billu.shapeColor = 'red';
  
  
  blk1=createSprite(80, 50, 20, 100);
  blk1.shapeColor = 'brown';
  blk2=createSprite(100, 150, 200, 20);
  blk2.shapeColor = 'brown';
  blk3=createSprite(300, 40, 200, 20);
  blk3.shapeColor = 'brown';
  blk4=createSprite(200, 40, 20, 100);
  blk4.shapeColor = 'brown';
  blk5=createSprite(100, 200, 20, 80);
  blk5.shapeColor = 'brown';
  blk6=createSprite(150, 230, 80, 20);
  blk6.shapeColor = 'brown';
  blk7=createSprite(300, 150, 20, 200);
  blk7.shapeColor = 'brown';
  blk8=createSprite(30, 400, 20, 200);
  blk8.shapeColor = 'brown';
  blk9=createSprite(100, 400, 20, 200);
  blk9.shapeColor = 'brown';
  blk10=createSprite(160, 400, 20, 200);
  blk10.shapeColor = 'brown';
  blk11=createSprite(300, 490, 200, 20);
  blk11.shapeColor = 'brown';
  blk12=createSprite(370, 300, 20, 150);
  blk12.shapeColor = 'brown';
  blk13=createSprite(450, 300, 20, 150);
  blk13.shapeColor = 'brown';
  blk14=createSprite(410 ,200, 150, 20);
  blk14.shapeColor = 'brown';
  blk15=createSprite(250, 300, 20, 150);
  blk15.shapeColor = 'brown';
  blk16=createSprite(300, 450, 150, 20);
  blk16.shapeColor = 'brown';
  blk17=createSprite(300, 450, 20, 150);
  blk17.shapeColor = 'brown';
  blk18=createSprite(500, 450, 20, 150);
  blk18.shapeColor = 'brown';
  blk19=createSprite(550, 300, 20, 150);
  blk19.shapeColor = 'brown';
  blk20=createSprite(600, 500, 150, 20);
  blk20.shapeColor = 'brown';
  blk21=createSprite(650, 300, 150, 20);
  blk21.shapeColor = 'brown';
  blk22=createSprite(600, 300, 20, 150);
  blk22.shapeColor = 'brown';
  blk23=createSprite(885, 590, 20, 150);
  blk23.shapeColor = 'brown';
  blk24=createSprite(950, 590, 150, 20);
  blk24.shapeColor = 'brown';
  blk25=createSprite(850, 50, 20, 150);
  blk25.shapeColor = 'brown';
  blk26=createSprite(500, 150, 150, 20);
  blk26.shapeColor = 'brown';
  blk27=createSprite(650, 150, 20, 150);
  blk27.shapeColor = 'brown';
  
  blk28=createSprite(700, 170, 20, 150);
  blk28.shapeColor = 'brown';
  blk29=createSprite(950, 170, 150, 20);
  blk29.shapeColor = 'brown';
  blk30=createSprite(370, 100, 150, 20);
  blk30.shapeColor = 'brown';
  blk31=createSprite(680, 200, 150, 20);
  blk31.shapeColor = 'brown';
  blk32=createSprite(750, 200, 150, 20);
  blk32.shapeColor = 'brown';
  blk33=createSprite(600, 200, 20, 150);
  blk33.shapeColor = 'brown';
  blk34=createSprite(600, 700, 20, 150);
  blk34.shapeColor = 'brown';
  blk35=createSprite(100, 700, 150, 20);
  blk35.shapeColor = 'brown';
  blk36=createSprite(700, 400, 20, 150);
  blk36.shapeColor = 'brown';
  blk37=createSprite(750, 400, 20, 150);
  blk37.shapeColor = 'brown';
  blk38=createSprite(800, 400, 150, 20);
  blk38.shapeColor = 'brown';
  blk39=createSprite(800, 550, 150, 20);
  blk39.shapeColor = 'brown';
  blk40=createSprite(600, 550, 150, 20);
  blk40.shapeColor = 'brown';
  blk41=createSprite(300, 550, 150, 20);
  blk41.shapeColor = 'brown';
  blk42=createSprite(100, 550, 150, 20);
  blk42.shapeColor = 'brown';
  blk43=createSprite(450, 550, 20, 150);
  blk43.shapeColor = 'brown';
  blk44=createSprite(600, 550, 20, 150);
  blk44.shapeColor = 'brown';
  blk45=createSprite(900, 300, 20, 150);
  blk45.shapeColor = 'brown';
  blk45=createSprite(900, 300, 150, 20);
  blk45.shapeColor = 'brown';
  blk46=createSprite(900, 450, 150, 20);
  blk46.shapeColor = 'brown';
  blk47=createSprite(900, 50, 20, 150);
  blk47.shapeColor = 'brown';
  blk48=createSprite(600, 50, 170, 20);
  blk48.shapeColor = 'brown';
  blk50=createSprite(750, 50, 20, 150);
  blk50.shapeColor = 'brown';
 

}

function draw() {
  background("yellow"); 
  edges=createEdgeSprites();
  monster1.bounceOff(edges);
  monster2.bounceOff(edges);
  monster3.bounceOff(edges);
  monster4.bounceOff(edges);
    monsterGroup.add(monster1);
    monsterGroup.add(monster2);
    monsterGroup.add(monster3);
    monsterGroup.add(monster4);
    
    blockGroup.add(blk1);
    blockGroup.add(blk2);
    blockGroup.add(blk3);
    blockGroup.add(blk4);
    blockGroup.add(blk5);
    blockGroup.add(blk6);
    blockGroup.add(blk7);
    blockGroup.add(blk8);
    blockGroup.add(blk9);
    blockGroup.add(blk10);
    blockGroup.add(blk11);
    blockGroup.add(blk12);
    blockGroup.add(blk13);

    blockGroup.add(blk14);
    blockGroup.add(blk15);
    blockGroup.add(blk16);
    blockGroup.add(blk17);
    blockGroup.add(blk18);
    blockGroup.add(blk19);
    blockGroup.add(blk20);
    blockGroup.add(blk21);
    blockGroup.add(blk22);
    blockGroup.add(blk23);
    blockGroup.add(blk24);
    blockGroup.add(blk25);
    blockGroup.add(blk26);
    blockGroup.add(blk27);
    blockGroup.add(blk28);
    blockGroup.add(blk29);
    blockGroup.add(blk30);
    blockGroup.add(blk31);
    blockGroup.add(blk32);
    blockGroup.add(blk33);
    blockGroup.add(blk34);
    blockGroup.add(blk35);
    blockGroup.add(blk36);
    blockGroup.add(blk37);
    blockGroup.add(blk38);
    blockGroup.add(blk39);
    blockGroup.add(blk40);
    blockGroup.add(blk41);
    blockGroup.add(blk42);
    blockGroup.add(blk43);
    blockGroup.add(blk44);
    blockGroup.add(blk45);
    blockGroup.add(blk46);
    blockGroup.add(blk47);
    blockGroup.add(blk48);
    blockGroup.add(blk50);

    blockGroup.add(blk1);


    monsterGroup.bounceOff(blockGroup);
    monsterGroup.bounce(monsterGroup);
    if (keyDown("W")) {
  
    sania.velocityX=0;
    sania.velocityY=-4;
    }
    
    if (keyDown("S")) {
    
    sania.velocityX=0;
    sania.velocityY=4;
    }
    
    if (keyDown("D")) {
      
    sania.velocityX=4;
    sania.velocityY=0;
            
      
    }
    if (keyDown("A")) {
    sania.velocityX=-4;
    sania.velocityY=0;
    }

    createEdgeSprites();
  
  sania.bounceOff(blk3);
  sania.bounceOff(blk4);
  sania.bounceOff(blk5);
  sania.bounceOff(blk6);
  sania.bounceOff(blk7);
  sania.bounceOff(blk8);
  sania.bounceOff(blk9);
  sania.bounceOff(blk11);
  sania.bounceOff(blk12);
  sania.bounceOff(blk13);
  sania.bounceOff(blk14);
  
  sania.bounceOff(blk16);
  sania.bounceOff(blk17);
  sania.bounceOff(blk18);
  sania.bounceOff(blk19);
  sania.bounceOff(blk20);
  sania.bounceOff(blk21);
  sania.bounceOff(blk22);
  sania.bounceOff(blk23);
  sania.bounceOff(blk24);
  sania.bounceOff(blk25);
  sania.bounceOff(blk27);
  sania.bounceOff(blk28);
  sania.bounceOff(blk29);
  sania.bounceOff(blk31);
  sania.bounceOff(blk32);
  sania.bounceOff(blk33);
  sania.bounceOff(blk34);
  sania.bounceOff(blk35);
  sania.bounceOff(blk36);
  sania.bounceOff(blk37);
  sania.bounceOff(blk38);
  sania.bounceOff(blk39);
  sania.bounceOff(blk40);
  sania.bounceOff(blk41);
  sania.bounceOff(blk42);
  sania.bounceOff(blk43);
  sania.bounceOff(blk44);
  sania.bounceOff(blk45);
  sania.bounceOff(blk47);
  

  

  

    if (sania.isTouching(blk1)){
      sania.velocityX=0
      sania.velocityY=0
      }

      if (sania.isTouching(blk2)) {
        sania.velocityX=0
        sania.velocityY=0
        }

        if (sania.isTouching(blk10)) {
          sania.velocityX=0
          sania.velocityY=0
          }

          if (sania.isTouching(blk30)) {
            sania.velocityX=0
            sania.velocityY=0
            }

            if (sania.isTouching(blk48)) {
              sania.velocityX=0
              sania.velocityY=0
              }

              if (sania.isTouching(blk50)) {
                sania.velocityX=0
                sania.velocityY=0
                }
                if (sania.isTouching(blk46)) {
                  sania.velocityX=0
                  sania.velocityY=0
                  }

                if (sania.isTouching(blk15)) {
                  sania.velocityX=0
                  sania.velocityY=0
                  }
                  if (sania.isTouching(billu)) {
                    fill("red");
                    textSize(18);
                    text("You Win!!!", 500, 200);
                    sania.velocityX=0
                    sania.velocityY=0
                    }
                    if (sania.isTouching(monsterGroup)) {
                      sania.x=50
                      sania.y=50
                      sania.setVelocity(0,0)
                      }
                    
                    
                    textSize(20);
                    text("billu", 930, 530);
                    text("sania", 20, 20);

                  

   
  drawSprites();
  }
  
  