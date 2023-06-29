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
visit - navigates to url,

*/

/*TERMINOLOGY*/
/*
Spec file - or test case in JavaScript

*/
