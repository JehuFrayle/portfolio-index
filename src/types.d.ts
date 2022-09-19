type project = {
    name: string,
    url: string,
    imageURL: string,
    description: string,
    technologies: technologies[]
}
type technologies = 'HTML' | 'CSS' | 'JavaScript' | 'React' | 'NodeJS' | 'VueJS' | 'TypeScript' | 'Webpack';