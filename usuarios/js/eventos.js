var inicioUsuarios = function()
{
	var validaUsuario = function()
	{
		//Extraer los datos de los input en el HTML
		var usuario = $("txtUsuario").val();
		var clave 	= $("txtClave").val();
		//Preparar los parametros para AJAX
		var parametros = "opcion=valida"+
						 "&usuario="+usuario+
						 "&clave="+clave+
						 "&id="+Math.random();
		//Validamos que no esten vacios
		if (usuario!="" && clave!="") 
		{
			//Hacemos la peticion remota
		$.ajax({
			cache:false,
			type:"POST",
			dataType:"json",
			url:"php/utilerias.php",
			data:parametros,
			success: function(response){
				//Si todo sale bien
				if (response.respuesta == true) 
				{
						$("#entradaUsuario").hide();
						$("nav").show();
				}
					else
					{
						alert("Datos incorrectos :(");
					}
		},
			error: function(xhr,ajaxOptions,thrownError){
				//Si todo sale mal
				}
			});

		}
		else
		{
			alert("Usuario y Clave son obligatorios");
		}
	}
	$("#btnValidaUsuario").on("click", validaUsuario);
	var teclaClave = function(tecla)
	{
		if (tecla.which == 13) //Tecla enter 
		{
			validaUsuario(); //Funcion que valida usuario
		}
	}
	//Keypress: se ejecuta cada vez que presiono una 
	//tecla sobre el input
	$("txtClave").on("keypress",teclaClave);
}

//Evento Inicial
$(document).on("ready",inicioUsuarios);