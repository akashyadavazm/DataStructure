class Queue {
    constructor() {
        this.items = [];
    }

    isEmpty(){
        return this.items.length == 0;
    }

    enqueue (data) {
        this.items.push(data);
    }

    dequeue() {
        if(this.isEmpty() ) {
            return "UnderFlow";
        }
        return this.items.shift();
    }
    peek() {
        if(this.isEmpty() ){
            return "No data in Queue";
        }
        return this.items [0];
    }
    printQueue() {
        var str = " ";
        for (var i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        return str;
    }
}

var queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.enqueue(60);

console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.printQueue() );