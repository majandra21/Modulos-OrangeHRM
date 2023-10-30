class PimPO {

    BusquedaEmployeeName(){
        return cy.get('[placeholder="Type for hints..."]').eq(0)
    }

    BotonSearch(){
        return cy.contains('Search').click({ force: true })
    }

    ListBox(){
        return cy.get('[role="listbox"]').wait(8000).click()
    }

    BusquedaEmployeeId(){
        return cy.get('input').eq(2)
    }

    BusquedaEmploymentStatus(){
        return cy.get('.oxd-select-wrapper').eq(0).click()
    }

    BusquedaInclude(){
        return cy.get('.oxd-select-wrapper').eq(1).click()
    }

    BusquedaSupervisorName(){
        return  cy.get('[placeholder="Type for hints..."]').eq(1)
    }

    BusquedaJobTitle(){
        return cy.get('.oxd-select-wrapper').eq(2).click()
    }

    BusquedaSubUnit() {
        return cy.get('.oxd-select-wrapper').eq(3).click()
    }


}

export default PimPO