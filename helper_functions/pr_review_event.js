
const pr_review_event = ( event ) => {
    const repo = event.repo.name
    const action = event.payload.action
    const pr_number = event.payload.pull_request.number
    console.log(`${action} a review for pull request number ${pr_number} in ${repo}`)
}

module.exports = {pr_review_event}