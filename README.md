# 03 JavaScript: Password Generator

This application was created to generate a random password based on criteria a user has selected by modifying a starter code. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by the included JavaScript code. I have tried to keep the user interface clean, polished and responsive, ensuring that it adapts to multiple screen sizes.

The password can include special characters. If you’re unfamiliar with these, see this [list of Password Special Characters from the OWASP Foundation](https://www.owasp.org/index.php/Password_special_characters).

## Objectives

```
+ Randomly generate a password that meets certain user-reqeusted criteria
+ Generate passwords to be inclusive of special characters (OWASP Foundation) where reqeusted
+ Allow for users to create strong passwords for greater account security
+ Ensure user experience is intuitive and easy to navigate by providing a clean & polished look.


```

## Target Design

The following image shows the web application's appearance and functionality:

![password generator demo](./Assets/03-javascript-homework-demo.png)

### Overview of Code Functionality

1. Application's "Generate Password" button function correctly.

2. Application's 'prompt' feature successfully creates pop-up to request password criteria.

3. Application's criteria parameters are set to be a minimum of 8 characters long but no more than 128 characters maximum.

4. Application accurately registers user input for password criteria (ie lowercase, uppercase, numeric, and/or special characters), and validates response to include in generated password.

5. Application successfully generates a password that matches the selected criteria and displays the password on the page, free of errors at the front (on-screen to user) or back-end (in console) of web page.

### Usability

* Click on "Generate Password."

* Enter password criteria when prompted (*ie lowercase, uppercase, numeric, and/or special characters*).

* Password will be generated and displayed directly on web page for you to note or copy/paste into desired application/website :)

* **NOTE:** Minimum length of password is 8 characters and Maximum length is 128 characters.