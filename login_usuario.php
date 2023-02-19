<?php
include('db.php');
$con=conectar();

$id_login = $_POST['id_login'];
$passw_login=hash('sha512',$_POST['passw_login']);

$validar_login=mysqli_query($con,"SELECT * FROM usuarios WHERE id_usuario='$id_login' and contraseña='$passw_login'");

if(mysqli_num_rows($validar_login) > 0){
     echo'
          <script>
               window.location="index.html";
               alert("bienbenido jose");
              
          </script>
     '
     ;
     
}else{
     echo'
     <script>
          alert("no puedes ingresr, revisa tu identificación o contraseña ");
          window.location="index.html";
     </script>
'
;
}
?>