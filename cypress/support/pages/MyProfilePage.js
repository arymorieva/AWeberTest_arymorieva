class MyProfilePage
{

    profileIcon(){
        return cy.get('img[alt="My Profile"]');
    }
    myProfileTitle(){
        return cy.get('h1[class="formatted-header__title wp-brand-font"]');
    }
    publicNameInput(){
        return cy.get('input[id="display_name"]');
    }
    saveButton(){
        return cy.get('button[class="button form-button is-primary"]'); 
    }
    successfullMessage(){
        return cy.get('span[class="notice__text"]');  
    }
    publicName(){
        return cy.get('h2[class="profile-gravatar__user-display-name"]');  
    }
    firstNameInput(){
        return cy.get('input[id="first_name"]'); 
    }
    lastNameInput(){
        return cy.get('input[id="last_name"]'); 
    }
    aboutMeInput(){
        return cy.get('textarea[id="description"]'); 
    }
    logOutButton(){
        return cy.get('button[class="button sidebar__me-signout-button is-compact"]'); 
    }
    profileTab(){
        return cy.get('span[class="sidebar__menu-link-text menu-link-text"]').contains('My Profile'); 
    }
    

}

export default MyProfilePage;