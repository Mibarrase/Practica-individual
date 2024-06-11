//Clase QueueNode<T>: Usa el parámetro genérico T para definir el tipo del valor almacenado en el nodo.
class QueueNode <T> {
    value: T
    next : QueueNode <T> | null

    constructor (value : T) {
        this.value= value
        this.next = null
    
    }
}
//Clase Queue<T>: Usa el parámetro genérico T para definir el tipo de los valores en la cola.
class Queue </T> {
    head: QueueNode <t> | null
    tail: QueueNode <t> | null
    length: number

    constructor () {
        this.head = null
        this.tail = null
        this.length = 0
    }

    enqueue (node: QueueNode <t> : void {
        if (!this.tail) {
            this.tail = node
            this.head = node
        }        else  {
                    this.tail.next = node
                    this.tail = node
        }
            this.length += 1
    }
    
    deque () : T | null {
        if (!this.head) {
            return null
        }
        if (this.head === this.tail) {
            this.tail = null
        }
            const head = this.head 
            this.head = this.head.next

            head.next = null
            this.length =- 1
            return head.value
    }
}
//Clase Stack<T>: Usa el parámetro genérico T para definir el tipo de los valores en la pila.
 class Strack <T> {
    top: QueueNode <T> | null
    length : number

    constructor () {
        this.top = null
        this.length = 0
    }

    push (node : QueueNode <T> : void) {
    if (!this.top) {
        this.top = node
    } else {
        node.next = this.top
        this.top = node
    }  
    this.length += 1
    }
    pop (): T | null {
        if (!this.top) {
            return null
        }
        const top = this.top
        this.top = this.top.next

        top.next = null
        this.length -= 1
        return top.value
    }
 }
 // Ejemplo de uso de Queue con number
const queue = new Queue<number>()
console.log(queue)
const qn1 = new QueueNode<number>(1)
queue.enqueue(qn1)
console.log(queue)
const qn2 = new QueueNode<number>(2)
queue.enqueue(qn2)
console.log(queue)
const qn3 = new QueueNode<number>(3)
queue.enqueue(qn3)
console.log(JSON.stringify(queue))
let qValue = queue.deque()
console.log(qValue)
console.log(queue)
qValue = queue.deque()
console.log(qValue)
console.log(queue)
qValue = queue.deque()
console.log(qValue)
console.log(queue)
qValue = queue.deque()
console.log(qValue)
console.log(queue)

// Ejemplo de uso de Stack con string
const stack = new Stack<string>()
console.log(stack)
const sn1 = new QueueNode<string>("a")
stack.push(sn1)
console.log(stack)
const sn2 = new QueueNode<string>("b")
stack.push(sn2)
console.log(stack)
const sn3 = new QueueNode<string>("c")
stack.push(sn3)
console.log(JSON.stringify(stack))
let sValue = stack.pop()
console.log(sValue)
console.log(stack)
sValue = stack.pop()
console.log(sValue)
console.log(stack)
sValue = stack.pop()
console.log(sValue)
console.log(stack)
sValue = stack.pop()
console.log(sValue)
console.log(stack)