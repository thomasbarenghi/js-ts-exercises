export const leetcodeExercise = () => {
  const map = (arr: number[], fn: (n: number, i: number) => number): number[] => {
    const newArr: number[] = []

    for (let index = 0; index < arr.length; index++) {
      newArr.push(fn(arr[index], index))
    }

    return newArr
  }

  const plusone = (n: number) => n + 1

  console.log(map([1, 2, 3, 4], plusone))
}
