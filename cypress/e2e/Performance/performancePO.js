class PerformancePO{

    BusquedaEmployeeName(){
        return cy.get('[placeholder="Type for hints..."]').click()
    }

    ListBox(){
        return cy.get('[role="listbox"]').wait(4000).click()
    }

    BotonSearch(){
        return cy.get('.oxd-button--secondary').click({ force: true })
    }

    BusquedaJobTitle(){
        return cy.get('.oxd-select-wrapper').eq(0).click()
    }

    BusquedaSubUnit(){
        return cy.get('.oxd-select-wrapper').eq(1).click()
    }

    BusquedaInclude(){
        return cy.get('.oxd-select-wrapper').eq(2).click()
    }

    BusquedaReviewStatus(){
        return cy.get('.oxd-select-wrapper').eq(3).click()
    }

    BusquedaFromDate(){
        return cy.get('input').eq(2).click()
    }

    Date(){
        cy.contains('January').click(),
        cy.contains('September').click(),
        cy.contains('4').click()
    }

    BusquedaToDate(){
        return cy.get('input').eq(3).click()
    }

    Date2(){
        cy.contains('December').click(),
        cy.contains('September').click(),
        cy.contains('8').click()
    }

}

export default PerformancePO