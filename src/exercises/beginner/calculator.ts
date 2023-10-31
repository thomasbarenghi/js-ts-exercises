export const calculatorExercise = () => {
  class Calculator {
    add(a: number, b: number): number {
      return a + b
    }

    subtract(a: number, b: number): number {
      return a - b
    }

    multiply(a: number, b: number): number {
      return a * b
    }

    divide(a: number, b: number): number {
      return a / b
    }
  }

  const calculator = new Calculator()

  console.log(calculator.add(1, 2))
  console.log(calculator.subtract(1, 2))
  console.log(calculator.multiply(1, 2))
  console.log(calculator.divide(1, 2))
}
