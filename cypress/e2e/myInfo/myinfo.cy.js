import MyinfoPO from "./myinforPO";

describe(' My Info', () => {

    const myinfoPO = new MyinfoPO

    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'),
        cy.LoginOrange(),
        cy.contains('My Info').click()
    })

    it('Emergency Contacts', () => {
        myinfoPO.BotonEmergency(),
        myinfoPO.BotonAdd()
        myinfoPO.NombreContacto().type('Clarie Smith')
        myinfoPO.RelacionContacto().type('Wife')
        myinfoPO.MovilContacto().type('82748291')
        myinfoPO.SaveBoton()
        myinfoPO.SuccessMessage()
       
       
    })


})