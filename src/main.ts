import * as exercises from './exercises'

for (const key in exercises) {
  if (typeof exercises[key as keyof typeof exercises] === 'function') {
    exercises[key as keyof typeof exercises]() // add a type assertion to let TypeScript know that the key is a keyof typeof exercises
  }
}
