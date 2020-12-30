class Yellowteam{
    constructor()
    {   this.allyplayers=null;
        this.index = 1;
        this.x = 0;
        this.y=0;
   
        yplayer1 = createSprite(900,40,100,10);
        yplayer1.addAnimation("runningyellow1", p1y);
        yplayer1.setCollider('circle',0,0,70)
        yplayer1.scale =-0.25
        
        yplayer2 = createSprite(900,140,100,10);
        yplayer2.addAnimation("runningyellow2", p2y);
        yplayer2.setCollider('circle',0,0,70)
        yplayer2.scale =-0.25
        
        yplayer3 = createSprite(900,240,100,10);
        yplayer3.addAnimation("runningyellow3", p3y);
        yplayer3.setCollider('circle',0,0,70)
        yplayer3.scale =-0.25
        
        
        yplayer4 = createSprite(900,340,100,10);
        yplayer4.addAnimation("runningyellow4", p4y);
        yplayer4.setCollider('circle',0,0,70)
        yplayer4.scale =-0.25
        
        yplayer5 = createSprite(900,440,100,10);
        yplayer5.addAnimation("runningyellow5", p5y);
        yplayer5.setCollider('circle',0,0,70)
        yplayer5.scale =-0.25
        
        yplayer6 = createSprite(900,540,100,10);
        yplayer6.addAnimation("runningyellow6", p6y);
        yplayer6.setCollider('circle',0,0,70)
        yplayer6.scale =-0.25
        
        yplayer7 = createSprite(900,640,100,10);
        yplayer7.addAnimation("runningyellow7", p7y);
        yplayer7.setCollider('circle',0,0,70)
        yplayer7.scale =-0.25
        
        yp1=[yplayer1,1];
        yp2=[yplayer2,2];
        yp3=[yplayer3,3];
        yp4=[yplayer4,4];
        yp5=[yplayer5,5];
        yp6=[yplayer6,6];
        yp7=[yplayer7,7];
        yp=[yp1,yp2,yp3,yp4,yp5,yp6,yp7]
        yplayers = [yplayer1, yplayer2, yplayer3, yplayer4,yplayer5,yplayer6,yplayer7];   
    }

    setposition()
    {
    var x=900;
    var y=40;
    for(var i=1;i<=7;i++)
    {
        var pos= "yellow/player"+i+"/position";
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
       for(var i=0;i<n2;i++)
       {
           if(i!==del)
           {
           a[j]=yplayers[i];
           b[j]=yp[i];
           j++;
           }
           else
           {
               yplayers[i].destroy();
               console.log("destroyed"+(i+1));
           }
       }
       n2--;
       yplayers=[];
       yp=[];
       for(var i=0;i<n2;i++)
       {
        yplayers[i]=a[i];
        yp[i]=b[i];
       }
       console.log(yplayers);
       console.log(yp);
   }  
}