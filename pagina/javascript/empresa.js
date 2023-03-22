function cargarpagina(){
    //CARRITO E INICIAR SESION ETIQUETAS
    
    //BOTONES DE MARCAS
    let btn_madidas= document.getElementById('btn_marcaadidas');
    let btn_mpuma = document.getElementById('btn_marcapuma');
    let btn_mnike = document.getElementById('btn_marcanike');
    let btn_mrebook = document.getElementById('btn_marcarebook');
    let btn_mnewbalance = document.getElementById('btn_marcanbalance');

    /*BOTONES */
 
    let red_login = document.getElementById('btnisesion');
    let red_registro= document.getElementById('btnregistrate');
    let btn_agregarcarrito = document.getElementById('btn_agregarcarrito');  
    /*ICONOS */
    let icon_isesion = document.getElementById('icon_isesion');
    let cerrar_login = document.getElementById('iconcerrar_login');
    let cerrar_formulario = document.getElementById('cerrar_formulario');
    let recgr_pag = document.getElementById('btn_logoinicio');
    let icon_carritocompras = document.getElementById('icon_carritocompras');
    let iconcerrar_compra = document.getElementById('iconcerrar_compra');
    let icn_cerrarmsagregarp = document.getElementById('iconcerrar_msg');  
    

    let lbl_registrate = document.getElementById('lbl_registrate');
    let id_lupa = document.getElementById('id_lupa');
    //PROGRAMAR BOTON
    var btn_agregarc = document.getElementById('agregar_carrito');
    /*LISTAS */
   
    let listadesplegable1 = document.getElementById('cat_hombres');
    let listadesplegable2 = document.getElementById('cat_mujeres');
    let listadesplegable3 = document.getElementById('cat_niños');
    let listadesplegable4 = document.getElementById('cat_niñas');
    let listadesplegable5 = document.getElementById('cat_marcas');

   
    if(btn_madidas){
        btn_madidas.addEventListener('click',cargar_adidas);
        btn_mnike.addEventListener('click',cargar_nike);
        btn_mnewbalance.addEventListener('click',cargar_nbalance);
        btn_mpuma.addEventListener('click',cargar_puma);
        btn_mrebook.addEventListener('click',cargar_rebook);
    }

    if(red_login){
        red_login.addEventListener("click",mostrarLogin);
        red_registro.addEventListener("click",registrarUsuario);
    }
    if(btn_agregarc){
        
        btn_agregarc.addEventListener("click",mostrarOpcionesventa);
    }
     
    
    /*recargar pagina*/
    icon_carritocompras.addEventListener('click',mostrar_carrito);
    recgr_pag.addEventListener('click',recargarpag);
    id_lupa.addEventListener('keypress',mostrarproductos);
    id_lupa.addEventListener('keyup',mostrarproductos);
    id_lupa.addEventListener('keydown',mostrarproductos);
    id_lupa.addEventListener('click',mostrarproductos);
    listadesplegable1.addEventListener("click",paginaHombres);
    listadesplegable2.addEventListener("click",paginaMujeres);
    listadesplegable3.addEventListener("click",paginaNiños);
    listadesplegable4.addEventListener("click",paginaNiñas);
    listadesplegable5.addEventListener("click",paginaMarcas);
  
    
 
    icn_cerrarmsagregarp.addEventListener("click",cerrarMnsjproduct);
    btn_agregarcarrito.addEventListener("click",mostrarMnsjproduct);
    iconcerrar_compra.addEventListener("click",cerrarCompra);
    
    icon_isesion.addEventListener("click",mostrarLogin);
    cerrar_login.addEventListener('click',cerrarLogin);
    cerrar_formulario.addEventListener('click',cerrarFormulario);
    lbl_registrate.addEventListener('click',registrarUsuario);
 
}


function recargarpag(){

    window.location="index.php";
}
function paginaHombres(){
    window.location="productoshombre.php";
}
function paginaMujeres(){
    window.location="productosmujeres.php";
}
function paginaNiños(){
    window.location="productosniños.php";
}
function paginaNiñas(){
    window.location="productosniñas.php";
}
function paginaMarcas(){
    window.location="marcas.php";
}
/*paginas marcas------*/
function cargar_nike(){
    window.location="productosnike.php";
}
function cargar_adidas(){
    window.location="productosadidas.php";
}
function cargar_puma(){
    window.location="productospuma.php";
}
function cargar_rebook(){
    window.location="productosrebook.php";
}
function cargar_nbalance(){
    window.location="productosnbalance.php";
}


function cerraralerta(){

    document.getElementById('Alerta_registro').style.display = 'none';
    document.getElementById('Alerta_registro').classList.remove('Alerta_registro');
}

function mostrarproductos(){

    
    let value = document.getElementById('id_barrabuscar').value.toLowerCase();
    let nike="nike";
    let adidas="adidas";
    let puma = "puma";
    let rebook="rebook";
    let niños="niños";
    let niñas="niñas";
    let hombres = "hombres";
    let mujeres="mujeres";
    let newbalalnce="new balance";
  
    if(value==nike){
        window.location="productosnike.php"
        
    }else if(value==adidas){
       
        window.location="productosadidas.php";
       
    }else if(value==puma){
       
        window.location="productospuma.php";

    }else if(value==rebook){
        window.location="productosrebook.php";
    }
    else if(value==niños){
        window.location="productosniños.php";
    }else if(value==niñas){
        window.location="productosniñas.php";
    }else if(value==hombres){
        window.location="productoshombre.php";
    }else if(value==mujeres){
        window.location="productosmujeres.php";
    }else if(value==newbalalnce){
        window.location="productosnbalance.php";
    }else{
        window.location="noresults.php";
    }

}

function mostrar_carrito(){
    window.location = "carrito.php";

}


function registrarUsuario(){
    cerrarLogin();
    document.getElementById('div_formulario').style.display = 'block';
}
function cerrarLogin(){
    document.getElementById('div_login').style.display = 'none';
  
}
function cerrarFormulario(){
    document.getElementById('div_formulario').style.display = 'none';
    window.location="index.php";
}
function mostrarLogin(){
    
    document.getElementById('div_login').style.display = 'block';
    
}


function mostrarOpcionesventa(){
    
    document.getElementById('mostrar_compra').style.display = 'block';
    
}
function cerrarCompra(){
   
    document.getElementById('mostrar_compra').style.display = 'none';
   
}
function mostrarMnsjproduct(){
    cerrarCompra();
    
    let alert = document.getElementById("div_msagregarp_close");
    alert.classList.add("div_msagregarp");
    //alerta producto agregado con exito
Swal.fire({
    title:"producto agregado con exito",
    icon:"success"
});
    
}
function cerrarMnsjproduct(){

    document.getElementById('div_msagregarp_close').classList.remove("div_msagregarp_close");
    
}

window.addEventListener('load',cargarpagina);