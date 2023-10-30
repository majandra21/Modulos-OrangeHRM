class MyinfoPO{

    BotonEmergency(){
        return cy.get('.orangehrm-tabs-wrapper').eq(2).click()
    }

    BotonAdd(){
        return cy.get('[type="button"]').eq(2).click({scrollBehavior:false})
    }

    NombreContacto(){
        return cy.get('input').eq(1).click()
    }

    RelacionContacto(){
        return cy.get('input').eq(2).click()
    }

    MovilContacto(){
        return cy.get('input').eq(4).click()
    }

    SaveBoton(){
        cy.scrollTo('topRight',  { duration: 2000 }).get('[type="submit"]').click({ force: true })
    }
       

    SuccessMessage(){
        return cy.contains('Success',{timeout:3000}).should('be.visible')
    }


   


}

export default MyinfoPO