# My Portfolio

Currently working on my portfolio, wich is mean to work as an index page to my projects section.

For this I'm using **TypeScript** on the logic and **TailwindCSS** for the styles.

## proyectos.json
My portfolio dynamically adds card of each project reading the information of the *proyectos.json*. This file contains an array with all the projects using the **Project** type in *types.d.ts*.

This type have the follow structure:
```TypeScript
type project = {
    name: string,
    url: string,
    imageURL: string,
    description: string,
    technologies: technologies[]
}
type technologies = 'HTML' | 'CSS' | 'JavaScript' | 'React' | 'NodeJS' | 'VueJS' | 'TypeScript' | 'Webpack';
```
