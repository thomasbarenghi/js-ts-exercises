export const calculateAverageExercise = () => {
  const calculateAverage = (arr: number[]) => {
    let suma = 0
    for (const iterator of arr) {
      suma = suma + iterator
    }

    return suma / arr.length
  }

  const average = calculateAverage([10, 8, 7, 1])
  console.log(average)
}
