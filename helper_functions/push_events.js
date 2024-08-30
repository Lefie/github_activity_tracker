
const push_event = (event) => {
    const repo = event.repo.name
    const num_of_commits = event.payload.size
    if(num_of_commits > 1){
        console.log(`pushed ${num_of_commits} commits to ${repo}`)
    }else{
        console.log(`pushed ${num_of_commits} commit to ${repo}`)
    }
}

module.exports = {push_event}