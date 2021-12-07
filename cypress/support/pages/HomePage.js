class HomePage
{
    loginTab(){
        return cy.get('a[title="Log In"]').contains('Log In');
    }
    emailInput(){
        return cy.get('input[name="usernameOrEmail"]');
    }
    continueButton(){
        return cy.get('button[class="button form-button is-primary"]');
    }
    passwordInput(){
        return cy.get('input[id="password"]');
    }
    loginButton(){
        return cy.get('button[class="button form-button is-primary"]').contains('Log In');
    }


}

export default HomePage;