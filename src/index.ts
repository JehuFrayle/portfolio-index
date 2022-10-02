import { cardGenerator } from "./components/cardGenerator";
import './styles/tailwind.css';
import './styles/fonts.css';
import { referentGenerator } from "./components/referentGenerator";

//Esto es para rellenar la seccion de proyectos
const ejemploProyecto: project[] = require('./info/proyectos.json');
const projectContainer = document.getElementById('ProjectsTS')

projectContainer
    ? ejemploProyecto.forEach(item => cardGenerator(item, projectContainer)) : null;

//Lo mismo que lo anterior pero para la sección de referentes
const ejemploReferente: referent[] = require('./info/referentes.json');
const referentContainer = document.getElementById('ReferentsTS');

referentContainer
    ? ejemploReferente.forEach(item => referentGenerator(item, referentContainer)) : null;

//Esto es para el menu responsivo
const burger = document.querySelector("#burger");
const nav = document.querySelector('#NavBar');
burger?.addEventListener('click', () => {
    nav?.classList.toggle('hidden')
})
nav?.addEventListener('click', (event) => {
    const anchor = event.target;
    if (anchor instanceof Element && anchor.localName === 'a') {
        nav?.classList.add('hidden')
    }
})
