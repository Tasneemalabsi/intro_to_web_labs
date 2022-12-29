# Part 1:

## Write a javascript program for the following cases: 


1. Reverse an array without using the built-in reverse() method, for example, this array => [7,5,18,6,4,19,15,21,24].   
    - Stretch Goal: Bonus point if you solve it without using another declared array.

2. Given an array, let the array be [5,7,9,12,20,true,10,45,1,15,'hello world']
    - declare a new empty array
    - iterate through the array elements, if the element is divisible by 3, add the word 'Fizz' to the new array
    - if the element is divisible by 5, add the word 'Buzz' to the new array 
    -  if the element is divisible by 3 and 5, add the word 'FizzBuzz' to the array
    - if the element is not divisible by 3 or 5, ignore it and move on to the next element.
    - if the element is not a number but can be converted it to a number, convert it then do the above calculations.
    - if the element cannot be converted to a number, log the message "Invalid Input"

3. Given a string, let the string be "He*llo17 wor++ld3,"
    - iterate through the string characters, if the character is an english letter, convert it to its ASCII code and then push the ASCII code to a new array 
    - if the character is a number, push it directly to the new array as a number (not as a string)
    - if the character cannot be converted to a number and doesn't have an equivalent ASCII code, ignore it.
    - sort the resulting array in a descending order.

### Note: ASCII code is a 7-bit character code where every single bit represents a unique character, to know the ASCII code for english letters, visit this link:  [ASCII Code](http://sticksandstones.kstrom.com/appen.html)

# Part 2:
 ## Open your code for the E-learning System and do the following:
 - when the user first enters the main page, give them a prompt that asks them for their name, and when they enter it, give them a welcoming message with their name in it.
 - when they go to the sign up page, give them a short quiz with prompts so they cannot see the sign up page unless they finish the quiz, the questions should be like (this is a sample for the questions, you can use it or change it for any question you want but remember to keep the first question or change it to a similar question ):
    1. first question: enter a number between 1 and 100 that is divisible by 3,5,10 and 15.
    2. second question: What element does 'O' represent on the periodic table?
    3. third question: what's the capital of Italy ?
    4. fourth question: How many Continents are there? *Note: if their answer was close to the right answer by 1, let them know that they were close and give them a half point*
    - last question: How many players are in a soccer team?
    - calculate their score and let them know if they passed or failed
    *Note: each question has one point, they can get half a point on one of the questions, or more (up to you)*
- when they go to the courses page, ask them to rate the website from 1 to 5, if they enter an invalid number, let them try again and based on their rating, print, at the bottom of the page, a star image, the number of the images should equal to the user's rating .
 




