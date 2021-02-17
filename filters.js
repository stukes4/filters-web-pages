var Oimage;
var img;
var GRimage;
var RGBimage;
var Redimage;

function upload(){
 img= document.getElementById("U1");
  var fileinput= document.getElementById("picinput");
  Oimage= new SimpleImage(fileinput);
  GRimage= new SimpleImage(fileinput);
  RGBimage= new SimpleImage(fileinput);
  Redimage= new SimpleImage(fileinput);
  Oimage.drawTo(img);
}

function imageUP(){
  if (Oimage != null && Oimage.complete){
    return true;
  }
  else{
    alert("image is not up");
  }
}

function Grey(){
  if(imageUP(Oimage)){
    makeGrey();
  GRimage.drawTo(img);
  }
  
}

function RGB(){
  if(imageUP(Oimage)){
    Change();
RGBimage.drawTo(img); 
  }

}

function Red(){
  if(imageUP(Oimage)){
    makeRed();
Redimage.drawTo(img); 
  }

}




function makeGrey(){
  for( var pixel of GRimage.values()){
    
  var average= ((pixel.getGreen() + pixel.getRed() + pixel.getBlue())/3 );  
   pixel.setGreen(average);
   pixel.setRed(average);
   pixel.setBlue(average);
    
}
  img= document.getElementById("U1");
  GRimage.drawTo(img);
  
}

function Change(){
for(var pixel  of RGBimage.values()){
var w= RGBimage.getWidth();
var x= pixel.getX();
 
if (x < w/3)
{
     pixel.setRed(255);
}
 if(x >= w/3 && x < 2*w/3){
     pixel.setGreen(255);
 }  
 
if (x >= 2*w/3 && x <= w) {
   pixel.setBlue(255);
}   
    
} 
  img= document.getElementById("U1");
  RGBimage.drawTo(img);
  
}

function makeRed(){
  
}

function doReset(){
  Oimage.drawTo(img);
}


  
