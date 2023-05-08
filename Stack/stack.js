class Stack {
    constructor() {
        this.items = [];
    }
    push (data){
        this.items.push(data);
    }
    pop() {
        if(this.items.length == 0){
            return "UnderFlow";
        }
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length -1];
    }
    printStack() {
        var str = " ";
        for (var i = 0; i  < this.items.length; i++){
            str += this.items[i] + " ";
        }
        return str;
    }
}

var stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.printStack());

console.log(stack.peek());

console.log(stack.pop());

console.log(stack.printStack());

// -->-->-->-->-->-->-->-->-->-->-->-->-->-->-->-->-->-->-->-->-->-->-->-->-->-->-->-->-->-->-->-->-->

function stak(){
    var items = [];
    return function(data) {
        items.push(data);
        var str = " ";
        for (var i = 0; i  < items.length; i++){
            str += items[i] + " ";
        }
        return str;
    }

}
var stk = new stak();
console.log(stk(1));
console.log(stk(20));
console.log(stk(30));


