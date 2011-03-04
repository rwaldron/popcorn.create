//  Requires Popcorn.js
(function( global, Popcorn ) {
  
  var doc = global.document;

  Popcorn.create = function( options ) {
    return new Popcorn.create.init( options );
  };
 
  Popcorn.create.init = function( options ) {
    
    var video = doc.createElement( "video" ), 
        guid = Popcorn.guid( "__popcorn" );
    
    
    options.id = options.id || guid;
    
    Popcorn.extend( video, options );
    
    video.style.display = "none";
    
    doc.body.appendChild( video );
    
    return Popcorn( "#" + options.id );

  };
  
  //  Popcorn.create() returns a popcorn object
  
  Popcorn.extend( Popcorn.p, {
    appendTo: function( parent ) {
      
      var matches = doc.querySelectorAll( parent ), 
          orig = doc.getElementById( this.video.id ), 
          clone = this.video.cloneNode( true );
      
      if ( matches.length ) {
        
        matches[ 0 ].appendChild( clone );
        
        this.video = clone;
        
        this.video.style.display = "";
        
        orig.parentNode.removeChild( orig );
      }
    }
  });

})( this, Popcorn );