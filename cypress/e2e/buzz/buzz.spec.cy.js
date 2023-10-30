import BuzzPO from "./buzzPO"

describe('Buzz Happy Path', () => {

    const buzzPo = new BuzzPO

    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'),
        cy.LoginOrange()
    })

    it('Crear comentario', () => {
        buzzPo.BotonBuzz(),
        buzzPo.Input().type('Hola todos')
        buzzPo.Publicar(),
        buzzPo.verificacion()
        

       
    })
})