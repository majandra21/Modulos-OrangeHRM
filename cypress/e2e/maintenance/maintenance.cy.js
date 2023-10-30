import MaintenancePO from "./MaintenancePO";

describe('Maintenance', () => {

    const maintenancePO = new MaintenancePO

    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'),
        cy.LoginOrange(),
        cy.contains('Maintenance').click()
    })

    it('Maintenance', () => {
        maintenancePO.BotonContraseña().type('admin123'),
        maintenancePO.BotonConformar(),
        maintenancePO.BusquedaPastEmployee().type('John Smith'),
        maintenancePO.BotonSearch(),
        cy.contains('Invalid').should('be.visible')

    })
})