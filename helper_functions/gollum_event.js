
const gollum_event = (event) => {
    const pages = event.payload.pages
    pages.forEach((page)=>{
        const repo = event.repo.name
        const title = page.title
        const action = page.action
        console.log(`${action} a page titled ${title} in ${repo}`)
    })
}

module.exports = {gollum_event}