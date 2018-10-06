function triangle()
{
var side1 = parseInt(document.getElementById("First_side").value);
var side2 = parseInt(document.getElementById("Second_side").value);
var side3 = parseInt(document.getElementById("Third_side").value);

if (side1==side2 && side1==side3 && side2 ==side3){
  document.getElementById('message').innerHTML="it's an Equilateral Triangle";
}
else if(side1+side2<= side3 || side1+side3<= side2 || side2+side2<=side1){
  document.getElementById('message').innerHTML="it's not a triangle"
}
else if(side1==side2 || side2 == side3 || side3 == side1){
  document.getElementById('message').innerHTML="it's an Isoceles Triangle";
}
else if (side1!==side2!==side3){
  document.getElementById('message').innerHTML="It's a Scalene Triangle";
}
  else{
    document.getElementById('message').innerHTML="enter valid values";
  }
}
