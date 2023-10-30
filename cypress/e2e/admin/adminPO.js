class AdminPO{

    BusquedaUsername() {
        return cy.get('input').eq(1)
    }

    BotonSearch(){
        return cy.contains('Search').click({ force: true })
    }

   BusquedaRolUsuario(){
    return cy.get('.oxd-select-wrapper').eq(0).click()
   }

   BusquedaNombreDeUsuario(){
    return cy.get('[placeholder="Type for hints..."]')
   }

   BusquedaStatus() {
    return cy.get('.oxd-select-wrapper').eq(1).click()
    
   }

}

export default AdminPO