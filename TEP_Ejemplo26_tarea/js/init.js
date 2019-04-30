$.when($.ready).then(function () {


    $('input[name="password"]').on('change', function () {
        var pass = $(this).val();
        $(this).prev('label').find('span.rojo').remove();
        if ((pass.length > 8) && (pass.match(/[a-z]/)) && (pass.match(/[A-Z]/)) && (pass.match(/\d/)) && (pass.match(/[~!¡@#$%^&*()+={}|;:'",.<>\/¿?\\-]/)) && (!pass.match(/\s+/g))) {
            $(this).removeClass('rojo').addClass('verde');
            $(this).prev('label').find('span.rojo').remove();
            $(this).prev('label').append('<span class="verde">Todo en orden.</span>');
        }
        if (pass.length < 8) {
            $(this).removeClass('verde').addClass('rojo');
            $(this).prev('label').append('<span class="rojo">Más de 8 carácteres</span>');
        }
        if (!pass.match(/[a-z]/)) {
            $(this).removeClass('verde').addClass('rojo');
            $(this).prev('label').append('<span class="rojo">Falta carácter en minúscula</span>');
        }
        if (!pass.match(/[A-Z]/)) {
            $(this).removeClass('verde').addClass('rojo');
            $(this).prev('label').append('<span class="rojo">Falta carácter en mayúscula</span>');
        }
        if (!pass.match(/\d/)) {
            $(this).removeClass('verde').addClass('rojo');
            $(this).prev('label').append('<span class="rojo">Falta un número</span>');
        }
        if (!pass.match(/[~!¡@#$%^&*()+={}|;:'",.<>\/¿?\\-]/)) {
            $(this).removeClass('verde').addClass('rojo');
            $(this).prev('label').append('<span class="rojo">Falta un caracter especial</span>');
        }
        if (pass.match(/\s+/g)) {
            $(this).removeClass('verde').addClass('rojo');
            $(this).prev('label').append('<span class="rojo">No se aceptan espacios</span>');
        }
    });

    $('input[name="repassword"]').keyup(function () {
        var pass = $('input[name="password"]').val();
        var repass = $(this).val();
        $(this).prev('label').find('span.rojo').remove();
        if (pass === repass) {
            $(this).removeClass('rojo').addClass('verde');

        } else {
            $(this).removeClass('verde').addClass('rojo');
            $(this).prev('label').append('<span class="rojo">No están bien </span>');
        }
    });


    //VALIDAR USUARIO

    //Utilice focusout porque esta parte corresponde a la validación de que si el usuario sale
    //del recudro de insertar usuario, sin haber insertado ningún tipo de dato, le marque que es
    //necesario insertar un usuario.
    $('input[name="username"]').focusout(function () {
        if ($(this).val().trim() === '') {
            //removemos las etiquetas que pudiera haber antes. 
            $(this).prev('label').find('span.rojo').remove();
            $(this).prev('label').find('span.verde').remove();
            $(this).removeClass('verde').addClass('rojo'); //se remueve la clase verde al borde y se añade el rojo
            $(this).prev('label').append('<span class="rojo">Inserta un usuario</span>');
        }
    }).keyup(function () {
        var $username = $(this).val();
        $(this).prev('label').find('span.verde').remove();
        $(this).prev('label').find('span.rojo').remove();
        if (($username.trim() === '') || ($username.length == 0)) {
            $(this).removeClass('verde').addClass('rojo');
            $(this).prev('label').append('<span class="rojo">Inserta un usuario válido</span>');
        } else {
            var usernames = ["Tania", "Dani", "Selene", "Avril"];
            var existe = usernames.includes($username);
            if (existe == true) {
                $(this).removeClass('verde').addClass('rojo');
                $(this).prev('label').append('<span class="rojo">Usuario no disponible</span>');
            } else {
                $(this).removeClass('rojo').addClass('verde');
                $(this).prev('label').append('<span class="verde">Usuario disponible</span>');
            }
        }
    });

    $("form").submit(function () {
        var $username = $('input[name="username"]').val();
        var usernames = ["Tania", "Dani", "Selene", "Avril"];
        var existe = usernames.includes($username);
        if (($username.trim() === '') || ($username.length == 0) || (existe == true)) {
            alert("Por favor, introduce un usuario válido");
            return false;
        }   
        var $pass = $('input[name="password"]').val();
        if(($pass.length < 8) || (!$pass.match(/[a-z]/)) || (!$pass.match(/[A-Z]/)) || (!$pass.match(/\d/)) || (!$pass.match(/[~!¡@#$%^&*()+={}|;:'",.<>\/¿?\\-]/)) || ($pass.match(/\s+/g))) {
            alert("Por favor, introduce una contraseña válida");
            return false;
        }
    alert("todo en orden!");
    return true; 
    });
});
//BUSCAR EN LA LISTA SI EXISTE YA UN USUARIO CON EL NOMBRE. SI LO ENCUENTRA, ENTONCES
//DEBE INDICARLE AL USUARIO QUE YA EXISTE
//LA CONTRASEÑA
// DEBE DE TENER POR LO MENOS UNA MAYUSUCLA, UN NUMERO, UNA MINUSCULA Y POR LO MENOS
//UN SIMBOLO. 
//se tiene que validar dos veces los datos, primero una vez cuando estás insertando el campo
//y cuando se envian