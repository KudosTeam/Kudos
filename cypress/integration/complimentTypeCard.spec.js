describe("ComplimentTypeCard", () => {
  const date = new Date();
  const cyCompliment = `Thank you ${date.getTime()}`;
  beforeEach(() => {
    cy.visit("/");

    cy.server();
    cy.route("POST", "/api/compliments").as("saveCompliments");
  });

  it("should be rendered", () => {
    cy.get("[data-cy=chooseIcon]").should("exist");
    cy.contains("Write a Compliment").should("exist");
    cy.get("#complimentText").should("exist");
    cy.contains("Save Compliment").should("exist");
  });

  it("should save compliment", () => {
    cy.get("#complimentText").type(cyCompliment);
    cy.get("[data-cy=saveCompliment]").click();
    cy.wait(["@saveCompliments"]).then(res => {
      expect(res.status).eq(200);
    });
  });
});
