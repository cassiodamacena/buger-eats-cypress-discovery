describe('nome page', ()=>{
    it ('App deve estar online', ()=>{
        cy.visit('/')
        //cy.get('h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
        cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
    })
})