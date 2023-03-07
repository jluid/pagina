<?php
include('db.php');
$con=conectar();

$id_login = $_POST['id_login'];
$passw_login=hash('sha512',$_POST['passw_login']);

$validar_login=mysqli_query($con,"SELECT * FROM usuarios WHERE id_usuario='$id_login' and contraseña='$passw_login'");
$nombre_usuario= "SELECT nombre FROM `usuarios` WHERE WHERE id_usuario='$id_login' and contraseña='$passw_login'";
if(mysqli_num_rows($validar_login) > 0){
    
     usuario_registrado($nombre_usuario);
     
}else{
  

     echo'
     <script>
          
          alert("usuario o contraseña invalido");
          window.location="index.php";
         
     </script>
'
;
}
?>