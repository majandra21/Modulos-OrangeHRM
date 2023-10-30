import AdminPO from "./adminPO"

describe("Admin-Happy-Path", () => {

    const adminPO = new AdminPO

    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'),
        cy.LoginOrange(),
        cy.contains('Admin').click()
          
    })

    it('username', () => {
        
        adminPO.BusquedaUsername().type('Chenzira.Chuki'),
        adminPO.BotonSearch() 
        cy.contains("(1) Record Found").should('be.visible')   
    })

    it('user rol', () => {
        adminPO.BusquedaRolUsuario().contains("ESS").click(),
        adminPO.BotonSearch(),
        cy.contains("(61) Records Found").should('be.visible')
    })

    it('Employee Name', () => {
        adminPO.BusquedaNombreDeUsuario().type('Fiona Grace'),
        cy.get('[role="listbox"]').wait(3000).click();
       adminPO.BotonSearch()
       cy.contains("(1) Record Found").should('be.visible')   
    })

    it('Status', () => {
        adminPO.BusquedaStatus(),
        cy.contains('Disabled').click();
        adminPO.BotonSearch()
        cy.contains('(20) Records Found').should('be.visible')
    })


})