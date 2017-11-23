(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!

})(window);

$(document).ready(function(){


// Function to edit to-do, listener in label
$(document).on('dblclick','.lyssna',function(){
	$(this).parent().parent().addClass("editing");

});
// These two function is to handle the editing function, where u dbl click and edit... Enter or change focus to enter text and go back to "normal" view
// Enter
$(document).on("keyup",".edit", function(event){
		if(event.keyCode == 13){
			edition(this);
		}});
// Focus out
$(document).on("focusout",".edit", function(event){
	edition(this);
})




// Function to remove li element, listener in button
		$(document).on('click','.destroy',function(){
		var condition = $(this).closest('li').hasClass("completed"); // Checks to see if it is completed, if it is our counter shouldnt go down when we delete
		$(this).parent().parent().remove(); // Have a few of these instead of closest... Maybe change all!
		rakna2(false);

		if (!condition){rakna(3);} // Se above comment

});

// Function to check off li, listener in checkbox
$(document).on('click','.toggle',function(){
	if(this.checked) {
		$(this).parent().parent().addClass("completed");
		rakna(2);
	}
	else{
		$(this).parent().parent().removeClass("completed");
		rakna(1);
	}
});


	$("#textruta").keyup(function(event){
			if(event.keyCode == 13){

					var to_do = $('#textruta').val(); // Collects our text in the box
					$('#textruta').val(""); // Puts the text to nothing ""
					add_list_item(to_do); // Calls the function add_list_item, which creates a listobject

					$(".main").css('display','block'); // Display is none by default, here we block the "none display policy"
					$(".footer").css('display','block'); // Display is none by default, here we block the "none display policy"
					rakna(1); //
					rakna2(true);
			}});

	$(".clear-completed").click(function(event){
		total = total-($(".completed").length); // Counts how many elements we have, and erases nr of the completed li

		$(".completed").remove();
		if(total==0){$("#nedre").hide() }
	})

});



var to_do_counter=0;
var total = 0;
// Function to count our remaining tasks
function rakna(sant){
	if (sant==1){ // If 1 we add a listobject
		to_do_counter=to_do_counter+1;
	}
	else if (sant==2){ // If false we subtract one listobject, 
		to_do_counter=to_do_counter-1;
	}
	else{
		to_do_counter=to_do_counter-(1/2); // Maybe not the best looking solution but it works
	}
	var tempo = $('#to-doo').html(to_do_counter);
}

function rakna2(sant){ // Function to see if we should hide the bottom "label"
	if (sant){
		total=total+1;
	}
	else{
		total=total-(1/2);
	}
	if(total==0){
		$("#nedre").hide(); // If the counter is 0 we hide the bottom label
	}

}



var lista=[];

function edition(obj){
	var new_text = $(obj).val();
	$(obj).closest("li").find("label").text(new_text);
	$(obj).closest("li").removeClass("editing");

}




function add_list_item(to_do){
	$("#todo-list2").append('<li><div class="view"> <input class="toggle"  type="checkbox"> <label class="lyssna">' + to_do + '</label> <button class="destroy" onclick="click()"> </button> 										</div> <input class="edit" value='+to_do+'> </li>');
}

// lade till en inbyggd lyssnare till checkbox, "onclick- då kallar man på en funktion "
