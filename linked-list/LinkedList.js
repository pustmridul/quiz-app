import Comparator from "../Comparator";
import LinkedListNode from "./LinkedListNode";

export default class LinkedList{
    constructor(com){
        this.head=null;
        this.tail = null;
        this.compare = new Comparator(com);
    }
    prepend(value){
        const newNode = new LinkedListNode(value, this.head);
        this.head=newNode;

        if(!this.tail){
            this.tail=newNode;
        }

        return this;
    }

    append(value){
        const newNode = new LinkedListNode(value);
        if(!this.head){
            this.head = newNode;
            this.tail= newNode;

            return this;
        }

        this.tail.next= newNode;
        this.tail= newNode;

        return this;
    }
    




}