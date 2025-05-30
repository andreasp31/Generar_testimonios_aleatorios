$(document).ready(function(){


    const nueva_ventana = `
        <div class="nueva_ventana" style="display: none;">
            <div class="contenido_ventana">
                <h3>Solicita tu cita</h3>
                <p>Déjanos tus datos y nos pondremos en contacto contigo:</p>
                <form>
                    <input type="text" placeholder="Nombre completo" class="hueco"><br>
                    <input type="email" placeholder="Correo electrónico" class="hueco"><br>
                    <textarea placeholder="Motivo de la consulta" class="hueco"></textarea><br>
                    <button type="submit" class="boton2">Enviar</button>
                </form>
                <div class="cerrar_ventana" class="boton2">X</div>
            </div>
        </div>
    `
    $("body").append(nueva_ventana);

    $("#pedir_cita").click(function() {
        $(".nueva_ventana").fadeIn();
    });

    $(document).on("click", ".cerrar_ventana", function() {
        $(".nueva_ventana").fadeOut();
    });

    function nuevostestimonios(){
        $(".cuerpo_testimonio").empty();
        generar();
    }

    const frases_aleatorias = [
        "Responden rápidamente y te aconsejan la mejor solución, cuando se te presenta cualquier tipo de duda por pequeña que esta sea.",
        "Asesores, rápidos, cercanos precisos en la información y super profesionales. Dan tranquilidad que es lo más importante.",
        "Quiero felicitar a José María González Abogados por su gran profesionalidad e implicación con el cliente. He estado muy asesorada.",
        "Recibí un trato impecable, con respuestas claras y un acompañamiento constante en todo momento del proceso legal.",
        "Un equipo comprometido, que transmite confianza desde el primer contacto. Me sentí respaldado en cada paso.",
        "Me explicaron todo con mucha claridad y paciencia. Muy profesionales y siempre dispuestos a resolver mis inquietudes.",
        "La atención fue excelente. Me ayudaron con un caso complejo y supieron guiarme con firmeza y empatía.",
        "Altamente recomendables. Te informan con detalle y están siempre disponibles para cualquier duda o consulta.",
        "Excelente atención al cliente. Fueron muy claros y me ofrecieron soluciones concretas desde la primera reunión."
    ]

    function generar(){
        $.getJSON("https://randomuser.me/api/?results=4", function (data) {
    
            $.each(data.results, function (index, usuario) {
                const frase_aleatoria = frases_aleatorias[Math.floor(Math.random()*frases_aleatorias.length)];
                const testimonio = `
                <div class="testimonio">
                    <div>
                        <img class ="foto1" src="${usuario.picture.large}">
                    </div>
                    <div class="comilla">“</div>
                    <p class="textos_t">${frase_aleatoria}</p>
                    <p class="nombres_t">${usuario.name.first} ${usuario.name.last}</p>
                </div>`
                
                $(".cuerpo_testimonio").append(testimonio);
                
            })

        }).fail(function (error) {
        // Manejar errores de la petición y mostrar error
        console.log("Error de carga de testimonios");
        })
    }
    
    generar();
    $("#generar_aleatorio").click(nuevostestimonios);

    

})