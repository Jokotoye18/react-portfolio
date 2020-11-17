export const getUnique = (projects) => {
    const set = new Set([...projects.map(project => project.project_tech)])
    return ['All projects', ...set]
}