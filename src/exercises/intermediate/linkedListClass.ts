type NodeItem = null | any

class Node {
  value: string
  next: NodeItem
  previous: NodeItem
  constructor(val: string, previous?: NodeItem) {
    this.value = val
    this.next = null
    this.previous = previous ?? null
  }

  addNext(value: string, previous: NodeItem) {
    this.next = new Node(value, previous)
    return this.next
  }
}

class LinkedList {
  head: Node
  length: number
  constructor(value: string) {
    this.head = new Node(value)
    this.length = 1
  }

  getLast() {
    let current = this.head
    while (current.next) {
      current = current.next
    }
    return current
  }

  getFirst() {
    return this.head
  }

  getPrevious(value: string) {
    let current = this.head
    while (current.next) {
      if (current.next.value === value) {
        return current
      }
      current = current.next
    }
    return null // Valor no encontrado
  }

  add(value: string) {
    this.length++
    const previous = this.getLast()
    console.log(value, previous)
    return this.getLast().addNext(value, previous)
  }

  deleteLast() {
    this.length--
    let current = this.head
    while (current.next.next) {
      current = current.next
    }
    current.next = null
    return current
  }

  findOne(value: string) {
    let current = this.head
    while (current.value !== value) {
      current = current.next
    }
    return current
  }

  findAndDelete(value: string) {
    let current = this.head
    while (current.next) {
      if (current.next.value === value) {
        const deletedNode = current.next
        current.next = deletedNode.next
        console.log(current, current.next)
        if (current.next) {
          console.log(current)
          current.next.previous = current
        }
        this.length--
        return deletedNode
      }
      current = current.next
    }

    return null // Valor no encontrado
  }

  findAndUpdate(value: string, newValue: string) {
    let current = this.head
    while (current.value !== value) {
      current = current.next
    }
    current.value = newValue
    return current
  }

  findPosition(value: string) {
    let current = this.head
    let position = 1
    while (current.value !== value) {
      current = current.next
      position++
    }
    return position
  }

  findByPosition(value: number) {
    let current = this.head
    let position = 1
    while (current) {
      if (position === value) return current
      current = current.next
      position++
    }
    return null
  }

  findByPositionAndDelete(value: number) {
    const item = this.findByPosition(value)
    if (!item) return item
    this.findAndDelete(item?.value)
    return 'Deleted: ' + item.value
  }
}

export const linkedListClassExercise = () => {
  const myLinkedList = new LinkedList('Hola')
  myLinkedList.add('Perro')
  myLinkedList.add('Gato')
  myLinkedList.deleteLast()
  myLinkedList.add('Pato')
  myLinkedList.add('Vaca')
  myLinkedList.findAndUpdate('Vaca', 'Mono')
  console.log(myLinkedList)
}
