$(function(){ $(document).foundation(); });


function ready() {
  var $container = $('#masonry-container');
  $container.imagesLoaded(function(){
  	$container.masonry({
	    itemSelector: '.box',
	    columnWidth: 100,
	    gutterWidth: 40
	  });

  });
	 
 }

 $(document).ready(ready)
 $(document).on('page:load', ready)