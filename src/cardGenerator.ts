export function cardGenerator(project: project, container: HTMLElement) {
    const cardContainer = document.createElement('a');
    cardContainer.href = project.url;
    cardContainer.style.backgroundImage = `url(${project.imageURL})`
    cardContainer.className = `flex flex-col p-4 rounded-lg w-full md:w-1/3 lg:w-1/4 aspect-[3/4] justify-end m-4 bg-cover bg-no-repeat bg-center
    space-y-4 drop-shadow-md hover:scale-110 transition duration-1000 ease-in-out`

    const projectTitle = document.createElement('p');
    projectTitle.innerHTML = project.name;
    projectTitle.className = 'align-start';
    cardContainer.appendChild(projectTitle);
    

    const projectDesc = document.createElement('p');
    projectDesc.className = 'ml-auto';
    projectDesc.innerHTML = project.description;
    cardContainer.appendChild(projectDesc);

    const techContainer = document.createElement('div');
    techContainer.className = 'w-full inline-flex ml-auto space-evenly p-2 rounded-md space-x-4';
    
    project.technologies.forEach((item)=>{
        const usedTech = document.createElement('p');
        usedTech.innerText = item;
        usedTech.className ='inline-block p-2 border-solid rounded-sm bg-yellow-500';

        techContainer.appendChild(usedTech);
    })
    cardContainer.appendChild(techContainer);

    container.appendChild(cardContainer);
}