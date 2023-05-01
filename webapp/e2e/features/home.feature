Feature: Access the app

  Scenario: First time a new user enters the app
    Given User has never entered to the app
    When User sees all main page elements
    Then User can interact with the app