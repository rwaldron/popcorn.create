# popcorn.create.js


  Popcorn.create({
  
    src: "assets/snowdriving.ogv",
    controls: true
  
  }).listen( "loadedmetadata", function() {
    
		//	`this` is the Popcorn object returned by the video
    
    
    this.appendTo( selector );
    
    
  });	

