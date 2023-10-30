import PerformancePO from "./PerformancePO";

describe('Performance', () => {

    const performancePO = new PerformancePO

    beforeEach(() =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'),
        cy.LoginOrange(),
        cy.contains('Performance').click()
    })

    it('Employee Name', () => {
        performancePO.BusquedaEmployeeName().type('Peter Mac Anderson'),
        performancePO.ListBox(),
        performancePO.BotonSearch(),
        cy.contains('No Records Found').should('be.visible') 

    })

    it('Job Title', () => {
        performancePO.BusquedaJobTitle().contains('Account').click(),
        performancePO.BotonSearch(),
        cy.contains('No Records Found').should('be.visible')

    })

    it('Sub Unit', () =>{
        performancePO.BusquedaSubUnit().contains('Administration').click(),
        performancePO.BotonSearch()
        cy.contains('No Records Found').should('be.visible')
    })

    it('Include', () => {
        performancePO.BusquedaInclude().contains('Past Employees Only').click(),
        performancePO.BotonSearch(),
        cy.contains('No Records Found').should('be.visible')
    })

    it('Review Status',() => {
        performancePO.BusquedaReviewStatus().contains('In Progress').click(),
        performancePO.BotonSearch(),
        cy.contains('No Records Found').should('be.visible')
    })

    it('From Date', () => {
        performancePO.BusquedaFromDate(),
        performancePO.Date(),
        performancePO.BusquedaToDate(),
        performancePO.Date2(),
        performancePO.BotonSearch()
        cy.contains('No Records Found').should('be.visible')

    })

})