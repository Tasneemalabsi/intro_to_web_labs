# Fetch Method in JavaScript

## Objective: To help web development students understand how to use the Fetch API in JavaScript to make HTTP requests and handle responses.

### We want to create an age predictor, it predicts the age of a person based on their name.
    ***Note: the predictions may not be accurate or even close, it's just a game***
## Task:

1. Go to agify API: [agify.io](https://agify.io/) and find the endpoint for the API
2. create a form with one input field to allow the user to enter their name.
3. When the user submits the form, render the prediction of the person's age along with their name. As shown in the following image: 

![API](img\apiform.PNG)

### Notes:
-  The user cannot submit the form without entering a value in the input field.
-  If the API couldn't predict their age (the response has null for the age), tell the user to try again with a valid name and do not show the null response:

![failed](img\failedApi.PNG)