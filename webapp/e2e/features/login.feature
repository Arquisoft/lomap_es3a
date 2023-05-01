Feature: Login to an account

  Scenario: Displays login button when user is not logged in
    Given User is not logged in
    When User opens up the page
    Then User can see the login button

  Scenario: User goes to login page and can access to its selected provider login form
    Given User is not logged in
    When User opens up login page
    Then User is able to select a provider and be redirected to the login form

  Scenario: User logs into the app
    Given User is not logged in
    When User access to provider's login form
    Then User is logged in