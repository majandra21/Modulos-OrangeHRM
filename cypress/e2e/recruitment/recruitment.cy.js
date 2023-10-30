import RecruitmentPO from "./recruitmentPO"

describe('Recruitment', () => {

    const recruitmentPO = new RecruitmentPO

    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'),
        cy.LoginOrange(),
        cy.contains('Recruitment').click()
    })

    it('Job Title', () => {
        recruitmentPO.BusquedaJobTitle().contains('Finance Manager').click(),
        cy.wait(3000),
        recruitmentPO.BotonSearch(),
        cy.contains('No Records Found').should('be.visible')
    })

    it('Vacancy', () => {
        recruitmentPO.BusquedaVacancy().contains('Senior QA Lead').click(),
        cy.wait(2000),
        recruitmentPO.BotonSearch(),
        cy.contains('(3) Records Found').should('be.visible')
    })

    it('Hiring Manager', () =>{
        recruitmentPO.BusquedaHiringManager().contains('Linda Anderson').click(),
        cy.wait(2000),
        recruitmentPO.BotonSearch(),
        cy.contains('(2) Records Found').should('be.visible')
    })

    it('Status', () => {
        recruitmentPO.BusquedaStatus().contains('Interview Failed').click(),
        cy.wait(2000),
        recruitmentPO.BotonSearch(),
        cy.contains('(1) Record Found').should('be.visible')
    })

    it('Candidate Name', () =>{
        recruitmentPO.BusquedaCandidateName().type('Chris'),
        recruitmentPO.ListBox(),
        recruitmentPO.BotonSearch(),
        cy.contains('(1) Record Found').should('be.visible')

    })

    it('Keywords', () => {
        recruitmentPO.BusquedaKeywords().type('Account'),
        recruitmentPO.BotonSearch(),
        cy.contains('No Records Found').should('be.visible')
    })

    it('Date of Application', () =>{
        recruitmentPO.BusquecaDateApplication().click(),
        recruitmentPO.Date(),
        recruitmentPO.BusquedaToDate().click(),
        recruitmentPO.Date2(),
        recruitmentPO.BotonSearch(),
        cy.contains('(1) Record Found').should('be.visible')
     })

     it('Add', () => {
        recruitmentPO.BotonAdd().click(),
        recruitmentPO.PrimerNombre().type('Jose'),
        recruitmentPO.SegundoNombre().type('Andres'),
        recruitmentPO.Apellido().type('Gaonzalez'),
        recruitmentPO.Vacancy().contains('Payroll').click(),
        recruitmentPO.Email().type('jose@ygmail.com'),
        recruitmentPO.Numero().type('456617363'),
        recruitmentPO.Fecha(),
        cy.contains('8').click(),
        recruitmentPO.BotonSave(),
        recruitmentPO.validacion()




     })

     




})