Feature: VRS Buynamics

  Scenario Outline: As a user, I can log into the VRS platform

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see message and date saying <message>

    Examples:
      | username | password             | date       | message                                 |
      | admin    | Welkom01             | 20-01-2023 | Based on prefab scorecards generated on |
