var image = new Array ();
image[0] = "derp/dedvris.png";
image[1] = "http://placehold.it/30";
image[2] = "http://placehold.it/40";
image[3] = "http://placehold.it/50";
var size = image.length
var x = Math.floor(size*Math.random())

$('#random').attr('src',image[x]);
