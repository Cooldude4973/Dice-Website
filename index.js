 //var Player_one_name=prompt("Please enter the name of Player one:");
 //var Player_two_name=prompt("Please enter the name of Player two:");
 var player_one = Math.floor(Math.random() * 6 + 1);
 //alert(player_one);
 var player_two = Math.floor(Math.random() * 6 + 1);
 //alert(player_two);
 var Random_dice_img_1 = "images/dice" + player_one + ".png";
 var Random_dice_img_2 = "images/dice" + player_two + ".png";
 if (player_one > player_two) {
   // alert(Player_one_name + " has won!");
   var image_1 = document.querySelectorAll("img")[0];
   image_1.setAttribute("src", Random_dice_img_1);
   var image_2 = document.querySelectorAll("img")[1];
   image_2.setAttribute("src", Random_dice_img_2);
   var player_one_title=document.querySelector("h1").innerHTML="🚩Player one has Won!";
   document.querySelector("h1").style.fontSize="4.5rem";
 } else if (player_one === player_two) {
   //alert("It's a draw! Please refresh again");
   var image_1 = document.querySelectorAll("img")[0];
   image_1.setAttribute("src", Random_dice_img_1);
   var image_2 = document.querySelectorAll("img")[1];
   image_2.setAttribute("src", Random_dice_img_2);
  document.querySelector("h1").innerHTML="Its a draw!";
  document.querySelector("h1").style.fontSize="4.5rem";


 }
 else {
   var image_1 = document.querySelectorAll("img")[0];
   image_1.setAttribute("src", Random_dice_img_1);
   var image_2 = document.querySelectorAll("img")[1];
   image_2.setAttribute("src", Random_dice_img_2);
  document.querySelector("h1").innerHTML="Player two has Won!🚩";
  document.querySelector("h1").style.fontSize="4.5rem";

   //alert(Player_two_name+" has won!");
 }
