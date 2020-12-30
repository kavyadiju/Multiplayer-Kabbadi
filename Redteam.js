class Redteam{
    constructor()
    {   
        player1 = createSprite(100,40,100,10);
        player1.addAnimation("runningred1", p1r);
        player1.setCollider('circle',0,0,70)
        player1.scale = 0.25
        
        player2 = createSprite(100,140,100,10);
        player2.addAnimation("runningred2", p2r);
        player2.setCollider('circle',0,0,70)
        player2.scale = 0.25
        
        player3 = createSprite(100,240,100,10);
        player3.addAnimation("runningred3", p3r);
        player3.setCollider('circle',0,0,70)
        player3.scale = 0.25
        
        
        player4 = createSprite(100,340,100,10);
        player4.addAnimation("runningred4", p4r);
        player4.setCollider('circle',0,0,70)
        player4.scale = 0.25
        
        player5 = createSprite(100,440,100,10);
        player5.addAnimation("runningred5", p5r);
        player5.setCollider('circle',0,0,70)
        player5.scale = 0.25
        
        player6 = createSprite(100,540,100,10);
        player6.addAnimation("runningred6", p6r);
        player6.setCollider('circle',0,0,70)
        player6.scale = 0.25
        
        player7 = createSprite(100,640,100,10);
        player7.addAnimation("runningred7", p7r);
        player7.setCollider('circle',0,0,70)
        player7.scale = 0.25
        
        p1=[player1,1];
        p2=[player2,2];
        p3=[player3,3];
        p4=[player4,4];
        p5=[player5,5];
        p6=[player6,6];
        p7=[player7,7];
        rp=[p1,p2,p3,p4,p5,p6,p7]
        redplayers = [player1, player2, player3, player4,player5,player6,player7];   
    }

    setposition()
    {
    var x=100;
    var y=40;
    for(var i=1;i<=7;i++)
    {
        var pos= "red/player"+i+"/position";
        database.ref(pos).set({
          'x':x,
          'y':y
        });
        y=y+100;

    }
   }

   deleteplayer(del)
   {
       var a=[],b=[];
       var j=0;
       for(var i=0;i<n1;i++)
       {
           if(i!==del)
           {
           a[j]=redplayers[i];
           b[j]=rp[i];
           j++;
           }
           else
           {
               redplayers[i].destroy();
               console.log("destroyed"+(i+1));
           }
       }
       n1--;
       redplayers=[];
       rp=[];
       for(var i=0;i<n1;i++)
       {
        redplayers[i]=a[i];
        rp[i]=b[i];
       }
       console.log(redplayers);
       console.log(rp);
   }  
  
}