import { cardGenerator } from "./cardGenerator";
import './styles/tailwind.css';
import './styles/fonts.css';
import './styles/animation.css';

const ejemploProyecto: project[] = require('../proyecto.json');
const mainContainer = document.getElementById('ProjectsTS');

mainContainer
    ? ejemploProyecto.forEach(item => cardGenerator(item, mainContainer)) : null;

const burger = document.querySelector("#burger");
const nav = document.querySelector('#NavBar');
burger?.addEventListener('click',()=>{
    nav?.classList.toggle('hidden')
})
nav?.addEventListener('click', (event)=>{
    const anchor = event.target;
     if(anchor instanceof Element && anchor.localName === 'a'){
         nav?.classList.add('hidden')
     }
})
