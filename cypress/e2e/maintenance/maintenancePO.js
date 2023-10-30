class MaintenancePO {

    BotonContraseña(){
        return cy.get('[name="password"]')
    }

    BotonConformar(){
        return cy.get('[type="submit"]').click()
    }

    BusquedaPastEmployee(){
        return cy.get('.oxd-autocomplete-wrapper').eq(0).click()
    }

    BotonSearch(){
        return cy.get('.oxd-button').click()
    }

}

export default MaintenancePO