export function referentGenerator(person:referent, container:HTMLElement){
    const referentContainer = document.createElement('a');
    referentContainer.href = person.URL;
    referentContainer.target = '_blank';
    referentContainer.className = `rounded-lg bg-gradient-to-t from-indigo-400 to-violet-400 flex flex-col justify-between w-48 h-auto p-4 m-4 
    drop-shadow-md text-center space-y-2 shrink-0 snap-center
    hover:scale-105 hover:drop-shadow-lg transition duration-500 ease-in-out`;

    const referentAvatar = document.createElement('img');
    referentAvatar.src = person.imgURL;
    referentAvatar.alt = `${person.name} image`;
    referentAvatar.className = `rounded-full aspect-[1/1] object-cover object-top outline outline-1 drop-shadow-sm`;
    referentContainer.appendChild(referentAvatar);

    const referentName =  document.createElement('h3');
    referentName.innerText = person.name;
    referentName.className = `text-slate-800`;
    referentContainer.appendChild(referentName);
    
    const referentReason = document.createElement('p');
    referentReason.innerText =  person.reason ||'I admire this person';
    referentReason.className = 'my-auto w-1/3'

    container.appendChild(referentContainer);
}