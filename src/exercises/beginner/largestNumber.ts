export const findLargestNumberExercise = () => {
  const arr = [1, 4, 8, 10, 86, 2]

  const findLargestNumberWithMath = (numbers: number[]) => Math.max(...numbers)

  const findLargestNumberWithForOf = (numbers: number[]) => {
    let largest
    for (const iterator of numbers) {
      if (!largest || iterator > largest) { largest = iterator }
    }
    return largest
  }

  const largestMath = findLargestNumberWithMath(arr)
  const largestForOf = findLargestNumberWithForOf(arr)
  console.log(largestMath)
  console.log(largestForOf)
}
