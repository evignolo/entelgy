"use strict";

$.ajax(
    {
        url: 'http://restcountries.eu/rest/v2/lang/es',
        dataType: "JSON",
        method: "GET"
    })
    .done(function (data)
    {

	var html = '';
	for (var i = 0; i < 12; i++) {
		html+='<tr>';
		html+='<td>'+(i+1)+'</td>';
		html+='<td><a href="#" class="td-pais" data-name="'+data[i].name+'" data-continente="'+data[i].subregion+'">'+data[i].name+'</a></td>';
		html+='<td>'+data[i].capital+'</td>';
		html+='<td>'+data[i].population+'</td>';
		html+='</tr>';
	}
    $('.table-paises').append(html);
});

$(document).on('click', '.td-pais', function (e) {
    e.preventDefault();
    var pais = $(this).attr('data-name');
    var continente = $(this).attr('data-continente');
    
    $('.modal-pais').text(pais);
    $('.modal-continente').text(continente);

    if(continente == 'South America'){ //imagen de contiente
        $('.img-continente').attr('src', 'img/continente/southamerica.jpg');    
    }else if(continente == 'Central America'){
        $('.img-continente').attr('src', 'img/continente/centralamerica.jpg');    
    }else if(continente == 'Caribbean'){
        $('.img-continente').attr('src', 'img/continente/caribbean.jpg');    
    }else if(continente == 'Middle Africa'){
        $('.img-continente').attr('src', 'img/continente/middleafrica.jpg');    
    }else{
        $('.img-continente').attr('src', '');
    }
    
    $(".overlay").addClass("active");
    $(".popup").addClass("active");

});

$(document).on('click', '.btn-cerrar-popup', function (e) {
    e.preventDefault();
    $(".overlay").removeClass("active");
    $(".popup").removeClass("active");

});

