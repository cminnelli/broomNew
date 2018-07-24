
jQuery(document).ready(function($) {

var items = {
	portfolio: $(".image")
}

var functions = {
	showImages:function(n){
		var n =  items.portfolio.length;
		var cont= 0;
		var slide = 150 
		setInterval(function(){
			items.portfolio
				.css({
					transform: 'translateX(-'+ slide +'px)',
					opacity:"0.1"
				});

			items.portfolio.eq(cont)
				.css({
					//opacity: '0.95',
					});


			items.portfolio.eq(cont -1)
				.css({
					opacty: '0.1',
				});

			items.portfolio.eq(cont +1)
				.css({
					opacty: '0.1',
				});

		cont +=1	
		slide+=150

		},1500)

	}
}

functions.showImages(33)



});