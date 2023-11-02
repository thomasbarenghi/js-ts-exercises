export const flattenArrayExercise = () => {
  const flattenArray = (arr: any[]): any[] => arr.flat(Infinity)

  const nestedArray = [1, [2, 3], [4, [5, 6]]]
  const flattenedArray = flattenArray(nestedArray)
  console.log(flattenedArray)
}
