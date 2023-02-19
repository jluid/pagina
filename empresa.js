
function cargarpagina(){
    
    let icon_isesion = document.getElementById('icon_isesion');
    let icon_carrito = document.getElementById('icon_carrito');
    let icon_carritocompras = document.getElementById('icon_carritocompras');
    let btn_bucar = document.getElementById('btn_busqueda');
    let cerrar_login = document.getElementById('iconcerrar_login');
    let cerrar_formulario = document.getElementById('cerrar_formulario');
    let lbl_registrate = document.getElementById('lbl_registrate');
    let s_hombres = document.getElementById('s_hombres');
    let s_mujeres = document.getElementById('s_mujeres');
    let s_niños = document.getElementById('s_niños');
    let s_niñas = document.getElementById('s_niñas');
    let s_marcas = document.getElementById('s_marcas');
    let h =  s_hombres.innerHTML;
    let m =  s_mujeres.innerHTML;
    let ni = s_niñas.innerHTML;
    let n =  s_niños.innerHTML;
    let mar =  s_marcas.innerHTML;
    
  
    
    
 
    icon_isesion.addEventListener("click",mostrarLogin);
    cerrar_login.addEventListener('click',cerrarLogin);
    cerrar_formulario.addEventListener('click',cerrarFormulario);
    lbl_registrate.addEventListener('click',registrarUsuario);
    icon_carritocompras.addEventListener("click",mostrarVentana);
    s_hombres.addEventListener('mouseenter',mostrarVentana(h));
    s_mujeres.addEventListener('mouseenter',mostrarVentana(m));
    s_niños.addEventListener('mouseenter',mostrarVentana(n));
    s_niñas.addEventListener('mouseenter',mostrarVentana(ni));
    s_marcas.addEventListener('mouseenter',mostrarVentana(mar));
    s_hombres.addEventListener('mouseout',ocultarventana(h));
    s_mujeres.addEventListener('mouseout',ocultarventana(m));
    s_niños.addEventListener('mouseout',ocultarventana(n));
    s_niñas.addEventListener('mouseout',ocultarventana);
    s_marcas.addEventListener('mouseout',ocultarventana(mar));
    icon_carritocompras.addEventListener('click',mostrarLogin);
    function registrarUsuario(){
        cerrarLogin();
        document.getElementById('div_formulario').style.display = 'block';
    }
    function cerrarLogin(){
        
        document.getElementById('div_login').style.display = 'none';
    }
    function cerrarFormulario(){
        document.getElementById('div_formulario').style.display = 'none';
    }
    function mostrarLogin(){
       
            document.getElementById('div_login').style.display = 'block';
    }
    /*unction ocultarventana(cat){
        if(cat=="Hombres"){
            document.getElementById('div_shombres').style.display = 'none';   
        }
        else if(cat=="Mujeres"){
            document.getElementById('div_mujeres').style.display = 'none';   
        }
        else if(cat=="Niños"){
            document.getElementById('div_niños').style.display = 'none';   
        }
        else if(cat=="Niñas"){
            document.getElementById('div_niñas').style.display = 'none';   
        }
        else if(cat=="Marcas"){
            document.getElementById('div_marcas').style.display = 'none';   
        }  
    }*/
    function mostrarVentana(categoria){

        if(h == 'Hombres'){
            document.getElementById('div_chombres').style.display = 'block';   
        }
        else if(categoria == 'Mujeres'){
            document.getElementById('div_cmujeres').style.display = 'block';   
        }
        else if(categoria == 'Niños'){
            document.getElementById('div_cniños').style.display = 'block';   
        }
        else if(categoria== 'Niñas'){
            document.getElementById('div_cniñas').style.display = 'block';   
        }
        else if(categoria== 'Marcas'){
            document.getElementById('div_cmarcas').style.display = 'block';   
        }
    }
}



window.addEventListener('load',cargarpagina);