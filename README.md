# HR-Management

This responsibility is to develop API using `Express` with `MySQL` database and make a company HR management like web application using `React` as frontend JavaScript Framework

## Backend Requirements

ES6/ES6+, Express, MySQL, Sequelize (optional)

## Frontend Requirements

React, Bootstrap (optional)

## Task Todo

1. Give the application a name of your choice
2. As a user, I want to add new employee to my company
    - Create an HTML form to add new employee
    - All the fields should be properly validated before adding
    - The validation errors should be displayed properly
    - The form should have a good UI and UX
3. As a user, I want to add multiple employees at once by upload a CSV file
    - Create an HTML form to select the CSV file
    - The form should support drag and drop file upload
    - The validation errors should be displayed properly
    - The form should have a good UI and UX
    - The CSV file should contain at least 3 columns: first name, last name, email address.
    - Ignore any other columns that might exist in the CSV
    - The application should add all the valid lines of the CSV file in the database as employees. For example: if the CSV file has 10 lines where line 3 is missing first name and line 7 has invalid email address, I want to see 8 employees added to my company by skipping these 2 lines.
    - After adding the employees from the CSV file, it should display how many employees were added and how many failed.
    - It’s not necessary to display the CSV lines that contain errors.
4. As a user, I want to see all the employees of the company
    - Create a table that lists all the employees added
    - The list should display 5 employees at a time
    - There should be pagination buttons below to go to previous/next pages.
    - The table should have a good UI and UX
5. As a user, I want to send email to one or more employees at a time from the application
    - From the table, I want to select employees using checkbox
    - Create an HTML form to compose email
    - The form should contain two fields: Subject, Body
    - The validation errors should be displayed properly
    - The form should have a good UI and UX
    - It’s not needed to send real emails. Using `https://mailtrap.io` or similar service will work just fine
6. It’s not required to add any login/signup module
 
## Entity structure

1. User
    - First name
    - Last name
    - Email address
2. CSV file
    - First name
    - Last name
    - Email address
    - ... (can be more)
3. Email
    - Subject
    - Body
