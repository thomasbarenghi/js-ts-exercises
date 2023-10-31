export const greetingsExercise = () => {
  const greetings = (greeting: string) => (name: string) => `${greeting} ${name}`
  const hello = greetings('Hello')
  console.log(hello('John'))
}
