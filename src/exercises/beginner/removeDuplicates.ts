export const removeDuplicatesExercise = () => {
  const removeDuplicates = (arr: number[]) => {
    const newArr: number[] = []
    for (const iterator of arr) {
      const found = arr.filter((element) => element === iterator)
      if (!newArr.includes(found[0]))newArr.push(found[0])
    }
    return newArr
  }

  const removeDuplicatesSet = (arr: number[]) => {
    const uniqueSet = new Set<number>()
    for (const iterator of arr) {
      uniqueSet.add(iterator)
    }
    return Array.from(uniqueSet)
  }

  const withoutDuplicates = removeDuplicates([1, 2, 3, 4, 4, 4, 4, 2, 2, 1, 7])
  const withoutDuplicatesSet = removeDuplicatesSet([1, 2, 3, 4, 4, 4, 4, 2, 2, 1, 7])
  console.log(withoutDuplicates)
  console.log(withoutDuplicatesSet)
}
