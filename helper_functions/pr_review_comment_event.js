
const pr_review_comment_event = (event) => {
    let repo = event.repo.name
    let action = event.payload.action
    let comment_id = event.payload.comment.id
    let pr_number = event.payload.pull_request.number
    console.log(`${action} comment ${comment_id} in pull request ${pr_number} in ${repo}`)
}

module.exports = {pr_review_comment_event}