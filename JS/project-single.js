const proyectos = [
    {
        id: 1, 
        titulo: "Web de Emergencias", 
        descripcion: "Proyecto correspondiente al Módulo de Diseño web: HTML, CSS y Javascript del CEI Valencia. En este proyecto teníamos que realizar una Web de Emergencias en la que los usuarios pudieran obtener información acerca de todas aquellas emergencias a nivel mundial que hubieran sucedido o estuvieran sucediendo en el momento de la visita a la web. En ella se debía incluir también un menú y un buscador, con el que poder filtrar por nombre de emergencia, teléfono de contacto y forma de ayuda según las necesidades de cada catástrofe.",
        text1: "*Imagen del proyecto terminado",
        img1: "../img/imgJaimeAdult.jpeg",
        alt1: "..."
    },

    {
        id: 2, 
        titulo: "Music Player", 
        descripcion: "Proyecto correspondiente al Módulo de Diseño web: HTML, CSS y Javascript del CEI Valencia. En este proyecto teníamos que realizar un reproductor de música en el que poder filtrar por nombre de canciones, artista y su estilo. Además, también debíamos incluir botones de control de reproducción como Play, Pause, Siguiente y Anterior. Respecto a la lista de las canciones, yo he elegido aquellas que más encajan conmigo en estos últimos meses. ",
        heading1: "Subtitulo", 
        text1: "*Imagen del proyecto terminado", 
        img1: "../img/imgJaimeAdult.jpeg", 
        alt1: "...",
    },
    
    {
        id: 3, 
        titulo: "Chef Connect", 
        descripcion: "Proyecto correspondiente al Módulo de Diseño web: HTML, CSS y Javascript del CEI Valencia. En este proyecto teníamos que realizar una página web de recetas de cocina. El proyecto pretende convertirse en una comunidad de aficionados a la cocina, en la que poder compartir y valorar recetas propias o de otros usuarios. La página dispone de menús en los que poder buscar tus recetas favoritas, retos semanales y comidas filtradas por país o por tipo de alimento. Además, se le añadió una página de registro e inicio de sesión para que los usuarios pudieran navegar, guardar sus datos y almacenar información en su perfil de usuario.", 
        text1: "*Imagen del proyecto terminado", 
        img1: "../img/imgJaimeAdult.jpeg", 
        alt1: "...",
    },
    {
        id: 4, 
        titulo: "Piedra, papel o tijera", 
        descripcion: "Proyecto correspondiente al Módulo de Diseño web: HTML, CSS y Javascript del CEI Valencia. En este proyecto teníamos que realizar una página web de recetas de cocina. El proyecto pretende convertirse en una comunidad de aficionados a la cocina, en la que poder compartir y valorar recetas propias o de otros usuarios. La página dispone de menús en los que poder buscar tus recetas favoritas, retos semanales y comidas filtradas por país o por tipo de alimento. Además, se le añadió una página de registro e inicio de sesión para que los usuarios pudieran navegar, guardar sus datos y almacenar información en su perfil de usuario.", 
        text1: "*Imagen del proyecto terminado", 
        img1: "../img/imgJaimeAdult.jpeg", 
        alt1: "...",
    },
    {
        id: 5, 
        titulo: "Segundo Juego", 
        descripcion: "Proyecto correspondiente al Módulo de Diseño web: HTML, CSS y Javascript del CEI Valencia. En este proyecto teníamos que realizar una página web de recetas de cocina. El proyecto pretende convertirse en una comunidad de aficionados a la cocina, en la que poder compartir y valorar recetas propias o de otros usuarios. La página dispone de menús en los que poder buscar tus recetas favoritas, retos semanales y comidas filtradas por país o por tipo de alimento. Además, se le añadió una página de registro e inicio de sesión para que los usuarios pudieran navegar, guardar sus datos y almacenar información en su perfil de usuario.", 
        text1: "*Imagen del proyecto terminado", 
        img1: "../img/imgJaimeAdult.jpeg", 
        alt1: "...",
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
                <h2 class="Main-headerTitle">${proyecto.titulo}</h2>
                <p class="Main-headerDescription">${proyecto.descripcion}</p>
            </div>

            <div class="Main-content">
                <img class="Main-contentImage" src="${proyecto.img1}" alt="${proyecto.alt1}" loading="lazy">
                <p class="Main-contentText">${proyecto.text1}</p>
            </div>
        </section>`;

} else {
    contenedorProyecto.innerHTML = `<p class="ProjectHeader-title"> Proyecto no encontrado :( <br> Lo sentimos </p>`;
}

