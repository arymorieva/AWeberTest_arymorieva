# AWeberTest_arymorieva
Cypress Framework

Here is a simple BDD Testing Framework based on JS/Cypress/Cucumber for https://wordpress.com My Profile page

My framework was structured based on the POM(Page Object Model) that every page element go to one class and it makes easy to
maintenance and to keep my code organized and clean. All Pages are located in support/pages folder

Elements on the pages were located using CSS Selectors.

My test scenarious contain myProfile.feature which includes all written steps in Gherkin Language and Step Definition file that contains actual code

In common-steps.js file I store beforeEach step, that includes all general code that has to be executed before every scenarious

Url information and all needed configurations are stored in cypress.json
Dependencies are stored in package.json

Login step stored in support/commands.js as a common method, so it can be accessed from anywhere using cy.


My test scenario include:
- Public name verification ( making sure that updating public Name on my Profile page changes information under user's picture)
- Iput fields verification ( making sure that firstName/lastName/aboutMe fields are free input fields - letters/digits/special characters can be saved)
- Verifying that Save button gets enabled only after data input
- Verifying successfull message that gets triggered on Save

