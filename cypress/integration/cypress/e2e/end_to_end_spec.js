// cypress/integration/end_to_end_spec.js

describe("End-to-end tests", () => {
  beforeEach(() => {
    // Visit the main page before each test
    cy.visit("/");
  });

  it("should navigate to the ViewStudySpacePage and see study space details", () => {
    // Click on a study space card to view its details
    //cy.get(".study-space-card").first().click();
    cy.get("button")
      .contains("Browse Study Spaces")
      .click();

    // Verify that the study space details are visible
    //   cy.get(".study-space-title").should("exist");
    //   cy.get(".study-space-photo").should("exist");
    //   cy.get(".star-rating").should("exist");
    //   cy.get(".study-space-location").should("exist");
    //   cy.get(".study-space-description").should("exist");

    // Navigate to the review section
    cy.get("button")
      .contains("View")
      .click();

    // Verify that reviews are visible
    cy.get("button")
      .contains("Make a Review")
      .click();
    cy.get("button")
      .contains("submit")
      .should("exist");
  });

  it("should navigate to the about us, contact us, and privacy policy", () => {
    //   // Click on a study space card to view its details
    cy.contains("Log in here").click();
    cy.get(".back-arrow-container")
      .find("back-arrow-button")
      .click();
    //   // Navigate to the review section
    //   cy.get(".reviews-tab").click();

    //   // Click on the "Make a Review" button
    //   cy.get(".make-review-button").click();

    //   // Fill out the review form
    //   cy.get("#title").type("Great study space");
    //   cy.get("#author").type("John Doe");
    //   cy.get("#rating").select("5");
    //   cy.get("#review").type("This study space is fantastic!");

    //   // Submit the review
    //   cy.get("#submit-review-button").click();

    //   // Verify that the success message is displayed
    //   cy.get(".success-message").should("exist");
    // });

    // it("should navigate to the StudySessionPage and see upcoming study sessions", () => {
    //   // Click on a study space card to view its details
    //   cy.get(".study-space-card").first().click();

    //   // Navigate to the study sessions section
    //   cy.get(".study-sessions-tab").click();

    //   // Verify that upcoming study sessions are visible
    //   cy.get(".study-session-item").should("exist");
    // });
  });
});
