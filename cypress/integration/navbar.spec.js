describe("Navbar", () => {
  context("/", () => {
    it("should be rendered", () => {
      cy.visit("/");

      cy.get("[data-cy=logo]").should("exist");
      cy.contains("Bring back the Love").should("exist");
    });
  });

  context("/reward", () => {
    it("should be rendered", () => {
      cy.visit("/");

      cy.get("[data-cy=logo]").should("exist");
      cy.contains("Bring back the Love").should("exist");
    });
  });
});
