/*function myFunction() {
    document.getElementById("Demo").innerHTML = "Paragraph changed.";
}

function funk2(){

  var test = 2;
  var heja;
  if (test>1){
    heja="Tjooo"
  }
else{
  heja="BUU"
}
window.alert(heja);
}*/

// Man kan alltså ha kommando i annat fönster än html filen

$(document).ready(function(){
    $("#hide").click(function(){
        $(".demo").css('display','block');
    });
    $("#visa").click(function(){
        $(".demo").css('color', 'gray');
        alert("Jassså");
        var x = document.getElementById("textruta").value;
        alert(x);
    });
    $("#textruta").keyup(function(event){
        if(event.keyCode == 13){
            $("#id_of_button").click();
            alert("aa");
        }
    });

});
alert("testar")
