// Primitives

let age: number;

age = 12;
age = 19.34;

// age = '89';
// Error: Type 'string' is not assignable to type 'number'.ts(2322)

let userName: string;

userName = 'Max';

let isInstructor: boolean;
isInstructor = true;

// Complex types
let hobbies: string[];
let marks: number[];
let present: boolean[];

let person: {
  name: string;
  age: number;
};

person = {
  name: 'Harshit',
  age: 26,
};

// Error
// person {
//     isEmployed: false
// }

// to store array of persons
let people: {
  name: string;
  age: number;
}[];

// Type inference
// No need to define type in terms of variables.
// It does that automatically.
// Unnecessary to add the type

let course: string | number | boolean = 'React and Angular';

course = 299;

course = false;

// Type Alias

type Person = {
  name: string;
  id: number;
};

let man: Person;

man = {
  name: 'Harshit',
  id: 559,
};

// Function and types

function add(a: number, b: number): number {
  return a + b;
}

function printOutput(value: any): void {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

// Classes and interfaces

class Student {
  //   firstName: string;
  //   lastName: string;
  //   age: number;
  //   private courses: string[];

  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    private courses: string[]
  ) {}

  enroll(courseName: string) {
    this.courses.push(courseName);
  }

  listCourses() {
    return this.courses.slice();
  }
}

interface Human {
  firstName: string;
  lastName: string;

  greet: () => void;
}

let harshit: Human;

harshit = {
  firstName: 'Harshit',
  lastName: 'Bhat',
  greet() {
    console.log(this.firstName + this.lastName);
  },
};
