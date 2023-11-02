export const wordFrequencyCounterExercise = () => {
  const wordFrequencyCounter = (paragraph: string) => {
    const arr = paragraph.toLowerCase().split(' ')
    const freq: any = {}
    for (const iterator of arr) {
      freq[iterator] = arr.filter((item) => item === iterator).length
    }
    return freq
  }

  const freq = wordFrequencyCounter('el perro salta sobre el perro')
  console.log(freq)
}
