import OrangePO from "./loginPO";

describe("inicio de sesion", () => {
    const orangePO = new OrangePO

    beforeEach(() => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    })


    it('login estandar', () => {
        orangePO.nombreusuario().type('Admin'),
        orangePO.contraseña().type('admin123'),
        orangePO.botoniniciarsesion().click(),
        orangePO. assertlogin()
    })

})