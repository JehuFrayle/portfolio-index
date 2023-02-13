export function usedTechGenerator(item:technologies, container:HTMLElement) {
    const usedTech = document.createElement('p');
    const bgColor:Map<technologies, string> = new Map([
        ['HTML', '#FF5722'], 
        ['CSS', '#214CE5'], 
        ['JavaScript', '#F7E018'], 
        ['React', '#61DBFB'], 
        ['NodeJS', '#6DA25E'], 
        ['VueJS', '#3FB984'], 
        ['TypeScript', '#2D79C7'], 
        ['Webpack', '#1C78C0'],
        ['Tailwind', "#47B1B5"],
        ['Angular', "#A6120D"],
    ]);

    usedTech.innerText = item;
    usedTech.className = 'inline-block p-2 border-solid rounded-sm text-slate-900 drop-shadow-sm '
    + 'text-white';
    usedTech.style.backgroundColor = bgColor.get(item) || 'transparent';
    usedTech.style.textShadow = '0 0 2px #0f172a';//Adds almost black shadow for contrast

    container.appendChild(usedTech);
}