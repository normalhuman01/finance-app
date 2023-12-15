
jQuery(function($) {
   
    $('#select-cat').on('change', function() {
            
      
              //el texto al cual dimos click lo pasamos a minusculas, 
          //le quitamos los espacios en blanco y lo asignamos a la variable
          //textoFiltro
          var SelectFiltro = $("#select-cat");
          
          //si el texto es igual a 'todos' mostramos todos los elementos que contengan la clase hidden
          //y a dicho elemento le removemos la clase hidden
          //la clase hidden es opcional, en éste caso la usamos solo como referencia
          //puedes llamarla como quieras o incluso no utilizarla
          if($("#select-cat").val() == 1) 
          {
            $('ul.filtros li.hidden').fadeIn('slow').removeClass('hidden');
          } 



          //de lo contrario hacemos lo siguiente
          else
          {  

             if(SelectFiltro.val() == 2)  { textoFiltro= "soat"};
             if(SelectFiltro.val() == 3)  { textoFiltro= "mantenimiento"};
             if(SelectFiltro.val() == 4)  { textoFiltro= "repuesto"};
            //aqui empieza la magia
            

           
            //hacemos un bucle con el metodo each para
            //obtener todos los divs que se encuentren dentro de 
            //la clase filtros
            $('.filtros li').each(function(i) {

              //entonces comparamos
              //si el elemento NO tiene una clase llamada con el mismo valor que
              //nuestra variable textoFiltro, entonces se ocultará utilizando el metodo
              //fadeOut() de jQuery
             


             
              if(!$(this).hasClass(textoFiltro)) 
              {
                $(this).fadeOut('normal').addClass('hidden');
              }

            
              //de lo contrario se mostrará utilizando el método
              //fadeIn() de jQuery
              else 
              {
                $(this).fadeIn('slow').removeClass('hidden');
              }
            });
          }
          
         });

 /* your code */ })(jQuery);