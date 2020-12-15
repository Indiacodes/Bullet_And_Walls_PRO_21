var bullet1, bullet2, bullet3, wall, speedForbullet1, speedForbullet2, speedForbullet3, weight, damageForbullet1,
damageForbullet2, damageForbullet3, damageLessThan100, damageBet100180, damageMoreThan180, thickness, damage;

function setup() {
  createCanvas(1600,400);

  speedForbullet1 = random(30,60);
  speedForbullet3 = random(40,180);
  speedForbullet2 = random(40,110);

  damageLessThan100 = color(0, 255, 0);
  damageMoreThan180 = color(255,0,0);


  weight = random(400,1500);
  thickness = random(22,83);

  bullet1 = createSprite(50,50,40,thickness);
  bullet1.shapeColor = "white";
  bullet1.velocityX = speedForbullet1;
  bullet1weight = weight;

  bullet2 = createSprite(50,200,40,thickness);
  bullet2.shapeColor = "yellow";
  bullet2.velocityX = speedForbullet2;
  bullet2weight = weight;
  
  bullet3 = createSprite(50,350,40,thickness);
  bullet3.shapeColor = "red";
  bullet3.velocityX = speedForbullet3;
  bullet3weight = weight;

  wall = createSprite(1450,200,thickness,380);
  wall.shapeColor = "white";

  damageForbullet1 = (0.5 * bullet1weight * bullet1.velocityX * bullet1.velocityX) / (bullet1.width * bullet1.width * bullet1.width);
  damageForbullet2 = (0.5 * bullet2weight * bullet2.velocityX * bullet2.velocityX) / (bullet2.width * bullet2.width * bullet2.width);
  damageForbullet3 = (0.5 * bullet3weight * bullet3.velocityX * bullet3.velocityX) / (bullet3.width * bullet3.width * bullet3.width);
}

function draw() {
  background(15);

  //wall.debug = true;

  wall.setCollider("rectangle",-1000, 0, 60,380);

  if(bullet1.x > 1300){
    bullet1.velocityX = bullet1.velocityX - 2;
  }

  if(bullet2.x > 1300){
    bullet2.velocityX = bullet2.velocityX - 2;
  }

  if(bullet3.x > 1300){
    bullet3.velocityX = bullet3.velocityX - 2;
  }

  if(wall.x - bullet1.x < (bullet1.width + wall.width)/2){

    bullet1.velocityX = 0;

    if(damageForbullet1 > 3.68 && damageForbullet1 < 12.42){
      bullet1.shapeColor = color(damageLessThan100);
    }
    if(damageForbullet2 > 12.43){
      bullet2.shapeColor = color(damageMoreThan180);
    }
  }

  if(wall.x - bullet2.x < (bullet2.width + wall.width)/2){

    bullet2.velocityX = 0;

    if(damageForbullet2 > 3.68 && damageForbullet2 < 12.42){
      bullet2.shapeColor = color(damageLessThan100);
    }
    if(damageForbullet2 > 12.43){
      bullet2.shapeColor = color(damageMoreThan180);
    }
  }

  if(wall.x - bullet3.x < (bullet3.width + wall.width)/2){
    bullet3.velocityX = 0;

    if(damageForbullet3 > 3.68 && damageForbullet3 < 12.42){
      bullet3.shapeColor = color(damageLessThan100);
    }
    if(damageForbullet3 > 180){
      bullet3.shapeColor = color(damageMoreThan180);
    }
  }

  drawSprites();
}