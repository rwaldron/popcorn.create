# popcorn.create.js

Rough Draft; r1

    Popcorn.create({

      src: "assets/snowdriving.ogv",
      controls: true

    }).listen( "loadedmetadata", function() {

      //	`this` is the Popcorn object returned by the video


      this.appendTo( selector );


    });	

		
    // If a `player` property is set, that player will be used 
    // to create the new popcorn object
		
    var $vimeo = Popcorn.create({

      // Specify which player to use
      player: "vimeo",

      // args to Popcorn.vimeo()    
      placeholder: "vimeo-fixture", 
      src: "http://vimeo.com/22444635",
      setup: {
        // player settings here
        // TODO: this is currently untested
      }

    }).listen( "loadedmetadata", function() {
				
      // note: Popcorn 0.5 youtube player currently does not 
      // support the "loadedmetadata" event

    });
		
    // returns popcorn-ified vimeo player object
    $vimeo;



TODO: 

- Comment/Annotate

- More ref tests

- Better DOM manipulation
