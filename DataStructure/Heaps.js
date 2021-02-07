/**
 * A binary heap is a partially ordered binary tree which satisfies the heap property.
 */

 /* Heaps */

// left child: i * 2
// right child: i * 2 + 1
// parent: i / 2

let MinHeap = function() {
	
	/* Initialing the array heap and adding a dummy element at index 0 */
	let heap = [null];
	
	this.insert = function(num) {
		/* Inserting the new node at the end of the heap array */
		heap.push(num);
		// then /* Finding the correct position for the new node */
		//* Traversing up the parent node 
		// until the current node (current) is greater than the parent (current/2)*/
		if (heap.length > 2) {
			let idx = heap.length - 1;
			// if the last item in the array less than it's parent
			// we gonnahave to move it up because
			// the smallest number has to be at the top in the min heap
			while (heap[idx] < heap[Math.floor(idx/2)]) {
				// that means if we haven't reached the root node
				if (idx >= 1) {
					// es6 destructering
					// switch the node we just inserted with the parent node a way to swap them 
					[heap[Math.floor(idx/2)], heap[idx]] = [heap[idx], heap[Math.floor(idx/2)]];
					// if the parent node is not the root node
					if (Math.floor(idx/2) > 1) {
						// set the index to that node
						idx = Math.floor(idx/2);
						// since it's a while loop, we'll keep goin, swapping 
						// as long as the index is smaller than the parent not 
					} else {
						break;
					};
				};
			};
		};
	};
	
	this.remove = function() {
		// we'll always remove the smallest node
		// first node in the array is the smallest node
		let smallest = heap[1];
		// then we'd have to rearrange the array 
		// this mean if we have more than just 1 node in the tree
		
		if (heap.length > 2) {
			// set the first node in the tree to the last node 
			// so the last node in the array gets moved the first node in the array
			heap[1] = heap[heap.length - 1];
			// we gotta shorten the array by one
			heap.splice(heap.length - 1);
			// this means there is 2 items in the tree
			if (heap.length == 3) {
				// same as es6 destructering
				// switching them with an if check  
				if (heap[1] > heap[2]) {
					[heap[1], heap[2]] = [heap[2], heap[1]];
				};
				return smallest;
			};

			// now if there is more 
			/* When there are more than two elements in the array, 
			we put the right most element at the first position
			and start comparing nodes with the child nodes
			*/
			let i = 1;
			let left = 2 * i;
			let right = 2 * i + 1;
			// while root node is >= left chid OR 
			// while root node is >= right chid 
			// we need to keep arrangigng it and moving down to the right spot
			while (heap[i] >= heap[left] || heap[i] >= heap[right]) {
				// if left < right 
				// switch root with left node
				if (heap[left] < heap[right]) {
					[heap[i], heap[left]] = [heap[left], heap[i]];
					// set the index to the left node
					// the node that was at the top node but now has been swapped
					i = 2 * i
				} else {
					// that means the right < left 
					// switch with the right node
					[heap[i], heap[right]] = [heap[right], heap[i]];
					// set index to right node 
					i = 2 * i + 1;
				};
				left = 2 * i;
				right = 2 * i + 1;
				// if heap left || right is undefined , just break the loop
				if (heap[left] == undefined || heap[right] == undefined) {
					break;
				};
			};
		} else if (heap.length == 2) {
			 /* If there are only two elements in the array, 
			 we directly splice out the first element */
			heap.splice(1, 1);
		} else {
			return null;
		};
		return smallest;
	};
  
	this.sort = function() {
		let result = new Array();
		while (heap.length > 1) {
			result.push(this.remove());
		};
		return result;
	};

};

let MaxHeap = function() {
	
	let heap = [null];
	
	this.print = () => heap;

	this.insert = function(num) {
		heap.push(num);
		if (heap.length > 2) {
			let idx = heap.length - 1;
			while (heap[idx] > heap[Math.floor(idx/2)]) {
				if (idx >= 1) {
					[heap[Math.floor(idx/2)], heap[idx]] = [heap[idx], heap[Math.floor(idx/2)]];
					if (Math.floor(idx/2) > 1) {
						idx = Math.floor(idx/2);
					} else {
						break;
					};
				};
			};
		};
	};
	
	this.remove = function() {
		let smallest = heap[1];
		if (heap.length > 2) {
			heap[1] = heap[heap.length - 1];
			heap.splice(heap.length - 1);
			if (heap.length == 3) {
				if (heap[1] < heap[2]) {
					[heap[1], heap[2]] = [heap[2], heap[1]];
				};
				return smallest;
			};
			let i = 1;
			let left = 2 * i;
			let right = 2 * i + 1;
			while (heap[i] <= heap[left] || heap[i] <= heap[right]) {
				if (heap[left] > heap[right]) {
					[heap[i], heap[left]] = [heap[left], heap[i]];
					i = 2 * i
				} else {
					[heap[i], heap[right]] = [heap[right], heap[i]];
					i = 2 * i + 1;
				};
				left = 2 * i;
				right = 2 * i + 1;
				if (heap[left] == undefined || heap[right] == undefined) {
					break;
				};
			};
		} else if (heap.length == 2) {
			heap.splice(1, 1);
		} else {
			return null;
		};
		return smallest;
	};

};

