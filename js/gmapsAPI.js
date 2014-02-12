// $(function(){
	function initialize() {
        var mapOptions = {
        	center: new google.maps.LatLng(40.0076, 254.744),
        	zoom: 12,
        	panControl: false,
        	maxZoom: 12,
        	minZoom: 12,
        	streetViewControl: false,
        	mapTypeControl: false,
        	zoomControl: false,
        	draggable: false,
        };
        //creates the google map api
        var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

        //create ovrelapping markers plug-in that separates markers that are on the same latLng
        var oms = new OverlappingMarkerSpiderfier(map);
        var iw = new google.maps.InfoWindow();
		// oms.addListener('click', function(marker, event) {
		// 	iw.setContent(marker.desc);
		// 	iw.open(map, marker);
		// });
		// oms.addListener('spiderfy', function(markers) {
		// 	iw.close();
		// });

		//creates info window for each marker
		// var infowindow = new google.maps.InfoWindow({
  //     		content: "hey all!"
  // 		});

        //Create static markers on the map when map loads
        //creates variable of marker images to be used when the marker is placed
        var markerImages = [
        	{image: $("#jencon").attr("src")},
        	{image: $("#limacon").attr("src")},
        	{image: $("#rosiecon").attr("src")},
        	{image: $("#arleniscon").attr("src")},
        	{image: $("#jarahcon").attr("src")}
        ];

        //list of cities and their LatLng positions that giranaut has launched in
  		var markerLatLng = [
        {locate: new google.maps.LatLng(40.71, 285.994)},
        {locate: new google.maps.LatLng(40.0076, 254.744)},
        {locate: new google.maps.LatLng(41.8519, 272.344)},
        {locate: new google.maps.LatLng(36.09, 244.794)}
        ];

        //generate fake Data from Faker.js to fill out sidebar
        var fakeGuides = [];

   
		for (var i = 0; i < 20; i++) {
			fakeGuides.push(Faker.Helpers.createCard());
		}
		var guideInfo = $('#guideBioCard').html();
		var guideTemplate = Handlebars.compile(guideInfo);
		

        //creates the marker that is to be placed
        function markerCreate(arrImages,arrLatLng ){
        	
        	for(var i=0; i < arrLatLng.length; i++ ){
        		for(var j = 0; j<arrImages.length ; j++){
        			var guideData = fakeGuides[j+(i*arrImages.length)];
			        var marker = new google.maps.Marker({
			            position: arrLatLng[i].locate,
			            map: map,
			            icon: arrImages[j].image,
			            animation: google.maps.Animation.DROP,
			            draggable: true
			        });
			        oms.addMarker(marker);
			        guideData.image = marker.icon;
	        		(function(marker, guideData){
			  			google.maps.event.addListener(marker, 'click', function() {
			  				var chris = guideTemplate(guideData);
			  				// $('#guideBio').text("");
		      				$('#guideBio').html(chris);
			    		});
			    	})(marker, guideData);
			    	
		    	}
		    }
	    }

        //click handler to zoom in on city after button has been clicked
         $(".giranaut-cities li").on("click", function(){
        	if($(this).text()==="Boulder"){
        		map.setCenter(markerLatLng[1].locate);
				map.setZoom(12);
			}
			else if($(this).text()==="NYC"){
				map.setCenter(markerLatLng[0].locate);
				map.setZoom(12);
			}
			else if($(this).text()==="Chicago"){
				map.setCenter(markerLatLng[2].locate);
				map.setZoom(12);
			}
			else{
				map.setCenter(markerLatLng[3].locate);
				map.setZoom(12);
			}
		})

  //       google.maps.event.addListener(marker, 'click', function() {
		//     infowindow.open(map,marker);
		// });

	    //calls the create marker function and places markers on the map
	    markerCreate(markerImages, markerLatLng);




        //google maps styling of maps object:	
	    var stylers = [
	    	{
	   		"featureType": "transit",
	    	"stylers": [{ 
	    		"visibility": "off" 
	    	}]
	  		},
	  		{
	    	"featureType": "road",
	    	"stylers": [{
	    		"visibility": "simplified" 
	    	}]
	  		},
	  		{
	    	"featureType": "landscape",
	    	"elementType": "labels",
	    	"stylers": [{
	    		"visibility": "off" 
	    	}]
	  		},
	  		{
	  		"featureType": "landscape.natural.terrain",
	  		"elementType": "geometry",
	  		"stylers": [{
	  			"visibility": "on" 
	  		}]
	  		},
	  		{
	    	"featureType": "poi",
	    	"stylers": [{
	    		"visibility": "off" 
	    	}]
	  		},
	  		{
	    	"featureType": "water",
	    	"stylers": [{
	    		"visibility": "simplified" 
	    	}]
			},
			{
	    	"featureType": "road",
	    	"elementType": "labels",
	    	"stylers": [{
	    		"visibility": "off" 
	    	}]
	  		},
	  		{
	    	"featureType": "administrative.land_parcel",
	    	"stylers": [{
	    		"visibility": "off" 
	    	}]
	  		},
	  		{
	    	"featureType": "administrative.neighborhood",
	    	"stylers": [{
	    		"visibility": "off" 
	    	}]
	  		},
	  		{
	    	"featureType": "administrative.province",
	    	"stylers": [{
	    		"visibility": "off" 
	    	}]
	  		},
	  		{
	    	"featureType": "administrative",
	    	"elementType": "geometry",
	    	"stylers": [{
	    		"visibility": "off" 
	    	}]
	  		},
	  		{
	    	"featureType": "water",
	    	"elementType": "geometry",
	    	"stylers": [{
	    		"color": "#99f4ff" 
	    	}]
	  		},
	  		{
	    	"featureType": "landscape",
	    	"stylers": [{
	    		"color": "#31a745" 
	    	}]
	  		},
	  		{
	    	"elementType": "labels",
	    	"stylers": [{
	    		"weight": 0.5 
	    	},
	      	{
	      		"color": "#0000ff" 
	      	}]
	  		}
		]
		//calls setOptions and makes map styles to styles listed above:
		map.setOptions({styles: stylers});




	







	}
    google.maps.event.addDomListener(window, 'load', initialize);
// })