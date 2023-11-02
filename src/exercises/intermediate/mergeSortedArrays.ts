export const mergeSortedArraysExercise = () => {
  const mergeSortedArrays = (arr1: number[], arr2: number[]): number[] => arr1.concat(arr2).sort((a, b) => a - b)

  const mergedArray = mergeSortedArrays([5, 2, 1], [3, 4, 6])
  console.log(mergedArray)
}
