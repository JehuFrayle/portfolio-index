import './styles/cardFlip.css'
export function cardGenerator(project: project, container: HTMLElement) {
    const cardContainer = document.createElement('article');
    cardContainer.className = `contFlip flex relative m-4 w-full md:w-1/3 lg:w-1/4 aspect-[3/4] j
    drop-shadow-md transition duration-1000 ease-in-out`
    //front-face
    const front = document.createElement('div');
    front.style.backgroundImage = `url(${project.imageURL})`
    front.className = `frontFlip absolute w-full h-full rounded-lg bg-cover bg-no-repeat bg-center`

    //back-face
    const back = document.createElement('div');
    back.className = `backFlip absolute w-full h-full px-8 mx-auto rounded-lg bg-slate-300 flex flex-col justify-evenly align-center`
    const projectTitle = document.createElement('h3');
    projectTitle.innerHTML = project.name;
    projectTitle.className = 'text-center align-start text-slate-800';
    back.appendChild(projectTitle);

    const projectIMG = document.createElement('img');
    projectIMG.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png`;
    projectIMG.className = `w-3/4 mx-auto`;
    back.appendChild(projectIMG);

    const projectDesc = document.createElement('p');
    projectDesc.className = 'text-left text-slate-800';
    projectDesc.innerHTML = project.description;
    back.appendChild(projectDesc);

    const tryIt = document.createElement('a');
    tryIt.innerHTML = 'Try it now!'
    tryIt.href = project.url;
    tryIt.target = '_blank'
    tryIt.className = `bg-red-500 w-auto mx-auto rounded-md p-2 shadow-md shadow-red-500/50
    hover:scale-125 transition duration-400 ease-in-out`
    back.appendChild(tryIt);

    const techContainer = document.createElement('div');
    techContainer.className = 'w-full inline-flex ml-auto space-evenly p-2 rounded-md space-x-4 justify-end';

    project.technologies.forEach((item) => {
        const usedTech = document.createElement('p');
        const bgColor = {
            'HTML': '#FF5722', 
            'CSS': '#214CE5', 
            'JavaScript': '#F7E018', 
            'React': '#61DBFB', 
            'NodeJS': '#6DA25E', 
            'VueJS': '#3FB984', 
            'TypeScript': '#2D79C7', 
            'Webpack': '#1C78C0',
            'Tailwind': "#47B1B5"
        }

        usedTech.innerText = item;
        usedTech.className = 'inline-block p-2 border-solid rounded-sm text-slate-900';
        usedTech.style.backgroundColor = bgColor[item] || 'transparent';

        techContainer.appendChild(usedTech);
    })
    front.appendChild(techContainer);

    cardContainer.appendChild(front);
    cardContainer.appendChild(back);
    
    container.appendChild(cardContainer);
}