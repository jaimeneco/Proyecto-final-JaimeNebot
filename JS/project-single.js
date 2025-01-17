const proyectos = [
    {
        id: 1, 
        titulo: "Web de Emergencias", 
        descripcion: "Proyecto correspondiente al Módulo de Diseño web: HTML, CSS y Javascript del CEI Valencia. En este proyecto teníamos que realizar una Web de Emergencias en la que los usuarios pudieran obtener información acerca de todas aquellas emergencias a nivel mundial que hubieran sucedido o estuvieran sucediendo en el momento de la visita a la web. En ella se debía incluir también un menú y un buscador, con el que poder filtrar por nombre de emergencia, teléfono de contacto y forma de ayuda según las necesidades de cada catástrofe.",
        img1: "../img/projects-web/emergencias-home.png",
        img2: "../img/projects-web/emergencias-beneficios.png",
        img3: "../img/projects-web/emergencias-ejemplo.png",
        alt1: "Emergencias Home",
        alt2: "Emergencias Beneficios",
        alt3: "Emergencias Ejemplo",
    },

    {
        id: 2, 
        titulo: "Music Player", 
        descripcion: "Proyecto correspondiente al Módulo de Diseño web: HTML, CSS y Javascript del CEI Valencia. En este proyecto teníamos que realizar un reproductor de música totalmente funcional e interactivo que destacara tanto en diseño como en una usabilidad eficaz y sencilla. <br> El reproductor debía permitir filtrar por diferentes secciones: nombre de las canciones, el artista o aspectos como el estilo musical. Esto hace que los usuarios puedan navegar de manera fluída, encontrando fácilmente aquellas canciones que desan escuchar. Además de las distintas formas de filtrado de canciones, el proyecto también requería implementar los controles típicos de reproducción, tales como los botones de Play, Pause, Siguiente y Anterior, consiguiendo una experiencia real por parte del usuario. Acompañando a estos controles, podemos encontrar una barra de progreso que muestra el tiempo que lleva trascurrido de la canción y su duración total.", 
        text1: "*Imagen del proyecto terminado", 
        img1: "../img/projects-web/reproductor-single.png",
        img2: "../img/projects-web/reproductor-lista.png",
        img3: "../img/projects-web/reproductor-buscar.png",
        alt1: "Reproductor Single",
        alt2: "Reproductor Lista",
        alt3: "Reproductor Buscar",
    },
    
    {
        id: 3, 
        titulo: "Chef Connect", 
        descripcion: "Proyecto correspondiente al Módulo de Diseño web: HTML, CSS y Javascript del CEI Valencia. En este proyecto teníamos que realizar una página web de recetas de cocina. El proyecto pretende convertirse en una comunidad de aficionados a la cocina, en la que poder compartir y valorar recetas propias o de otros usuarios. La página dispone de menús en los que poder buscar tus recetas favoritas, retos semanales y comidas filtradas por país o por tipo de alimento. Además, se le añadió una página de registro e inicio de sesión para que los usuarios pudieran navegar, guardar sus datos y almacenar información en su perfil de usuario.",
        img1: "../img/projects-web/chef-home.png",
        img2: "../img/projects-web/chef-recetas.png",
        img3: "../img/projects-web/chef-login.png",
        alt1: "Chef Home",
        alt2: "Chef Recetas",
        alt3: "Chef Login",
    },
    {
        id: 4, 
        titulo: "Piedra, papel o tijera", 
        descripcion: "Proyecto correspondiente al Módulo de Diseño web: HTML, CSS y Javascript del CEI Valencia. En este proyecto teníamos que realizar una página web en la que poder jugar al tradicional juego Piedra, Papel o Tijera. Haciendo uso de un HTML sencillo, dándole forma y color con el CSS y mediante el uso de Javascript, podemos llevar este popular juego a la pantalla y jugar las veces que queramos, calculando al mismo tiempo los resultados a favor, en contra y las partidas empatadas.",
        img1: "../img/projects-games/piepaptij-home.png",
        img2: "../img/projects-games/piepaptij-botones.png",
        img3: "../img/projects-games/piepaptij-nenes.png",
        alt1: "Home piedra, papel o tijera",
        alt2: "Botones juego",
        alt3: "Imagen nenes",
    },
    {
        id: 5, 
        titulo: "Día VS Noche", 
        descripcion: "Proyecto correspondiente al Módulo de Diseño web: HTML, CSS y Javascript del CEI Valencia. Para este proyecto me inspiré en uno de los sitios webs más famosos actualmente: Neal.fun. Conocido por su creatividad, sencillez y dinamismo a la hora de crear su página de minijuegos, me he basado en uno de sus juegos más conocidos para crear el mío. Usando HTML, CSS y Javascript logramos tener un juego muy similar al original en apariencia y en funcionalidad, donde quedan registrados los votos totales que cada usuario otorga a su parte del día favorita.",
        img1: "../img/projects-games/dia-vs-noche.png",
        img2: "../img/projects-games/dia-votos.png",
        img3: "../img/projects-games/noche-votos.png",
        alt1: "Home día vs noche",
        alt2: "Día votos",
        alt3: "Noche votos",
    },
];

const contenedorProyecto = document.getElementById("proyecto");

const urlParams = new URLSearchParams(window.location.search);
const proyectoId = urlParams.get("id");

const proyecto = proyectos.find((p) => p.id == proyectoId);

if (proyecto) {
    contenedorProyecto.innerHTML =
        `<section class="Main-project">
            <div class="Main-header">
                <h1 class="Main-headerTitle">Detalles:</h1>
                <h2 class="Main-headerSubtitle">${proyecto.titulo}</h2>
                <p class="Main-headerDescription">${proyecto.descripcion}</p>
            </div>

            <div class="Main-content">
                <div class="Content">
                    <img class="Main-contentImage" src="${proyecto.img1}" alt="${proyecto.alt1}" loading="lazy">
                </div>
                <div class="Content-row">
                    <div class="Content">
                        <img class="Main-contentImage" src="${proyecto.img2}" alt="${proyecto.alt2}" loading="lazy">
                    </div>
                    <div class="Content">
                        <img class="Main-contentImage" src="${proyecto.img3}" alt="${proyecto.alt3}" loading="lazy">
                    </div>
                </div>
            </div>
        </section>`;

} else {
    contenedorProyecto.innerHTML = `<p class="ProjectHeader-title"> Proyecto no encontrado :( <br> Lo sentimos </p>`;
}

