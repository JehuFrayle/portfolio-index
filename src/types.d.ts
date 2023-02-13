type project = {
    name: string,
    url: string,
    mobileImageURL: string,
    desktopImageURL: string,
    description: string,
    technologies: technologies[]
}
type technologies = 'HTML' | 'CSS' | 'JavaScript' | 'React' | 'NodeJS' | 'VueJS' | 'TypeScript' | 'Webpack' | 'Angular' | 'Tailwind';
type referent = {
    name: string,
    URL: string,
    imgURL: string,
    reason: string
}