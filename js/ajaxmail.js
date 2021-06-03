$(document).ready(function(){
	$('#contactForm').submit(function(event){
		event.preventDefault();
    $("#resultados").html('Enviando...')
		$.ajax({
			type: 'POST',
			url: 'https://email.creawww.es',
			data: $(this).serialize(),
			success: function(data){
				if (data.status == "OK"){
					document.getElementById('contactForm').reset();
				}
				$("#resultados").html(data.response)
			},
			error: function(data){
				$("#resultados").html(data.response)
			}
			})
		})
});
