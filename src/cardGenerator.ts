export function cardGenerator(project: project, container: HTMLElement) {
    const cardContainer = document.createElement('article');
    cardContainer.className = 'w-1/3 m-8'

    const projectTitle = document.createElement('a');
    projectTitle.href = `https://projects.jehufrayle.com/${project.name}`;
    projectTitle.innerHTML = project.name;
    projectTitle.className = 'projectCard-title';
    cardContainer.appendChild(projectTitle);
    
    const projectIMG = document.createElement('img');
    projectIMG.src = project.imageURL;
    projectIMG.alt = project.name;
    projectIMG.className = `w-full mx-auto`;
    cardContainer.appendChild(projectIMG);

    const projectDesc = document.createElement('p');
    projectDesc.className = 'projectCard-Desc';
    projectDesc.innerHTML = project.description;
    cardContainer.appendChild(projectDesc);

    container.appendChild(cardContainer);
}