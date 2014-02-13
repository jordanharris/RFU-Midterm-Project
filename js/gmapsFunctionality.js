$(function(){
	var obj;
	var guideChat = $('#guideChatMessenger').html();
	var chatTemplate = Handlebars.compile(guideChat);
	

	$(document).on("click", ".guideChatButton" ,function(){
		// $(jordan).clone().appendTo("body");
		if($(".jordan").length < 6){
		var obj = {"name": $(this).closest(".guideInnerCard").find("h2").text(),
					"image": $(this).closest(".guideInnerCard").find("img").attr("src")}
		$("#chatMessenger").css("display", "block");
		var chatWrapDiv = $("<div class='jordan'></div>");
		$("#chatMessenger").append(chatWrapDiv);
		chatWrapDiv.html(chatTemplate(obj));
		// $(".jordan").html(chatTemplate(obj)).appendTo("#chatMessenger");
		}
	})

	$(document).on("click", ".panel-heading" ,function(){
			if($(this).next().css("display")==="none"){
				$(this).next().css("display","block");
				$(this).next().next().css("display","block");
			}
			else{
				$(this).next().css("display","none");
				$(this).next().next().css("display","none");
			}
	})

	$(document).on("click", ".chevronButton" ,function(){
			if($(this).closest(".panel-heading").next().css("display")==="none"){
				$(this).closest(".panel-heading").next().css("display","block");
				$(this).closest(".panel-heading").next().next().css("display","block");
			}
			else{
				$(this).closest(".panel-heading").next().css("display","none");
				$(this).closest(".panel-heading").next().next().css("display","none");
			}
	})

	$(document).on("click", ".removeButton" ,function(){	
		$(this).closest(".jordan").remove();
	})



})	


