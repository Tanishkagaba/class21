function istouching(object1,object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object2.y < object2.height/2 + object1.height/2) {
      
      return true;
    }
  else {
   return false;
  }
  }
  function bounceoff(Tanishka1,Manit2){
    if (Tanishka1.x - Manit2.x < Tanishka1.width/2 + Manit2.width/2
      && Manit2.x - Tanishka1.x < Manit2.width/2 + Tanishka1.width/2){
       
      Tanishka1.velocityX=Tanishka1.velocityX * -1;
      Manit2.velocityX=Manit2.velocityX*(-1);
    }
  if (  Manit2.y - Tanishka1.y < Tanishka1.height/2 + Manit2.height/2
    && Tanishka1.y - Manit2.y < Tanishka1.height/2 + Manit2.height/2) {
      Tanishka1.velocityY=Tanishka1.velocityY*(-1);
      Manit2.velocityY=Manit2.velocityY*(-1);
   
  }
  }   