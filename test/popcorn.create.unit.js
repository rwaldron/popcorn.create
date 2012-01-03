var mediaList = [
			"assets/snowdriving.ogv",
			"assets/eich.ogv",
			"assets/crockford.ogv"
		];

function clear(id) {
	document.getElementById(id).innerHTML = "";
}


module("API");
test("Popcorn.create", function() {

	expect(2);

	ok( Popcorn.create, "Popcorn.create exists" );

	equal( typeof Popcorn.create, "function", "Popcorn.create() is a function" );

});

test("Popcorn.prototype.appendTo()", function() {

	var expects = 3,
			count = 0;

	expect(expects);

	function plus() {

		if ( ++count === expects ) {
			start();
			clear("unmoved-fixture");
		}
	}

	stop();

	ok( Popcorn.prototype.appendTo, "Popcorn.prototype.appendTo is defined" );
	plus();

	equal( typeof Popcorn.prototype.appendTo, "function", "Popcorn.prototype.appendTo is a function" );
	plus();

	Popcorn.create({

		src: "assets/snowdriving.ogv"

	}).listen( "loadedmetadata", function() {

		ok( this.appendTo, "`this` popcorn object has inherited `appendTo`" );
		plus();

	});

});


module("Usage");
test("create( options, no placeholder )", function() {

	var expects = 2,
			count = 0;

	expect(expects);

	function plus() {

		if ( ++count === expects ) {
			start();

			clear("unmoved-fixture");
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

test("create( options, w/ placeholder string )", function() {

	var expects = 2,
			count = 0;

	expect(expects);

	function plus() {

		if ( ++count === expects ) {
			start();
			clear("unmoved-fixture");
		}
	}

	stop();

	Popcorn.create({

		src: "assets/snowdriving.ogv",
		placeholder: "unmoved-fixture",
		controls: true

	}).listen( "loadedmetadata", function() {

		ok( true, "loadedmetadata fired on visible video element" );
		plus();

		equal( document.getElementById( "unmoved-fixture" ).childNodes.length, 1, "#unmoved-fixture as 1 childNode" );
		plus();

	});

});


test("create( options, w/ placeholder selector )", function() {

	var expects = 2,
			count = 0;

	expect(expects);

	function plus() {

		if ( ++count === expects ) {
			start();
			clear("unmoved-fixture");
		}
	}

	stop();

	Popcorn.create({

		src: "assets/snowdriving.ogv",
		placeholder: "#unmoved-fixture",
		controls: true

	}).listen( "loadedmetadata", function() {

		ok( true, "loadedmetadata fired on visible video element" );
		plus();

		equal( document.getElementById( "unmoved-fixture" ).childNodes.length, 1, "#unmoved-fixture as 1 childNode" );
		plus();

	});

});


// test("create( with specified player )", function() {
//
// 	var expects = 2,
// 			count = 0;
//
// 	expect(expects);
//
// 	function plus() {
//
// 		if ( ++count === expects ) {
// 			start();
// 		}
// 	}
//
// 	stop();
//
// 	Popcorn.create({
//
// 		player: "vimeo",
//
// 		// args to Popcorn.vimeo()
// 		placeholder: "vimeo-fixture",
// 		src: "http://vimeo.com/22444635",
// 		setup: {
// 			// player settings here
// 			// TODO: this is currently untested
// 		}
//
// 	}).listen( "loadedmetadata", function() {
//
// 		ok( true, "loadedmetadata fired on vimeo element" );
// 		plus();
//
// 		equal( document.getElementById( "vimeo-fixture" ).nodeName, "OBJECT", "#vimeo-fixture was converted into an &lt;object&gt; element" );
// 		plus();
// 	});
//
// });
