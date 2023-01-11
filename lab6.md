## Write a JavaScript function for each of these questions:
1. Let the function parameter be an array objects, for example see the following array:
    ```
    cities = [{
        name:"Amman",
        country:"Jordan",
        capital: true
    },
    {
        name:"Jeddah",
        country:"Saudi Arabia",
        capital: false
    },
    {
        name:"Tokyo",
        country: "Japan",
        capital: true
    }]
    ```
    - iterate through the array and push all of the cities names to a new array and return it . 
    - Example output: ["Amman","Jeddah","Tokyo"]
2. let the function parameters be an object and a string (property), and check if the property exists in the given object, return true if the object contains the property and false if it does not.
    
    Example : Input => book = {name:"Think And Grow Rich", author:"Napoleon Hill", releaseDate:1937}, 'author'
              output: true

## Write a program to answer the following questions:
1. Given The following constructor function:

```
function Person (name,gender, birthYear){
    this.name = name;
    this.gender = gender;
    this.birthYear = birthYear;
}
```
add a method which applies to all of the objects that calculates the age of the person and returns their age and true if they are an adult (+ 18), false otherwise.

2. create a constructor function and call it Animal then: 
- Add following properties to it:
        - name
        - type
        - age
        - isAdopted (boolean)
        - favoriteFood (array)
        - a method that checks the animal's favorite food and if they do not have any, return null, otherwise return how many favorite food do they have
- add all of the objects of type Animal to an array, then add a function  with this array as an input then count the animals that are pets (their type is either a cat, a dog or a rabbit). 

    
