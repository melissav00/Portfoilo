var main =  function(){
}


$(document).ready(main);

	$(".navbara,footer a[href='#myPage']").on('click',function(event){
		
		//hash value overrides default behavior
		if (this.hash !== "") {
			
		event.preventDefault();
		
		var hash = this.hash;
		
		$('html, body').animate({
			scrollTop:$(hash).offset().top
		}, 900, function(){
			
			window.location.hash = hash;
		});
	} //End if
	});
})