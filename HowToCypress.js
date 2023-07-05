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
-visit - navigates to url,
-get("CSS selector") - finds the CSS selector / element
-type("string") - types what is in string
-should("have.length", 4) - compares if there are x elements visible
-find("CSS selector") - finds child element inside parent element
-contains("string") - looks for element that has text specified inside brackets
-click() - clicks on element

-each(($el, index, $list) => {}) - goes through elements that have same tag 
-wrap() - used for chanining commands with .each command
Example of the each and wrap commands:
cy.get(".products").find(".product").each(($el, index, $list) => {
      const productName = $el.find("h4.product-name").text();
      if(productName.includes("Cashews"))
      {
        cy.wrap($el).find("button").click();
      }
    });

    -then(() => {}) - command used to wait before going to the next step

-as("string") - saving locators to variable
Example of .as("string") command: 
cy.get(".products").as("productsLocator")
cy.get("@productsLocator")

-
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

/*Test 1 includes basic commands, such as: opening a webpage, finding locator and typing characters in text boxes,
counting elements and traversing from parent to child*/
/*Test 2 includes most of the things as Test 1. Test 2 also includes navigating to Cart and Proceeding with order*/
/*Test 3 includes examples for check boxes, radio buttons and dropdown menus*/
