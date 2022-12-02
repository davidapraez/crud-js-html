const calcularedad=()=>{
    var mensaje="";
    const edad=document.getElementById('id_edad').value;
        if(edad>=18){
            mensaje="mayor de edad";
        }else{
            mensaje="menor de edad";
        }
        document.getElementById('mensajes').innerHTML=mensaje;
    }
