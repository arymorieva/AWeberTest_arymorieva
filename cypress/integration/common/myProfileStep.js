import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import mMyProfilePage from "../../support/pages/MyProfilePage";

const myProfile = new mMyProfilePage();



Given("User opens My Profile Page",()=>{

    cy.visit(Cypress.env('url')+"me").then(()=>{
        cy.wait('@profile').then(()=>{
            myProfile.myProfileTitle()
            .should('be.visible');
        })
    })
})

And("User Logs Out",()=>{
    myProfile.profileIcon().click();
    myProfile.logOutButton().click();
})

Then("Verifies that public name can be changed to {string}",(publicName)=>{
    var originalValue;
    myProfile.profileTab()
    .click()
    .then(()=>{
        cy.wait('@profile');
    })
    myProfile.saveButton()
    .should('be.disabled');
    myProfile.publicNameInput()
    .invoke('attr','value')
    .then(value=>{
        originalValue = value;
    }).
    then(()=>{
        myProfile.publicNameInput()
        .clear()
        .type(publicName);
    }).then(()=>{
        myProfile.saveButton()
        .should('be.enabled')
        .click()
        .then(()=>{
            cy.wait('@save');
            myProfile.successfullMessage()
            .then($el=>{
                expect($el.text()).eql("Settings saved successfully!");
            })
            myProfile.publicName()
            .then($el=>{
                expect($el.text()).eql(publicName);
            })
        })
    }).then(()=>{
        cy.log(originalValue);
        myProfile.publicNameInput()
        .clear()
        .type(originalValue);
        myProfile.saveButton().click();
    })
    
})

Then("Verify {string}, {string}, {string} are free Input fields",(firstName, lastName, aboutMe)=>{
    myProfile.firstNameInput().clear();
    myProfile.lastNameInput().clear();
    myProfile.aboutMeInput().clear();
    myProfile.saveButton()
    .click()
    .then(()=>{
        cy.wait('@save');
    })
    myProfile.firstNameInput().type(firstName);
    myProfile.lastNameInput().type(lastName);
    myProfile.aboutMeInput().type(aboutMe);
    myProfile.saveButton()
    .click()
    .then(()=>{
        myProfile.successfullMessage()
        .then($el=>{
            expect($el.text()).eql("Settings saved successfully!");
        })
    });
})