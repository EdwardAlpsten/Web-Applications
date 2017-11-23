
$(document).ready(function(){

$(document).on('click','#xxx',function(){
  //$("span", this).text("My NEW Text");
  alert("Funkar");
  $("#lista").append("<li> <div class='yyy'> <input id='inp' type='checkbox'> </input> </div> </li> ");
});

//denna funkar inte
$("#inp").keyup(function(event){
  if(event.keyCode == 13){
    alert("yaaah");

  }});




$(document).on('click','.knapp1',function(){
  //$("span", this).text("My NEW Text");
  bytbild_upp(counter);
});

// När jag drar musen över så händer detta
$(document).on('mouseover','.titel',function(){
  //$("span", this).text("My NEW Text");
  alert("Funkar");
});

$(document).on('click','.knapp2',function(){
  //$("span", this).text("My NEW Text");
  bytbild_ner(counter);
});

$(document).on('click','.knapp',function(){
  $("span", this).text("My NEW Text");
});

$("p").click(function(){
    alert("The paragraph was clicked.");
});


var counter = 1;
function bytbild_upp(){
  if (counter==6){
    counter = 0;
  }
  counter = counter +1;
  bytkalla(counter);

}
function bytbild_ner(){
  if (counter==1){
    counter = 7;
  }
  counter = counter -1;
  bytkalla(counter);
}
function bytkalla(){
  if (counter==1){
    $(".bilder").attr("src","Bilder/Edward1.jpg");
  }
  else if (counter==2){
    $(".bilder").attr("src","Bilder/Edward2.jpg");
  }
  else if (counter==3){
    $(".bilder").attr("src","Bilder/Edward3.jpg");
  }
  else if (counter==4){
    $(".bilder").attr("src","Bilder/Edward4.jpg");
  }
  else if (counter==5){
    $(".bilder").attr("src","Bilder/Edward5.jpg");
  }
  else if (counter==6){
    $(".bilder").attr("src","Bilder/Edward6.jpg");
  }


}



});
