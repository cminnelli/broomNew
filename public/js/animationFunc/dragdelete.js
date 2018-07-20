
jQuery(document).ready(function($) {

var items = {
	portfolio: $(".portfolio-item")
}

var count = {
	zind:0,
}



items.portfolio

	.bind("click" , function(e){

		var ix = $(this).index();
		items.portfolio.eq(ix).remove()
		items.portfolio.eq(ix-1).css({
			backgroundColor: 'blue',
			transition: '3s'
		});
	})

	// .bind("dragover" , function(e){
	// 	var position = e.pageX;
	// 	console.log(position)

	// 	$(this).css({
	// 		left: position + 'px',
	// 		opacity: '0.1',
	// 		backgroundColor:"grey",
	// 	});
		
	// })

});