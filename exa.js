const equipos = [
    {
        nombre: 'Real Madrid', 
        descripcion: 'Desde su creación en 1955, la UEFA Champions League se ha convertido en una de las competiciones de fútbol más prestigiosas del mundo. El Real Madrid, uno de los clubes más importantes del planeta, ha dejado una huella indeleble en la competición. A lo largo de su historia, el equipo ha logrado 14 títulos en la Champions League, más que cualquier otro equipo. Estos fueron conseguidos en las ediciones 1955-56, 1956-57, 1957-58, 1958-59, 1959-60, 1965-66, 1997-98, 1999-00, 2001-02, 2013-14, 2015-16, 2016-17, 2017-18, 2021-22. Además el club ha alcanzado la final de la competición en 17 ocasiones, más que otros clubes participantes. La racha más impresionante del Real Madrid en la competición fue entre 1955 y 1960, cuando ganó las primeras cinco ediciones de la Copa de Europa de forma consecutiva.',
        logo: 'madrid.png'
    },
    {
        nombre: 'Ac milan',
        descripcion: 'El AC Milan es el segundo equipo más ganador en la historia de la UEFA Champions League, aunque su último título en el certamen europeo se dio hace más de 15 años.b Los Rossoneri han levantado la \'orejona\' hasta en siete ocasiones (1968-69, 1988-89, 1989-90, 1993-94, 2002-03 y 2006-07) y en esta edición de la Champions llegaron hasta semifinales donde cayeron derrotados contra sus rivales de patio, el Inter de Milán. El AC Milan ha participado en 30 ediciones de la Champions League (hasta 1992 se llamaba Copa de Europa): la primera fue en la 1955/56 y la última en la 2022/23. Cuatro entrenadores han ganado la Champions en el banquillo milanista: Nereo Rocco (1962/63 y 1968/69), Arrigo Sacchi (1988/89 y 1989/90), Fabio Capello (1993/94) y Carlo Ancelotti (2002/03) y 2006/07). Los rossoneri ganaron por última vez la Champions League el 23 de mayo de 2007, derrotando al Liverpool por 2-1 gracias a un doblete de Filippo Inzaghi. La final se jugó en Atenas, en el mismo estadio donde los rossoneri ganaron la Champions League 1992/93. El único equipo que supera en títulos de Champions a los milanistas es el Real Madrid, que tiene 14 coronas.',
        logo: 'AC milan.png'
    },
    {
        nombre: 'Bayer Múnich',
        descripcion: 'Victorias épicas, dolorosas derrotas, momentos emocionantes y escenas para el recuerdo. ¡Esta es la historia del FC Bayern München en la UEFA Champions League!\nDesde el nacimiento de la UEFA Champions League, el Bayern ha vivido un sinfín de momentos inolvidables. A sus tres títulos consecutivos de la extinta Copa de Europa (1974, 1975 y 1976) el supercampeón alemán sumó tres trofeos de la Champions (2001, 2013 y 2020). Bundesliga en Español repasa la historia del club bávaro en la gran competición europea.\nLAS TRES ÉPICAS CONQUISTAS DEL SIGLO XXI\nBajo el nuevo formato, Los Bávaros han ganado el máximo trofeo del fútbol de clubes en Europa en tres oportunidades. La primera vez fue en la temporada 2000/01 tras derrotar al Valencia C.F bajo las órdenes de Ottmar Hitzfeld en la que se recuerda como la final de los penaltis. El encuentro finalizó con 1-1 en el marcador siendo Stefan Effenberg (50\') el autor del tanto muniqués. De todas formas, como no podía ser de otra forma, aquella noche el héroe del partido fue el guardameta Oliver Kahn, quien detuvo tres lanzamientos del conjunto español. El segundo título llegó unos años más tarde, en la temporada 2012-2013 y con Jupp Heynckes en el banquillo. Fue en la final puramente de Bundesliga que se disputó en el estadio de Wembley entre el FC Bayern München y el Borussia Dortmund. Esta fue la primera vez en la historia del torneo en la que se enfrentaron dos equipos de un mismo país. El encuentro, muy igualado, llegó a los últimos minutos con 1-1 en el luminoso tras goles de Mario Mandzukic (60’) e Ilkay Gündogan (68’). Hasta que apareció Arjen Robben. El holandés anotó el gol de la victoria para Los Bávaros en las postrimerías del partido dejando sin opciones de reacción al equipo que dirigía Jurgen Klopp. Aquella temporada, el Bayern consiguió un histórico y legendario triplete. En el caso de la tercera Orejona, el FC Bayern arrasó a sus competidores sin clemencia: venció en los 11 partidos que disputó en la competición, anotó 43 goles y solo recibió ocho goles en contra. Como muestra de su poderío, el 7-1 global al Chelsea en octavos de final u el 8-2 global al Barcelona en cuartos.',
        logo: 'bayer.png'
    },
    {
        nombre: 'liverpool',
        descripcion: 'El conjunto inglés es el tercer equipo europeo con mejor palmarés junto al Bayern Munich; sólo por detrás del Real Madrid y Milan El Liverpool es el tercer equipo de Europa con más Champions League/Copas de Europa tras el Real Madrid (13) y el Milan de Italia (7). El equipo ‘red’ está empatado en el tercer cajón del podio con el Bayern Munich, que también tiene seis entorchados.',
        logo: 'liverpool.jpg'
    },
    {
        nombre: 'barcelona',
        descripcion: 'El Fútbol Club Barcelona se ha proclamado campeón de la UEFA Champions League en 5 ocasiones. El primer título de la máxima competición europea llegó en 1992 en el estadio de Wembley (Inglaterra), mientras que la última vez que el Barça levantó el trofeo de la Champions fue en 2015, en Berlín (Alemania). Cabe recordar que el Barça es uno de los equipos con más títulos de la Champions, situándose por detrás de: Real Madrid (14), AC Milan (7), Liverpool FC (6) y Bayern de Múnich (6).',
        logo: 'barca.jpg'
    },
    // Agrega más equipos aquí
];

const nombreEquipoElement = document.getElementById('nombreEquipo');
const descripcionEquipoElement = document.getElementById('descripcionEquipo');
const logoEquipoElement = document.getElementById('logoEquipo');
const cambiarEquipoBtn = document.getElementById('cambiarEquipo');
logoEquipoElement.style.width = '150px'; // Ancho de la imagen
logoEquipoElement.style.height = 'auto'; // Altura de la imagen

let equipoActual = 0;

function mostrarEquipo(indice) {
    const equipo = equipos[indice];
    nombreEquipoElement.textContent = equipo.nombre;
    descripcionEquipoElement.textContent = equipo.descripcion;
    logoEquipoElement.src = equipo.logo;
    logoEquipoElement.alt = `Logo del ${equipo.nombre}`;
}

cambiarEquipoBtn.addEventListener('click', () => {
    equipoActual = (equipoActual + 1) % equipos.length;
    mostrarEquipo(equipoActual);
});

// Mostrar el equipo inicial
mostrarEquipo(equipoActual);

setTimeout(function() {
    document.getElementById("ventanaEmergente").style.display = "block";
}, 60000);
const btnSi = document.getElementById("btnSi");
const btnNo = document.getElementById("btnNo");

btnSi.addEventListener("click", function() {
    alert("¡Gracias por tu valoración positiva!");
    document.getElementById("ventanaEmergente").style.display = "none";
});

btnNo.addEventListener("click", function() {
    alert("Lamentamos que no te haya gustado la página. Trabajaremos para mejorarla. sugerencias en el boton de contacto");
    document.getElementById("ventanaEmergente").style.display = "none";
});

