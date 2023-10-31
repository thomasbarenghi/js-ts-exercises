export const isPalindromeExercise = () => {
  const isPalindrome = (word: string) => {
    const reversed = word.toLowerCase().split('').reverse().join('')
    word = word.toLowerCase()
    return Boolean(reversed === word)
  }

  const palindrome = isPalindrome('oso')
  console.log(palindrome)
}
