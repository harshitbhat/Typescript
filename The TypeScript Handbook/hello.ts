function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date}`);
}

greet('Harshit', new Date());

/* -------------------------------------------------------------------------- */
/*                                noImplicitAny                               */
/* -------------------------------------------------------------------------- */
// Recall that in some places, TypeScript doesn’t try to infer any types for us and instead falls back to the most lenient type: any.
// This isn’t the worst thing that can happen - after all, falling back to any is just the plain JavaScript experience anyway.
// However, using any often defeats the purpose of using TypeScript in the first place.
// The more typed your program is, the more validation and tooling you’ll get, meaning you’ll run into fewer bugs as you code.
// Turning on the noImplicitAny flag will issue an error on any variables whose type is implicitly inferred as any.

/* -------------------------------------------------------------------------- */
/*                              strictNullChecks                              */
/* -------------------------------------------------------------------------- */
// By default, values like null and undefined are assignable to any other type.
// This can make writing some code easier, but forgetting to handle null and undefined is the cause of countless bugs in the world - some consider it a billion dollar mistake!
// The strictNullChecks flag makes handling null and undefined more explicit, and spares us from worrying about whether we forgot to handle null and undefined.
