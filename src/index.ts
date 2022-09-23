import { cardGenerator } from "./components/cardGenerator";
import './styles/tailwind.css';
import './styles/fonts.css';
import './styles/avatarAnimation.css';

const ejemploProyecto: project[] = require('../proyectos.json');
const projectContainer = document.getElementById('ProjectsTS');

projectContainer
    ? ejemploProyecto.forEach(item => cardGenerator(item, projectContainer)) : null;

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
