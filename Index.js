/**  1. Write a function that takes a user's age and determines if they are old enough to vote (age 18 or older).


 console.log(isEligibleToVote(20)) // Eligible to vote
 console.log(isEligibleToVote(18)) // Eligible to vote
 console.log(isEligibleToVote(17)) // Not eligible to vote
 
 */

const isEligibleToVote = (age) => {
  if (age >= 18) return "Eligible to vote";
  else return "Not eligible to vote";
};

// console.log(isEligibleToVote(19));

/**  2. Write a function that takes two numbers as input and determines which one is greater.

 console.log(isGreater(2, 5)) // 5 is greater than 2
 console.log(isGreater(10, 5)) // 10 is greater than 5
 
 */

const isGreater = (num, num2) => {
  if (num > num2) return `${num} is greater than ${num2}`;
  else return `${num2} is greater than ${num}`;
};

// console.log(isGreater(2,5));

/**  3. Write a function that takes a number as input and determines if it is positive or negative.


 console.log(checkNum(9)) // Positive Number
 console.log(checkNum(-8)) // Negative Number
 console.log(checkNum(22)) // Positive Number 
 
 */

const checkNum = (num) => {
  if (num >= 0) {
    return "Positive Number";
  } else {
    return "Negative Number";
  }
};

//  console.log(checkNum(11));

/**  4. Write a function that takes a number as input and determines if it is even or odd.

 console.log(isEvenOdd(5)) // Odd Number
 console.log(isEvenOdd(8)) // Even Number
 console.log(isEvenOdd(10)) // Even Number
 
 */

const isEvenOdd = (num) => {
  if (num % 2 == 0) {
    return "Even Number";
  } else {
    return "Odd Number";
  }
};

// console.log(isEvenOdd(8));

/**  5. Write a function that takes a string as input and determines if it contains the letter 'a' or ‘A’.

 console.log(checkForAlphabetA('Kunal')) // Includes a
 console.log(checkForAlphabetA('Jeep')) // Does not include a
 console.log(checkForAlphabetA('Jane')) // Includes a 
 
 */

const checkForAlphabetA = (name) => {
  if (name.includes("a") || name.includes("A")) {
    return "Includes a";
  } else {
    return "Does not include a";
  }
};

//  console.log(checkForAlphabetA("kunal"));

/**  6. Write a function that takes a string as input and determines if it is longer than 5 characters.

 console.log(checkLength('Programming')) // more than 5 characters
 console.log(checkLength('Jeep')) // less than 5 characters */

const checkLength = (name) => {
  if (name.length > 5) {
    return "more than 5 characters";
  } else {
    return "less than 5 characters";
  }
};

// console.log(checkLength("kunal"));

/** 7. Write a function that takes a number as input and determines if it is between 1 and 10.

 console.log(isBetweenOneAndTen(5)) // true
 console.log(isBetweenOneAndTen(11)) // false
 
 */

const isBetweenOneAndTen = (num) => {
  if (num >= 1 && num <= 10) {
    return true;
  }
  return false;
};

// console.log(isBetweenOneAndTen(5));

/** 8. Write a function that takes a string as input and determines if it contains the word "hello".


 console.log(isHelloPresent('Hello World')) // true
 console.log(isHelloPresent('World')) // false
  */

const isHelloPresent = (name) => {
  if (name.includes("hello") || name.includes("Hello")) {
    return true;
  }
  return false;
};

// console.log(isHelloPresent("Hello World"));

/**  9. Write a function that takes a number as input and determines if it is a multiple of 3.

 console.log(isMultipleOfThree(5)) // false
 console.log(isMultipleOfThree(9)) // true */

const isMultipleOfThree = (num) => {
  if (num % 3 == 0) {
    return true;
  }
  return false;
};

// console.log(isMultipleOfThree(8));

/**  10. Write a function which takes in a number as input and returns it after multiplying by 10.

 console.log(multiplyByTen(20)) // 200
 console.log(multiplyByTen(40)) // 400  */

const multiplyByTen = (num) => {
  return num * 10;
};

// console.log(multiplyByTen(9));

/**  11. Console individual values of the product object using object destructuring.
 const product = {
  title: 'iPhone',
  price: 5999,
  description: 'The iPhone is a smartphone developed by Apple',
 }


 console.log(title) // iPhone
 console.log(price) // 5999
 console.log(description) // The iPhone is a smartphone developed by Apple */

const product = {
  title: "iPhone",
  price: 5999,
  description: "The iPhone is a smartphone developed by Apple",
};

const { title, price, description } = product;

// console.log(title);
// console.log(price);
// console.log(description);

/** 12. Create an object book with properties title, author, and pages. Create a function getBookDetails
 that takes a book object as a parameter and returns if the book has more than 100 pages.

 
 console.log(getBookDetails(book)) // logs 'true' if the pages are above 100
 console.log(getBookDetails(book)) // logs 'false' if the pages are 100 or below
  
 */

const book = {
  title: "Harry Potter",
  auther: "hum",
  pages: 200,
};

const getBookDetails = (book) => {
  if (book.pages > 100) {
    return true;
  }
  return false;
};

// console.log(getBookDetails(book));

/**  13. Create a function changeOccupation that takes an object person and a string newOccupation as parameters, and changes the occupation property of the person object to the newOccupation.

 Log the person object to the console before and after calling the function. */

const person = {
  name: "kunal",
  age: 20,
  occupation: "student",
};
// console.log(person);
const changeOccupation = (person, newOccupation) => {
  return (person.occupation = newOccupation);
};

// console.log(changeOccupation(person, "Software Developer"));
// console.log(person);

/** 14. Given an array numbers containing the numbers 1, 2, and 3. Use array destructuring to log each
 number to the console.
 const numbers = [1, 2, 3]

 console.log(a) // logs 1 to the console
 console.log(b) // logs 2 to the console
 console.log(c) // logs 3 to the console */

const numbers = [1, 2, 3];

const [a, b, c] = numbers;
// console.log(a);
// console.log(b);
// console.log(c);

/**  15. Convert the given function into ES6 with least amount of characters.
 function defaultParamsFunc(a, b, c) {
 if (c === undefined) {
    c = 4
 }
 return a * b * c
 }

 console.log(defaultParamsFunc(3, 1)) // 12
 console.log(defaultParamsFunc(3, 10)) // 120
 
 */

const defaultParamsFunc = (a, b, c) =>
  c === undefined ? a * b * 4 : a * b * c;


console.log(defaultParamsFunc(10,20));