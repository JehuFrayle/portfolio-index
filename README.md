# My Portfolio

Currently working on my portfolio, wich is mean to work as an index page to my projects section.

For this I'm using **TypeScript** on the logic and **TailwindCSS** for the styles.

![Portfolio header](https://projects.jehufrayle.com/resources/images/ssportfolio-desktop.jpg)

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

## referentes.json
Recently I moved the proyectos.json to an *info* directory because I realized I will need more json files for the information. In this directory I save the new *referentes.json* file, logic is the same of *proyectos.json* but this one is for the Referents section.

For this, I created a new referent type with the following structure:
```TypeScript
type referent = {
    name: string,
    URL: string,
    imgURL: string,
    reason: string
}
```
Maybe I should be more specific about types...

---

### Current issues I have found and I'm fixing (or I've fixed).
- Entry transitions (called revealingAnimations on the project) are causing overflow and making the site wider. ✅
- Referents transition delay is causing them to fight each other. ✅
- Social media container is not centered. ✅

---