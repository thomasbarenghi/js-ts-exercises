export const countVowelsExercise = () => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú']

  const countVowels = (word: string) => {
    let count = 0
    const wordSplitted = word.toLowerCase().split('')

    for (const iterator of wordSplitted) {
      if (vowels.includes(iterator)) count++
    }

    return count
  }

  const vowelsCount = countVowels('JavaScript is awesome')
  console.log(vowelsCount)
}
