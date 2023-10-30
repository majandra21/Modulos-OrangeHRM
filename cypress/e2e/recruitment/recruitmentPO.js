class RecruitmentPO {

    BusquedaJobTitle(){
        return cy.get('.oxd-select-wrapper').eq(0).click()
    }

    ListBox(){
        return cy.get('[role="listbox"]').wait(7000).click()
    }

    BotonSearch(){
        return cy.contains('Search').click({ force: true })
    }

    BusquedaVacancy(){
        return cy.get('.oxd-select-wrapper').eq(1).click()
    }

    BusquedaHiringManager(){
        return cy.get('.oxd-select-wrapper').eq(2).click()
    }

    BusquedaStatus(){
        return cy.get('.oxd-select-wrapper').eq(3).click()
    }

    BusquedaCandidateName(){
        return cy.get('[placeholder="Type for hints..."]').eq(0).click()
    }

    BusquedaKeywords(){
        return cy.get('.oxd-input.oxd-input--active').eq(1)
    }

    BusquecaDateApplication(){
        return cy.get('input').eq(3)
    }

    Date(){
        cy.contains('September').click(),
        cy.contains('July').click(),
        cy.contains('17').click()
    }

    BusquedaToDate(){
        return cy.get('input').eq(4)
    }

    Date2(){
        cy.contains('September').click(),
        cy.contains('July').click(),
        cy.contains('21').click()
    }

    BotonAdd(){
        return cy.get('[type="button"]').eq(3)
    }

    PrimerNombre(){
        return cy.get('input').eq(1)        
    }

    SegundoNombre(){
        return cy.get('input').eq(2)
    }

    Apellido(){
        return cy.get('input').eq(3)
    }

    Vacancy(){
        return cy.get('.oxd-select-wrapper').eq(0).click()
    }

    Email(){
        return cy.get('[placeholder="Type here"]').eq(0)
    }

    Numero(){
        return cy.get('[placeholder="Type here"]').eq(1)
    }

    Fecha(){
        return cy.get('input').eq(8).click()
    }

   validacion(){
    return cy.get('.oxd-text--toast-message').should('be.visible')
   }

   BotonSave(){
    return cy.contains('Save').click()
   }




}

export default RecruitmentPO