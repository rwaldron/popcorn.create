var mediaList = [
      "assets/snowdriving.ogv",
      "assets/eich.ogv",
      "assets/crockford.ogv"
    ];

module("API");
test("Popcorn.create", function() {
  
  expect(2);
  
  ok( Popcorn.create, "Popcorn.create exists" );
  
  equal( typeof Popcorn.create, "function", "Popcorn.create() is a function" );
  
});


test("create( options )", function() {

  var expects = 2, 
      count = 0;

  expect(expects);
  
  function plus() { 
    
    if ( ++count === expects ) {
      start(); 
    }
  }  
  
  stop();
  
  Popcorn.create({
  
    src: "assets/snowdriving.ogv",
    controls: true
  
  }).listen( "loadedmetadata", function() {
    
    ok( true, "loadedmetadata fired on hidden video element" );
    plus();
    
    this.appendTo( "#unmoved-fixture" );
    
    
    equal( document.getElementById( "unmoved-fixture" ).childNodes.length, 1, "#unmoved-fixture as 1 childNode" );
    plus();
  
  });

});
