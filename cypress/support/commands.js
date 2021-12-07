import HomePage from "../support/pages/HomePage";

const homePage = new HomePage();

Cypress.Commands.add('login', () => { 
      
homePage.loginTab().click({force:true});
homePage.emailInput().type('anarym.qa@gmail.com');
homePage.continueButton().click();
homePage.passwordInput().type('myQAPassword');
homePage.loginButton().click();

 })