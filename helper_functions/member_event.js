
const member_event = (event) => {
 
    let repo = event.repo.name
    let action = event.payload.action
    let member = event.payload.member.login
    console.log(`${action} ${member} to ${repo} `)

}

module.exports = { member_event }