import { cardGenerator } from "./cardGenerator";
import './styles/tailwind.css';

const ejemploProyecto: project[] = require('../proyecto.json');
const mainContainer = document.getElementById('Projects');

mainContainer
    ? ejemploProyecto.forEach(item => cardGenerator(item, mainContainer)) : null;

const burger = document.querySelector("#burger");
const nav = document.querySelector('#NavBar');
burger?.addEventListener('click',()=>{
    nav?.classList.toggle('hidden')
})