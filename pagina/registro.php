<?php
    include('db.php');
    $con=conectar();

    $id_usuario=$_POST['id_usuario'];
    $nombre=$_POST['nombre_usuario'];
    $apellido=$_POST['apellido_usuario'];
    $fecha_nac=$_POST['fecha_nac_usuario'];
    $email=$_POST['correo_usuario'];
    $password=hash('sha512',$_POST['password_usuario']);
    $cofemail_usuario=$_POST['cofcorreo_usuario'];
    $confpass_usuario=hash('sha512',$_POST['confpass_usuario']);
    
    if($email!=$cofemail_usuario){
        
        echo'
            <script>
            alert("los correos no coinciden, por favor intentelo nuevamente"); 
            window.location = "index.php";
            </script>
            ';
            exit();
    }else{

        if($password!=$confpass_usuario){
            echo'
            <script>
            alert("las contraseñas no coinciden"); 
            window.location = "index.php";
            </script>
           
            ';
            exit();
        }
    }


    $sql="INSERT INTO usuarios(id_usuario,nombre,apellido,fecha_nac,correo,contraseña)
     VALUES('$id_usuario','$nombre','$apellido','$fecha_nac','$email','$password')";
     //verificar qwue la identificacion no se encuentre en la base de datos
     $verificar_id = mysqli_query($con,"SELECT * FROM usuarios WHERE id_usuario='$id_usuario'");

     if(mysqli_num_rows($verificar_id)>0){
        
        echo'
        <script>
            window.location = "index.php";   
            alert("ya existe un usuario con esta identificacion, por favor intenta con otra identificación"); 
        </script>';
       exit();
     }
     $ejecutar = mysqli_query($con,$sql);

    if($ejecutar){
        cargarpagina();
        
    }else{
        echo'
        <script>
            alert("registro no realizado, por favor intentelo otra vez!!!");
            window.location = "index.php";
        </script>
        ';
    }
    mysqli_close($con);
 ?>