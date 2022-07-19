import cardGenerator from "./cardGenerator";

const ejemploProyecto: project[] =  require('../proyecto.json');
const mainContainer = document.getElementById('App');

if(mainContainer != null){
    ejemploProyecto.forEach(item => cardGenerator(item, mainContainer))
}