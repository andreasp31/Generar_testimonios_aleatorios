$(document).ready(function(){

    function generar(){
        generar.empty();
        $.getJSON("https://randomuser.me/api/?results=4", function (data) {
    
            $.each(data.results, function (index, usuario) {
                const testimonio = `
                <div class="testimonio">
                    <div class="foto1">
                        <img src="${usuario.picture.medium}>
                    </div>
                    <div class="comilla">“</div>
                    <p class="textos_t">Responden rápidamente y te aconsejan la mejor solución, cuando se te presenta cualquier tipo de duda por pequeña que esta sea.</p>
                    <p class="nombres_t">${usuario.name.first}</p>
                </div>`
                
                $(".cuerpo_testimonio").append(testimonio);
                
            })

        }).fail(function (error) {
        // Manejar errores de la petición y mostrar error
        console.log("Error de carga de testimonios");
        })
    }

    $(".cuerpo_testimonio").on(click,generar);
    generar();

})