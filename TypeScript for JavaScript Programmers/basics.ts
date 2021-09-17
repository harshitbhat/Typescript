/*

From: TypeScript for JavaScript Programmers
Link: https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

*/

/* -------------------------------------------------------------------------- */
/*                               Defining Types                               */
/* -------------------------------------------------------------------------- */

// Object in JavaScript
const user = {
  name: 'Hayes',
  id: 0,
};

// You can explicitly describe this object’s shape using an interface declaration in TS:
interface User {
  name: string;
  id: number;
}

// You can then declare that a JavaScript object conforms to the shape of your new interface by using syntax like : TypeName after a variable declaration:
const userObj: User = {
  name: 'Hayes',
  id: 0,
};

// Since JavaScript supports classes and object-oriented programming, so does TypeScript. You can use an interface declaration with classes:

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const newUserObj: User = new UserAccount('Harshit Bhat', 3);

// You can use interfaces to annotate parameters and return values to functions:
function getAdminUser(): User {
  //...
  return user;
}

function deleteUser(user: User) {
  // ...
}

/*
There are already a small set of primitive types available in JavaScript,which you can use in an interface: 
    boolean, 
    bigint, 
    null, 
    number, 
    string, 
    symbol,  
    undefined, 

TypeScript extends this list with a few more, such as: 
    any (allow anything), 
    unknown (ensure someone using this type declares what the type is), 
    never (it’s not possible that this type could happen),  
    void (a function which returns undefined or has no return value).

*/

// You’ll see that there are two syntaxes for building types: Interfaces and Types.
// You should prefer interface.
// Use type when you need specific features.

/* -------------------------------------------------------------------------- */
/*                               Composing Types                              */
/* -------------------------------------------------------------------------- */

// With TypeScript, you can create complex types by combining simple ones.
// There are two popular ways to do so: with Unions, and with Generics.

//       |----------|
//       |  UNIONS  |
//       |----------|

// With a union, you can declare that a type could be one of many types. For example, you can describe a boolean type as being either true or false:

type MyBool = true | false;

// A popular use-case for union types is to describe the set of string or number literals that a value is allowed to be:

type WindowStates = 'open' | 'closed' | 'minimised';
type LockStates = 'locked' | 'unlocked';
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

// Unions provide a way to handle different types too. For example, you may have a function that takes an array or a string:

function getLength(obj: string | []): number {
  return obj.length;
}

//       |------------|
//       |  GENERICS  |
//       |------------|

// Generics provide variables to types. A common example is an array. An array without generics could contain anything. An array with generics can describe the values that the array contains.

type stringArray = Array<string>;
type numArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

// You can declare your own types that use generics:

interface BackPack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

declare const backPack: BackPack<string>;
const ret = backPack.get();
backPack.add('23');

/* -------------------------------------------------------------------------- */
/*                           Structural Type System                           */
/* -------------------------------------------------------------------------- */

// One of TypeScript’s core principles is that type checking focuses on the shape that values have.
// This is sometimes called “duck typing” or “structural typing”.
// In a structural type system, if two objects have the same shape, they are considered to be of the same type.

interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

const point = { x: 12, y: 20 };
logPoint(point);

// The point variable is never declared to be a Point type.
// However, TypeScript compares the shape of point to the shape of Point in the type-check.
// They have the same shape, so the code passes.

// The shape-matching only requires a subset of the object’s fields to match.
const point3 = { x: 12, y: 26, z: 89 };
logPoint(point3); // logs "12, 26"

const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect); // logs "33, 3"

// There is no difference between how classes and objects conform to shapes:
class VirtualPoint {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const newVPoint = new VirtualPoint(13, 56);
logPoint(newVPoint); // logs "13, 56"

// If the object or class has all the required properties, TypeScript will say they match, regardless of the implementation details.
