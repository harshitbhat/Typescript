// Primitives: string, number, and boolean
// Arrays: To specify the type of an array like [1, 2, 3],
//         you can use the syntax number[]
//         also see this written as Array<number>

/* -------------------------------------------------------------------------- */
/*                                     any                                    */
/* -------------------------------------------------------------------------- */

// TypeScript also has a special type, any, that you can use whenever you don’t want a particular value to cause typechecking errors.

// When a value is of type any, you can access any properties of it (which will in turn be of type any), call it like a function, assign it to (or from) a value of any type, or pretty much anything else that’s syntactically legal:

let obj: any = { x: 0 };

// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
obj.foo();
obj();
obj.bar = 100;
obj = 'hello';
const n: number = obj;

// When you don’t specify a type, and TypeScript can’t infer it from context, the compiler will typically default to any.
// You usually want to avoid this, though, because any isn’t type-checked.
// Use the compiler flag noImplicitAny to flag any implicit any as an error.

/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */

// Parameter type annotation
function greet(name: string) {
  console.log('Hello, ' + name.toUpperCase() + '!!');
}

// Return Type Annotations
function getFavoriteNumber(): number {
  return 26;
}

/* -------------------------------------------------------------------------- */
/*                                Object Types                                */
/* -------------------------------------------------------------------------- */

// Optional Properties
function printName(obj: { first: string; last?: string }) {
  //...
}

printName({ first: 'Bob' });
printName({ first: 'Alice', last: 'Alison' });

// In JavaScript, if you access a property that doesn’t exist, you’ll get the value undefined rather than a runtime error.
// Because of this, when you read from an optional property, you’ll have to check for undefined before using it.

function printName(obj: { first: string; last?: string }) {
  // Error - might crash if 'obj.last' wasn't provided!
  console.log(obj.last.toUpperCase());

  // Object is possibly 'undefined'.
  if (obj.last !== undefined) {
    // OK
    console.log(obj.last.toUpperCase());
  }

  // A safe alternative using modern JavaScript syntax:
  console.log(obj.last?.toUpperCase());
}

/* -------------------------------------------------------------------------- */
/*                                 Union Types                                */
/* -------------------------------------------------------------------------- */

// A union type is a type formed from two or more other types, representing values that may be any one of those types. We refer to each of these types as the union’s members.

type WindowOpenStates = 'open' | 'closed' | 'minimised';
type LockDoorStates = 'locked' | 'unlocked';
type PositiveOddNumbersUnderFive = 1 | 3 | 5;
