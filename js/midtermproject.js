$(function(){
	//cycle through background Images
	var imageCycle = ["imageCycle1", "imageCycle2"/*, "imageCycle3"*/];
	var randomNumber = Math.floor(Math.random()*imageCycle.length);
	$(".landingPageSection").addClass(imageCycle[randomNumber]);


	// $(".signInButton").on("click", function(){
	// 	$(this).toggleClass("toggleSignInBorderRadius");
	// 	$(".signInForm").toggle();
	// })
	
	//scroll to navbar name tage on page
	$(document).on("click", ".navbar-brand", function(){
		$('body').animatescroll();
	})
	$(document).on("click", "#tourists", function(){
		$('#touristInfo').animatescroll();
	})
	$(document).on("click", "#tourGuides", function(){
		$('#tourGuideInfo').animatescroll();
	})
	$(document).on("click", "#contactUs", function(){
		$('#contactInfo').animatescroll();
	})
	//scroll to #touristInfo on Explore GiraNaut click
	$(document).on("click", "#explore", function(){
		$('#touristInfo').animatescroll();
	})

	//adds class active to menu bar to highlight the location you're at on the page
	// $(".navGuide").mouseenter(function(){
	// 	// $(".navGuide").removeClass("active");
	// 	$(this).addClass("active");},
	// 	function(){
	// 	$(this).removeClass("active");
	// 	}
	// 	);

	$(window).on("scroll", function(){
		var windowLocation = $(this).scrollTop();
		var navbarHeight = $(".navbar-inverse").height();
		var sectionTourists = $("#touristInfo").offset().top;
		var sectionTourGuides = $("#tourGuideInfo").offset().top;
		var sectionContactUs = $("#contactInfo").offset().top;
		if(windowLocation < (sectionTourists - navbarHeight)){
			$(".navGuide").removeClass("active");
		}
		else if(windowLocation >= (sectionTourists - navbarHeight) && windowLocation < (sectionTourGuides - navbarHeight)){
			$(".navGuide").removeClass("active");
			$("#tourists").addClass("active");
		}
		else if(windowLocation >= (sectionTourGuides - navbarHeight) && windowLocation < (sectionContactUs - navbarHeight)){
			$(".navGuide").removeClass("active");
			$("#tourGuides").addClass("active");
		}
		else{
			$(".navGuide").removeClass("active");
			$("#contactUs").addClass("active");
		}
	})


	//regex checks for signup validation
	$("#submitSignIn").on("click", function(e){
		e.preventDefault();	
		var email = $("#emailSignIn").val();
		var password = $("#passwordSignIn").val();
		var mailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z\s]{2,4}$/;
		var passwordformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/;
		if (mailformat.test(email) === false) 
		{
			alert("Not a valid e-mail address");
			return false;	
		}
		if (passwordformat.test(password) === false)
		{
			alert("Password must contain at least one Uppercase letter, one Lowercase letter, and one Number");
			return false;
		}
		window.location.href = "gmapsLandingPage.html";
	});

	//clear sign-in fields if "remember me" isn't checked
	$(document).on("click", function(){
		if($("#emailSignIn").css("display")!=="none" && $(".checkbox").is(":checked") === false){
			$(".dropdown form input").val("");
		}
	})


	//hover over social media for image effect
	$(".socialMediaImageTwitter").hover(function(){
		$(this).attr("src", "css/img/twitterhover.png");
	}, function(){
		$(this).attr("src", "css/img/twitter.png");
	});

	$(".socialMediaImageFacebook").hover(function(){
		$(this).attr("src", "css/img/facebookhover.png");
	}, function(){
		$(this).attr("src", "css/img/facebook.png");
	});

	$(".socialMediaImagePinterest").hover(function(){
		$(this).attr("src", "css/img/pinteresthover.png");
	}, function(){
		$(this).attr("src", "css/img/pinterest.png");
	});

	$(".socialMediaImageGooglePlus").hover(function(){
		$(this).attr("src", "css/img/googleplushover.png");
	}, function(){
		$(this).attr("src", "css/img/googleplus.png");
	});

	$(".socialMediaImageTwitter").on("click", function(){
		$(this).attr("src", "css/img/twitteractive.png");
	});

	$(".socialMediaImageFacebook").on("click", function(){
		$(this).attr("src", "css/img/facebookactive.png");
	});

	$(".socialMediaImagePinterest").on("click", function(){
		$(this).attr("src", "css/img/pinterestactive.png");
	});

	$(".socialMediaImageGooglePlus").on("click", function(){
		$(this).attr("src", "css/img/googleplusactive.png");
	});

	






})