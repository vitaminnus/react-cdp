describe('List of movies', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4100')
  });

  it('Click to movie item should show details page', () => {
    cy.get('#film')
      .click();

    cy.get('#MovieDetailsPage')
      .should('be.visible')
  });

  it('Click to search button should show search page', () => {
    cy.get('#film')
      .click();

    cy.get('#MovieDetailsPage')
      .should('be.visible')

    cy.get('#searchDetailsButton')
      .click();

    cy.get('#MovieSearchPage')
      .should('be.visible')
  });
})
