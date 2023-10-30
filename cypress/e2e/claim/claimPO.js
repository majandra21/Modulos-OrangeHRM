class ClaimPO {

    BusquedaEmployeeName(){
        return cy.get('[placeholder="Type for hints..."]').eq(0)
    }

    ListBox(){
        return cy.get('[role="listbox"]').wait(3000).click();
    }

    BotonSearch(){
        return cy.contains('Search').click({ force: true })
    }

    BusquedaReferenceId(){
        return cy.get('[placeholder="Type for hints..."]').eq(1)
    }

    BusquedaEventName(){
        return cy.get('.oxd-select-wrapper').eq(0)
    }

    BusquedaStatus(){
        return cy.get('.oxd-select-wrapper').eq(1)
    }

    BusquedaFromDate(){
        return cy.get('input').eq(3).click()
    }

   FromDate(){
        cy.contains('October').click(),
        cy.contains('July').click(),
        cy.contains('18').click()
    }

    BusquedaToDate(){
        return cy.get('input').eq(4).click()
    }

    ToDate(){
        cy.contains('October').click(),
        cy.contains('November').click(),
        cy.contains('21').click()
    }

    BusquedaInclude() {
        return cy.get('.oxd-select-wrapper').eq(2).click()
    }

    BotonAssignClaim(){
        return cy.contains('Assign Claim').click()

    }

    BotonEmployeeName(){
        return cy.get('input').eq(1)
    }

    BotonEvent(){
        return cy.get('.oxd-select-wrapper').eq(0).click()
    }

    BotonCurrency(){
        return cy.get('.oxd-select-wrapper').eq(1).click()
    }

    BotonRemarks(){
        return cy.get('.oxd-textarea')
    }

    BotonCreate(){
        return cy.get('.oxd-button--secondary').click()
    }

    verificacion(){
        return cy.get('.oxd-text--toast-message').should('be.visible')
    }


}

export default ClaimPO