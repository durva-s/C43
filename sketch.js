
var astGroup, ast1, ast2, ast3, ast4, ast5;
var bgImg, bg1;
var ast,ship,ship1;

function preload(){
bgImg = loadImage("images/bg1.jpg");
ship1 = loadImage("images/ship.png");
ast1 = loadImage("images/ast1.png");
ast2 = loadImage("images/ast2.png");
ast3 = loadImage("images/ast3.png");
ast4 = loadImage("images/ast4.png");
ast5 = loadImage("images/ast5.png");

}

function setup(){
    createCanvas(600,650);
    bg1 = createSprite(300,325,650,700);
    bg1.addImage(bgImg);
    bg1.velocityX = -2;

    ship = createSprite(80,325,10,10);
    ship.addImage(ship1);
    ship.scale = 0.1

}

function draw(){
    background(0);

    if(bg1.x<200){
        bg1.x=300;
    }
    spawnAst();

    if(keyCode===24){
        ship.y = ship.y - 20;
    }

    drawSprites();
}

function spawnAst(){

    if(frameCount%70==0){
     ast = createSprite(600,random(0,650),20,20);
    ast.velocityX = -3
    ast.scale = 0.1

    var rand = Math.round(random(1,5));
    switch(rand){
        case 1: ast.addImage(ast1);
        break;
        case 2: ast.addImage(ast2);
        break;
        case 3: ast.addImage(ast3);
        break;
        case 4: ast.addImage(ast4);
        break;
        case 5: ast.addImage(ast5);
        break;
        default: break;
    }
}
}