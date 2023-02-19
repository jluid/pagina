<?php
function conectar() {
$hostname = 'localhost';
$usuariodb = 'root';
$passworddb ='';
$dbname = 'zapateriadb';

    $conectar = mysqli_connect($hostname,$usuariodb,$passworddb,$dbname);
    return $conectar;
}

?>