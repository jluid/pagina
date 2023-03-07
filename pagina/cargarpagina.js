function cargarpagina(){

     setTimeout(function() {
        let alert = document.getElementById('Alerta_registro');
        alert.classList.remove('Alerta_registro');
      },3000);
    
      let icon_isesion = document.getElementById('icon_isesion');
      let cerrar_login = document.getElementById('iconcerrar_login');
      let cerrar_formulario = document.getElementById('cerrar_formulario');
      let lbl_registrate = document.getElementById('lbl_registrate');
      let id_lupa = document.getElementById('id_lupa');
      let red_login = document.getElementById('btnisesion');
      let red_registro= document.getElementById('btnregistrate');
      let recgr_pag = document.getElementById('btn_logoinicio');
      let icon_carritocompras = document.getElementById('icon_carritocompras');
  
      let btn_agregarc = document.getElementById('btn_agregarc');
      let iconcerrar_compra = document.getElementById('iconcerrar_compra');
      let btn_agregarcarrito = document.getElementById('btn_agregarcarrito');  
      let icn_cerrarmsagregarp = document.getElementById('iconcerrar_msg');  
      let listadesplegable1 = document.getElementById('cat_hombres');
      let listadesplegable2 = document.getElementById('cat_mujeres');
      let listadesplegable3 = document.getElementById('cat_niños');
      let listadesplegable4 = document.getElementById('cat_niñas');
      let listadesplegable5 = document.getElementById('cat_marcas');
      let  icn_cerraralerta = document.getElementById('icn_cerraralerta');
      let lista_hombres = document.getElementById('listadesplegable1');
      let lista_mujeres = document.getElementById('listadesplegable2');
      let lista_niños = document.getElementById('listadesplegable3');
      let lista_niñas = document.getElementById('listadesplegable4');
      let lista_marcas = document.getElementById('listadesplegable5');
      let id_nike = document.getElementById('id_nike');
      let id_adidas = document.getElementById('id_adidas');
      let id_puma = document.getElementById('id_puma');
      let id_rebook = document.getElementById('id_rebook');
      let id_nbalance = document.getElementById('id_newbalance');
  
      let btn_marcaadidas= document.getElementById('btn_marcaadidas');
      let btn_marcapuma = document.getElementById('btn_marcapuma');
      let btn_marcanike = document.getElementById('btn_marcanike');
      let btn_marcarebook = document.getElementById('btn_marcarebook');
      if(red_login){
          red_login.addEventListener("click",mostrarLogin);
          red_registro.addEventListener("click",registrarUsuario);
      }
      if(btn_agregarc){
          btn_agregarc.addEventListener("click",mostrarOpcionesventa);
      }
      
     
     
     // let btn_marcanbalance = document.getElementById('btn_marcanbalance');
     
     //Eventos para mostrar marcas
    // btn_marcaadidas.addEventListener('click',mostrar_m());
      // btn_marcanbalance.addEventListener("click",cargarpag_nbalance); 
  
      /*icn_cerraralerta.addEventListener("click",cerraralerta);*/
      //btn_home.addEventListener("click",recargarpag);
     
      icon_carritocompras.addEventListener("click",mostrar_carrito);   
      
      /*recargar pagina*/
      recgr_pag.addEventListener('click',recargarpag);
      id_nike.addEventListener('click',cargar_nike);
      id_adidas.addEventListener('click',cargar_adidas);
      id_puma.addEventListener('click',cargar_puma);
      id_rebook.addEventListener('click',cargar_rebook);
      id_nbalance.addEventListener('click',cargar_nbalance);
      id_lupa.addEventListener('keypress',mostrarproductos);
      id_lupa.addEventListener('keyup',mostrarproductos);
      id_lupa.addEventListener('keydown',mostrarproductos);
      id_lupa.addEventListener('click',mostrarproductos);
      lista_hombres.addEventListener("mouseenter",mostrarlista1);
      listadesplegable1.addEventListener("mouseenter",mostrarlista1);
      listadesplegable2.addEventListener("mouseenter",mostrarlista2);
      listadesplegable3.addEventListener("mouseenter",mostrarlista3);
      listadesplegable4.addEventListener("mouseenter",mostrarlista4);
      listadesplegable5.addEventListener("mouseenter",mostrarlista5);
      listadesplegable1.addEventListener("mouseleave",removerlista1);
      listadesplegable2.addEventListener("mouseleave",removerlista2);
      listadesplegable3.addEventListener("mouseleave",removerlista3);
      listadesplegable4.addEventListener("mouseleave",removerlista4);
      listadesplegable5.addEventListener("mouseleave",removerlista5);
      lista_hombres.addEventListener("mouseenter",mostrarlista1);
      lista_mujeres.addEventListener("mouseenter",mostrarlista2);
      lista_niños.addEventListener("mouseenter",mostrarlista3);
      lista_niñas.addEventListener("mouseenter",mostrarlista4);
      lista_marcas.addEventListener("mouseenter",mostrarlista5);
      lista_hombres.addEventListener("mouseleave",removerlista1);
      lista_mujeres.addEventListener("mouseleave",removerlista2);
      lista_niños.addEventListener("mouseleave",removerlista3);
      lista_niñas.addEventListener("mouseleave",removerlista4);
      lista_marcas.addEventListener("mouseleave",removerlista5);
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
  
      window.location="index.html";
  }
  function paginaHombres(){
      window.location="productoshombre.php";
  }
  function paginaMujeres(){
      window.location="productosmujeres.php";
  }
  function paginaNiños(){
      window.location="productosniños.html";
  }
  function paginaNiñas(){
      window.location="productosniñas.html";
  }
  function paginaMarcas(){
      window.location="marcas.html";
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
         
          window.location="productosnike.php";
          
      }else if(value==adidas){
         
          window.location="productosadidas.php";
  
      }else if(value==puma){
         
          window.location="productospuma.php";
  
      }else if(value==rebook){
          window.location="productosrebook.php";
      }
      else if(value==niños){
          window.location="productosniños.html";
      }else if(value==niñas){
          window.location="productosniñas.html";
      }else if(value==hombres){
          window.location="productoshombre.php";
      }else if(value==mujeres){
          window.location="productosmujeres.php";
      }else if(value==newbalalnce){
          window.location="productosnbalance.php";
      }else{
          window.location="noresults.html";
      }
  
  }
  
  
  
  
  
  
  
  function mostrar_carrito(){
      window.location = "carrito.html";
  
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
      window.location="index.html";
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
  }
  function cerrarMnsjproduct(){
  
      document.getElementById('div_msagregarp_close').classList.remove("div_msagregarp_close");
      
  }
  function removerlista1(){
      try {
          document.getElementById('listadesplegable1').style.display = 'none';
      } catch (error) {
          alert(error);
      }
  }
  function mostrarlista1(){
      try {
          
          document.getElementById('listadesplegable1').style.display = 'block';
            
      } catch (error) {
          alert(error);
      }
  }
  function removerlista2(){
      try {
          document.getElementById('listadesplegable2').style.display = 'none';
      } catch (error) {
          alert(error);
      }
  }
  function mostrarlista2(){
      try {
          
          document.getElementById('listadesplegable2').style.display = 'block';
            
      } catch (error) {
          alert(error);
      }
  }
  function removerlista3(){
      try {
          document.getElementById('listadesplegable3').style.display = 'none';
      } catch (error) {
          alert(error);
      }
  }
  function mostrarlista3(){
      try {
          
          document.getElementById('listadesplegable3').style.display = 'block';
            
      } catch (error) {
          alert(error);
      }
  }
  function removerlista4(){
      try {
          document.getElementById('listadesplegable4').style.display = 'none';
      } catch (error) {
          alert(error);
      }
  }
  function mostrarlista4(){
      try {
          
          document.getElementById('listadesplegable4').style.display = 'block';
            
      } catch (error) {
          alert(error);
      }
  }
  function removerlista5(){
      try {
          document.getElementById('listadesplegable5').style.display = 'none';
      } catch (error) {
          alert(error);
      }
  }
  function mostrarlista5(){
      try {
          
          document.getElementById('listadesplegable5').style.display = 'block';
            
      } catch (error) {
          alert(error);
      }
  }
  
 
 window.addEventListener('load',cargarpagina);