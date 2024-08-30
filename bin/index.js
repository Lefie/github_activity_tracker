#! /usr/bin/env node
// import modules 
const { create_event } = require("../helper_functions/create_event")
const { Command } = require('commander');
const program = new Command();





program 
    .name("Github User Activity Tracker")
    .description("This CLI tracks a certain user's github activities")
    .version('1.0.0')

program
    .argument("<username>","name of the github user")
    .description("display the github activity of the github user ")
    .action( (username) => {
        const api_url = `https://api.github.com/users/${username}/events`
        console.log("display github activity url", api_url)

        fetch(api_url, {})
        .then(resp => resp.json())
        .then(data => {
            data.forEach(event => {
                const type = event.type
                switch (type) {
                    case "CreateEvent":
                        create_event(event)
                        break
                    default :
                        console.log(`This is a ${type} activity  `)
                        break
                    
                }
                
                
            });
        })
        .catch(error => console.log(error))

    }

    )
   

program.parse(process.argv)

/*
 .action((username) => {
        

        fetch(api_url, {})
        .then(response => response.json())
        .then(data => {

            data.forEach(event => {
                const type = event.type
                switch (type) {
                    case "CreateEvent":
                        const repo = data[0].repo.name
                        const ref_type = data[0].payload.ref_type
                        console.log(`created a ${ref_type} named ${repo}`)
                        break
                    default:
                        console.log(`the type of event is ${type}`)

                }
            });
            
                    
            }
        )
        .catch(error => console.log(error))
    )

*/