/*INSTRUCTIONS ON INSTALLING CYPRESS*/
/*
1. Create new project
2. Open terminal
3. In terminal window type:
npm install cypress --save-dev (--save-dev might be optional #notsure)
 */

/*INSTRUCTIONS ON RUNNING THE TEST RUNNER*/
/*
1. After Cypress is installed and node_modules folder created in project structure
2. In terminal window type:
node_modules/.bin/cypress open
3. Click E2E Testing or Component testing (depends on what you want)
4. Choose Browser (if you clicked E2E Testing)
*/

/*INSTRUCTIONS ON CREATING TEST CASES*/
/*
1. Inside cypress folder (in your project structure) create new folder called "integration"
2. After integration folder is created, create sub-folder called "examples"
3. Create file "name_of_your_test".js
4. In terminal type:
node_modules/.bin/cypress run
5. Above command will execute all the test cases present in "examples" folder
6. If you want to run only one test case, type the command in terminal:
npm run cy:run --record --spec "cypress/integration/my-spec.js" 
npx run cypress --record --spec "cypress/integration/my-spec.js" 
7. At the end of the npm or npx command, path to test case file needs to be written as well
*/

/*INSTRUCTIONS ON RUNNING / EXECUTING TEST CASES IN TEST RUNNER*/
/*
1. Have your Spec files (test cases) in your "examples" folder
3. Open cypress.config.js file
4. Inside e2e: {} type: specPattern: 'cypress/integration/examples/*.js; outside of any method!
5. Refresh your Test Runner and you should see the test cases / spec files inside the folder we set above
6. Click on the test / spec file you want to run
*/

/*BASIC COMMANDS*/
/*
To have auto-completion on . , add the line below to the top of the spec file:
/// <reference types="Cypress" />
visit - navigates to url,
get("CSS selector") - finds the CSS selector / element
type("string") - types what is in string
DOM element:visible - detects only visible elements > cy.get(".product:visible")
headless mode (no visible browser) < through command line / terminal
node_modules/.bin/cypress run --browser chrome / firefox / edge < running cypress in specific browser
*/

/*DEFINING CSS SELECTORS*/
/*
#idname > #root
.classname > .search-keyword
tagname#idname > div#root
tagname.classname > input.search-keyword
tagname[attribute=value] > input[type='search']
traversing from parent to child: tagname tagname > form input
*/

/*TERMINOLOGY*/
/*
Spec file - or test case in JavaScript
DOM - Document Object Model
POM - Page Object Model
*/
