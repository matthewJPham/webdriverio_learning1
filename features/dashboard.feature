Feature: VRS Buynamics - Dashboard

  Scenario Outline: As a user, I can see my username in Dashboard after signning in

    Given I am on the login page
    When I login with <username> and <password>
    Then I should the username saying <name>

    Examples:
      | username   | password  | name        |
      | autouser1  | Welkom01  | Auto User 1 |