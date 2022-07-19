export default function (project: project, container: HTMLElement) {
    const cardContainer = document.createElement('div');
    cardContainer.className = 'projectCard'

    const projectIMG = document.createElement('img');
    projectIMG.src = project.imageURL;
    projectIMG.alt = project.name;
    cardContainer.className = `projectCard-image`;
    cardContainer.appendChild(projectIMG);

    const projectTitle = document.createElement('a');
    projectTitle.href = `https://projects.jehufrayle.com/${project.name}`;
    projectTitle.innerHTML = project.name;
    projectTitle.className = 'projectCard-title';
    cardContainer.appendChild(projectTitle);

    const projectDesc = document.createElement('p');
    projectDesc.className = 'projectCard-Desc';
    projectDesc.innerHTML = project.description;
    cardContainer.appendChild(projectDesc);

    container.appendChild(cardContainer);
}