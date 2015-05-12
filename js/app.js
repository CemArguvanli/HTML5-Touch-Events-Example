$(document).ready(function() {
	/*$('.touchable').on('mousedown', function() {
		$(this).css('background', 'blue');
	});

	$('.touchable').on('mouseup', function() {
		$(this).css('background', 'black');
	});	*/

	$('.touchable').on('touchstart', function() {
		$(this).css('background', 'antiquewhite');
	});		

	$('.touchable').on('touchend', function() {
		$(this).css('background', 'brown');
	});

	$(document).on("mousemove", function(event){
		$('#log').text('e.pageX: ' + event.pageX + ', e.pageY: ' +event.pageY);
	})

	$('.touchable').on('touchmove', function (e) {
		e.preventDefault();

		var xbox = $(this).width() / 2;
		var ybox = $(this).height() / 2;

		var touch = e.originalEvent.targetTouches[0];
		var x = touch.pageX - xbox + "px";
		var y = touch.pageY - ybox + "px"

		$(this).css('left', x);
		$(this).css('top', y);
	});	

});