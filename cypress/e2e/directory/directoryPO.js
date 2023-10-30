class DirectoryPO{

    BusquedaEmployeeName(){
        return cy.get('[placeholder="Type for hints..."]')
    }

    BotonSearch(){
        return cy.contains('Search').click({ force: true })
    }

    BusquedaJobTitle(){
        return cy.get('.oxd-select-wrapper').eq(0).click()
    }
    
    BusquedaLocation(){
        return cy.get('.oxd-select-wrapper').eq(1).click()
    }

}

export default DirectoryPO