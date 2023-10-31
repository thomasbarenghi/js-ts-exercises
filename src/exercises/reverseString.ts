export const reverseStringExercise = () => {
  const reverseString = (word: string) => {
    const reversed = []
    const wordSplitted = word.split('')

    for (const iterator of wordSplitted) {
      reversed.unshift(iterator)
    }

    return reversed.join('')
  }

  const reversed = reverseString('Hello, World!')
  console.log(reversed)
}
