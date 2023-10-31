// Revisar
export const findLargestPrimeExercise = () => {
  const findLargestPrime = (numb: number) => {
    for (let x = numb - 1; x >= 2; x--) {
      let isPrime = true
      for (let i = 2; i <= Math.sqrt(x); i++) {
        if (x % i === 0) {
          isPrime = false
          break
        }
      }
      if (isPrime) {
        return x
      }
    }
    return undefined
  }

  const prime = findLargestPrime(25)
  console.log(prime)
}
