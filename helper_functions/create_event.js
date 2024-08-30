const create_event = (event) => {
    const repo = event.repo.name
    const ref_type = event.payload.ref_type
    if (ref_type === "repository"){
        console.log(`created a ${ref_type} named ${repo}`)
    }else if (ref_type === "branch"){
        const branch = event.payload.master_branch
        console.log(`created a ${ref_type} named ${branch} for ${repo} `)
    }else{
        console.log(`created a ${ref_type} for ${repo}`)
    }
}

module.exports = {create_event}