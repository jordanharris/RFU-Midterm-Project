
	var chatMessenger = $("<div class='message'></div");
	var create = $("<h4>"+$(this).closest(".guideInnerCard").find("h2").text()+"</h4>");	
	$(document).on("click", ".guideChatButton", function(){
		var cloningMessage = create.clone();
		$(".chatMessenger").append(chatMessenger).;
		
		console.log(create);
	})
	


