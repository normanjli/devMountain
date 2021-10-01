/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/
let gitDefinition = `git is a source control software, used for controlling and tracking changes made to code`
//CODE HERE

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/
let gitHubDefinition = `git hub is a service which contains the source control data from git. it helps organize store and access code which is then controlled by git.`
//CODE HERE

//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/
let init = {
    description: `initializes a new repository in the present wroking directory`,
    code: `git init`
} 

//CODE HERE

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE
let clone = {
    description:`creates a copy of a repository into the present working directory and creates a new branch from the original repository`,
    code :`git clone 'repository url'`
}
//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE
let status = {
    description:`reports on the status of git branch you are currently working on, including any unstashed changes, commits and other modification you may need to add to the repo`,
    code: `git status`
}

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE
let add = {
    description: `adds a file to be tracked by git in the current branch/repository`,
    code: `git add 'fileurl'`
}

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE
let commit = {
    description: `stashes changes made to the branch with a comment stating the reason for the changes`,
    code: `git commit -m 'your comment here'`
}

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE
let push = {
    description: `pushes commits stashed locally to the repository`,
    code: `git push`
}
console.log(init, status, push, commit, clone, add)