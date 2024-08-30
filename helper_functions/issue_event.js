
const issue_event = (event) => {
    const repo = event.repo.name
    const action = event.payload.action
    const issue_number = event.payload.issue.number
    console.log(`${action} an issue issue ${issue_number} in ${repo}`)
    
}

module.exports = {issue_event}