/** 1. Write an ES6 function that accepts an array of integers and returns the maximum element in the
 array. Avoid using in-built methods.


 let array = [4, 78, 8, 3, 6, 0, 12, 34]
 console.log(getMaxElement(array)) // 78  */

const getMaxElement = (arr) => {
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

// console.log(getMaxElement([4, 78, 8, 3, 6, 0, 12, 34]));

/** 2. Write an ES6 function that takes an array of numbers and returns the average of all the
 numbers. Avoid using in-built methods.


 console.log(calculateAverage([1, 2, 3, 4, 5])) // 3  */

const calculateAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

// console.log(calculateAverage([1, 2, 3, 4, 5]));

/**  3. write an ES6 function that takes an array of numbers and converts even numbers to odd
 numbers by adding 1 to that number.

 var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
 console.log(convertEvenToOdd(numArr))
 // [1, 3, 3, 5, 5, 7, 7, 9, 9]  */

const convertEvenToOdd = (arr) => {
  return arr.map((num) => (num % 2 == 0 ? num + 1 : num + 0));
};

// console.log(convertEvenToOdd([1, 2, 3, 4, 5, 6, 7, 8, 9]));

/**  4. write an ES6 function that takes an array of words and returns an array with all its elements
 whose length is greater than 5.


 var words = ['eat', 'sleep', 'code', 'repeat', 'community']
 console.log(filterWords(words)) // ["repeat", "community"] */

const filterWords = (words) => {
  const arr = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 5) {
      arr.push(words[i]);
    }
  }

  return arr;
};

var words = ["eat", "sleep", "code", "repeat", "community"];
//  console.log(filterWords(words));

/**  5. Write an ES6 function that takes an array of strings and returns a new array with each string
 capitalized.


 console.log(capitalizeWords(['eat', 'sleep', 'code', 'repeat']))
 // ["EAT", "SLEEP", "CODE", "REPEAT"] */

const capitalizeWords = (words) => {
  const captialWords = [];
  for (let i = 0; i < words.length; i++) {
    captialWords.push(words[i].toUpperCase());
  }
  return captialWords;
};

// console.log(capitalizeWords(["eat", "sleep", "code", "repeat"]));

/** 6. Write an ES6 function that takes an array of objects and a property name and returns a new
 array with only the values of that property. Avoid using in-built methods.


 console.log(
 getValues(
[
 { name: 'John', age: 21 },
 { name: 'Mary', age: 22 },
 { name: 'Peter', age: 23 },
 ],
 'name',
 ),
 ) // ["John", "Mary", "Peter"] */

const getValues = (object, property) => {
  const name = [];
  for (let i = 0; i < object.length; i++) {
    name.push(object[i][property]);
  }
  return name;
};

// console.log(
//   getValues(
//     [
//       { name: "John", age: 21 },
//       { name: "Mary", age: 22 },
//       { name: "Peter", age: 23 },
//     ],
//     "age"
//   )
// );

/**  7. Write an ES6 function that takes the users' details and returns the data with team ID. Avoid using in-built methods.

 const userData = { firstName: 'John', lastName: 'Dee' }
 console.log(podAndTeamAllocation(userData))
 // {firstName: 'John', lastName: 'Dee', teamId: 667543} */

const userData = { firstName: "John", lastName: "Dee" };

const podAndTeamAllocation = (userData) => {
  const teamId = 7665677;

  const newUser = { ...userData };
  newUser.teamId = teamId;
  return newUser;
};

// console.log(podAndTeamAllocation(userData));

/**  8. Write an ES6 function which checks if a student already has a team. If team is not given then
 add them to team “A” and return the object else do nothing and return the same object. Avoid
 using in-built methods.

 console.log(checkForTeam({ firstName: 'Penn', lastName: 'Ma' }))
 // {firstName: 'Penn', lastName: 'Ma', team: A}
 console.log(checkForTeam({ firstName: 'John', lastName: 'Dee', team: B }))
 // {firstName: 'John', lastName: 'Dee', team: B}
 console.log(checkForTeam({ firstName: 'Priya', lastName: 'Raj' }))
 // {firstName: 'Priya', lastName: 'Raj', team: A} */

const checkForTeam = (student) => {
  const newStudent = { ...student };
  newStudent.team = student.team || "A";
  return newStudent;
};

//  console.log(checkForTeam({ firstName: "John", lastName: "Dee" }));

/**  9. Destructure the following code to get the desired outputs. Avoid using in-built methods.
 const book = {
  title: 'JavaScript: The Definitive Guide',
  authors: [
 { name: 'David Flanagan', age: 49 },
 { name: 'Yukihiro Matsumoto', age: 57 },
 ],
  publisher: { name: "O'Reilly Media", location: 'CA' },
 }

 console.log(title) // JavaScript: The Definitive Guide
 console.log(author1) // David Flanagan
 console.log(author2) // Yukihiro Matsumoto
 console.log(publisherName) // O'Reilly Media */

const book = {
  title: "JavaScript: The Definitive Guide",
  authors: [
    { name: "David Flanagan", age: 49 },
    { name: "Yukihiro Matsumoto", age: 57 },
  ],
  publisher: { name: "O'Reilly Media", location: "CA" },
};

const {
  title,
  authors: [{ name: auther1 }, { name: auther2 }],
  publisher: { name: publisherName },
} = book;

// console.log(
//   `Title is ${title} and Auther1 is ${auther1} and Auhter2 is ${auther2} and Publisher is ${publisherName}`
// );

/**  10. Write an ES6 function that takes an array of objects and returns the sum of all ages.
 
 var array = [
 {
    name: 'Jay',
    age: 60,
 },
 {
    name: 'Gloria',
    age: 36,
 },
 {
    name: 'Manny',
    age: 16,
 },
 {
    name: 'Joe',
    age: 9,
 },
 ]
 console.log(sumOfAges(array)) // 121 */

  var array = [
    {
      name: "Jay",
      age: 60,
    },
    {
      name: "Gloria",
      age: 36,
    },
    {
      name: "Manny",
      age: 16,
    },
    {
      name: "Joe",
      age: 9,
    },
  ];

const sumOfAges = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].age;
  }
  return sum;
};


 console.log(sumOfAges(array));