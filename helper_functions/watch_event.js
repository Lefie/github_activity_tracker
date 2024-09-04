
const watch_event = (event) => {
    let repo = event.repo.name
    console.log("starred",repo)
}
module.exports = {watch_event}