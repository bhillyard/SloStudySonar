// cypress/integration/end_to_end_spec.js

describe("End-to-end tests", () => {
  beforeEach(() => {
    // Visit the main page before each test
    cy.visit("localhost:3000");
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
    // Find all elements with the class 'btn-success'
    // Find the first element with the class 'btn-success' and click it
    cy.get(".btn-success:first").click();

    // Verify that reviews are visible
    cy.get('.btn-success')
      .contains("Make a Review")
      .click();
    cy.get("button")
      .contains("Submit")
      .should("exist");
  });

  it("should navigate to sign and sign up", () => {
    //   // Click on a study space card to view its details
    cy.get("button")
      .contains("Sign up")
      .click();
    // Generate random data for signup form
    const randomUsername = `user_${Math.floor(Math.random() * 100000)}`;
    const randomEmail = `${randomUsername}@example.com`;
    const randomFirstName = "John";
    const randomLastName = "Doe";
    const randomDisplayName = "JohnD";
    const randomMajor = "Computer Science";
    const randomPassword = "password123";

    // Fill out the signup form
    cy.get('[name="email"]').type(randomEmail);
    cy.get('[name="userName"]').type(randomUsername);
    cy.get('[name="firstName"]').type(randomFirstName);
    cy.get('[name="lastName"]').type(randomLastName);
    cy.get('[name="displayName"]').type(randomDisplayName);
    cy.get('[name="major"]').type(randomMajor);
    cy.get('[name="password"]').type(randomPassword);
    cy.get('[name="confirmPassword"]').type(randomPassword);

    // Submit the form
    cy.get("form").submit();

    // Wait for 1 second
    cy.wait(1000);

    // Verify that the user is signed up successfully

    cy.contains("Home").click();
    cy.contains("Log in here").click();

    cy.get('[name="userName"]').type(randomUsername);
    cy.get('[name="password"]').type(randomPassword);
    cy.get("form").submit();
    cy.url().should("include", "/dashboard"); // Assuming signup redirects to the dashboard

    cy.contains("Home").click();
    cy.get("button").contains("Browse Study Spaces").click();
    cy.contains("here!").click();

    // Check if the study space was added successfully
    // cy.on("window:alert", (str) => {
    //   expect(str).to.equal("Study Space added successfully");
    // });

  });

  it("navigate to various landing page links", () => {
    cy.contains("About SLO Study Sonar").click();
    cy.contains("Home").click();
    cy.contains("Contact Us").click();
    cy.contains("Home").click();
    cy.contains("Privacy Policy").click();
    cy.contains("Home").click();

  });

  it("navigate to an individual study session", () => {
    cy.contains("Browse Study Spaces").click();
    cy.get(".btn-success:first").click();
    cy.get(".btn-success:first").contains("More Information").click();
  })

  // it("should navigate to the StudySessionPage and see upcoming study sessions", () => {
  //   // Click on a study space card to view its details
  //   cy.get(".study-space-card").first().click();

  //   // Navigate to the study sessions section
  //   cy.get(".study-sessions-tab").click();

  //   // Verify that upcoming study sessions are visible
  //   cy.get(".study-session-item").should("exist");
  // });
});
