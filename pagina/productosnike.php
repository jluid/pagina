<?php
  include('db.php');
  $con=conectar();

  $query = "SELECT marca_producto, descripcion_producto, precio,genero,imagen FROM `productos` WHERE marca_producto='nike'";
  $result = mysqli_query($con, $query);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
    rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.4.24/sweetalert2.all.js"></script>
    <link rel="stylesheet" href="css/estilosproductos.css">
    <title>Document</title>
</head>
<body  >
    <div class="menu_principal">
        
        <div class="div_imglogo">
            <button class="btn_logoinicio" id="btn_logoinicio">
                 <img  src="./imagenes/logo2.png" alt="">
            </button>
              
        </div>
        <div class="div_barrabusqueda" >
            <input type="search" placeholder="¿Qué estas buscando?" id="id_barrabuscar">
            <button style="cursor:pointer" id="id_lupa">
                <span class="material-icons" id="btn_busqueda">
                    search
                </span>
            </button>
        </div>
        <!--iconos del menu principal-->
        <div class="div_opciones">
            <div class="div_isesion" id="div_isesion" >
                <span class="material-icons" id="icon_isesion">
                    account_circle
                </span>
                 
                
                 
            </div>     
    
            <div class="div_carritocompras" id="div_carritocompras">
                <span class="material-icons" id="icon_carritocompras">
                    shopping_cart
                </span>
            </div>
            
        </div>
        <div class="alerta_close" id="alerta">
            <h6>Registro Exitoso!</h6>
        </div>
        <!---->
       
    </div>
    <!--SUBMENÚ-->
    <div class="submenu">
        <ul class="lish_categorias"> 
            <li id="cat_hombres"><a href="#" id="s_hombres">Hombres</a></li>
            <li id="cat_mujeres"><a href="#" id="s_mujeres">Mujeres</a></li>
            <li id="cat_niños"><a href="#" id="s_niños">Niños</a></li>
            <li id="cat_niñas"><a href="#" id="s_niñas">Niñas</a></li>
            <li id="cat_marcas"><a href="#" id="s_marcas" >Marcas</a></li>
        </ul>
    </div>
    <!-- LOGIN-->
    <div class="div_login" id="div_login" style="display:none">
        <form action="./login_usuario.php" method="post" id="form_login">
            <div class="div_elogin">
                <img src="./imagenes/logo.jpg" alt="">
                <h1>Inicia sesión</h1>
                    <span class="material-icons" id="iconcerrar_login">
                        close
                    </span>
                <br>
            </div>  
           <label for="id" >Identificación</label>
            <input type="text" id="id" name="id_login" placeholder="Ingrese su identificación">
            <label for="contraseña">contraseña</label>
            <input type="password" id="contraseña" name="passw_login" placeholder="Ingrese su contraseña">
            <button type="submit" >INGRESAR</button>
            
            <pre>
                        O
                ¿No tienes cuenta?
            </pre>
            <p class="label_3" id="lbl_registrate"><u>Registrate</u></p>
        </form>
    </div>
    <!--FORMULARIO REGISTRO-->
    <div class="div_formulario" style="display:none" id="div_formulario">
        <form action="./registro.php" method="post" class="form_registro" >
            <div class="div_encabezadoform">
                <span class="material-icons" id="cerrar_formulario">
                    close
                </span>
                <img src="./imagenes/logo.jpg" alt="">
                <h1>Regístro nuevo</h1> 
            </div>
        
            <label for="id">Identificación</label>
            <input type="tel" id="id" name="id_usuario" max="10" required (en-US) placeholder="Ingresa tu identificación">

            <label for="primer_nombre">Nombre</label>
            <input type="text" id="primer_nombre" name="nombre_usuario" required placeholder="Ingresa tu nombre">
        
            <label for="apellido">Apellido</label>
            <input type="text" id="apellido" name="apellido_usuario" required placeholder="Ingresa tu apellido">
        
        
            <label for="fecha_nac">Fecha nacimiento</label>
            <input type="date" id="fecha_nac" name="fecha_nac_usuario"  required  min="1950-01-01" max="2004-12-31">
        
            <label for="correo">Correo electrónico</label>
            <input type="email" id="correo" name="correo_usuario" required placeholder="Ingresa tu correo">
        
            <label for="conf_correo">Correo electrónico</label>
            <input type="email" id="conf_correo" name="cofcorreo_usuario" placeholder="Vuelve a ingresa tu correo">
        
            <label for="contraseña">Contraseña</label>
            <input type="password" id="contraseña" name="password_usuario" required placeholder="Ingresa tu contraseña">
            
            <label for="contraseña">Contraseña</label>
            <input type="password" id="contraseña" name="confpass_usuario" required placeholder="Vuelve a ingresar tu contraseña">
            
        
            <button type="submit" id="btn_enviarf" >Enviar</button>
            
        </form>
    </div>
    <!--CUERPO-->
    <div class="div_cuerpo" >
        
        <h2>
            <span class="material-icons">
                grade
            </span>
            Nike
        </h2>
          <!--DIV DESTACADOS-->
          <div class="div_destacados">
            <?php foreach ($result as $row) { ?>
                    
                <div class="producto_1">
                    <img src="<?php echo $row['imagen'];?>" alt="">
                    <label class="lbl_marca" for="">Nike</label>
                    <label for=""><?php echo $row['descripcion_producto']; ?></label>
                    <p><?php echo $row['precio'];?></p>
                    <button id="btn_agregarc">agregar al carrito</button>
                </div>
                    
            <?php } ?>
        </div>
      <!--OPCIONES DE COMPRA-->
      <div class="div_mostrarcompra" id="mostrar_compra" style="display: none;" >
        <div class="div_encabezadocompra">
            <div class="div_error">
                <span class="material-icons"  > 
                    error   
                </span>
            </div>
            <div><label>Selecciona tus opciones para agregar el producto al carrito</label></div>
            <div>  
                <span class="material-icons" id="iconcerrar_compra" style="cursor: pointer;" >
                close
                </span>
            </div>
          
        </div>
        <div class="div_descripcioncompra">
            <div class="producto_8.1">
                <img src="./imagenes/producto8.jpg" alt="" style="width: 20%;">
                <label class="lbl_marca" for="">Lacoste</label>
                <br>
                <label for="">zapatos casuales unisex lacoste de lona</label>
                <p>$199,900</p>
            </div>
        </div>
        <div class="div_tallascompra">
            <label>Seleccione una talla  </label>
            <input type="number"  min="38" max="42">
            <label for="Color">Color</label>
            <input type="color" id="" class="radio_color" checked>

        </div>
        <div class="div_btnagregarcar">
            <button id="btn_agregarcarrito">AGREGAR AL CARRITO</button> 
        </div>
    </div>
   
   
    <!-----------------------CATEGORIAS------------------------->
   
       <div class="div_categorias">
        <div class="respmenu" id="div_mhombres">
            <nav>
                <ul class="listadesplegable1" id="listadesplegable1" style="display: none;"> 
                    <li><b><a href="#">Deportivos</a></li></b>
                    <li><b><a href="#">Guayos</a></li></b>
                    <li><b><a href="#">Casuales</a></li></b>
                    <li><b><a href="#">Formales</a></li></b>
                </ul>
            </nav>
        </div>

        <div class="respmenu" id="div_mmujeres">
            <nav>
             
                <ul class="listadesplegable2" id="listadesplegable2" style="display: none;"> 
                    <b><li><a href="#">Deportivos</a></li>
                     <li><a href="#">Tacones</a></li>
                     <li><a href="#">Casuales</a></li>
                     <li><a href="#">Formales</a></li></b> 
                 </ul>
              
            </nav>
        </div>

        <div class="respmenu" id="div_mniños">
            <nav>
             
                <ul class="listadesplegable3" id="listadesplegable3" style="display: none;"> 
                    <b> <li><a href="#">Deportivos</a></li>
                        <li><a href="#">Escolar</a></li>
                        <li><a href="#">Casuales</a></li>
                        <li><a href="#">Formales</a></li> 
                    </b>
                </ul> 
              
            </nav>
        </div>

        
        <div class="respmenu" id="div_mniñas">

            <nav>
                <ul class="listadesplegable4" id="listadesplegable4" style="display: none;"> 
                    <b><li><a href="#">Deportivos</a></li>
                     <li><a href="#">Escolar</a></li>
                     <li><a href="#">Casuales</a></li>
                     <li><a href="#">Formales</a></li></b> 
                 </ul>
              
            </nav>
        </div>

        
        <div class="respmenu" id="div_m">

            <nav>
             
                <ul class="listadesplegable5" id="listadesplegable5" style="display: none;"> 
                    <b><li><a href="productosnike.php" id="id_nike">Nike</a></li>
                       <li><a href="productosadidas.php" id="id_adidas">Adidas</a></li>
                       <li><a href="productospuma.php" id="id_puma" >Puma</a></li>
                       <li><a href="productosnbalance.php " id="id_newbalance">New Balance</a></li>
                       <li><a href="productosrebook.php" id = "id_rebook">Rebook</a></li>
                   </b>   
                </ul>
              
            </nav>
        </div>
    
       </div>
        

    <!--mensaje-->
    <div class="div_msagregarp_close" id="div_msagregarp_close" >
        <div>
           <span class="material-icons" id="icn_cerrarmsagregarp" > 
                check_circle   
            </span>
        </div>
            
        <div>
           <label>Producto agregado con exito</label>
        </div>
        
      <div>
           <span class="material-icons" id="iconcerrar_msg" style="cursor: pointer;" >
                close
           </span>
      </div> 
 
    </div>
    <!--DATOS EMPRESA-->
    <div class="div_datos">
        <label class="lbl_siguenos" for="">SÍGUENOS</label>
        <br>
        <div class="div_redes">
            <button onclick="window.location.href='https://www.facebook.com/'">
                <img src="./imagenes/facebook.png" alt="">
            </button>
            <button onclick="window.location.href='https://www.instagram.com/'">
                <img src="./imagenes/instagram.png" alt="">
            </button>
            <button onclick="window.location.href='https://twitter.com/?lang=es'">
                <img src="./imagenes/twiter.png" alt="">
            </button>
        </div>
        <i><b><p>© TODOS LOS DERECHOS RESERVADOS <br> 
            Shoeshop de Colombia S.A. Calle 99 11A-32 Pasto Colombia Teléfono: 3166135036 E-Mail: www.sshop@hotmail.com.co </br></p></i></b>
            <label class="lbl_compra" for="">COMPRA 100% SEGURA ✔</label>
    </div>
    
   </div>
   <script src="./empresa.js"></script>
</body>
</html>