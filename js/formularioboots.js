var expEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
var expNumero = /^[0-9]{9}/
var expPw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,25}/

$(document).ready(function(){
  $("#btnEnviar").click(function(){
    var usuario = $("#txtUsuario").val();
    var nombre = $("#txtNombre").val();
    var contraseña = $("#txtContraseña").val();
    var rcontraseña = $("#txtRcontraseña").val();

    if(usuario == ""){
      $("#mensaje1").fadeIn();
      return false;
    }else{
        $("#mensaje1").fadeOut();
        if(nombre == "" ){
          $("#mensaje2").fadeIn();
          return false;
        }else{
          $("#mensaje2").fadeOut();
          if(contraseña == "" || !expPw.test(contraseña)){
            $("#mensaje3").fadeIn();
            return false;
          }else{
            $("#mensaje3").fadeOut();
            if(rcontraseña == "" || rcontraseña !== contraseña){
              $("#mensaje4").fadeIn();
              return false;
            }
          }
        }
    }

  });
});