class BuzzPO{

    BotonBuzz() {
        return cy.contains('Buzz').click()
    }
    
    Input() {
        return cy.get('.oxd-buzz-post-input')
    }
    
    Publicar() {
        return cy.get('[type="submit"]').click()
    }
    
    verificacion(){
        return cy.get('.oxd-text--toast-message').should('be.visible')
    }
    
    
    
    
    }
    
    export default BuzzPO