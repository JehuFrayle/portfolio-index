import '../styles/cardFlip.css';
import { usedTechGenerator } from './usedTechsGenerator';

export function cardGenerator(project: project, container: HTMLElement) {
    const cardContainer = document.createElement('article');
    cardContainer.className = `contFlip flex relative m-4 w-full md:w-1/3 lg:w-1/4 aspect-[3/4]
    drop-shadow-md`
    //front-face
    const front = document.createElement('div');
    front.style.backgroundImage = `url(${project.mobileImageURL})`
    front.className = `frontFlip absolute flex-col-reversed w-full h-full p-4 rounded-lg bg-cover bg-no-repeat bg-start`;

    //back-face
    const back = document.createElement('div');
    back.className = `backFlip absolute w-full h-full px-8 mx-auto rounded-lg backdrop-blur-sm bg-white/30 flex flex-col justify-evenly align-center
    outline outline-1`
    const projectTitle = document.createElement('h3');
    projectTitle.innerHTML = project.name;
    projectTitle.className = 'text-center font-bold align-start text-slate-800';
    back.appendChild(projectTitle);

    const projectIMG = document.createElement('img');
    projectIMG.src = project.desktopImageURL;
    projectIMG.className = `w-full mx-auto rounded-md`;
    back.appendChild(projectIMG);

    const projectDesc = document.createElement('p');
    projectDesc.className = 'text-left text-slate-800';
    projectDesc.innerHTML = project.description;
    back.appendChild(projectDesc);

    const tryIt = document.createElement('a');
    tryIt.innerHTML = 'Try it now!';
    tryIt.href = project.url;
    tryIt.target = '_blank';
    tryIt.className = `bg-yellow-500 w-auto mx-auto rounded-md p-2 shadow-md
    hover:scale-125 transition duration-400 ease-in-out`
    back.appendChild(tryIt);

    const techContainer = document.createElement('div');
    techContainer.className = 'w-full inline-flex space-evenly space-x-4 font-[Subtitulos]';

    project.technologies.forEach((item)=> usedTechGenerator(item, techContainer))
    front.appendChild(techContainer);

    cardContainer.appendChild(front);
    cardContainer.appendChild(back);

    //Flip with click
    
    container.appendChild(cardContainer);
}