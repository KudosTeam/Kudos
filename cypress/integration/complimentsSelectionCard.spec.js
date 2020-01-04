describe("ComplimentsSelectionCard", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should be rendered", () => {
    cy.contains("Choose a Compliment").should("exist");
    cy.get("[data-cy=selectIcon]").should("exist");
    cy.get("[data-cy=select]").should("exist");
  });
});
