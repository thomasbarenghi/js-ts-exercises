import { v4 as uuidv4 } from 'uuid'

type Subjects = 'Math' | 'English' | 'Science'
type Grade = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
interface Calification {
  grade: Grade
  id: string
  subject: Subjects
}

class Student {
  name: string
  age: number
  califications: Calification[]
  id: string

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
    this.califications = []
    this.id = uuidv4()
  }

  addCalification = (grade: Grade, subject: Subjects) =>
    this.califications.push({
      id: uuidv4(),
      grade,
      subject
    })

  deleteCalificationById = (id: string) => {
    const index = this.califications.findIndex(calification => calification.id === id)
    if (index === -1) return 'Not Found'
    this.califications.splice(index, 1)
  }

  findCalificationById = (id: string) => this.califications.find(calification => calification.id === id)

  findCalificationByIdAndUpdate = (id: string, grade?: Grade, subject?: Subjects) => {
    const calif = this.califications.find(calification => calification.id === id)
    if (!calif) return 'Not Found'
    calif.grade = grade ?? calif.grade
    calif.subject = subject ?? calif.subject
    return calif
  }

  calculateAverage = () => {
    const sum = this.califications.reduce((acc, calification) => acc + calification.grade, 0)
    return sum / this.califications.length
  }
}

class School {
  name: string
  students: Student[]
  constructor(name: string) {
    this.name = name
    this.students = []
  }

  addStudent = (name: string, age: number) => this.students.push(new Student(name, age))

  deleteStudentById = (id: string) => {
    const index = this.students.findIndex(student => student.id === id)
    if (index === -1) return 'Not Found'
    this.students.splice(index, 1)
  }

  findStudentById = (id: string) => this.students.find(student => student.id === id)
}

export const studentRecordExercise = () => {
  const school = new School('Escuelita')
  school.addStudent('Juan', 20)
  school.addStudent('Pepe', 25)
  const juan = school.findStudentById(school.students[0].id)
  juan?.addCalification(1, 'English')
  juan?.addCalification(10, 'English')
  juan?.findCalificationByIdAndUpdate(juan.califications[0].id, 8)
  juan?.findCalificationByIdAndUpdate(juan.califications[0].id, undefined, 'Math')
  console.log(juan?.calculateAverage())
  console.log(school)
}
