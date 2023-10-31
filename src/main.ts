import * as exercises from './exercises'

for (const key in exercises) {
  if (typeof exercises[key as keyof typeof exercises] === 'function') {
    exercises[key as keyof typeof exercises]()
  }
}
