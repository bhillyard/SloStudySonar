/* eslint-disable react/no-unescaped-entities */
// PrivacyPolicy.js
import React from "react";
import "./privacy.css"; // Assuming your CSS file is named style.css and is in the src/ directory
import BackArrowButton from "./BackArrowButton"; // Import CircleArrowButton component
import Navbar from "../Navigation/Navbar.js";

function PrivacyPolicy() {
  return (
    <body>
      <Navbar />
      <header className="App-header">
        <h1 className="alumni-sans">SLO Study Sonar</h1>
      </header>

      <div className="privacy-policy-container">
        <div className="back-arrow-container">
          <BackArrowButton
            onClick={() => {
              /* Add your click handler logic here */
            }}
          />
        </div>

        <div className="container">
          <div className="Privacy">
            <h2 className="alumni-sans">Privacy Policy</h2>
            <p>
              <strong>Last updated March 12, 2024</strong>
            </p>
            <p>
              The privacy notice for Slo Study Sonar("we", "us", or "our"),
              describes how and why we might collect, store, use, and/or share
              ("process") your information when you use our services, such as
              when you:{" "}
            </p>
            <p>
              1. Visit our website at http://localhost:3000/#, or any website of
              ours that links to this privacy notice
            </p>
            <p>
              2. Engage with us in the other related ways, including any sales,
              marketing, or events
            </p>
            <p>
              <strong>Questions or concerns?</strong> Reading this privacy
              notice will help you understand your privacy rights and choices.
              If you do not agree with our policies and practices, please do not
              use our services. If you still have any questions or concerns,
              please contact us.
            </p>
          </div>
          <div className="data">
            <h3 className="alumni-sans">
              What personal information do we collect?
            </h3>
            <h333>
              <strong>Personal information you disclose to us</strong>
            </h333>
            <p>
              <strong>In short:</strong> We collect personal information that
              you provide to us.
            </p>
            <p>
              We collect personal information that you voluntarily provide to us
              when you register on the services, express an interest in
              obtaining information about us or our products and services, when
              you participate in activities on the services, or otherwise when
              you contact us.
            </p>
            <p>
              <strong>Personal information provided by you.</strong> The
              personal information that we collect depends on the context of
              your interactions with us and the services, the choices you make,
              and the products and features you use. The personal information we
              collect may include:
            </p>
            <p>name</p>
            <p>email address</p>
            <p>usernames</p>
            <p>password</p>
            <p>contact preferences</p>
            <p>
              <strong>Sensitive Information:</strong> We do not process
              sensitive information.{" "}
            </p>
            <p>
              All personal information that you provide to us must be true,
              complete, and accurate, and you must notify us of any changes to
              such personal information.
            </p>
          </div>
          <h334>
            <strong>Information automatically collected</strong>
          </h334>
          <p>
            <strong>In short:</strong> Some information - such as your internet
            protocol (IP) address and/or browser and device characteristics - is
            collected automatically when you visit our services.
          </p>
          <p>
            We automatically collect certain information when you visit, use, or
            navigate the services. This information does not reveal your
            specific identity (like your name or contact information) but may
            include device and usage information, such as IP address, browser
            and device characteristics, operating system, language preferences,
            referring URLs, device mame, location, information about how and
            when you use our services, and other technical information. The
            information is primarily needed t maintain the security and
            operation of our services, and for our internal analytics and
            reporting purposes.
          </p>

          <div className="usage">
            <h4 className="alumni-sans">How do we process your information?</h4>
            <p>
              <strong>In short:</strong>We process your information to provide,
              improve, and administer our services, communicate with you, for
              security and fraud prevention, and to comply with law. We may also
              process your information for other purposes with your consent. We
              process your information only when we have a valid legal reason to
              do so.
            </p>
            <p>
              <strong>
                We process your personal information for a variety of reasons,
                depending on how you interact with our services, including:
              </strong>
            </p>
            <p>
              <strong>
                To facilitate account creation and authentication and otherwise
                manage user accounts.
              </strong>
            </p>
            <p>
              <strong>To respond to user inquiries support to users.</strong>
            </p>
            <p>
              <strong>To enable user-to-user communication.</strong>
            </p>
          </div>

          <div className="storage">
            <h4444 className="alumni-sans">
              How long do we keep your information?
            </h4444>
            <p>
              <strong>In Short: </strong>We keep your information for as long as
              necessary to fulfill the purposes outlined in this privacy notice
              unless otherwise required by law.
            </p>
            <p>
              We will only keep your personal information for as long as it is
              necessary for the purposes set out in this privacy notice, unless
              a longer retention period is required or permitted by law (such as
              tax, accounting, or other legal requirements). No purpose in this
              notice will require us keeping your personal information for
              longer than the period of time in which users have an account with
              us.
            </p>
            <p>
              When we have no ongoing legitimate business need to process your
              personal information, we will either delete or anonymize such
              information, or, if this is not possible (for example, because
              your personal information has been stored in backup archives),
              then we will securely store your personal information and isolate
              it from any further processing until deletion is possible.
            </p>
            <h5 className="alumni-sans">
              How do we keep your information safe?
            </h5>
            <p>
              <strong>In short:</strong> We aim to protect your personal
              information through a system of organizational and technical
              security measures.
            </p>
            <p>
              We have implemented appropriate and reasonable technical and
              organizational security measures designed to protect the security
              of any personal information we process. However, despite our
              safeguards and efforts to secure your information, no electronic
              transmission over the Internet or information storage technology
              can be guaranteed to be 100% secure, so we cannot promise or
              guarantee that hackers, cybercriminals, or other unauthorized
              third parties will not be able to defeat our security and
              improperly collect, access, steal, or modify your information.
              Although we will do our best to protect your personal information,
              transmission of personal information to and from our Services is
              at your own risk. You should only access the Services within a
              secure environment.
            </p>
          </div>

          <div className="tracking">
            <h6 className="alumni-sans">Data tracking</h6>
            <p>
              <strong>In short:</strong>We may use cookies and other tracking
              technologies to collect and store your information
            </p>
          </div>

          <div className="opt-out">
            <h7 className="alumni-sans">Opt-out</h7>
            <p>
              <strong>In short: </strong> You have the right to opt out of
              certain uses of your personal information.
            </p>
          </div>
        </div>
      </div>

      <footer>
        <div className="container">
          <p>&copy; 2024 SLO Study Sonar. All Rights Reserved.</p>
        </div>
      </footer>
    </body>
  );
}

export default PrivacyPolicy;
