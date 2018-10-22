[![CircleCI](https://circleci.com/gh/SoftwareSquad/TicTacToe.svg?style=svg)](https://circleci.com/gh/SoftwareSquad/TicTacToe)
# TicTacToe
## Hugbúnaðarfræði - Late term project

### About this project
A simple Tic Tac Toe web application written in NodeJS.

### Why?
This project is not about Node or some other technology used in the project. It's about development best practices and practically using development tools to create a good, testable and **maintainable** code. Such as:
- TDD (Test driven development)
- Continuous integration
- Continuous deployment (using heroku)
- Git and the various workflows associated with git (we use branching wokflow)

## Development manual

### Git
In this project we use a simple branching workflow, we have 2 branches, master and development. In the development branch write our code and integrate. Only when we have completed a feature we push to the master and deploy.

Before development, you should check for available branches, with the command:
`git branch`

To Switch from the master branch to development branch, enter the command:
`git checkout development`

Before you start coding you should always pull changes that have been made to the repository:
`git pull`

To begin the integration test, you only have to push the branch to github, everything else is automated.
`git push`

To deploy the features you have **completed** you'll have to merge the master branch with the development branch:
`git checkout master`
`git merge development`
`git push`

### JavaScript
When we create variables with compound words, our second word starts with a capital letter (pascal casing): 
```javascript
var firstSecond
```
Our comments start with //
```javascript
//some comment 
function testCode() {
    console.log("some text");
}
```

### HTML

# <h1>
## <h2>
## <h3>
  
Unordered list:
⋅⋅* First item
⋅⋅* Second item
⋅⋅* Third item

Ordered list:
1. First item
2. Second item
3. Third item

 
