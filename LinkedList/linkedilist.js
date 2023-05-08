class Node {
    constructor (data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    isEmpty() {
        return this.size == 0;
    }
0
    add (data) {
        var node = new Node (data);
        
        var current;
        if (this.head == null){
            this.head = node;
        } else {
            current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
        console.log(this.size);
    }

    insertAt (data, index) {
        if( index < 0 || index > this.size){
            return console.log("Please enter a valid index ! ");
        } else {
            var node = new Node(data);
            var cur, prev;
            cur = this.head;

            if (index == 0){
                node.next = this.head;
                this.head = node;
            } else {
                cur = this.head;
                var it = 0;
                while (it < index){
                    it++;
                    prev = cur;
                    cur = cur.next;
                }
                node.next = cur;
                prev.next = node;
            }
            this.size++;
        }
    }

    removeFrom(index) {
        if(index < 0 || index >= this.size) {
            return console.log("Please enter a valid index ! ");
        } else {
            var cur, prev, it = 0;
            cur = this.head;
            prev = cur;

            if (index === 0) {
                this.head = cur.next;
            } else {
                while (it < index) {
                    it++;
                    prev = cur;
                    cur = cur.next;
                }
                prev.next = cur.next;
            }
            this.size--;
            return cur.data;
        }
    }

    printList () {
        var cur = this.head;
        var str = " ";
        while (cur) {
            str += cur.data + " ";
            cur = cur.next;
        }
        console.log(str);
    }

}

var ll = new LinkedList();
ll.isEmpty();
ll.add(10);
ll.add(20);
ll.add(30);
ll.add(40);
ll.insertAt(23, 0);
ll.removeFrom(1);
ll.printList();
