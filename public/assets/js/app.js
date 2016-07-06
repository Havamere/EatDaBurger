$(document).on('ready'){
	$('#submit').on('click', function(){
		$.get('/newBurger', function(data){
			for (var i=0; i<data.length; i++){
				if (data[i].devoured == 0){
					$('#to-eat').append( "<li>"+"<p>"+data[i].id+". "+data[i].burger_name+"</p>"+"<button type='submit' id='devour' onclick='eatME("+data[i].id+")'>Devour It!</button>"+"</li>");
				}
			}
		})
	});

	function eatME(val){
		$.post('/')
	};
}