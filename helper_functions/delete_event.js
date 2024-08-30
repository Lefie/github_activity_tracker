
const delete_event = (event) => {
    const name = event.repo.name
    const ref_type = event.payload.ref_type
    console.log(`deleted a ${ref_type} from ${name} `)
}

module.exports = {delete_event}