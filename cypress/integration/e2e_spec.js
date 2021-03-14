describe('Visit WhiteJaguars Demo site', () => {
  it('Sanity check', () => {
    cy.visit(Cypress.env('CYPRESS_BASE_URL'))
  })
})