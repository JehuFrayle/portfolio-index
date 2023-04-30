import { cardGenerator } from "./components/cardGenerator";
import './styles/tailwind.css';
import './styles/fonts.css';
import './styles/revealingAnimations.css';
import { referentGenerator } from "./components/referentGenerator";

//This is to fill the project
const ejemploProyecto: project[] = require('./info/proyectos.json');
const projectContainer = document.getElementById('ProjectsTS')

projectContainer
    ? ejemploProyecto.forEach(item => cardGenerator(item, projectContainer)) : null;

//Same as before, but for referent section
const ejemploReferente: referent[] = require('./info/referentes.json');
const referentContainer = document.getElementById('ReferentsTS');

referentContainer
    ? ejemploReferente.forEach(item => referentGenerator(item, referentContainer)) : null;

//And this is for the responsive header menu
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
// This is for the revealing animation 
const observer = new IntersectionObserver((entries) => {
    entries.forEach( (entry, index) => {
        if (entry.isIntersecting){
            entry.target.classList.add('revealTS');
            // remove observer after animation
            observer.unobserve(entry.target);
        }
    })
})
const hiddenElements = document.querySelectorAll('.hideTS');
hiddenElements.forEach((element) => observer.observe(element));