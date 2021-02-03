var Node = function(data, prev) {
    this.data = data;
    this.prev = prev;
    this.next = null;
  };
  var DoublyLinkedList = function() {
    this.head = null;
    this.tail = null;
    
    //Add method 
    this.add = (data)=>{
       if(!data){
        return false; //return if no data
      }
      let newNode = new Node(data, null);
      if(this.head == null){
        this.head = newNode;
      }else{
        let nextNode = this.head;
        while(nextNode.next){
          nextNode = nextNode.next;
        }
        nextNode.next = newNode;
      }
      //create a reference for previous node to the newly added node
      if(this.tail == null){ 
        this.tail = newNode;
      }else{
        let prevNode = this.tail;
        this.tail = newNode;
        this.tail.prev = prevNode
      }
    };
    
    //Remove method
    this.remove = (ele)=>{
      let current = this.head;
      //if no head and tail => empty
      if(!this.head && !this.tail){
        return null;
      }
      //if element at the end -> remove and update .next to null
      if(this.tail.data == ele){      
        let prevNode = this.tail.prev;
        this.tail = prevNode;
        this.tail.next = null;
        return;
      }
      //loop over the nodes till the final node, find the node, reference the next node to the previous node and update the node with proper .prev
      while(current.next){
        if(current.data == ele){
          let removedNode = current;
          let prevNode = current.prev;
          let nextNode = current.next;
          if(this.head.data == removedNode.data){
            this.head = nextNode;
            this.head.prev = null;
            break;
          }
          prevNode.next = nextNode;
          nextNode.prev = prevNode;
        }
        current = current.next;
      }
    }
  };