import signup from '../pages/SignupPage';

describe('Signup', () => {

    // before(()=>{
    //     cy.log('Tudo aqui é executado uma única vez antes de todos os casos de testes.')

    // })

    beforeEach(function () {
        cy.log('Tudo aqui é executado uma vez antes de cada caso de teste.')
        cy.fixture('deliver').then(function (d) {
            this.deliver = d
        })
    })

    // after(()=>{
    //     cy.log('Tudo aqui é executado uma única vez depois de todos os casos de testes.')

    // })

    // afterEach(()=>{
    //     cy.log('Tudo aqui é executado uma vez após cada caso de teste.')
    // })

    it('User should be deliver', function () {

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'

        signup.go()
        signup.fillForm(this.deliver.signup)
        signup.submit()
        signup.modalContentShouldBe(expectedMessage)

    })

    it('Invald document', function () {

        const expectedMessage = 'Oops! CPF inválido'

        signup.go()
        signup.fillForm(this.deliver.cpf_invalido)
        signup.submit()
        signup.alertMessageShouldBe(expectedMessage)
    })

    it('Invald email', function () {

        const expectedMessage = 'Oops! Email com formato inválido.'

        signup.go()
        signup.fillForm(this.deliver.email_invalido)
        signup.submit()
        signup.alertMessageShouldBe(expectedMessage)
    })

})