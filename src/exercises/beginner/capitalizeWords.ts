export const capitalizeWordsExercise = () => {
  const capitalizeWords = (para: string) => {
    const words = para.split(' ')
    const capitalized = []
    for (const iterator of words) {
      capitalized.push(iterator.charAt(0).toUpperCase() + iterator.slice(1))
    }

    return capitalized.join(' ')
  }

  const capitalized = capitalizeWords('javascript is amazing')
  console.log(capitalized)
}
