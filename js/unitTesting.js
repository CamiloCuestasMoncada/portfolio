
function pruebaValidarNombre(){

    console.assert(validaNombre('') === 'Este campo debe tener almenos un caracter.','La funcion Validar nombre no valido que no se pudiera poner un string vacio');
    
    let almacenaCaracteres = [];
    for(let i= 0; i<32; i++){
        
        almacenaCaracteres.push(i);

    }
    console.assert(validaNombre(almacenaCaracteres)==='Este campo acepta un máximo de 30 caracteres','La funciòn validar nombre no esta validando el uso de mas de 30 caracteres permitidos');
}

//pruebaValidarNombre();

function pruebaValidarMail(){
    console.assert(validarEmail('textoSinArroba')==='Por favor ingrese un mail valido','La función validarMail no esta validando que el usuario ingrese una cadena sin la @');
    console.assert(validarEmail('')==='Este campo no puede estar vacio','La función validarMail no esta validando que el usuario no ingrese un string vacio');
}

//pruebaValidarMail();

function pruebaValidarMensaje(){
    let almacenaCaracteres = [];
    for(let i= 0; i<=500; i++){
        
        almacenaCaracteres.push(i);

    }
    console.assert(validarMensaje(almacenaCaracteres)==='Este campo acepta un máximo de 300 caracteres','La funciòn validarMensaje no esta validando el uso de menos de 500 caracteres permitidos');
}

//pruebaValidarMensaje();
