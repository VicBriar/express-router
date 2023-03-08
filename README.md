# express-router
Create Express routers using express.Router

[X] Create a new directory dedicated to your express routers

[X] Copy the users array into the users router file and the the fruits array into the fruits router file.

[] Define an express router for the users route. One for getting all the users on the list of users and one for getting a particular user on the list of users (e.g. /users/2 returns the 2nd user).

[X] Define an express router for the fruits route. One for getting all the fruits on the list of fruits and one for getting a particular fruit on the list of fruits (e.g. /fruits/2 returns the 2nd fruit).

[X] Use your express routers within your main express server

[X] Test your endpoints using Postman

[X] POST Users
[X] PUT Users
[X] DELETE Users
[X] POST Fruits
[X PUT Fruits
[X] DELETE Fruits

------
[X] Run npm install to install the necessary dependencies for this assignment

[X] Require the “express-validator” package in your users router.

[X] Import both the check and validationResult functions from the Express Validator package`

[X] In the POST request when creating a user, include a parameter in between your endpoint and your callback function. This parameter should check for the “name” field in the request body. The name field in the request body should NOT BE EMPTY or be just whitespace.

    Validate the result of your request object, and store that reference in a variable named errors.

    Create a condition that checks if there are errors caught in the validation result, respond with the JSON which contains:

    A key named error

    A value containing the list of errors caught

    In any other case, respond with the list of all the users including the newly added user


[x] In the POST request when creating a fruit, include a parameter in between your endpoint and your callback function. This parameter should check for the “color” field in the request body. The color field in the request body should NOT BE EMPTY or be just whitespace.

    Validate the result of your request object, and store that reference in a variable named errors.


    Create a condition that checks if there are errors caught in the validation result, respond with the JSON which contains:

    A key named error

    A value containing the list of errors caught

    In any other case, respond with the list of all the users including the newly added user

    Test your endpoints using Postman. Try to add a user without a name, or a fruit without a color.