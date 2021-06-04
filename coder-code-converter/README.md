

# TDD with Node.js

## User Stories

### Describing the authentication

##### As a user, I want to login to the website, so that I can use registered user specific functionality.

* Happy path: successfully login
Given: user goto the login page
When: user input correct username and password and submit
Then: user logged in with a successful message

* username or password missing
Given: user goto the login page
When: user does not input username or password and submit
Then: user should see an error message with “username or password missing”

* username or password incorrect
Given: user goto the login page
When: user input wrong username or password and submit
Then: user should see an error message with “username or password is not correct”


### Describing the Color Converter

##### As a user, I can convert a specific color to RGB/HEX to HEX/RGB.

##### RGB to HEX conversion

* Happy path: successfully conversion
Given: user is logged
When: user send RGB color format <code>/RGB/25500</code>
Then: user should receive a HEX color format <code>{ hex: FF0000 }</code>

* color format is incorrect
Given: user is logged
When: user send invalid RGB color format <code>/RGB/25500x</code>
Then: user should see an error message with "invalid format"

* unauthorized request
Given: user isn't logged
When: user send RGB color format <code>/RGB/25500</code>
Then: user should see an error message with "unauthorized user"

##### HEX to RGB conversion

* Happy path: successfully conversion
Given: user is logged
When: user send HEX color format <code>/HEX/FF0000</code>
Then: user should receive a RGB color format <code>{ rgb: 25500 }</code>

* color format is incorrect
Given: user is logged
When: user send invalid HEX color format <code>/HEX/FF0000x</code>
Then: user should see an error message with "invalid format"

* unauthorized request
Given: user isn't logged
When: user send HEX color format <code>/HEX/FF0000</code>
Then: user should see an error message with "unauthorized user"

## Technologies

- Node >=10
- Testing framework (jest, mocha, enzyme, etc..)