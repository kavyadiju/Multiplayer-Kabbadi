var player1,player2,player3,player4,player5,player6,player7;
var p1=[],p2=[],p3=[],p4=[],p5=[],p6=[],p7=[],rp=[];
var yplayer1,yplayer2,yplayer3,yplayer4,yplayer5,yplayer6,yplayer7;
var yp1=[],yp2=[],yp3=[],yp4=[],yp5=[],yp6=[],yp7=[],yp=[];
var database,position1,position2;
var gameState,redscore,yellowScore;
var redplayers=[];
var yplayers=[];
var r1=1,r2=1,n1=7,n2=7,rounds=1,playerSelect, rplayerSelect;


function preload(){

  p1=loadAnimation("assets/red.png");
  p1r = loadAnimation("assets/red1.png","assets/red1l.png","assets/red1r.png");
  p2r = loadAnimation("assets/red2.png","assets/red2l.png","assets/red2r.png");
  p3r = loadAnimation("assets/red3.png","assets/red3l.png","assets/red3r.png");
  p4r = loadAnimation("assets/red4.png","assets/red4l.png","assets/red4r.png");
  p5r = loadAnimation("assets/red5.png","assets/red5l.png","assets/red5r.png");
  p6r = loadAnimation("assets/red6.png","assets/red6l.png","assets/red6r.png");
  p7r = loadAnimation("assets/red7.png","assets/red7l.png","assets/red7r.png");

 
  p2=loadAnimation("assets/red.png");
  p1y = loadAnimation("assets/yellow1.png","assets/yellow1l.png","assets/yellow1r.png");
  p2y = loadAnimation("assets/yellow2.png","assets/yellow2l.png","assets/yellow2r.png");
  p3y = loadAnimation("assets/yellow3.png","assets/yellow3l.png","assets/yellow3r.png");
  p4y = loadAnimation("assets/yellow4.png","assets/yellow4l.png","assets/yellow4r.png");
  p5y = loadAnimation("assets/yellow5.png","assets/yellow5l.png","assets/yellow5r.png");
  p6y = loadAnimation("assets/yellow6.png","assets/yellow6l.png","assets/yellow6r.png");
  p7y = loadAnimation("assets/yellow7.png","assets/yellow7l.png","assets/yellow7r.png");
}

function setup() {
  database=firebase.database();

  createCanvas(1000, 685);
  rteam=new Redteam();
  rteam.setposition();

  yteam=new Yellowteam();
  yteam.setposition();

 gameState=database.ref('gameState/');
 gameState.on("value",readGS,showError);


 redscore=database.ref('redScore/');
 redscore.on("value",readScore1,showError);

 yellowscore=database.ref('yellowScore/');
 yellowscore.on("value",readScore2,showError);

 database.ref('/').update({
  'redScore':0,
  'yellowScore':0,
  'gameState':0
})
  

}

function draw() {
 background("purple");

 if(n1===0||n2===0)
 {
   gameState=3;
   fill("white");
   textSize(50);
   text("GAME OVER!!!",300,150);
   if(n1===0)
   text("Yellow Team Wins The Game!!!",200,350);
   else
   text("Red Team Wins The Game!!!",200,350);
 }

  if(gameState===0)
  {
    playerSelect=yp[0][1];
    rplayerSelect=rp[0][1];

    fill("white");
    textSize(50);
    text("Press space to start the toss",200,600);
    textSize(30);
    fill("skyblue");
    text("HOW TO PLAY!!!",350,70);
    textSize(20);
    
    fill("red");
    text("If the current player is red:",150,360);
    textSize(15);
    text("1.Left arrow to move leftside",150,385);
    text("2.Right arrow to move right side",150,410);
    text("3.Up arrow to move upwards",150,435);
    text("4.Down arrow to move downwards",150,460);
    textSize(20);
    
    fill("yellow");
       text("If the current player is YELLOW:",550,360);
       textSize(15);
    text("1.A KEY to move leftside",550,385);
    text("2.S KEY to move right side",550,410);
    text("3.W KEY arrow to move upwards",550,435);
    text("4.D KEY to move downwards",550,460);
    textSize(20);
    
    fill("pink");
        text("For selecting the player from opposite team:",350,100);
        textSize(15);
    text("1 Number key selects player1",350,125);
    text("2 Number key selects player2",350,150);
    text("3 Number key selects player3",350,175);
    text("4 Number key selects player4",350,200);
    text("5 Number key selects player5",350,225);
    text("6 Number key selects player6",350,250);
    text("7 Number key selects player7",350,275);
 
    if(keyDown("space"))
    {
      rand=round(random(1,2));
      if(rand===1)
      {
        
          r1=round(random(1,n1));
          extractredplayer=rp[r1-1][1];
          rplayerSelect=extractredplayer;
        
        updategamestate(1);
        updateredselect(rplayerSelect);

        var currentredpos=database.ref("currentRedPlayer/");
        currentredpos.on("value",readrPosition,showError);

        var rpos="red/player"+rplayerSelect+"/position"
        var redplayerpos=database.ref(rpos);
        redplayerpos.on("value",readPosition1,showError);

        var ypos="yellow/player"+playerSelect+"/position"
        var yplayerpos=database.ref(ypos);
        yplayerpos.on("value",readPosition2,showError);
        alert("RED RIDE");
      
      }
      if(rand===2)
      {
          r2=round(random(1,n2));
          extractyellowplayer=yp[r2-1][1];
          playerSelect=extractyellowplayer;

        updategamestate(2);
        updateyellowselect(playerSelect);

       var currentyellowpos=database.ref("currentYellowPlayer/");
       currentyellowpos.on("value",readyPosition,showError);

        var ypos="yellow/player"+playerSelect+"/position"
        var yplayerpos=database.ref(ypos);
        yplayerpos.on("value",readPosition2,showError);

       var rpos="red/player"+rplayerSelect+"/position"
        var rplayerpos=database.ref(rpos);
        rplayerpos.on("value",readPosition1,showError);

       alert("YELLOW RIDE");
      } 
    }
 

  }
 if(gameState===1)
 {

  if(keyDown("1"))
  {
    playerSelect=1;
    console.log(playerSelect);
   
    updateyellowselect(1);
   
    var ypos="yellow/player1/position"
    var yplayerpos=database.ref(ypos);
    yplayerpos.on("value",readPosition2,showError);
  }
  if(keyDown("2"))
  {
    playerSelect=2;
    console.log(playerSelect);
   
    updateyellowselect(2);
   
    var ypos="yellow/player2/position"
    var yplayerpos=database.ref(ypos);
    yplayerpos.on("value",readPosition2,showError);
  }
  if(keyDown("3"))
  {
    playerSelect=3;
    console.log(playerSelect);
   
    updateyellowselect(3);
   
    var ypos="yellow/player3/position"
    var yplayerpos=database.ref(ypos);
    yplayerpos.on("value",readPosition2,showError);
  }
  if(keyDown("4"))
  {
    playerSelect=4;
    console.log(playerSelect);
   
    updateyellowselect(4);
   
    var ypos="yellow/player4/position"
    var yplayerpos=database.ref(ypos);
    yplayerpos.on("value",readPosition2,showError);
  }
  if(keyDown("5"))
  {
    playerSelect=5;
    console.log(playerSelect);
   
    updateyellowselect(5);
   
    var ypos="yellow/player5/position"
    var yplayerpos=database.ref(ypos);
    yplayerpos.on("value",readPosition2,showError);
  }
  if(keyDown("6"))
  {
    playerSelect=6;
    console.log(playerSelect);
   
    updateyellowselect(6);
   
    var ypos="yellow/player6/position"
    var yplayerpos=database.ref(ypos);
    yplayerpos.on("value",readPosition2,showError);
  }
    if(keyDown("7"))
  {
    playerSelect=7;
    console.log(playerSelect);
   
    updateyellowselect(7);
   
    var ypos="yellow/player7/position"
    var yplayerpos=database.ref(ypos);
    yplayerpos.on("value",readPosition2,showError);
  } 

  var currentredpos=database.ref("currentRedPlayer/");
  currentredpos.on("value",readrPosition,showError);

  var rpos="red/player"+rplayerSelect+"/position"
  var redplayerpos=database.ref(rpos);
  redplayerpos.on("value",readPosition1,showError);

if(playerSelect!==undefined)
{

  var currentyellowpos=database.ref("currentYellowPlayer/");
  currentyellowpos.on("value",readyPosition,showError);

  var ypos="yellow/player"+playerSelect+"/position"
  var yplayerpos=database.ref(ypos);
  yplayerpos.on("value",readPosition2,showError);
}

if(position1!=undefined){
   if(keyDown(LEFT_ARROW)){
     writePosition1(-5,0)
   }
   if(keyDown(RIGHT_ARROW)){
    writePosition1(5,0)
  }
  if(keyDown(UP_ARROW)){
    writePosition1(0,-5)
  }
  if(keyDown(DOWN_ARROW)){
   writePosition1(0,5)
 }

 if(keyDown("w")){
  writePosition2(0,-5)
}  
if(keyDown("d")){
 writePosition2(0,5)
}

}

 if(redplayers[rplayerSelect-1].x>900)
 {
  database.ref('/').update({
    'redScore':redscore-5,
    'yellowScore':yellowscore+5,
    'gameState':0
  })

  var pos="red/player"+rplayerSelect+"/position"
  database.ref(pos).update({
    'x':100
  })
 }

 
 for(var k=0;k<n2;k++)
 {
   
 if(redplayers[rplayerSelect-1].isTouching(yplayers[k]))
 {
  database.ref('/').update({
    'redScore':redscore+5,
    'yellowScore':yellowscore-5,
    'gameState':0
  })
  /*var reddelpos="red/player"+rplayerSelect+"/position";
  database.ref(reddelpos).update({
    'x':-50,
    'y':-50
  })*/
rteam.deleteplayer(rplayerSelect-1);
  //redplayers[r1-1].destroy();
  //redplayers[r1-1]=null;
 // n1--;
  //console.log("destroyed"+r1);
  alert("RED LOST");
  gameState=0;
  break;
 }
 }

 textSize(20);
text("RED:   "+redscore,350,25);
text("YELLOW:   "+yellowscore,650,25);

  drawlines();
  drawSprites();

}


if(gameState===2)
 {
  if(keyDown("1"))
  {
    rplayerSelect=1;
    console.log(rplayerSelect);
    
    updateredselect(1);
    
         var rpos="red/player1/position"
          var rplayerpos=database.ref(rpos);
          rplayerpos.on("value",readPosition1,showError);
  }

  if(keyDown("2"))
  {
    rplayerSelect=2;
    console.log(rplayerSelect);
    
    updateredselect(2);
    
         var rpos="red/player2/position"
          var rplayerpos=database.ref(rpos);
          rplayerpos.on("value",readPosition1,showError);
  }

  if(keyDown("3"))
  {
    rplayerSelect=3;
    console.log(rplayerSelect);
    
    updateredselect(3);
    
         var rpos="red/player3/position"
          var rplayerpos=database.ref(rpos);
          rplayerpos.on("value",readPosition1,showError);
  }

  if(keyDown("4"))
  {
    rplayerSelect=4;
    console.log(rplayerSelect);
    
    updateredselect(4);
    
         var rpos="red/player4/position"
          var rplayerpos=database.ref(rpos);
          rplayerpos.on("value",readPosition1,showError);
  }

  if(keyDown("5"))
  {
    rplayerSelect=5;
    console.log(rplayerSelect);
    
    updateredselect(5);
    
         var rpos="red/player5/position"
          var rplayerpos=database.ref(rpos);
          rplayerpos.on("value",readPosition1,showError);
  }

  if(keyDown("6"))
  {
    rplayerSelect=6;
    console.log(rplayerSelect);
    
    updateredselect(6);
    
         var rpos="red/player6/position"
          var rplayerpos=database.ref(rpos);
          rplayerpos.on("value",readPosition1,showError);
  }

  if(keyDown("7"))
  {
    rplayerSelect=7;
    console.log(rplayerSelect);
    
    updateredselect(7);
    
         var rpos="red/player7/position"
          var rplayerpos=database.ref(rpos);
          rplayerpos.on("value",readPosition1,showError);
  }
 
  var currentyellowpos=database.ref("currentYellowPlayer/");
  currentyellowpos.on("value",readyPosition,showError);

  var ypos="yellow/player"+playerSelect+"/position"
  var yplayerpos=database.ref(ypos);
  yplayerpos.on("value",readPosition2,showError);

if(rplayerSelect!==undefined)
{

  var currentredpos=database.ref("currentRedPlayer/");
  currentredpos.on("value",readrPosition,showError);

  var rpos="red/player"+rplayerSelect+"/position"
  var rplayerpos=database.ref(rpos);
  rplayerpos.on("value",readPosition1,showError);
}
if(position2!=undefined){
   if(keyDown("a")){
     writePosition2(-5,0)
   }
   if(keyDown("s")){
    writePosition2(5,0)
  }
  if(keyDown("w")){
    writePosition2(0,-5)
  }
  if(keyDown("d")){
   writePosition2(0,5)
  }
  if(keyDown(UP_ARROW)){
    writePosition1(0,-5)
  }
  if(keyDown(DOWN_ARROW)){
   writePosition1(0,5)
 }
 
}

 if(yplayers[playerSelect-1].x<100)
 {
  database.ref('/').update({
    'redScore':redscore+5,
    'yellowScore':yellowscore-5,
    'gameState':0
  })

  var pos="yellow/player"+playerSelect+"/position"
 database.ref(pos).update({
   'x':900
 })

 }
 for(var k=0;k<n1;k++)
 {
if(yplayers[playerSelect-1].isTouching(redplayers[k]))
 {
  database.ref('/').update({
    'redScore':redscore-5,
    'yellowScore':yellowscore+5,
    'gameState':0
  })
 /* var yellowdelpos="yellow/player"+playerSelect+"/position";
  database.ref(yellowdelpos).update({
    'x':800,
    'y':-50
  })*/

 // yplayers[r2-1].destroy();
  //yplayers[r2-1]=null;
 // n2--;
  yteam.deleteplayer(playerSelect-1);
 // console.log("destroyed"+r2);
  alert("YELLOW LOST");
  gameState=0;
  break;
 }
} 
 
textSize(20);
text("RED:   "+redscore,350,25);
text("YELLOW:   "+yellowscore,650,25);

  drawlines();
  drawSprites();
}


 
  }

  function writePosition1(x,y)
{
 // r1=rplayerSelect;

  var pos="red/player"+rplayerSelect+"/position"
 database.ref(pos).update({
   'x':position1.x+x,
   'y':position1.y+y
 })
  
}
function writePosition2(x,y)
{
  //r2=playerSelect;
  console.log("writing player"+playerSelect+"/position");
  var pos="yellow/player"+playerSelect+"/position"
 database.ref(pos).update({
   'x':position2.x+x,
   'y':position2.y+y
 })
  
}

function readPosition1(data)
{
  position1=data.val();

  redplayers[rplayerSelect-1].x=position1.x;
  redplayers[rplayerSelect-1].y=position1.y;
}

function readPosition2(data)
{
  position2=data.val();

  yplayers[playerSelect-1].x=position2.x;
  yplayers[playerSelect-1].y=position2.y;
}


function readGS(data)
{
  gameState=data.val();
}

function readScore1(data)
{
  redscore=data.val();
}

function readScore2(data)
{
 yellowscore=data.val();
}

function showError()
{
console.log("Error in writing to database");
}

function drawlines()
{

strokeWeight(3);
for(var i=0;i<685;i+=20)
{
  stroke("yellow");
 line(100,i,100,i+10);
 stroke("red");
 line(900,i,900,i+10);
 stroke("black");
 line(500,i,500,i+10);
}


}

function updategamestate(state)
{
  database.ref('/').update({
    gameState: state
  });

}

function updateredselect(r)
{
  database.ref('/').update({
    currentRedPlayer: r
  });
}
function updateyellowselect(r)
{
  database.ref('/').update({
    currentYellowPlayer: r
  });
}

function readrPosition(data)
{
  rplayerSelect=data.val();
}
function readyPosition(data)
{
  playerSelect=data.val();
}