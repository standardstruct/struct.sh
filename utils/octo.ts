import { Octokit } from "@octokit/rest";

const octo = new Octokit({
    userAgent: "Standard-Structure",
})

export default octo as Octokit;