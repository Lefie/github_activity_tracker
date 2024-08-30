
const pr_event = ( event ) => {
    const repo = event.repo.name
    const action = event.payload.action
    const number = event.payload.number
    console.log(`${action} pull request number ${number} in ${repo}`)
}

module.exports = {pr_event}

