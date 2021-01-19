
function validaNombre(nombre){
    let mensajeDeError = "¡Hola! "; 
    if(nombre.length===0){
        return mensajeDeError+='Este campo debe tener almenos un caracter.'
    }else if(nombre.length>30){
        return mensajeDeError+='Este campo acepta un máximo de 30 caracteres'
    }
    return false;
    

}

function validarEmail(mail){
    let mensajeDeError = "¡Hola! "; 
    const RegExpMail = /.@./;
    if(mail.length===0){
        return  mensajeDeError+='Este campo no puede estar vacio';
    }
    if(!RegExpMail.test(mail)){
        return mensajeDeError+='Por favor ingrese un mail valido';
    } 
    return false;
  
    
}

function validarMensaje(mensaje){
    let mensajeDeError = "¡Hola! "; 
    if(mensaje.length===0){
        return mensajeDeError+='Este campo debe tener almenos un caracter.'
    }else if(mensaje.length>500){
        return mensajeDeError+='Este campo acepta un máximo de 300 caracteres'
    }
    return false;
    
}


const formulario = document.querySelector('[class=form]');

    
    


formulario.addEventListener('submit',e=>{
    //e.preventDefault();
    document.querySelector('.warnings').innerHTML="";
    document.querySelector('.nombre').style.backgroundColor='#FFFFFF';
    document.querySelector('.mail').style.backgroundColor='#FFFFFF';
    document.querySelector('.mensaje').style.backgroundColor='#FFFFFF';
    const nombre = document.querySelector('.nombre').value;
    const mail = document.querySelector('.mail').value;
    const mensaje = document.querySelector('.mensaje').value;
    const advertencia = document.querySelector('.warnings');
    let dato1 = validaNombre(nombre);
    let dato2 = validarEmail(mail);
    let dato3 = validarMensaje(mensaje);
    if(dato1){
        document.querySelector('.warnings').innerHTML=dato1;
        document.querySelector('.nombre').style.backgroundColor='#FF7B7B';
        e.preventDefault();
    }
    

    if(dato2){
        document.querySelector('.warnings').innerHTML=dato2;
        document.querySelector('.mail').style.backgroundColor='#FF7B7B';
        e.preventDefault();
    }
    

    if(dato3){
        document.querySelector('.warnings').innerHTML=dato3;
        document.querySelector('.mensaje').style.backgroundColor='#FF7B7B';
        e.preventDefault();
    }
    
    if(!dato1 && !dato2 && !dato3){
        document.querySelector('.warnings').innerHTML="¡gracias!Se ha enviado exitosamente";
        document.querySelector('.mensajeEnvioFormulario').style.display='flex';
        e.preventDefault();
        document.querySelector('.subir').src='#home';
       
    }

    

  
    console.log('escuchando');
    }
    )
    
    const BtnCerrarAviso = document.querySelector('.cerrarAviso');

    BtnCerrarAviso.onclick=function(){
        
        document.querySelector('.mensajeEnvioFormulario').style.display='none';
    }







