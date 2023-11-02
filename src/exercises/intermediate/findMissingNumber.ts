export const findMissingNumberExercise = () => {
  const findMissingNumber = (arr: number[]): number[] => {
    for (let index = 0; index < arr.length; index++) {
      if (!arr[index + 1]) { break }
      if (arr[index] + 1 !== arr[index + 1]) arr.splice(index + 1, 0, arr[index] + 1)
    }
    return arr
  }

  const incArr = [1, 2, 3, 6, 7, 8, 10]
  const fullArr = findMissingNumber(incArr)
  console.log(fullArr)
}
