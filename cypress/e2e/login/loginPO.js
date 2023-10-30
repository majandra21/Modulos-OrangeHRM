class Orange{

    nombreusuario(){
        return cy.get('[name="username"]')
    }


    contraseña(){
        return cy.get('[name="password"]')
    }

    botoniniciarsesion(){
        return cy.get('.oxd-button')
    }

    assertlogin(){
        return cy.contains('Dashboard').should('be.visible')
    }
}

export default Orange