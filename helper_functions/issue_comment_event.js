
const issue_comment_event = (event) => {
    let repo = event.repo.name
    let action = event.payload.action
    let issue_number = event.payload.issue.number
    let comment_id = event.payload.comment.id
    console.log(`${action} a comment with id ${comment_id} in issue ${issue_number} in ${repo}`)                   
}

module.exports = { issue_comment_event }