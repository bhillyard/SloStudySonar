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
    cy.get("button")
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

    cy.get('input[type="checkbox"]').check(); // Check the on-campus checkbox
    cy.get('input[type="text"][placeholder="Title:"]').type("University Union");
    cy.get('input[type="text"][placeholder="Location:"]').type("Cal Poly, San Luis Obispo, CA");
    cy.get('input[type="number"][min="0"][max="12"]').eq(0).type("7"); // Start hours
    cy.get('input[type="number"][min="0"][max="59"]').eq(0).type("00"); // Start minutes
    cy.get('select').eq(0).select("AM"); // Start AM/PM
    cy.get('input[type="number"][min="0"][max="12"]').eq(1).type("10"); // End hours
    cy.get('input[type="number"][min="0"][max="59"]').eq(1).type("00"); // End minutes
    cy.get('select').eq(1).select("PM"); // End AM/PM
    cy.get('textarea').type("The UU is a chill place for students to come and study "); // Description
    cy.get('button[type="submit"]').click(); // Submit the form

    // Check if the study space was added successfully
    // cy.on("window:alert", (str) => {
    //   expect(str).to.equal("Study Space added successfully");
    // });

    cy.contains("Home").click();

  });

  // it("should navigate to the StudySessionPage and see upcoming study sessions", () => {
  //   // Click on a study space card to view its details
  //   cy.get(".study-space-card").first().click();

  //   // Navigate to the study sessions section
  //   cy.get(".study-sessions-tab").click();

  //   // Verify that upcoming study sessions are visible
  //   cy.get(".study-session-item").should("exist");
  // });
});
