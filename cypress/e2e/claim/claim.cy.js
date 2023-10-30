import ClaimPO from "./claimPO"

describe('Claim', () => {

    const claimPO = new ClaimPO

    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'),
        cy.LoginOrange(),
        cy.contains('Claim').click()
    })


    it('Employee Name', () => {
        claimPO.BusquedaEmployeeName().type('Lisa Andrews'),
        claimPO.ListBox(),
        claimPO.BotonSearch(),
        cy.contains('(1) Record Found').should('be.visible')
    })

    it('Reference Id', () => {
        claimPO.BusquedaReferenceId().type('202307180000006'),
        claimPO.ListBox(),
        claimPO.BotonSearch(),
        cy.contains('(1) Record Found').should('be.visible')
    })

    it('Event Name', () => {
        claimPO.BusquedaEventName().type('Medical Reimbursement'),
        claimPO.ListBox(),
        claimPO.BotonSearch(),
        cy.contains('(1) Record Found').should('be.visible')
    })

    it('Status', () => {
        claimPO.BusquedaStatus().type('Submitted'),
        claimPO.ListBox(),
        claimPO.BotonSearch(),
        cy.contains('(6) Records Found').should('be.visible')
    })

    it('From Date', () => {
        claimPO.BusquedaFromDate(),
        claimPO.FromDate(),
        claimPO.BotonSearch(),
        cy.contains('(13) Records Found').should('be.visible')       
    })

    it('To Date', () => {
        claimPO.BusquedaToDate(),
        claimPO.ToDate(),
        claimPO.BotonSearch(),
        cy.contains('(13) Records Found').should('be.visible')
    })

    it('Include', () => {
        claimPO.BusquedaInclude().contains('Past Employees Only').click()
        cy.wait(3000),
        claimPO.BotonSearch(),
        cy.contains('No Records Found').should('be.visible')
    })

    it('Assign Claim', () => {
        claimPO.BotonAssignClaim(),
        claimPO.BotonEmployeeName().type('Chenzira  Chuki'),
        claimPO.ListBox(),
        claimPO.BotonEvent().contains('Travel').click(),
        cy.wait(3000),
        claimPO.BotonCurrency().contains('Belize Dollar').click(),
        cy.wait(3000),
        claimPO.BotonRemarks(),
        claimPO.BotonCreate(),
        claimPO.verificacion()
        
    })

    
})