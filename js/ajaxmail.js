$(document).ready(function(){
	$('#contactForm').submit(function(event){
		event.preventDefault();
    $("#resultados").html('Enviando...')

		$.ajax({
			type: 'POST',
			url: 'https://email.creawww.es',
			data: $(this).serialize(),
			success: function(data){
        var obj = jQuery.parseJSON( data );
        if (obj.status == "OK"){
          document.getElementById('contactForm').reset();
        }
		console.log(obj.response)
		console.log(obj.status)
        $("#resultados").html(obj.response)
			},
			error: function(data){
        $("#resultados").html(data)
			}
		})
	})
});
