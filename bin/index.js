#! /usr/bin/env node
// import modules 
const { create_event } = require("../helper_functions/create_event")
const { push_event } = require("../helper_functions/push_events")
const { delete_event } = require("../helper_functions/delete_event")
const { gollum_event } = require("../helper_functions/gollum_event")
const { pr_event } = require("../helper_functions/pr_event")
const { pr_review_event } = require("../helper_functions/pr_review_event")
const { issue_event } = require("../helper_functions/issue_event")
const { issue_comment_event } = require("../helper_functions/issue_comment_event")
const { pr_review_comment_event } = require("../helper_functions/pr_review_comment_event")
const { member_event } = require("../helper_functions/member_event")
const { watch_event } = require("../helper_functions/watch_event")
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

        fetch(api_url, {})
        .then(resp => resp.json())
        .then(data => {
            data.forEach(event => {
                const type = event.type
                switch (type) {
                    case "CreateEvent":
                        create_event(event)
                        break
                    case "PushEvent":
                        push_event(event)
                        break
                    case "DeleteEvent":
                        delete_event(event)
                        break
                    case "GollumEvent":
                        gollum_event(event)
                        break
                    case "PullRequestEvent":
                        pr_event(event)
                        break;
                    case "PullRequestReviewEvent":
                        pr_review_event(event)
                        break
                    case "IssuesEvent":
                        issue_event(event)
                        break
                    case "IssueCommentEvent":
                        issue_comment_event(event)
                        break
                    case "PullRequestReviewCommentEvent":
                        pr_review_comment_event(event)
                        break
                    case "MemberEvent":
                        member_event(event)
                        break
                    case "WatchEvent":
                        watch_event(event)
                        break
                    default :
                        console.log(`This is a ${type} in ${event.repo.name}`)
                        break
                }                        
            });
        })
        .catch(error => console.log(error))

    }

    )
   

program.parse(process.argv)
