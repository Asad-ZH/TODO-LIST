moved();
moveBack();
selecting();
idsss();

$('.Checked div, .UnChecked div').hide();
$('.Checked .active002, .UnChecked .active002').show();
//for database purpose making objects and array
var Data =new Array();
var dynamicDataHolder= new Array();
var givinClass,givinClass,header,email;


// adding task
$("#addingText").keypress(function(event){
	dynamicDataHolder=[];

    if(event.which === 13){
		var todoText = $(this).val();
		var date = $('#dateOnIcon').val();
        $(this).val("");
        $(".UnChecked .active002").append("<li class='selecting'><input type='checkbox'>" + todoText +"<i class='far fa-star'></i>" + "<span class='dateee'>" + date + "</span></li>"  );
		dynamicDataHolder.push(todoText,date);
		dataEntry();
		$('#addingText').blur();
		moved();
		moveBack();
		selecting();
		$('#dateOnIcon').val('');
		}
});
function dataEntry(){
	var tempId=$(".sidenav [class*=list].active001").attr('rel');
	var tempText=$(".sidenav [class*=list].active001").text();
	dynamicDataHolder.push(tempId,tempText);
	Data.push(dynamicDataHolder);
	dynamicDataHolder=[];
}
//adding items on sidebar

$("#closeForm1").click(function() {
	givingId ="listId" + Date.now();
	givinClass = "list"+ Date.now();
	header = $("#nameOfHeading").val();
	email = $("#email").val();
	
	if(header !== ""){
	$(".sidenav").append("<li rel="+givingId+" class='deleted "+ givinClass +"'><i class='fas fa-list-ul'></i><a class='removingADeco' href='#'><span>" + header + "</span></a></li>");
	}
	if(email !== ""){
		$("#formIds").append("<br><img class='popupImage' src='https://images.unsplash.com/photo-1502209524164-acea936639a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEwOTg0fQ&auto=format&fit=crop&w=500&q=60'><span class='formEmail'>" + email + "</span>");
	}
	$(".UnChecked, .Checked").append("<div class="+ givingId +"></div>");	
	$("#nameOfHeading").val("");
	$("#email").val();
	idsss();
  });

 function idsss(){

$(document).ready(function(){
	$(".sidenav [class*=list]").click(function(){
		$(".sidenav [class*=list]").removeClass('active001');
		$(this).addClass('active001');

		var currentId = $(this).attr('rel');

		
		$(".Checked .active002, .UnChecked .active002").fadeOut(300,function(){

			$(this).removeClass("active002");

			$('.'+currentId).fadeIn(300,function(){
				$(this).addClass('active002');
			});
		});
	});
	
});
}

// for the input of daily task <i class="fas fa-times"></i>
// var i = 0;
// $('#addingText').on('focus blur', function () {
// 	i += 1;
// 	var tog = function (someNum){
//     if ((someNum % 2) === 1){
//     	$(".searchIcon").show();
//     	$("#mainIcon").removeClass("fa-plus");
// 		$("#mainIcon").addClass("fa-microphone");
// 	}
// 	else{
//     	$(".searchIcon").hide();
//     	$("#mainIcon").removeClass("fa-microphone");
//     	$("#mainIcon").addClass("fa-plus");
// 	}
//   };
//   tog(i);
// });
$(document).ready(function () {
    $('#inputDiv').click(function () {
		$(".searchIcon").show();
	 	$("#mainIcon").removeClass("fa-plus");
		$("#mainIcon").addClass("fa-microphone");
	});
	$("#nav-right, #btn, .UnChecked, .Checked, #right, hey").click(function () {
		$(".searchIcon").hide();
		$("#mainIcon").removeClass("fa-microphone");
		$("#mainIcon").addClass("fa-plus");
	});
	
});

// $(".thisclass:not(#thisid)")

function moved(){
  
	var lis = document.querySelectorAll(".UnChecked li");
	
		for (var i = 0; i < lis.length; i++){
			lis[i].addEventListener("click",function(){
			var input = this.querySelector("input");

				if(input.checked === true){
				$(this).closest("li").prependTo(".Checked .active002");
				selecting();
            }
        });
    }
}
function moveBack(){
	var lis2 = document.querySelectorAll(".Checked li");
	
	for (var j = 0; j < lis2.length; j++){
			lis2[j].addEventListener("click",function(){
				var input2 = this.querySelector("input");
				
				if(input2.checked === false){
				$(this).closest("li").prependTo(".UnChecked .active002");
				selecting();
			}
		});
	}
}
//hide and show the checked list items
$(document).ready(function(){
	$("#btn").click(function(){
		$(".Checked").toggle();
	});
});
$(document).ready(function() {

	if ((screen.width>1024)) {
		$(".hide").show();	
			$(".001").addClass("active001");

			$(".footer").css("paddingRight","175px");
			$(".hiddenIcon").hide();
	}
	else if ((screen.width<=1024)){
		$(".hide").hide();
		$(".column-left").css("width","50px");
		$(".footer").css("paddingRight","8px");
		$(".hiddenIcon").css({
			"display":"initial",
			"padding":"15px auto",
			"marginTop":"10px"
		});
		$(".001").removeClass("active001");
	}
});

// hide and show the left sidebar

var x=0;
$("#hamburger").click(function(){
	x+=1;
	var tog = function (someNum){
		if ((someNum % 2) === 1) {
			$(".hide").hide();
			$(".column-left").css("width","50px");
			$(".footer").css("paddingRight","8px");
			$(".hiddenIcon").css({
				"display":"initial",
				"padding":"15px auto",
				"marginTop":"10px"
			});
			$(".001").removeClass("active001");
		}else{
			$(".hide").show();	
			$(".001").addClass("active001");

			$(".footer").css("paddingRight","175px");
			$(".hiddenIcon").hide();
		}
	  };
	  tog(x);
});
function myFunction() {
	var element = document.getElementById("hey");
	element.classList.toggle("HEY");
}
// adding main heading
$("#create-user").click(function() {
	$("#popup").show();
  });
  
  $("#closeForm0, #closeForm1").click(function() {
	$("#popup").hide();
  });
//deleting todo's or list

$("#del, .delted").click(function() {
	$(".overlay1").show();
  });
  
  $("#cancelDelete, #confirmDelete").click(function() {
	$(".overlay1").hide();
  });


//main input icon responsive
$('.fa-plus').click(function(){
	$('#addingText').focus();
});

//sidebar search input icons
function iconChange() {
	$("#searchIcon").toggleClass("fa-times fa-search");
	focusing();
}

function focusing()
{  
    if($("#searchIcon").hasClass("fa-search") === true){
		$('#addHeader').blur();
	}
    else{
		$('#addHeader').focus();
	}
}

function selecting(){
	//right sidebar
	$(".UnChecked li, .Checked li").dblclick(function(){
		$("#right").removeClass("popup");
	});

	$(".column-left, .column-center, .fa-caret-square-right").click(function(){
		$("#right").addClass("popup");
	});

	$(".UnChecked li, .Checked li").click(function() {
		$(".UnChecked li").removeClass("background_selected1");
		$(".Checked li").removeClass("background_selected1");
		
		$(this).addClass("background_selected1");
	  });
	  
	//selecting and unselecting heading li's
	$('.sidenav li:gt(0)').on('click', function(){
		$('.sidenav li').removeClass('active001');
		$(this).addClass('active001');
	});
}

//dropdown menu
$("#menuDropdown").click(function(){
	$("#dropdown2").hide();
	$("#dropdown1").toggle();
});
// 2nd dropdown menu
$("#sortDropdown").click(function(){
	$("#dropdown1").hide();
	$("#dropdown2").toggle();
});
$(".hiding_dropdown, #right").click(function(){
	$("#dropdown1").hide();
	$("#dropdown2").hide();
});
//3rd dropdown menu
$( ".profileDropdown ul li").hover(
	function() {
		if($(this).hasClass("disable") === false){
			$( this ).css("background-color","rgba(2,126,189,1)");
		}
	}, function() {
		$( this ).css("background-color",""); 
	}
);
$(".sidenav li img, .profileParent").click(function(){
	$("#thirdDropdown").toggle();
});

// right click menu
// divide into three different portions

// portion 1 --- unchecked li's
$(".UnChecked li").bind("contextmenu", function(event){
	$("#ContextMenu1").css({"top": event.pageY +  "px", "left": event.pageX +  "px"}).show();
	event.preventDefault();
	$("#ContextMenu3").hide();
	$("#ContextMenu2").hide();
});
$(document).bind("click", function(){
	$("#ContextMenu1").hide();
});
// portion 2 --- responsive sidebar
$(".sidenav li:gt(0)").bind("contextmenu", function(event){
	$("#ContextMenu2").css({"top": event.pageY +  "px", "left": event.pageX +  "px"}).show();
	event.preventDefault();
	$("#ContextMenu3").hide();
	$("#ContextMenu1").hide();
});
$(document).bind("click", function(){
	$("#ContextMenu2").hide();
});
// portion 3 --- checked li's
$(".Checked li").bind("contextmenu", function(event){
	$("#ContextMenu3").css({"top": event.pageY +  "px", "left": event.pageX +  "px"}).show();
	event.preventDefault();
	$("#ContextMenu2").hide();
	$("#ContextMenu1").hide();
});
$(document).bind("click", function(){
	$("#ContextMenu3").hide();
});
// **************************
$(".Checked li,.UnChecked li, .deleted").bind("contextmenu", function(event){
	var x = $(this);
	$("#confirmDelete").click(function(){
		$(x).fadeOut(3000);
	});
});
$(".fa-star").click(function(){
	$(this).toggleClass("far fas");
});
// ************ DATE PICKER **************
$("#dateOnIcon").dateDropper();
$('.fa-calendar').click(function(){
	$('#dateOnIcon').trigger('focus');
});

