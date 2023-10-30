import PimPO from "./pimPO"

describe('PIM', () =>{

    const pimPO = new PimPO

    beforeEach(() =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'),
        cy.LoginOrange(),
        cy.contains('PIM').click()
    })

    it('Employee Name', () => {
        pimPO.BusquedaEmployeeName().type('odis'),
        pimPO.ListBox(),
        pimPO.BotonSearch(),
        cy.contains('Odis').should('be.visible')

    })

    it('Employee Id', () => {
        pimPO.BusquedaEmployeeId().type('0204'),
        pimPO.BotonSearch(),
        cy.contains('0204').should('be.visible')
    })

    it('Employment Status', () => {
        pimPO.BusquedaEmploymentStatus().type('Full-Time Contract'),
        pimPO.ListBox(),
        pimPO.BotonSearch(),
        cy.contains('Alice').should('be.visible')
    })

    it('Include', () => {
        pimPO.BusquedaInclude().contains('Past Employees Only').click(),
        cy.wait(3000),
        pimPO.BotonSearch(),
        cy.contains('No Records Found').should('be.visible')
       
        
    })

    it('Supervisor Name', () =>{
        pimPO.BusquedaSupervisorName().type('Odis'),
        pimPO.ListBox(),
        pimPO.BotonSearch(),
        cy.contains('Odis').should('be.visible')
    })

    it('Job Title', () => {
        pimPO.BusquedaJobTitle().contains('Head of Support').click(),
        pimPO.BotonSearch(),
        cy.contains('Luke').should('be.visible')
    })

    it('Sub Unit', () => {
        pimPO.BusquedaSubUnit().type('Administration'),
        pimPO.ListBox(),
        pimPO.BotonSearch(),
        cy.contains('(5) Records Found').should('be.visible')

    })






})