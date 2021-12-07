import mMyProfilePage from "../../support/pages/MyProfilePage";

const myProfile = new mMyProfilePage();


beforeEach(function(){
    cy.visit(Cypress.env('url'));
    cy.login();
    myProfile.profileIcon()
    .should('be.visible')
    cy.wait(500);

    cy.intercept({
        method: 'GET',
        url: 'https://public-api.wordpress.com/rest/v1.1/*'
    }).as('save');
    cy.intercept({
        method: 'GET',
        url: 'https://public-api.wordpress.com/rest/v1.1/me/*'
    }).as('profile');

})
