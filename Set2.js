/**  1. Create an object person with two properties, "name" and "age" and then updates the "age" property to a new value. Initial age should be 30.


 console.log(person.age) // Output: 35 
 
 */
const person = {
  name: "kunal",
  age: 30,
};

person.age = 35;

// console.log(person);

/**  2. Write a function that takes an object car and returns true if the car is a sports car (i.e. has a
 horsepower property greater than or equal to 300)

 const car1 = { make: 'Porsche', model: '911', horsepower: 450 }
 const car2 = { make: 'Toyota', model: 'Camry', horsepower: 200 }
 console.log(isSportsCar(car1)) // true
 console.log(isSportsCar(car2)) // false */

const car1 = { make: "Porsche", model: "911", horsepower: 450 };
const car2 = { make: "Toyota", model: "Camry", horsepower: 200 };

const isSportsCar = (car) => {
  if (car.horsepower >= 300) {
    return true;
  }
  return false;
};

// console.log(isSportsCar(car1));

/**  3. Write a function that takes an object person and a number num as arguments and returns true if the person's age plus num is greater than 21. Otherwise, it should return false.
 * 

 const person1 = { name: 'Ajay', age: 20 }
 console.log(isEligible(person1, 1)) // false
 console.log(isEligible(person1, 2)) // true */

const person1 = { name: "Ajay", age: 20 };

const isEligible = (person, num) => {
  if (person.age + num > 21) {
    return true;
  }
  return false;
};

// console.log(isEligible(person1,20));

/**  4. Write a function that takes an object blog and returns true if the blog has more than 1000 views (i.e. has a views property greater than 1000)


 const blog1 = {
  title: 'How to Learn JavaScript',
  author: 'John Doe',
  views: 1430,
 }
 const blog2 = {
  title: '10 Reasons to Start a Blog',
  author: 'Jane Smith',
  views: 500,
 }

 console.log(getViews(blog1)) // true
 console.log(getViews(blog2)) // false
 
 */

const blog1 = {
  title: "How to Learn JavaScript",
  author: "John Doe",
  views: 1430,
};
const blog2 = {
  title: "10 Reasons to Start a Blog",
  author: "Jane Smith",
  views: 500,
};

const getViews = (blog) => {
  if (blog.views > 1000) {
    return true;
  }
  return false;
};

// console.log(getViews(blog1));

/**  5. Swap the values of two variables using array destructuring.

let a = 1
 let b = 2


 console.log(a) // 2
 console.log(b) // 1 */

let a = 1;
let b = 2;

[a, b] = [b, a];

// console.log(a);

/**  6. Convert this function into ES6 with least amount of characters.
 
function add(a = 30, b = 0) {
     return a + b
 }
 console.log(add(2, 3)) 
 */

const add = (a = 30, b = 0) => a + b;
//  console.log(add());

/** 

7. Write an ES6 function combineObjects with least amount of characters which merges two objects into one.

 const obj1 = { a: 1, b: 2 }
 const obj2 = { c: 3, d: 4 }
 const combinedObj = combineObjects(obj1, obj2)
 console.log(combinedObj)
 // Expected Output: {a: 1, b: 2, c: 3, d: 4} 
  */

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const combineObjects = (object1, object2) => {
  return { ...obj1, ...obj2 };
};

// console.log(combineObjects(obj1, obj2));

/** 8. Convert the function getData, into an ES6 function with last amount of characters.
 
Hint: Destructuring
 function getData(person) {
 const name = person.name
 const address = person.address.city
 console.log(name) // John Doe
 console.log(address) // New York
 }
 const person = {
  name: 'John Doe',
  address: {
    city: 'New York',
    state: 'NY',
 },
 }
 getData(person) */

const person2 = {
  name: "John Doe",
  address: {
    city: "New York",
    state: "NY",
  },
};
const getData = ({ name, address }) => {
  console.log(name);
  console.log(address);
};

// getData(person2);

/** 9. Write a function that takes a string as input and returns the string in all uppercase letters.

 console.log(stringToUpperCase('hello')) // "HELLO" 
 
 */

const stringToUpperCase = (name) => name.toUpperCase();

// console.log(stringToUpperCase("hello"));

/**  10. Write a function that takes two strings as input and concatenates them together.
 // Your ES6 code here
 console.log(concatenateStrings('hello', 'world')) // "helloworld"
 
 */

const concatenateStrings = (str1, str2) => str1 + str2;
const concatenateStrings2 = (str1, str2) => str1.concat(str2);
// console.log(concatenateStrings2("hello", "world"));

/** 11. Write a function that takes an array and returns the last element in the array.


console.log(lastElement([1, 2, 3, 4, 5])) // 5 */

const lastElement = (arr) => arr[arr.length - 1];
// console.log(lastElement([1, 2, 3, 4, 5]));

/**  12. Write a function that takes an array and returns the first element of the array.


 console.log(firstElement([1, 2, 3, 4, 5])) // 1 */

const firstElement = (arr) => arr[0];
// console.log(firstElement([1, 2, 3, 4, 5]));

/** 13. Write a function that takes an array and a number and returns the sum of first element and the
 number.


 console.log(sumFirstElement([1, 2, 3], 5)) // 6 */

const sumFirstElement = (arr, num) => {
  return arr[0] + num;
};

// console.log(sumFirstElement([1, 2, 3], 5));

/**  14. Write a function that takes an array and returns the sum of first and last element.


 console.log(sumFirstAndLast([1, 2, 3, 4, 8])) // 9 */

const sumFirstAndLast = (arr) => {
  return arr[0] + arr[arr.length - 1];
};
// console.log(sumFirstAndLast([1, 2, 3, 4, 8]));

/**  15. Write a function that takes an object representing a person's information (name, age, occupation) and returns a template literal that includes the person's name and age in a
 sentence.


 const person1 = { name: 'John', age: 25, occupation: 'Software Engineer' }
 const person2 = { name: 'Jane', age: 45, occupation: 'Data Analyst' }
 console.log(personInfo(person1)) // Expected output: "John is 25 years old."
 console.log(personInfo(person2)) // Expected output: "Jane is 45 years old." */

 const person3 = { name: "John", age: 25, occupation: "Software Engineer" };
const personInfo = ({ name, age }) => `${name} is ${age} years old. `;
// console.log(personInfo(person3));
