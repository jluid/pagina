<?php
include('db.php');
$con=conectar();
$id_login = $_POST['id_login'];
$passw_login=hash('sha512',$_POST['passw_login']);

$validar_login=mysqli_query($con,"SELECT * FROM usuarios WHERE id_usuario='$id_login' and contraseña='$passw_login'");
$nombre_usuario= "SELECT nombre FROM `usuarios` WHERE WHERE id_usuario='$id_login' and contraseña='$passw_login'";

// Consulta SQL
$sql = "SELECT * FROM usuarios WHERE id_usuario='$id_login'";

// Ejecutar la consulta y almacenar el resultado en una variable
$resultado = mysqli_query($con, $sql);

// Verificar si la consulta fue exitosa
if ($resultado) {
  // Recuperar la fila de resultados como un arreglo asociativo
  $fila = mysqli_fetch_assoc($resultado);

  // Almacenar el valor de la columna en una variable
  $id = $fila["nombre"];
}
if(mysqli_num_rows($validar_login) > 0){

     header("Location: index.php?id=" . $id);

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
 295  
