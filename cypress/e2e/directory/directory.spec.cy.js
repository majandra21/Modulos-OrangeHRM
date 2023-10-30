import DirectoryPO from "./directoryPO"

describe("Directory", () => {

    const directoryPO = new DirectoryPO

    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'),
        cy.LoginOrange(),
        cy.contains('Directory').click()
    })

    it('Nombre de Empleado', () => {
        directoryPO.BusquedaEmployeeName().type('Odis'),
        cy.get('[role="listbox"]').wait(8000).click();
        directoryPO.BotonSearch()
        cy.contains("(1) Record Found").should('be.visible') 

    })

    it('Job Title', () => {
        directoryPO.BusquedaJobTitle(),
        cy.contains('Account Assistant').click(),
        directoryPO.BotonSearch()
        cy.contains('(2) Records Found').should('be.visible')
    
    })

    it('Location', () => {
        directoryPO.BusquedaLocation(),
        cy.contains('Texas R&D').click(),
        directoryPO.BotonSearch(),
        cy.contains('(8) Records Found').should('be.visible')

    })

})