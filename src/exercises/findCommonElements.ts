export const findCommonElementsExercise = () => {
  const findCommonElements = (arr1: number[], arr2: number[]) => {
    const common = []

    for (const iterator of arr1) {
      if (arr2.includes(iterator)) common.push(iterator)
    }

    return common
  }

  const common = findCommonElements([1, 2, 3], [3, 4, 5, 2, 3])
  console.log(common)
}
